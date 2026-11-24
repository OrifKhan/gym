import { useEffect } from 'react'
import { Play, Pause, RotateCcw, Plus, Minus } from 'lucide-react'
import ProgressRing from '../ui/ProgressRing'
import Button from '../ui/Button'
import { useCountdown } from '../../lib/useCountdown'
import { formatClock } from '../../lib/dateUtils'
import { useAppData } from '../../context/AppDataProvider'

export default function RestTimer({ seconds, onComplete, autoStart = true }) {
  const { settings } = useAppData()
  const { secondsLeft, running, start, pause, reset, addSeconds } = useCountdown(seconds, {
    onComplete,
    soundEnabled: settings.soundEnabled !== false,
  })

  useEffect(() => {
    if (autoStart) start()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds])

  return (
    <div className="flex items-center gap-4">
      <ProgressRing value={seconds - secondsLeft} max={seconds} size={64} strokeWidth={6}>
        <span className="text-sm font-bold text-base-100">{formatClock(secondsLeft)}</span>
      </ProgressRing>
      <div className="flex items-center gap-1.5">
        <Button variant="secondary" size="icon" onClick={() => addSeconds(-15)} aria-label="Subtract 15 seconds">
          <Minus size={14} />
        </Button>
        <Button variant="primary" size="icon" onClick={running ? pause : start} aria-label={running ? 'Pause' : 'Start'}>
          {running ? <Pause size={16} /> : <Play size={16} />}
        </Button>
        <Button variant="secondary" size="icon" onClick={() => reset()} aria-label="Reset">
          <RotateCcw size={14} />
        </Button>
        <Button variant="secondary" size="icon" onClick={() => addSeconds(15)} aria-label="Add 15 seconds">
          <Plus size={14} />
        </Button>
      </div>
    </div>
  )
}
