import { useState } from 'react'
import PageShell from '../components/layout/PageShell'
import Tabs from '../components/ui/Tabs'
import ExerciseCard from '../components/exercise/ExerciseCard'
import RoundTimer from '../components/mma/RoundTimer'
import { EXERCISES } from '../data/exercises'

const TABS = [
  { value: 'boxing', label: 'Boxing' },
  { value: 'mma', label: 'MMA Striking' },
  { value: 'wrestling', label: 'Wrestling & Grappling' },
]

const CATEGORY_BY_TAB = { boxing: 'Boxing', mma: 'MMA', wrestling: 'Wrestling' }

export default function MMA() {
  const [tab, setTab] = useState('boxing')
  const exercises = EXERCISES.filter((e) => e.category === CATEGORY_BY_TAB[tab])

  return (
    <PageShell title="MMA Training" subtitle="Boxing, wrestling, grappling, and combat conditioning">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        <div className="lg:col-span-1">
          <RoundTimer />
        </div>
        <div className="lg:col-span-2 flex flex-col">
          <Tabs tabs={TABS} active={tab} onChange={setTab} className="mb-4 self-start" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {exercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  )
}
