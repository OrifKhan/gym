import { DAY_TEMPLATES } from '../data/program'
import { getExerciseById } from '../data/exercises'
import { WEEKDAYS, TRAINING_DAYS, phaseForWeek } from '../data/constants'
import { toISODate, diffInDays, weekdayKey, addDays } from './dateUtils'

export const TOTAL_WEEKS = 12

function weekInPhase(weekNumber) {
  return ((weekNumber - 1) % 4) + 1
}

// Nudges a "2-3" / "1" style RIR string up by one band (easier) — used on deload weeks.
// RIR is capped at 4: beyond that the set isn't really training intensity anymore.
function loosenRir(rirStr) {
  const parts = String(rirStr).split('-').map((n) => Math.min(4, parseInt(n, 10) + 1))
  return parts.join('-')
}

function progressionFor(weekNumber) {
  const wip = weekInPhase(weekNumber)
  const phase = phaseForWeek(weekNumber)
  const isFinalWeek = weekNumber === TOTAL_WEEKS

  if (isFinalWeek) {
    return {
      setsDelta: 0,
      rotate: false,
      loosenRIR: false,
      isDeload: false,
      isEvaluation: true,
      tag: 'Performance Evaluation Week — compare this week’s lifts, measurements and conditioning against Week 1 and Week 8',
    }
  }
  if (wip === 4) {
    return {
      setsDelta: -1,
      rotate: false,
      loosenRIR: true,
      isDeload: true,
      isEvaluation: false,
      tag: `${phase.label} — Deload / Active Recovery Week`,
    }
  }
  if (wip === 1) {
    return { setsDelta: 0, rotate: false, loosenRIR: false, isDeload: false, isEvaluation: false, tag: `${phase.label} — Week 1: Establish Baseline` }
  }
  if (wip === 2) {
    return { setsDelta: 0, rotate: false, loosenRIR: false, isDeload: false, isEvaluation: false, tag: `${phase.label} — Week 2: Consistent Execution` }
  }
  // wip === 3
  return { setsDelta: 1, rotate: true, loosenRIR: false, isDeload: false, isEvaluation: false, tag: `${phase.label} — Week 3: Progressive Volume Overload` }
}

function buildPrescription(entry, idx, exercisesInDay, progression) {
  let exerciseId = entry.exerciseId
  if (progression.rotate && (idx === 1 || idx === exercisesInDay.length - 1)) {
    const base = getExerciseById(entry.exerciseId)
    if (base?.alternative && getExerciseById(base.alternative)) exerciseId = base.alternative
  }
  const exercise = getExerciseById(exerciseId)
  const sets = Math.max(2, (entry.sets || 3) + progression.setsDelta)

  if (entry.kind === 'conditioning') {
    return {
      kind: 'conditioning',
      exerciseId,
      exercise,
      sets,
      repsOrDuration: entry.repsOrDuration,
      effort: entry.effort,
      reps: entry.repsOrDuration,
      restSec: entry.restSec,
    }
  }

  const rir = progression.loosenRIR ? loosenRir(entry.rir) : entry.rir
  return {
    kind: 'strength',
    exerciseId,
    exercise,
    sets,
    repLow: entry.repLow,
    repHigh: entry.repHigh,
    rir,
    reps: entry.repLow === entry.repHigh ? `${entry.repLow}` : `${entry.repLow}-${entry.repHigh}`,
    restSec: entry.restSec,
  }
}

function buildDay(template, progression) {
  if (template === 'rest' || !template) return { type: 'rest' }
  const exercises = template.exercises.map((entry, idx) => buildPrescription(entry, idx, template.exercises, progression))
  return { type: 'training', focus: template.focus, exercises }
}

export function generateWeek(weekNumber) {
  const w = Math.min(TOTAL_WEEKS, Math.max(1, weekNumber))
  const phase = phaseForWeek(w)
  const progression = progressionFor(w)
  const templates = DAY_TEMPLATES[phase.key]

  const days = {}
  WEEKDAYS.forEach((day) => {
    days[day] = buildDay(templates[day], progression)
  })

  return {
    weekNumber: w,
    phase,
    isDeload: progression.isDeload,
    isEvaluation: progression.isEvaluation,
    progressionTag: progression.tag,
    days,
  }
}

export function getProgramStartDate(profile) {
  return profile?.programStartDate ? new Date(profile.programStartDate + 'T00:00:00') : new Date()
}

export function getCurrentWeekNumber(profile, now = new Date()) {
  const start = getProgramStartDate(profile)
  const days = diffInDays(now, start)
  if (days < 0) return 1
  return Math.min(TOTAL_WEEKS, Math.floor(days / 7) + 1)
}

export function isProgramComplete(profile, now = new Date()) {
  const start = getProgramStartDate(profile)
  return diffInDays(now, start) >= TOTAL_WEEKS * 7
}

export function getTodayWorkout(profile, now = new Date()) {
  const weekNumber = getCurrentWeekNumber(profile, now)
  const dayKey = weekdayKey(now)
  const week = generateWeek(weekNumber)
  return { weekNumber, dayKey, date: toISODate(now), day: week.days[dayKey] }
}

export function getNextWorkout(profile, { skipToday = false, now = new Date() } = {}) {
  for (let i = skipToday ? 1 : 0; i <= 14; i++) {
    const date = addDays(now, i)
    const weekNumber = getCurrentWeekNumber(profile, date)
    const dayKey = weekdayKey(date)
    const week = generateWeek(weekNumber)
    const day = week.days[dayKey]
    if (day.type === 'training') {
      return { weekNumber, dayKey, date: toISODate(date), day }
    }
  }
  return null
}

export function trainingDaysInWeek() {
  return TRAINING_DAYS.length
}

export function computeCompletionPercent(workoutHistory, profile, now = new Date()) {
  const weeksElapsed = Math.min(TOTAL_WEEKS, getCurrentWeekNumber(profile, now))
  const totalPlanned = weeksElapsed * TRAINING_DAYS.length
  if (totalPlanned === 0) return 0
  const completed = workoutHistory.filter((w) => w.completedAt).length
  return Math.min(100, Math.round((completed / totalPlanned) * 100))
}

export function computeOverallCompletion(workoutHistory) {
  const totalPlanned = TOTAL_WEEKS * TRAINING_DAYS.length
  const completed = workoutHistory.filter((w) => w.completedAt).length
  return Math.min(100, Math.round((completed / totalPlanned) * 100))
}

export function computeStreak(workoutHistory) {
  const completedDates = [...new Set(workoutHistory.filter((w) => w.completedAt).map((w) => w.date))].sort().reverse()
  if (completedDates.length === 0) return 0

  let streak = 0
  let cursor = new Date()
  for (let i = 0; i < 60; i++) {
    const iso = toISODate(cursor)
    const dayKey = weekdayKey(cursor)
    const isTrainingDay = TRAINING_DAYS.includes(dayKey)
    if (completedDates.includes(iso)) {
      streak++
    } else if (isTrainingDay && iso !== toISODate(new Date())) {
      break
    }
    cursor = addDays(cursor, -1)
  }
  return streak
}
