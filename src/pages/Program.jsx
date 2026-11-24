import { Link } from 'react-router-dom'
import { CheckCircle2, Circle, Lock } from 'lucide-react'
import PageShell from '../components/layout/PageShell'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import ProgressBar from '../components/ui/ProgressBar'
import { useAppData } from '../context/AppDataProvider'
import { generateWeek, getCurrentWeekNumber, TOTAL_WEEKS } from '../lib/programEngine'
import { PHASES } from '../data/constants'
import RIRGuide from '../components/RIRGuide'

function weekStatus(weekNumber, currentWeek) {
  if (weekNumber < currentWeek) return 'done'
  if (weekNumber === currentWeek) return 'active'
  return 'upcoming'
}

export default function Program() {
  const { profile, workoutHistory } = useAppData()
  const currentWeek = getCurrentWeekNumber(profile)

  return (
    <PageShell title="12-Week Program" subtitle="Foundation → Hypertrophy & Strength → Athletic Performance">
      <div className="mb-6">
        <RIRGuide />
      </div>
      {Object.values(PHASES).map((phase) => (
        <div key={phase.key} className="mb-8">
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="text-lg font-bold text-base-100">{phase.label} Phase</h2>
            <span className="text-xs text-base-400">Weeks {phase.weeks[0]}-{phase.weeks[phase.weeks.length - 1]}</span>
          </div>
          <p className="text-sm text-base-400 mb-4">{phase.focus}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {phase.weeks.map((weekNumber) => {
              const week = generateWeek(weekNumber)
              const status = weekStatus(weekNumber, currentWeek)
              const completedCount = workoutHistory.filter((w) => w.weekNumber === weekNumber && w.completedAt).length

              return (
                <Link key={weekNumber} to={`/program/week/${weekNumber}`}>
                  <Card
                    className={`h-full transition-colors hover:border-accent/40 ${
                      status === 'active' ? 'border-accent/50 shadow-glow' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-base-100">Week {weekNumber}</span>
                      {status === 'done' && <CheckCircle2 size={16} className="text-accent" />}
                      {status === 'active' && <Circle size={16} className="text-accent animate-pulseRing" />}
                      {status === 'upcoming' && <Lock size={14} className="text-base-500" />}
                    </div>
                    {week.isDeload && <Badge color="warning">Deload</Badge>}
                    {weekNumber === TOTAL_WEEKS && <Badge color="accent">Test Week</Badge>}
                    <ProgressBar value={completedCount} max={4} className="mt-3" />
                    <div className="text-[11px] text-base-400 mt-1">{completedCount}/4 workouts</div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      ))}
    </PageShell>
  )
}
