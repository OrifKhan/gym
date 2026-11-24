import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, ChevronRight, CheckCircle2, ClipboardList } from 'lucide-react'
import PageShell from '../components/layout/PageShell'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { useAppData } from '../context/AppDataProvider'
import { generateWeek, TOTAL_WEEKS } from '../lib/programEngine'
import { WEEKDAYS, WEEKDAY_LABELS } from '../data/constants'

export default function ProgramWeek() {
  const { weekNumber } = useParams()
  const navigate = useNavigate()
  const { workoutHistory } = useAppData()
  const num = parseInt(weekNumber, 10)
  const week = generateWeek(num)

  const isCompleted = (dayKey) => workoutHistory.some((w) => w.weekNumber === num && w.dayKey === dayKey && w.completedAt)

  return (
    <PageShell
      title={`Week ${num}`}
      subtitle={`${week.phase.label} Phase — ${week.progressionTag}`}
      actions={
        <Button variant="ghost" onClick={() => navigate('/program')}>
          <ArrowLeft size={16} /> All Weeks
        </Button>
      }
    >
      <div className="flex items-center gap-2 mb-5">
        <Button variant="secondary" size="sm" disabled={num <= 1} onClick={() => navigate(`/program/week/${num - 1}`)}>
          Previous
        </Button>
        <Button variant="secondary" size="sm" disabled={num >= TOTAL_WEEKS} onClick={() => navigate(`/program/week/${num + 1}`)}>
          Next
        </Button>
        {week.isDeload && <Badge color="warning">Deload Week</Badge>}
        {week.isEvaluation && <Badge color="accent">Evaluation Week</Badge>}
        <Button variant="ghost" size="sm" onClick={() => navigate(`/review/${num}`)} className="ml-auto">
          <ClipboardList size={14} /> Week Review
        </Button>
      </div>

      <div className="space-y-3">
        {WEEKDAYS.map((dayKey) => {
          const day = week.days[dayKey]
          const done = isCompleted(dayKey)

          if (day.type === 'rest') {
            return (
              <Card key={dayKey} className="flex items-center justify-between opacity-60">
                <div>
                  <div className="text-sm font-semibold text-base-100">{WEEKDAY_LABELS[dayKey]}</div>
                  <div className="text-xs text-base-400">Rest Day</div>
                </div>
              </Card>
            )
          }

          return (
            <Link key={dayKey} to={`/workout/${num}/${dayKey}`}>
              <Card className="flex items-center justify-between hover:border-accent/40 transition-colors">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-base-100">{WEEKDAY_LABELS[dayKey]}</span>
                    {done && <CheckCircle2 size={15} className="text-accent" />}
                  </div>
                  <div className="text-xs text-base-400">{day.focus}</div>
                  <div className="text-[11px] text-base-500 mt-1">{day.exercises.length} exercises</div>
                </div>
                <ChevronRight size={18} className="text-base-400" />
              </Card>
            </Link>
          )
        })}
      </div>
    </PageShell>
  )
}
