import { useMemo, useState } from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Dumbbell, Clock, Swords, Flame, Activity } from 'lucide-react'
import PageShell from '../components/layout/PageShell'
import Card from '../components/ui/Card'
import StatTile from '../components/ui/StatTile'
import EmptyState from '../components/ui/EmptyState'
import { Select } from '../components/ui/Input'
import { useAppData } from '../context/AppDataProvider'
import { EXERCISES, getExerciseById } from '../data/exercises'
import { getCurrentWeekNumber, computeStreak } from '../lib/programEngine'
import { formatDuration, formatDateShort } from '../lib/dateUtils'

function ChartTooltip({ active, payload, label, unit = '' }) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-base-800 border border-base-600 rounded-lg px-3 py-2 text-xs">
      <div className="text-base-400">{label}</div>
      <div className="text-base-100 font-semibold">
        {payload[0].value} {unit}
      </div>
    </div>
  )
}

export default function Analytics() {
  const { workoutHistory, profile, bodyMetrics } = useAppData()
  const [selectedExercise, setSelectedExercise] = useState('')

  const completed = workoutHistory.filter((w) => w.completedAt)
  const currentWeek = getCurrentWeekNumber(profile)
  const streak = computeStreak(workoutHistory)

  const totalTrainingSec = completed.reduce((sum, w) => sum + (w.durationSec || 0), 0)
  const mmaSessions = completed.filter((w) => w.dayKey === 'tuesday' || w.dayKey === 'saturday').length

  const functionalSets = useMemo(() => {
    let count = 0
    completed.forEach((session) => {
      session.exercises?.forEach((e) => {
        const ex = getExerciseById(e.exerciseId)
        if (ex?.category === 'Functional Training') count += e.sets.filter((s) => s.completed).length
      })
    })
    return count
  }, [completed])

  const weeklyConsistency = useMemo(() => {
    return Array.from({ length: currentWeek }, (_, i) => {
      const weekNumber = i + 1
      const count = completed.filter((w) => w.weekNumber === weekNumber).length
      return { week: `W${weekNumber}`, count }
    })
  }, [completed, currentWeek])

  const exerciseOptions = useMemo(() => {
    const ids = new Set()
    completed.forEach((w) => w.exercises?.forEach((e) => ids.add(e.exerciseId)))
    return EXERCISES.filter((e) => ids.has(e.id))
  }, [completed])

  const activeExerciseId = selectedExercise || exerciseOptions[0]?.id

  const strengthData = useMemo(() => {
    if (!activeExerciseId) return []
    return completed
      .map((session) => {
        const entry = session.exercises?.find((e) => e.exerciseId === activeExerciseId)
        const best = entry?.sets?.filter((s) => s.completed && s.weight != null).sort((a, b) => b.weight - a.weight)[0]
        return best ? { date: formatDateShort(session.date), value: best.weight } : null
      })
      .filter(Boolean)
  }, [completed, activeExerciseId])

  const weightChange = useMemo(() => {
    if (bodyMetrics.length < 2) return null
    const first = bodyMetrics[0]
    const last = bodyMetrics[bodyMetrics.length - 1]
    return { diff: +(last.weightKg - first.weightKg).toFixed(1), first, last }
  }, [bodyMetrics])

  return (
    <PageShell title="Analytics" subtitle="Your training data, derived from logged workouts only">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <StatTile icon={Dumbbell} label="Total Workouts" value={completed.length} accent />
        <StatTile icon={Clock} label="Training Time" value={formatDuration(totalTrainingSec)} />
        <StatTile icon={Swords} label="MMA Sessions" value={mmaSessions} />
        <StatTile icon={Flame} label="Current Streak" value={`${streak}d`} accent />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        <Card>
          <h3 className="font-semibold text-base-100 mb-3">Weekly Training Consistency</h3>
          {completed.length === 0 ? (
            <EmptyState title="No workouts logged yet" description="Complete workouts from Today's Workout to see your consistency here." />
          ) : (
            <div style={{ height: 220 }}>
              <ResponsiveContainer>
                <BarChart data={weeklyConsistency} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#242424" vertical={false} />
                  <XAxis dataKey="week" stroke="#5c5c5c" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#5c5c5c" fontSize={11} tickLine={false} axisLine={false} domain={[0, 4]} allowDecimals={false} />
                  <Tooltip content={<ChartTooltip unit="workouts" />} />
                  <Bar dataKey="count" fill="#39FF6E" radius={[4, 4, 0, 0]} maxBarSize={28} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <h3 className="font-semibold text-base-100">Exercise Weight Progression</h3>
            {exerciseOptions.length > 0 && (
              <Select value={activeExerciseId} onChange={(e) => setSelectedExercise(e.target.value)} className="w-52">
                {exerciseOptions.map((ex) => (
                  <option key={ex.id} value={ex.id}>
                    {ex.nameEn}
                  </option>
                ))}
              </Select>
            )}
          </div>
          {strengthData.length === 0 ? (
            <EmptyState title="No tracked sets yet" description="Log weights during workouts to see progression here." />
          ) : (
            <div style={{ height: 220 }}>
              <ResponsiveContainer>
                <LineChart data={strengthData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#242424" vertical={false} />
                  <XAxis dataKey="date" stroke="#5c5c5c" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#5c5c5c" fontSize={11} tickLine={false} axisLine={false} domain={['auto', 'auto']} />
                  <Tooltip content={<ChartTooltip unit="kg" />} />
                  <Line type="monotone" dataKey="value" stroke="#39FF6E" strokeWidth={2} dot={{ r: 4, fill: '#39FF6E' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <h3 className="font-semibold text-base-100 mb-2 flex items-center gap-1.5">
            <Activity size={15} className="text-accent" /> Body Weight Change
          </h3>
          {weightChange ? (
            <div>
              <div className={`text-2xl font-bold ${weightChange.diff >= 0 ? 'text-accent' : 'text-base-100'}`}>
                {weightChange.diff >= 0 ? '+' : ''}
                {weightChange.diff} kg
              </div>
              <div className="text-xs text-base-400 mt-1">
                {weightChange.first.weightKg}kg → {weightChange.last.weightKg}kg
              </div>
            </div>
          ) : (
            <p className="text-sm text-base-400">Log at least two body measurements to see your change over time.</p>
          )}
        </Card>

        <Card>
          <h3 className="font-semibold text-base-100 mb-2">Functional Conditioning</h3>
          <div className="text-2xl font-bold text-base-100">{functionalSets}</div>
          <div className="text-xs text-base-400 mt-1">completed functional training sets</div>
        </Card>

        <Card>
          <h3 className="font-semibold text-base-100 mb-2">Program Position</h3>
          <div className="text-2xl font-bold text-base-100">Week {currentWeek} / 12</div>
          <div className="text-xs text-base-400 mt-1">{completed.length} of 48 planned workouts completed</div>
        </Card>
      </div>
    </PageShell>
  )
}
