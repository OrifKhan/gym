import { useMemo } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Layers, Repeat, Clock, Target, AlertTriangle, Wind, Shuffle, Dumbbell, Lightbulb, Ruler, ShieldAlert, Gauge } from 'lucide-react'
import PageShell from '../components/layout/PageShell'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import ExerciseIllustration from '../components/exercise/ExerciseIllustration'
import { getExerciseById } from '../data/exercises'
import { useAppData } from '../context/AppDataProvider'
import { formatDateShort } from '../lib/dateUtils'

const DIFFICULTY_COLOR = { Beginner: 'accent', Intermediate: 'warning', Advanced: 'danger' }

export default function ExerciseDetail() {
  const { exerciseId } = useParams()
  const navigate = useNavigate()
  const { workoutHistory } = useAppData()
  const exercise = getExerciseById(exerciseId)
  const alternative = exercise ? getExerciseById(exercise.alternative) : null

  const lastPerformance = useMemo(() => {
    if (!exercise) return null
    for (let i = workoutHistory.length - 1; i >= 0; i--) {
      const session = workoutHistory[i]
      const entry = session.exercises?.find((e) => e.exerciseId === exercise.id)
      if (entry && entry.sets?.some((s) => s.completed)) {
        const best = entry.sets.filter((s) => s.completed).sort((a, b) => (b.weight || 0) - (a.weight || 0))[0]
        return { date: session.date, weight: best.weight, reps: best.reps }
      }
    }
    return null
  }, [exercise, workoutHistory])

  if (!exercise) {
    return (
      <PageShell title="Exercise not found">
        <Button onClick={() => navigate('/exercises')}>
          <ArrowLeft size={16} /> Back to Library
        </Button>
      </PageShell>
    )
  }

  return (
    <PageShell
      title={exercise.nameEn}
      subtitle={exercise.nameRu}
      actions={
        <Button variant="ghost" onClick={() => navigate('/exercises')}>
          <ArrowLeft size={16} /> Back
        </Button>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <ExerciseIllustration pattern={exercise.pattern} media={exercise.media} />

          <Card>
            <div className="flex items-center gap-2 mb-3">
              <Badge color={DIFFICULTY_COLOR[exercise.difficulty]}>{exercise.difficulty}</Badge>
              <Badge>{exercise.category}</Badge>
              {exercise.equipment.map((eq) => (
                <Badge key={eq}>{eq}</Badge>
              ))}
            </div>

            <div className="flex items-start gap-2.5 bg-accent/10 border border-accent/30 rounded-xl p-3.5 mb-4">
              <Lightbulb size={16} className="text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-base-200">
                <span className="font-semibold text-accent">Why this exercise: </span>
                {exercise.purpose}
              </p>
            </div>

            <h3 className="font-semibold text-base-100 mb-1.5">Starting Position</h3>
            <p className="text-sm text-base-300 mb-4">{exercise.startingPosition}</p>

            <h3 className="font-semibold text-base-100 mb-1.5">Step-by-Step Execution</h3>
            <ol className="space-y-1.5 mb-4">
              {exercise.steps.map((step, i) => (
                <li key={i} className="text-sm text-base-300 flex gap-2">
                  <span className="text-accent font-semibold">{i + 1}.</span> {step}
                </li>
              ))}
            </ol>

            <h3 className="font-semibold text-base-100 mb-1.5">Correct Body Position</h3>
            <p className="text-sm text-base-300 mb-4">{exercise.bodyPosition}</p>

            <h3 className="font-semibold text-base-100 mb-1.5 flex items-center gap-1.5">
              <Ruler size={15} /> Range of Motion
            </h3>
            <p className="text-sm text-base-300 mb-4">{exercise.rangeOfMotion}</p>

            <h3 className="font-semibold text-base-100 mb-1.5 flex items-center gap-1.5">
              <Wind size={15} /> Breathing Technique
            </h3>
            <p className="text-sm text-base-300 mb-1">
              <span className="text-base-100 font-medium">Inhale:</span> {exercise.breathing.inhale}
            </p>
            <p className="text-sm text-base-300 mb-4">
              <span className="text-base-100 font-medium">Exhale:</span> {exercise.breathing.exhale}
            </p>

            <h3 className="font-semibold text-base-100 mb-1.5 flex items-center gap-1.5">
              <AlertTriangle size={15} className="text-warning" /> Common Mistakes
            </h3>
            <ul className="space-y-1">
              {exercise.mistakes.map((m, i) => (
                <li key={i} className="text-sm text-base-300 flex gap-2">
                  <span className="text-warning">•</span> {m}
                </li>
              ))}
            </ul>

            <div className="flex items-start gap-2.5 bg-danger/10 border border-danger/30 rounded-xl p-3.5 mt-4">
              <ShieldAlert size={16} className="text-danger shrink-0 mt-0.5" />
              <p className="text-sm text-base-200">
                <span className="font-semibold text-danger">Safety: </span>
                {exercise.safetyNotes}
              </p>
            </div>
          </Card>
        </div>

        <div className="space-y-5">
          <Card className="grid grid-cols-3 gap-3 text-center">
            <div>
              <Layers size={16} className="mx-auto text-accent mb-1" />
              <div className="text-lg font-bold text-base-100">{exercise.sets}</div>
              <div className="text-[11px] text-base-400">Sets</div>
            </div>
            <div>
              <Repeat size={16} className="mx-auto text-accent mb-1" />
              <div className="text-lg font-bold text-base-100">{exercise.reps}</div>
              <div className="text-[11px] text-base-400">Reps</div>
            </div>
            <div>
              <Clock size={16} className="mx-auto text-accent mb-1" />
              <div className="text-lg font-bold text-base-100">{exercise.restSec}s</div>
              <div className="text-[11px] text-base-400">Rest</div>
            </div>
          </Card>

          <Card>
            <h3 className="font-semibold text-base-100 mb-2 flex items-center gap-1.5">
              <Target size={15} className="text-accent" /> Target Muscles
            </h3>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {exercise.targetMuscles.map((m) => (
                <Badge key={m} color="accent">
                  {m}
                </Badge>
              ))}
            </div>
            {exercise.secondaryMuscles?.length > 0 && (
              <>
                <h4 className="text-xs font-medium text-base-400 mb-1.5">Secondary Muscles</h4>
                <div className="flex flex-wrap gap-1.5">
                  {exercise.secondaryMuscles.map((m) => (
                    <Badge key={m}>{m}</Badge>
                  ))}
                </div>
              </>
            )}
          </Card>

          <Card>
            <h3 className="font-semibold text-base-100 mb-2 flex items-center gap-1.5">
              <Gauge size={15} className="text-accent" /> Recommended Intensity
            </h3>
            <p className="text-sm text-base-300">{exercise.recommendedRIR}</p>
          </Card>

          <Card>
            <h3 className="font-semibold text-base-100 mb-2 flex items-center gap-1.5">
              <Dumbbell size={15} className="text-accent" /> Your Last Performance
            </h3>
            {lastPerformance ? (
              <div className="text-sm text-base-300">
                <div className="text-2xl font-bold text-base-100">
                  {lastPerformance.weight} kg × {lastPerformance.reps}
                </div>
                <div className="text-xs text-base-400 mt-1">on {formatDateShort(lastPerformance.date)}</div>
              </div>
            ) : (
              <p className="text-sm text-base-400">No logged sets yet. Track this exercise in a workout to see your history here.</p>
            )}
          </Card>

          {alternative && (
            <Card>
              <h3 className="font-semibold text-base-100 mb-2 flex items-center gap-1.5">
                <Shuffle size={15} className="text-accent" /> Alternative Exercise
              </h3>
              <Link to={`/exercises/${alternative.id}`} className="text-sm text-accent hover:underline font-medium">
                {alternative.nameEn}
              </Link>
              <p className="text-xs text-base-400 mt-1">{alternative.nameRu}</p>
            </Card>
          )}
        </div>
      </div>
    </PageShell>
  )
}
