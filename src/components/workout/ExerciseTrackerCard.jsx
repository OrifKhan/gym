import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Circle, Timer, ChevronDown, ChevronUp, Info, TrendingUp, Minus, AlertTriangle } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import { Textarea } from '../ui/Input'
import ExerciseIllustration from '../exercise/ExerciseIllustration'
import RestTimer from './RestTimer'

const RECOMMENDATION_STYLE = {
  increase: { color: 'accent', icon: TrendingUp },
  maintain: { color: 'default', icon: Minus },
  reduce: { color: 'warning', icon: AlertTriangle },
  no_data: { color: 'default', icon: Info },
}

function prescriptionLabel(template) {
  if (template.kind === 'conditioning') return `${template.sets} × ${template.repsOrDuration}`
  return `${template.sets} × ${template.reps} @ RIR ${template.rir}`
}

export default function ExerciseTrackerCard({ index, template, exercise, sessionExercise, previous, recommendation, onUpdateSet, onUpdateNotes }) {
  const [expanded, setExpanded] = useState(index === 0)
  const [activeTimer, setActiveTimer] = useState(false)

  if (!exercise) return null

  const isConditioning = template.kind === 'conditioning'
  const allDone = sessionExercise.sets.every((s) => s.completed)
  const rec = recommendation && RECOMMENDATION_STYLE[recommendation.status]

  return (
    <Card className={`${allDone ? 'border-accent/40' : ''}`}>
      <div className="flex items-start justify-between gap-3 cursor-pointer" onClick={() => setExpanded((e) => !e)}>
        <div className="flex items-center gap-3">
          {allDone ? <CheckCircle2 size={20} className="text-accent shrink-0" /> : <Circle size={20} className="text-base-500 shrink-0" />}
          <div>
            <div className="font-semibold text-base-100">
              {index + 1}. {exercise.nameEn}
            </div>
            <div className="text-xs text-base-400">{exercise.nameRu}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Badge>{prescriptionLabel(template)}</Badge>
          {expanded ? <ChevronUp size={16} className="text-base-400" /> : <ChevronDown size={16} className="text-base-400" />}
        </div>
      </div>

      {expanded && (
        <div className="mt-4 space-y-4 animate-fadeIn">
          <div className="flex flex-col sm:flex-row gap-4">
            <ExerciseIllustration pattern={exercise.pattern} media={exercise.media} compact className="w-full sm:w-56 shrink-0" />
            <div className="flex-1 text-sm text-base-300 space-y-1.5">
              <p>
                <span className="text-base-100 font-medium">Starting position:</span> {exercise.startingPosition}
              </p>
              <Link to={`/exercises/${exercise.id}`} className="inline-flex items-center gap-1 text-accent text-xs hover:underline">
                <Info size={12} /> View full instructions
              </Link>
              {previous && (
                <p className="text-xs text-base-400 pt-1">
                  Last time: <span className="text-base-100 font-medium">{previous.weight} kg × {previous.reps}</span>
                </p>
              )}
            </div>
          </div>

          {!isConditioning && rec && (
            <div className="flex items-start gap-2 bg-base-800 border border-base-600 rounded-xl p-3">
              <rec.icon size={15} className={`shrink-0 mt-0.5 ${rec.color === 'accent' ? 'text-accent' : rec.color === 'warning' ? 'text-warning' : 'text-base-400'}`} />
              <p className="text-xs text-base-300">{recommendation.message}</p>
            </div>
          )}

          {isConditioning ? (
            <div className="space-y-2">
              <p className="text-xs text-base-400">
                Effort: <span className="text-base-200 font-medium">{template.effort}</span>
              </p>
              {sessionExercise.sets.map((set, i) => (
                <div key={i} className="flex items-center justify-between bg-base-800 rounded-lg px-3 py-2.5">
                  <span className="text-sm text-base-300">Round {i + 1}</span>
                  <button onClick={() => onUpdateSet(i, { completed: !set.completed })} aria-label="Toggle round complete" className="h-9 w-9 flex items-center justify-center">
                    {set.completed ? <CheckCircle2 size={22} className="text-accent" /> : <Circle size={22} className="text-base-500" />}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              <div className="grid grid-cols-[1.3rem_minmax(0,1fr)_minmax(0,1fr)_2.2rem_2.5rem] gap-1 sm:gap-2 text-[11px] text-base-400 px-1">
                <span>Set</span>
                <span>Weight</span>
                <span>Reps</span>
                <span>RIR</span>
                <span>Done</span>
              </div>
              {sessionExercise.sets.map((set, i) => (
                <div key={i} className="grid grid-cols-[1.3rem_minmax(0,1fr)_minmax(0,1fr)_2.2rem_2.5rem] gap-1 sm:gap-2 items-center">
                  <span className="text-sm text-base-300 text-center">{i + 1}</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    value={set.weight ?? ''}
                    onChange={(e) => onUpdateSet(i, { weight: e.target.value === '' ? null : parseFloat(e.target.value) })}
                    placeholder={previous ? String(previous.weight) : '0'}
                    className="w-full min-w-0 bg-base-800 border border-base-600 rounded-lg px-2 py-2.5 text-base text-base-100 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                  <input
                    type="number"
                    inputMode="numeric"
                    value={set.reps ?? ''}
                    onChange={(e) => onUpdateSet(i, { reps: e.target.value === '' ? null : parseInt(e.target.value, 10) })}
                    placeholder={previous ? String(previous.reps) : '0'}
                    className="w-full min-w-0 bg-base-800 border border-base-600 rounded-lg px-2 py-2.5 text-base text-base-100 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                  <input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={5}
                    value={set.rir ?? ''}
                    onChange={(e) => onUpdateSet(i, { rir: e.target.value === '' ? null : parseInt(e.target.value, 10) })}
                    placeholder="-"
                    title="Reps in Reserve"
                    className="w-full min-w-0 bg-base-800 border border-base-600 rounded-lg px-1.5 py-2.5 text-base text-base-100 text-center focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                  <button
                    onClick={() => onUpdateSet(i, { completed: !set.completed })}
                    className="flex items-center justify-center h-11 w-11 -my-1 -mx-1"
                    aria-label="Toggle set complete"
                  >
                    {set.completed ? <CheckCircle2 size={24} className="text-accent" /> : <Circle size={24} className="text-base-500" />}
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between flex-wrap gap-3">
            <Button variant="secondary" size="sm" onClick={() => setActiveTimer(true)}>
              <Timer size={14} /> Rest {template.restSec}s
            </Button>
          </div>

          {activeTimer && (
            <div className="bg-base-800 rounded-xl p-3">
              <RestTimer seconds={template.restSec} onComplete={() => setActiveTimer(false)} />
            </div>
          )}

          <Textarea
            label="Notes"
            rows={2}
            value={sessionExercise.notes}
            onChange={(e) => onUpdateNotes(e.target.value)}
            placeholder="How did this set feel? Form cues, fatigue, etc."
          />
        </div>
      )}
    </Card>
  )
}
