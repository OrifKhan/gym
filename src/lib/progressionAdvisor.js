// Data-driven progressive overload. This never invents a working weight — it only
// ever compares what the athlete actually logged (reps, RIR, weight) against the
// week's prescribed rep range + target RIR, using double progression:
//   - Hit the TOP of the rep range on every set at/under the target RIR → small
//     weight increase next session.
//   - Fell BELOW the bottom of the rep range on any set → hold the weight, focus on
//     technique/recovery (optionally suggest a slight reduction).
//   - Anything in between → keep the same weight, aim to add a rep next time.
import { getExerciseById } from '../data/exercises'

function suggestIncrement(exercise) {
  const eq = exercise?.equipment || []
  if (eq.includes('Barbell')) return '+2.5kg'
  if (eq.includes('Dumbbell')) return '+1-2kg (or the next dumbbell size)'
  if (eq.includes('Kettlebell')) return 'the next kettlebell size up'
  if (eq.includes('Machine')) return '+2.5-5kg (next pin/plate increment)'
  return 'a few more reps, or slow the tempo'
}

function findRecentSessions(workoutHistory, exerciseId, limit = 2) {
  const sessions = []
  for (let i = workoutHistory.length - 1; i >= 0 && sessions.length < limit; i--) {
    const session = workoutHistory[i]
    if (!session.completedAt) continue
    const entry = session.exercises?.find((e) => e.exerciseId === exerciseId)
    const completedSets = entry?.sets?.filter((s) => s.completed && s.weight != null && s.reps != null) || []
    if (completedSets.length > 0) sessions.push({ date: session.date, sets: completedSets })
  }
  return sessions
}

// `prescription` is the current week's { repLow, repHigh, rir } for this exercise.
export function getProgressionRecommendation(exerciseId, prescription, workoutHistory) {
  const exercise = getExerciseById(exerciseId)
  const [last, previous] = findRecentSessions(workoutHistory, exerciseId, 2)

  if (!last) {
    return {
      status: 'no_data',
      message: 'No logged sets yet for this exercise — record your first session to start tracking progress.',
      lastSession: null,
    }
  }

  const lastWeight = Math.max(...last.sets.map((s) => s.weight))
  const lastSession = { date: last.date, weight: lastWeight, reps: last.sets[last.sets.length - 1].reps }

  if (!prescription || prescription.kind !== 'strength') {
    return {
      status: 'maintain',
      message: `Last session: ${lastWeight}kg. Keep effort consistent with the prescribed intensity.`,
      lastSession,
    }
  }

  const { repLow, repHigh, rir: targetRirStr } = prescription
  const targetRir = parseInt(String(targetRirStr).split('-')[0], 10)

  const belowMin = last.sets.some((s) => s.reps < repLow)
  const allAtTop = last.sets.every((s) => s.reps >= repHigh)
  const rirLoggedForAll = last.sets.every((s) => s.rir != null)
  const rirAtOrUnderTarget = !rirLoggedForAll || last.sets.every((s) => s.rir <= targetRir + 1)

  let weightTrend = null
  if (previous) {
    const prevWeight = Math.max(...previous.sets.map((s) => s.weight))
    if (lastWeight > prevWeight) weightTrend = 'up'
    else if (lastWeight < prevWeight) weightTrend = 'down'
    else weightTrend = 'same'
  }

  if (belowMin) {
    return {
      status: 'reduce',
      message: `Last session you fell below the target of ${repLow} reps at ${lastWeight}kg. Repeat this weight next time and prioritize technique and recovery before adding load.`,
      lastSession,
      weightTrend,
    }
  }

  if (allAtTop && rirAtOrUnderTarget) {
    return {
      status: 'increase',
      message: `You hit ${repHigh}+ reps on every set at ${lastWeight}kg with good reserve — try ${suggestIncrement(exercise)} this session.`,
      lastSession,
      weightTrend,
    }
  }

  return {
    status: 'maintain',
    message: `Last session: ${lastWeight}kg for ${last.sets.map((s) => s.reps).join('/')} reps. Keep the same weight and aim to add a rep or two before increasing load.`,
    lastSession,
    weightTrend,
  }
}
