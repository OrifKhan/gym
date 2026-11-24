import { useState } from 'react'
import { ShieldAlert, ChevronDown, ChevronUp, Flame, Snowflake, HeartPulse } from 'lucide-react'
import Card from './ui/Card'

const MAJOR_LIFT_IDS = ['barbell-squat', 'front-squat', 'deadlift', 'sumo-deadlift', 'barbell-bench-press', 'overhead-press']

function roundToHalf(n) {
  return Math.round(n * 2) / 2
}

export function getWarmupScheme(firstExercise, lastWorkingWeight) {
  if (!firstExercise || !MAJOR_LIFT_IDS.includes(firstExercise.id)) return null
  if (!lastWorkingWeight) {
    return {
      genericOnly: true,
      steps: ['Empty bar (or lightest load) × 10 slow reps', 'A clearly light weight × 8 reps', 'A moderate weight × 5 reps', 'A weight close to today\'s working set × 2-3 reps'],
    }
  }
  return {
    genericOnly: false,
    steps: [
      `Empty bar × 10 reps`,
      `${roundToHalf(lastWorkingWeight * 0.5)}kg × 5 reps`,
      `${roundToHalf(lastWorkingWeight * 0.7)}kg × 3 reps`,
      `${roundToHalf(lastWorkingWeight * 0.85)}kg × 1-2 reps`,
      `Then begin your working sets at (or near) ${lastWorkingWeight}kg`,
    ],
  }
}

export default function SafetyGuide({ warmupScheme, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <Card>
      <button className="w-full flex items-center justify-between" onClick={() => setOpen((o) => !o)}>
        <span className="flex items-center gap-2 font-semibold text-base-100">
          <ShieldAlert size={16} className="text-accent" /> Warm-Up, Recovery & Safety
        </span>
        {open ? <ChevronUp size={16} className="text-base-400" /> : <ChevronDown size={16} className="text-base-400" />}
      </button>
      {open && (
        <div className="mt-3 space-y-4 text-sm text-base-300 animate-fadeIn">
          <div>
            <h4 className="flex items-center gap-1.5 font-medium text-base-100 mb-1.5">
              <Flame size={14} className="text-warning" /> Warm-Up
            </h4>
            <p className="mb-2">
              Spend 5-8 minutes raising your heart rate and moving the joints you're about to train (easy cardio, leg
              swings, arm circles, bodyweight squats) before any loaded set.
            </p>
            {warmupScheme && (
              <div className="bg-base-800 border border-base-600 rounded-xl p-3">
                <p className="text-xs text-base-400 mb-1.5">
                  {warmupScheme.genericOnly
                    ? 'Ramp-up sets for today\'s main lift (log a working weight once to get exact numbers):'
                    : "Ramp-up sets for today's main lift, based on your last logged working weight:"}
                </p>
                <ol className="space-y-1">
                  {warmupScheme.steps.map((s, i) => (
                    <li key={i} className="text-xs text-base-200">
                      {i + 1}. {s}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          <div>
            <h4 className="flex items-center gap-1.5 font-medium text-base-100 mb-1.5">
              <Snowflake size={14} className="text-accent" /> Cooldown & Recovery
            </h4>
            <p>
              Finish with 5 minutes of easy movement and light stretching for the muscles you trained. Prioritize sleep,
              protein intake, and hydration in the hours after training — recovery is where the muscle actually grows,
              not the workout itself. Use your Wednesday/Friday/Sunday recovery days fully; don't convert them into extra
              hard sessions.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-base-100 mb-1.5">Signs You May Need More Recovery</h4>
            <ul className="space-y-1 list-disc list-inside">
              <li>Performance dropping across multiple sessions despite consistent effort</li>
              <li>Persistent soreness that doesn't ease within 48-72 hours</li>
              <li>Resting heart rate noticeably elevated, or poor sleep quality</li>
              <li>Irritability, low motivation, or dreading sessions you normally enjoy</li>
            </ul>
            <p className="mt-1.5">If several of these show up together, take an extra rest day or a lighter session rather than pushing through.</p>
          </div>

          <div className="flex items-start gap-2.5 bg-danger/10 border border-danger/30 rounded-xl p-3">
            <HeartPulse size={15} className="text-danger shrink-0 mt-0.5" />
            <p className="text-xs text-base-200">
              <span className="font-semibold text-danger">Stop immediately and seek medical assessment</span> if you
              experience sharp or sudden pain, chest pain, dizziness, shortness of breath out of proportion to the
              effort, or numbness/tingling. This app cannot diagnose injuries or medical conditions, and no exercise
              here should ever be pushed through pain.
            </p>
          </div>
        </div>
      )}
    </Card>
  )
}
