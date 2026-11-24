// Rule-based weekly coaching review — every number and recommendation here is derived
// from data the athlete actually logged (workoutHistory / bodyMetrics / nutritionLog).
// Where there isn't enough data to say something real, it says so explicitly instead
// of inventing a result.
import { getExerciseById } from '../data/exercises'
import { getProgressionRecommendation } from './progressionAdvisor'
import { generateWeek, getProgramStartDate } from './programEngine'
import { TRAINING_DAYS, WEEKLY_WEIGHT_GAIN_TARGET_KG } from '../data/constants'
import { addDays, toISODate } from './dateUtils'

function weekDateRange(weekNumber, profile) {
  const start = addDays(getProgramStartDate(profile), (weekNumber - 1) * 7)
  const end = addDays(start, 6)
  return { startISO: toISODate(start), endISO: toISODate(end) }
}

function average(nums) {
  return nums.reduce((a, b) => a + b, 0) / nums.length
}

export function generateWeeklyReview(weekNumber, { workoutHistory, bodyMetrics, nutritionLog, nutritionTargets, profile }) {
  const { startISO, endISO } = weekDateRange(weekNumber, profile)
  const inRange = (iso) => iso >= startISO && iso <= endISO

  const weekSessions = workoutHistory.filter((w) => w.completedAt && w.weekNumber === weekNumber)
  const workoutsCompleted = weekSessions.length
  const workoutsPlanned = TRAINING_DAYS.length
  const consistencyPct = Math.round((workoutsCompleted / workoutsPlanned) * 100)

  // --- Strength trend: for every exercise trained this week, compare against its
  // most recent prior logged session (which may be from an earlier week). ---
  const exerciseIdsThisWeek = [...new Set(weekSessions.flatMap((s) => s.exercises?.map((e) => e.exerciseId) || []))]
  const strengthTrend = []
  const exercisesNeedingAttention = []

  exerciseIdsThisWeek.forEach((exerciseId) => {
    const exercise = getExerciseById(exerciseId)
    const historyBeforeEnd = workoutHistory.filter((w) => w.completedAt && w.date <= endISO)
    const sessionsWithThisExercise = historyBeforeEnd
      .filter((s) => s.exercises?.some((e) => e.exerciseId === exerciseId && e.sets?.some((set) => set.completed)))
      .sort((a, b) => a.date.localeCompare(b.date))

    const bestWeightIn = (session) => {
      const entry = session.exercises.find((e) => e.exerciseId === exerciseId)
      const completed = entry.sets.filter((s) => s.completed && s.weight != null)
      return completed.length ? Math.max(...completed.map((s) => s.weight)) : null
    }

    const thisWeekSessions = sessionsWithThisExercise.filter((s) => s.weekNumber === weekNumber)
    const priorSessions = sessionsWithThisExercise.filter((s) => s.weekNumber < weekNumber)
    if (thisWeekSessions.length === 0) return

    const weekBest = Math.max(...thisWeekSessions.map(bestWeightIn).filter((w) => w != null))
    const priorBest = priorSessions.length ? Math.max(...priorSessions.map(bestWeightIn).filter((w) => w != null)) : null

    if (priorBest != null && !Number.isNaN(weekBest)) {
      strengthTrend.push({
        exerciseId,
        nameEn: exercise?.nameEn || exerciseId,
        weekWeight: weekBest,
        priorWeight: priorBest,
        delta: +(weekBest - priorBest).toFixed(1),
        direction: weekBest > priorBest ? 'up' : weekBest < priorBest ? 'down' : 'same',
      })
    }

    // Reuse the progression advisor against the current week's own prescription to
    // flag exercises where the athlete is missing the rep target (real signal, not guesswork).
    const week = generateWeek(weekNumber)
    const dayWithExercise = Object.values(week.days).find(
      (d) => d.type === 'training' && d.exercises.some((e) => e.exerciseId === exerciseId && e.kind === 'strength'),
    )
    const prescription = dayWithExercise?.exercises.find((e) => e.exerciseId === exerciseId)
    if (prescription) {
      const rec = getProgressionRecommendation(exerciseId, prescription, historyBeforeEnd)
      if (rec.status === 'reduce') {
        exercisesNeedingAttention.push({ exerciseId, nameEn: exercise?.nameEn || exerciseId, reason: rec.message })
      }
    }
  })

  // --- Body weight trend vs. the lean-gain pacing target. ---
  const weekMetrics = bodyMetrics.filter((m) => inRange(m.date))
  const priorMetrics = bodyMetrics.filter((m) => m.date < startISO)
  let weightTrend = { status: 'no_data' }
  if (weekMetrics.length > 0) {
    const weekAvg = average(weekMetrics.map((m) => m.weightKg))
    if (priorMetrics.length > 0) {
      const baselineAvg = priorMetrics[priorMetrics.length - 1].weightKg
      const delta = +(weekAvg - baselineAvg).toFixed(2)
      const onTrack = delta >= WEEKLY_WEIGHT_GAIN_TARGET_KG.min && delta <= WEEKLY_WEIGHT_GAIN_TARGET_KG.max
      weightTrend = { status: 'ok', weekAvg: +weekAvg.toFixed(1), baselineAvg: +baselineAvg.toFixed(1), delta, onTrack }
    } else {
      weightTrend = { status: 'first_reading', weekAvg: +weekAvg.toFixed(1) }
    }
  }

  // --- Nutrition adherence (protein) for logged days in range. ---
  const loggedDays = Object.entries(nutritionLog).filter(([date]) => inRange(date))
  let proteinAdherence = { status: 'no_data' }
  if (loggedDays.length > 0) {
    const metCount = loggedDays.filter(([, day]) => {
      const totalProtein = Object.values(day.meals || {})
        .flat()
        .reduce((sum, item) => sum + (item.proteinG || 0), 0)
      return totalProtein >= nutritionTargets.proteinG * 0.9
    }).length
    proteinAdherence = { status: 'ok', daysLogged: loggedDays.length, daysMet: metCount, pct: Math.round((metCount / loggedDays.length) * 100) }
  }

  // --- Simple, literal fatigue signal from session notes (never inferred beyond the text). ---
  const fatigueKeywords = ['tired', 'sore', 'fatigue', 'exhausted', 'pain', 'drained']
  const fatigueNotes = weekSessions.flatMap((s) => s.exercises || []).filter((e) => fatigueKeywords.some((k) => (e.notes || '').toLowerCase().includes(k)))

  // --- Build plain-language recommendations strictly from the computed facts above. ---
  const recommendations = []

  if (workoutsCompleted === 0) {
    recommendations.push('No workouts were logged this week. Getting back to your 4 sessions next week is the single biggest lever you have.')
  } else if (consistencyPct >= 100) {
    recommendations.push(`You completed all ${workoutsPlanned} planned workouts this week — excellent consistency.`)
  } else if (consistencyPct >= 75) {
    recommendations.push(`Good consistency — ${workoutsCompleted}/${workoutsPlanned} workouts completed.`)
  } else {
    recommendations.push(`Training consistency dropped to ${workoutsCompleted}/${workoutsPlanned} workouts this week. Try to protect your training days next week.`)
  }

  strengthTrend
    .filter((t) => t.direction === 'up')
    .forEach((t) => recommendations.push(`Your ${t.nameEn} performance improved (${t.priorWeight}kg → ${t.weekWeight}kg).`))

  if (weightTrend.status === 'no_data') {
    recommendations.push('No body-weight measurements logged this week — log at least one weigh-in to track lean-gain progress.')
  } else if (weightTrend.status === 'ok') {
    if (weightTrend.onTrack) {
      recommendations.push(`Body weight moved from ${weightTrend.baselineAvg}kg to ${weightTrend.weekAvg}kg — right on pace for lean gain.`)
    } else if (weightTrend.delta <= 0) {
      recommendations.push(`Your body weight has not increased this week (${weightTrend.delta}kg). If this continues for two weeks, consider adding ~150-200 kcal/day.`)
    } else if (weightTrend.delta > WEEKLY_WEIGHT_GAIN_TARGET_KG.max) {
      recommendations.push(`You gained ${weightTrend.delta}kg this week, faster than the ${WEEKLY_WEIGHT_GAIN_TARGET_KG.max}kg/week target — consider trimming your surplus slightly to keep gains lean.`)
    } else {
      recommendations.push(`Body weight increased by ${weightTrend.delta}kg this week — slightly below target pace; keep an eye on it.`)
    }
  }

  if (proteinAdherence.status === 'no_data') {
    recommendations.push('No nutrition logged this week — tracking protein helps the program work as intended.')
  } else if (proteinAdherence.pct >= 80) {
    recommendations.push(`Strong protein consistency — target met on ${proteinAdherence.pct}% of logged days.`)
  } else {
    recommendations.push(`Protein target was only met on ${proteinAdherence.pct}% of logged days — prioritize protein at each meal next week.`)
  }

  if (fatigueNotes.length >= 2) {
    recommendations.push('Multiple session notes this week mentioned fatigue or soreness — make sure Wednesday/Friday/Sunday recovery is being used fully, and don\'t hesitate to take an extra rest day.')
  }

  exercisesNeedingAttention.forEach((e) => recommendations.push(`${e.nameEn}: ${e.reason}`))

  return {
    weekNumber,
    startISO,
    endISO,
    workoutsCompleted,
    workoutsPlanned,
    consistencyPct,
    strengthTrend,
    weightTrend,
    proteinAdherence,
    fatigueFlag: fatigueNotes.length >= 2,
    exercisesNeedingAttention,
    recommendations,
    hasAnyData: workoutsCompleted > 0 || weekMetrics.length > 0 || loggedDays.length > 0,
  }
}
