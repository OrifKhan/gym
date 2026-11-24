import { useMemo, useState } from 'react'
import { ListFilter } from 'lucide-react'
import PageShell from '../components/layout/PageShell'
import SearchBar from '../components/ui/SearchBar'
import { Select } from '../components/ui/Input'
import EmptyState from '../components/ui/EmptyState'
import ExerciseCard from '../components/exercise/ExerciseCard'
import { EXERCISES } from '../data/exercises'
import { CATEGORIES, EQUIPMENT, DIFFICULTY } from '../data/constants'

export default function ExerciseLibrary() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [equipment, setEquipment] = useState('All')
  const [difficulty, setDifficulty] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return EXERCISES.filter((e) => {
      if (category !== 'All' && e.category !== category) return false
      if (equipment !== 'All' && !e.equipment.includes(equipment)) return false
      if (difficulty !== 'All' && e.difficulty !== difficulty) return false
      if (q && !(e.nameEn.toLowerCase().includes(q) || e.nameRu.toLowerCase().includes(q) || e.targetMuscles.some((m) => m.toLowerCase().includes(q)))) {
        return false
      }
      return true
    })
  }, [query, category, equipment, difficulty])

  return (
    <PageShell title="Exercise Library" subtitle={`${EXERCISES.length} exercises across every training category`}>
      <div className="flex flex-col lg:flex-row gap-3 mb-6">
        <SearchBar value={query} onChange={setQuery} placeholder="Search by name or muscle..." className="flex-1" />
        <div className="grid grid-cols-3 gap-2 lg:w-[480px]">
          <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
          <Select value={equipment} onChange={(e) => setEquipment(e.target.value)}>
            <option value="All">All Equipment</option>
            {EQUIPMENT.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </Select>
          <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="All">All Levels</option>
            {DIFFICULTY.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </Select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={ListFilter}
          title="No exercises match your filters"
          description="Try a different search term or reset the category/equipment/difficulty filters."
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      )}
    </PageShell>
  )
}
