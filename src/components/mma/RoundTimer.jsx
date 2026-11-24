import { useEffect, useState } from 'react'
import { Play, Pause, RotateCcw } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import ProgressRing from '../ui/ProgressRing'
import { Input } from '../ui/Input'
import { useCountdown } from '../../lib/useCountdown'
import { formatClock } from '../../lib/dateUtils'
import { useAppData } from '../../context/AppDataProvider'

const DEFAULT_ROUND_SEC = 180
const DEFAULT_REST_SEC = 60

export default function RoundTimer() {
  const { settings } = useAppData()
  const [totalRounds, setTotalRounds] = useState(5)
  const [roundSec, setRoundSec] = useState(DEFAULT_ROUND_SEC)
  const [restSec, setRestSec] = useState(DEFAULT_REST_SEC)
  const [currentRound, setCurrentRound] = useState(1)
  const [phase, setPhase] = useState('round') // 'round' | 'rest' | 'done'

  const duration = phase === 'round' ? roundSec : phase === 'rest' ? restSec : 0
  const { secondsLeft, running, start, pause, reset } = useCountdown(duration, {
    soundEnabled: settings.soundEnabled !== false,
    onComplete: () => {
      if (phase === 'round') {
        if (currentRound >= totalRounds) {
          setPhase('done')
        } else {
          setPhase('rest')
        }
      } else if (phase === 'rest') {
        setCurrentRound((r) => r + 1)
        setPhase('round')
      }
    },
  })

  useEffect(() => {
    reset(duration)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  const resetAll = () => {
    setCurrentRound(1)
    setPhase('round')
  }

  return (
    <Card>
      <h3 className="font-semibold text-base-100 mb-4">MMA Round Timer</h3>

      <div className="flex flex-col items-center gap-3 mb-5">
        <ProgressRing
          value={duration - secondsLeft}
          max={duration}
          size={180}
          strokeWidth={12}
          color={phase === 'round' ? '#39FF6E' : '#ffb020'}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-base-100">{formatClock(secondsLeft)}</div>
            <div className="text-xs uppercase tracking-wide text-base-400 mt-1">
              {phase === 'done' ? 'Finished' : phase === 'round' ? `Round ${currentRound}/${totalRounds}` : 'Rest'}
            </div>
          </div>
        </ProgressRing>

        <div className="flex items-center gap-2">
          <Button variant="primary" onClick={running ? pause : start} disabled={phase === 'done'}>
            {running ? <Pause size={16} /> : <Play size={16} />}
            {running ? 'Pause' : 'Start'}
          </Button>
          <Button variant="secondary" onClick={resetAll}>
            <RotateCcw size={16} /> Reset
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Input
          label="Rounds"
          type="number"
          min={1}
          max={15}
          value={totalRounds}
          onChange={(e) => setTotalRounds(Math.max(1, parseInt(e.target.value, 10) || 1))}
        />
        <Input
          label="Round (sec)"
          type="number"
          min={30}
          step={15}
          value={roundSec}
          onChange={(e) => setRoundSec(Math.max(15, parseInt(e.target.value, 10) || 15))}
        />
        <Input
          label="Rest (sec)"
          type="number"
          min={15}
          step={15}
          value={restSec}
          onChange={(e) => setRestSec(Math.max(10, parseInt(e.target.value, 10) || 10))}
        />
      </div>
    </Card>
  )
}
