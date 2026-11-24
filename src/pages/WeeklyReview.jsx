import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, TrendingUp, TrendingDown, Scale, Beef, AlertTriangle, ClipboardList } from 'lucide-react'
import PageShell from '../components/layout/PageShell'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import ProgressBar from '../components/ui/ProgressBar'
import EmptyState from '../components/ui/EmptyState'
import { useAppData } from '../context/AppDataProvider'
import { generateWeeklyReview } from '../lib/weeklyReview'
import { getCurrentWeekNumber, TOTAL_WEEKS } from '../lib/programEngine'
import { formatDateShort } from '../lib/dateUtils'

export default function WeeklyReview() {
  const params = useParams()
  const navigate = useNavigate()
  const { profile, workoutHistory, bodyMetrics, nutritionLog, nutritionTargets } = useAppData()

  const currentWeek = getCurrentWeekNumber(profile)
  const weekNumber = Math.min(TOTAL_WEEKS, Math.max(1, parseInt(params.weekNumber, 10) || currentWeek))

  const review = generateWeeklyReview(weekNumber, { workoutHistory, bodyMetrics, nutritionLog, nutritionTargets, profile })

  return (
    <PageShell
      title={`Week ${weekNumber} Coaching Review`}
      subtitle={`${formatDateShort(review.startISO)} – ${formatDateShort(review.endISO)}`}
      actions={
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" disabled={weekNumber <= 1} onClick={() => navigate(`/review/${weekNumber - 1}`)}>
            Previous Week
          </Button>
          <Button variant="secondary" size="sm" disabled={weekNumber >= currentWeek} onClick={() => navigate(`/review/${weekNumber + 1}`)}>
            Next Week
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate('/program')}>
            <ArrowLeft size={16} /> Program
          </Button>
        </div>
      }
    >
      {!review.hasAnyData ? (
        <EmptyState
          icon={ClipboardList}
          title="No data logged for this week yet"
          description="Complete a workout, log a body measurement, or track a meal during this week to generate a real coaching review — nothing here is guessed."
        />
      ) : (
        <div className="space-y-5">
          <Card>
            <h3 className="font-semibold text-base-100 mb-3">Training Consistency</h3>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-2xl font-bold text-base-100">
                {review.workoutsCompleted}/{review.workoutsPlanned}
              </span>
              <span className="text-sm text-base-400">workouts completed</span>
            </div>
            <ProgressBar value={review.workoutsCompleted} max={review.workoutsPlanned} />
          </Card>

          <Card>
            <h3 className="font-semibold text-base-100 mb-3 flex items-center gap-1.5">
              <TrendingUp size={15} className="text-accent" /> Strength Trend
            </h3>
            {review.strengthTrend.length === 0 ? (
              <p className="text-sm text-base-400">No exercise had a prior session to compare against yet.</p>
            ) : (
              <div className="space-y-2">
                {review.strengthTrend.map((t) => (
                  <div key={t.exerciseId} className="flex items-center justify-between text-sm">
                    <span className="text-base-200">{t.nameEn}</span>
                    <span className="flex items-center gap-1.5">
                      <span className="text-base-400">
                        {t.priorWeight}kg → {t.weekWeight}kg
                      </span>
                      {t.direction === 'up' && <TrendingUp size={14} className="text-accent" />}
                      {t.direction === 'down' && <TrendingDown size={14} className="text-danger" />}
                      {t.direction === 'same' && <Badge>same</Badge>}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </Card>

          <Card>
            <h3 className="font-semibold text-base-100 mb-3 flex items-center gap-1.5">
              <Scale size={15} className="text-accent" /> Body Weight
            </h3>
            {review.weightTrend.status === 'no_data' && <p className="text-sm text-base-400">No measurements logged this week.</p>}
            {review.weightTrend.status === 'first_reading' && (
              <p className="text-sm text-base-300">
                First reading this program: <span className="text-base-100 font-medium">{review.weightTrend.weekAvg}kg</span>
              </p>
            )}
            {review.weightTrend.status === 'ok' && (
              <div>
                <div className="text-xl font-bold text-base-100">
                  {review.weightTrend.baselineAvg}kg → {review.weightTrend.weekAvg}kg
                </div>
                <Badge color={review.weightTrend.onTrack ? 'accent' : 'warning'} className="mt-2">
                  {review.weightTrend.delta >= 0 ? '+' : ''}
                  {review.weightTrend.delta}kg this week
                </Badge>
              </div>
            )}
          </Card>

          <Card>
            <h3 className="font-semibold text-base-100 mb-3 flex items-center gap-1.5">
              <Beef size={15} className="text-accent" /> Nutrition Adherence
            </h3>
            {review.proteinAdherence.status === 'no_data' ? (
              <p className="text-sm text-base-400">No meals logged this week.</p>
            ) : (
              <p className="text-sm text-base-300">
                Protein target met on <span className="text-base-100 font-medium">{review.proteinAdherence.daysMet}</span> of{' '}
                {review.proteinAdherence.daysLogged} logged days ({review.proteinAdherence.pct}%).
              </p>
            )}
          </Card>

          {review.exercisesNeedingAttention.length > 0 && (
            <Card className="border-warning/40">
              <h3 className="font-semibold text-base-100 mb-3 flex items-center gap-1.5">
                <AlertTriangle size={15} className="text-warning" /> Exercises Needing Adjustment
              </h3>
              <ul className="space-y-1.5 text-sm text-base-300">
                {review.exercisesNeedingAttention.map((e) => (
                  <li key={e.exerciseId}>
                    <span className="text-base-100 font-medium">{e.nameEn}:</span> {e.reason}
                  </li>
                ))}
              </ul>
            </Card>
          )}

          <Card glow>
            <h3 className="font-semibold text-base-100 mb-3 flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-accent" /> Coach's Recommendations
            </h3>
            <ul className="space-y-2 text-sm text-base-200">
              {review.recommendations.map((r, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent">•</span> {r}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )}
    </PageShell>
  )
}
