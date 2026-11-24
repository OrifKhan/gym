import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Play, Pause, Flag, Moon } from 'lucide-react'
import PageShell from '../components/layout/PageShell'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import EmptyState from '../components/ui/EmptyState'
import ProgressBar from '../components/ui/ProgressBar'
import ExerciseTrackerCard from '../components/workout/ExerciseTrackerCard'
import RIRGuide from '../components/RIRGuide'
import SafetyGuide, { getWarmupScheme } from '../components/SafetyGuide'
import { useAppData } from '../context/AppDataProvider'
import { generateWeek, getTodayWorkout } from '../lib/programEngine'
import { getProgressionRecommendation } from '../lib/progressionAdvisor'
import { getExerciseById } from '../data/exercises'
import { formatDuration, toISODate } from '../lib/dateUtils'
import { WEEKDAY_LABELS } from '../data/constants'

function buildInitialExercises(day) {
  return day.exercises.map((e) => ({
    exerciseId: e.exerciseId,
    sets: Array.from({ length: e.sets }, () => ({ weight: null, reps: null, rir: null, completed: false })),
    notes: '',
  }))
}

function getPreviousPerformance(workoutHistory, exerciseId, beforeDate) {
  for (let i = workoutHistory.length - 1; i >= 0; i--) {
    const session = workoutHistory[i]
    if (session.date >= beforeDate) continue
    const entry = session.exercises?.find((e) => e.exerciseId === exerciseId)
    const best = entry?.sets?.filter((s) => s.completed && s.weight != null).sort((a, b) => b.weight - a.weight)[0]
    if (best) return { weight: best.weight, reps: best.reps }
  }
  return null
}

export default function TodayWorkout() {
  const params = useParams()
  const navigate = useNavigate()
  const { profile, sessionState, setSessionState, workoutHistory, addWorkoutToHistory } = useAppData()
  const [, forceTick] = useState(0)

  const target = useMemo(() => {
    if (params.weekNumber && params.dayKey) {
      const weekNumber = parseInt(params.weekNumber, 10)
      const week = generateWeek(weekNumber)
      return { weekNumber, dayKey: params.dayKey, day: week.days[params.dayKey] }
    }
    return getTodayWorkout(profile)
  }, [params.weekNumber, params.dayKey, profile])

  const matchesCurrentSession =
    sessionState && sessionState.weekNumber === target.weekNumber && sessionState.dayKey === target.dayKey

  useEffect(() => {
    if (!matchesCurrentSession || sessionState.isPaused) return
    const id = setInterval(() => forceTick((t) => t + 1), 1000)
    return () => clearInterval(id)
  }, [matchesCurrentSession, sessionState])

  if (target.day.type === 'rest') {
    return (
      <PageShell title="Today's Workout">
        <EmptyState
          icon={Moon}
          title="Rest Day"
          description="No training scheduled. Recovery is part of the program — hydrate, sleep well, and come back strong next session."
          action={<Button onClick={() => navigate('/program')}>View Program</Button>}
        />
      </PageShell>
    )
  }

  const firstExercise = getExerciseById(target.day.exercises[0]?.exerciseId)
  const firstExercisePrevious = getPreviousPerformance(workoutHistory, target.day.exercises[0]?.exerciseId, toISODate(new Date()))
  const warmupScheme = getWarmupScheme(firstExercise, firstExercisePrevious?.weight)

  const liveElapsed =
    matchesCurrentSession &&
    (sessionState.elapsedSec || 0) + (sessionState.isPaused ? 0 : (Date.now() - new Date(sessionState.lastResumeAt).getTime()) / 1000)

  const handleStart = () => {
    if (sessionState && !matchesCurrentSession) return // another session in progress elsewhere
    setSessionState({
      weekNumber: target.weekNumber,
      dayKey: target.dayKey,
      focus: target.day.focus,
      date: toISODate(new Date()),
      startedAt: new Date().toISOString(),
      lastResumeAt: new Date().toISOString(),
      elapsedSec: 0,
      isPaused: false,
      exercises: buildInitialExercises(target.day),
    })
  }

  const handlePauseResume = () => {
    if (!matchesCurrentSession) return
    if (sessionState.isPaused) {
      setSessionState({ ...sessionState, isPaused: false, lastResumeAt: new Date().toISOString() })
    } else {
      const addedSec = (Date.now() - new Date(sessionState.lastResumeAt).getTime()) / 1000
      setSessionState({ ...sessionState, isPaused: true, elapsedSec: (sessionState.elapsedSec || 0) + addedSec })
    }
  }

  const handleFinish = () => {
    if (!matchesCurrentSession) return
    const addedSec = sessionState.isPaused ? 0 : (Date.now() - new Date(sessionState.lastResumeAt).getTime()) / 1000
    const durationSec = Math.round((sessionState.elapsedSec || 0) + addedSec)
    addWorkoutToHistory({
      id: `${Date.now()}`,
      date: sessionState.date,
      weekNumber: sessionState.weekNumber,
      dayKey: sessionState.dayKey,
      focus: sessionState.focus,
      exercises: sessionState.exercises,
      durationSec,
      completedAt: new Date().toISOString(),
    })
    setSessionState(null)
  }

  const updateSet = (exIndex, setIndex, patch) => {
    const exercises = sessionState.exercises.map((ex, i) =>
      i === exIndex ? { ...ex, sets: ex.sets.map((s, j) => (j === setIndex ? { ...s, ...patch } : s)) } : ex,
    )
    setSessionState({ ...sessionState, exercises })
  }

  const updateNotes = (exIndex, notes) => {
    const exercises = sessionState.exercises.map((ex, i) => (i === exIndex ? { ...ex, notes } : ex))
    setSessionState({ ...sessionState, exercises })
  }

  const totalSets = target.day.exercises.reduce((sum, e) => sum + e.sets, 0)
  const completedSets = matchesCurrentSession
    ? sessionState.exercises.reduce((sum, e) => sum + e.sets.filter((s) => s.completed).length, 0)
    : 0

  return (
    <PageShell
      title={target.day.focus}
      subtitle={`${WEEKDAY_LABELS[target.dayKey]} — Week ${target.weekNumber}`}
      actions={
        !matchesCurrentSession ? (
          <Button onClick={handleStart} disabled={!!sessionState}>
            <Play size={16} /> Start Workout
          </Button>
        ) : (
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="secondary" onClick={handlePauseResume}>
              {sessionState.isPaused ? <Play size={16} /> : <Pause size={16} />}
              {sessionState.isPaused ? 'Resume' : 'Pause'}
            </Button>
            <Button variant="primary" onClick={handleFinish}>
              <Flag size={16} /> Finish Workout
            </Button>
          </div>
        )
      }
    >
      {sessionState && !matchesCurrentSession && (
        <Card className="mb-5 border-warning/40 flex items-center justify-between flex-wrap gap-3">
          <span className="text-sm text-base-300">
            You have an unfinished workout (Week {sessionState.weekNumber}, {WEEKDAY_LABELS[sessionState.dayKey]}).
          </span>
          <Button size="sm" variant="secondary" onClick={() => navigate(`/workout/${sessionState.weekNumber}/${sessionState.dayKey}`)}>
            Resume It
          </Button>
        </Card>
      )}

      {matchesCurrentSession && (
        <Card className="mb-5 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs text-base-400">Elapsed Time</div>
            <div className="text-2xl font-bold text-base-100">{formatDuration(liveElapsed)}</div>
          </div>
          <div className="flex-1 min-w-[160px] max-w-xs">
            <ProgressBar value={completedSets} max={totalSets} label="Sets completed" />
          </div>
        </Card>
      )}

      <div className="space-y-4 mb-5">
        <RIRGuide />
        <SafetyGuide warmupScheme={warmupScheme} />
      </div>

      <div className="space-y-3">
        {target.day.exercises.map((template, i) => {
          const exercise = getExerciseById(template.exerciseId)
          const sessionExercise = matchesCurrentSession
            ? sessionState.exercises[i]
            : { sets: Array.from({ length: template.sets }, () => ({ weight: null, reps: null, rir: null, completed: false })), notes: '' }
          const previous = getPreviousPerformance(workoutHistory, template.exerciseId, toISODate(new Date()))
          const recommendation =
            template.kind === 'strength' ? getProgressionRecommendation(template.exerciseId, template, workoutHistory) : null

          return (
            <ExerciseTrackerCard
              key={template.exerciseId + i}
              index={i}
              template={template}
              exercise={exercise}
              sessionExercise={sessionExercise}
              previous={previous}
              recommendation={recommendation}
              onUpdateSet={(setIndex, patch) => matchesCurrentSession && updateSet(i, setIndex, patch)}
              onUpdateNotes={(notes) => matchesCurrentSession && updateNotes(i, notes)}
            />
          )
        })}
      </div>

      {matchesCurrentSession && <div className="h-20 lg:hidden" aria-hidden="true" />}

      {matchesCurrentSession && (
        <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-base-950/95 backdrop-blur border-t border-base-700 px-4 py-3 flex items-center gap-2">
          <Button variant="secondary" className="flex-1" onClick={handlePauseResume}>
            {sessionState.isPaused ? <Play size={16} /> : <Pause size={16} />}
            {sessionState.isPaused ? 'Resume' : 'Pause'}
          </Button>
          <Button variant="primary" className="flex-1" onClick={handleFinish}>
            <Flag size={16} /> Finish Workout
          </Button>
        </div>
      )}
    </PageShell>
  )
}
