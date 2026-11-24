import { useState } from 'react'
import { Gauge, ChevronDown, ChevronUp } from 'lucide-react'
import Card from './ui/Card'

const RIR_TABLE = [
  { rir: '4-5', meaning: 'Warm-up / very light — you could do 4-5 more reps with good form.' },
  { rir: '3', meaning: 'Controlled effort — used in the Foundation phase to build technique safely.' },
  { rir: '2', meaning: 'Hard but clean — one or two reps away from your technical limit.' },
  { rir: '1', meaning: 'Very hard — almost no reps left, used sparingly in later phases.' },
  { rir: '0', meaning: 'Technical failure — the next rep would break form. Rarely prescribed here.' },
]

export default function RIRGuide({ defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <Card>
      <button className="w-full flex items-center justify-between" onClick={() => setOpen((o) => !o)}>
        <span className="flex items-center gap-2 font-semibold text-base-100">
          <Gauge size={16} className="text-accent" /> What is RIR? (Reps in Reserve)
        </span>
        {open ? <ChevronUp size={16} className="text-base-400" /> : <ChevronDown size={16} className="text-base-400" />}
      </button>
      {open && (
        <div className="mt-3 space-y-3 text-sm text-base-300 animate-fadeIn">
          <p>
            <span className="text-base-100 font-medium">RIR (Reps in Reserve)</span> is how many more clean reps you could
            have done at the end of a set. It's how this program controls training intensity without needing you to
            guess a max weight or train to failure every session.
          </p>
          <p className="bg-base-800 border border-base-600 rounded-xl p-3">
            <span className="text-accent font-medium">Example — RIR 2:</span> Finish the set when you could still
            perform approximately two additional repetitions with correct technique.
          </p>
          <div className="space-y-1.5">
            {RIR_TABLE.map((row) => (
              <div key={row.rir} className="flex gap-3 text-xs">
                <span className="w-10 shrink-0 font-semibold text-base-100">RIR {row.rir}</span>
                <span className="text-base-400">{row.meaning}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-base-500">
            Each exercise in your workout shows a target RIR for the current week. Log the RIR you actually felt on each
            set — that's what the app uses to recommend your next weight, not a guess.
          </p>
        </div>
      )}
    </Card>
  )
}
