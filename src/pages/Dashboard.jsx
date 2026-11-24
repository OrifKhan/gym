import { Link } from 'react-router-dom'
import { Play, ArrowRight, Flame, Target, Weight, Trophy, Droplet, Beef, CheckCircle2, Circle } from 'lucide-react'
import PageShell from '../components/layout/PageShell'
import Card from '../components/ui/Card'
import StatTile from '../components/ui/StatTile'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import ProgressBar from '../components/ui/ProgressBar'
import ProgressRing from '../components/ui/ProgressRing'
import { useAppData } from '../context/AppDataProvider'
import {
  getTodayWorkout,
  getNextWorkout,
  getCurrentWeekNumber,
  computeOverallCompletion,
  computeStreak,
  TOTAL_WEEKS,
} from '../lib/programEngine'
import { WEEKDAY_LABELS, TRAINING_DAYS } from '../data/constants'
import { toISODate } from '../lib/dateUtils'

export default function Dashboard() {
  const { profile, workoutHistory, bodyMetrics, nutritionLog, nutritionTargets } = useAppData()

  const currentWeek = getCurrentWeekNumber(profile)
  const completed = workoutHistory.filter((w) => w.completedAt)
  const completionPercent = computeOverallCompletion(workoutHistory)
  const streak = computeStreak(workoutHistory)

  const today = getTodayWorkout(profile)
  const todayAlreadyDone = completed.some((w) => w.weekNumber === today.weekNumber && w.dayKey === today.dayKey)
  const next =
    today.day.type === 'rest' || todayAlreadyDone ? getNextWorkout(profile, { skipToday: todayAlreadyDone }) : null

  const currentWeight = bodyMetrics.length > 0 ? bodyMetrics[bodyMetrics.length - 1].weightKg : profile.weightKg

  const todayISO = toISODate(new Date())
  const todayNutrition = nutritionLog[todayISO] || { waterMl: 0 }
  const todayProtein = Object.values(todayNutrition.meals || {})
    .flat()
    .reduce((sum, item) => sum + (item.proteinG || 0), 0)

  return (
    <PageShell title={`Welcome back, ${profile.name}`} subtitle={`Week ${currentWeek} of ${TOTAL_WEEKS} — stay consistent.`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        <Card className="lg:col-span-2 flex flex-col sm:flex-row items-center gap-6">
          <ProgressRing value={completionPercent} max={100} size={120} strokeWidth={10}>
            <div className="text-center">
              <div className="text-2xl font-bold text-base-100">{completionPercent}%</div>
              <div className="text-[10px] text-base-400">Program</div>
            </div>
          </ProgressRing>
          <div className="flex-1">
            <div className="text-sm text-base-400 mb-1">Overall Program Completion</div>
            <div className="text-lg font-semibold text-base-100 mb-2">
              {completed.length} of {TOTAL_WEEKS * TRAINING_DAYS.length} workouts complete
            </div>
            <ProgressBar value={currentWeek} max={TOTAL_WEEKS} label="Current week" />
          </div>
        </Card>
        <Card className="flex flex-col items-center justify-center text-center">
          <Flame size={28} className="text-accent mb-2" />
          <div className="text-3xl font-bold text-base-100">{streak}</div>
          <div className="text-xs text-base-400">Day Training Streak</div>
        </Card>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <StatTile icon={Weight} label="Current Weight" value={`${currentWeight} kg`} accent />
        <StatTile icon={Target} label="Target Weight" value={`${profile.targetWeightKg} kg`} />
        <StatTile icon={Trophy} label="Completed Workouts" value={completed.length} />
        <StatTile icon={Flame} label="Experience" value={profile.experience} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        <Card className="lg:col-span-2" glow>
          <div className="flex items-center justify-between mb-3">
            <Badge color="accent">Today</Badge>
            {todayAlreadyDone && <Badge color="accent">Completed</Badge>}
          </div>
          {today.day.type === 'rest' ? (
            <>
              <h2 className="text-xl font-bold text-base-100 mb-1">Rest Day</h2>
              <p className="text-sm text-base-400 mb-4">No training scheduled today. Recovery is part of the plan.</p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold text-base-100 mb-1">{today.day.focus}</h2>
              <p className="text-sm text-base-400 mb-4">
                {WEEKDAY_LABELS[today.dayKey]} · {today.day.exercises.length} exercises
              </p>
              <Link to="/today">
                <Button>
                  <Play size={16} /> {todayAlreadyDone ? 'Review Workout' : 'Start Workout'}
                </Button>
              </Link>
            </>
          )}
        </Card>

        <Card>
          <Badge>Next Up</Badge>
          {next ? (
            <>
              <h3 className="font-semibold text-base-100 mt-2 mb-1">{next.day.focus}</h3>
              <p className="text-xs text-base-400 mb-3">
                {WEEKDAY_LABELS[next.dayKey]} · Week {next.weekNumber}
              </p>
              <Link to={`/workout/${next.weekNumber}/${next.dayKey}`} className="text-accent text-sm font-medium flex items-center gap-1 hover:underline">
                View details <ArrowRight size={14} />
              </Link>
            </>
          ) : (
            <p className="text-sm text-base-400 mt-2">You're all caught up for now.</p>
          )}
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Card className="lg:col-span-2">
          <h3 className="font-semibold text-base-100 mb-3">This Week's Training</h3>
          <div className="grid grid-cols-4 gap-2">
            {TRAINING_DAYS.map((day) => {
              const done = completed.some((w) => w.weekNumber === currentWeek && w.dayKey === day)
              return (
                <div key={day} className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-base-800">
                  {done ? <CheckCircle2 size={20} className="text-accent" /> : <Circle size={20} className="text-base-500" />}
                  <span className="text-[11px] text-base-400">{WEEKDAY_LABELS[day].slice(0, 3)}</span>
                </div>
              )
            })}
          </div>
          <Link to={`/review/${currentWeek}`} className="text-accent text-xs font-medium flex items-center gap-1 hover:underline mt-3">
            View Week {currentWeek} Coaching Review <ArrowRight size={12} />
          </Link>
        </Card>

        <Card>
          <h3 className="font-semibold text-base-100 mb-3">Nutrition Today</h3>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between text-xs text-base-400 mb-1">
                <span className="flex items-center gap-1">
                  <Beef size={12} /> Protein
                </span>
                <span>
                  {Math.round(todayProtein)}g / {nutritionTargets.proteinG}g
                </span>
              </div>
              <ProgressBar value={todayProtein} max={nutritionTargets.proteinG} />
            </div>
            <div>
              <div className="flex items-center justify-between text-xs text-base-400 mb-1">
                <span className="flex items-center gap-1">
                  <Droplet size={12} /> Water
                </span>
                <span>
                  {todayNutrition.waterMl || 0}ml / {nutritionTargets.waterMl}ml
                </span>
              </div>
              <ProgressBar value={todayNutrition.waterMl || 0} max={nutritionTargets.waterMl} />
            </div>
            <Link to="/nutrition" className="text-accent text-xs font-medium flex items-center gap-1 hover:underline">
              Log nutrition <ArrowRight size={12} />
            </Link>
          </div>
        </Card>
      </div>
    </PageShell>
  )
}
