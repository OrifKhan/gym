import { Link } from 'react-router-dom'
import { Clock, Repeat, Layers } from 'lucide-react'
import ExerciseIllustration from './ExerciseIllustration'
import Badge from '../ui/Badge'

const DIFFICULTY_COLOR = {
  Beginner: 'accent',
  Intermediate: 'warning',
  Advanced: 'danger',
}

export default function ExerciseCard({ exercise }) {
  return (
    <Link
      to={`/exercises/${exercise.id}`}
      className="group block rounded-2xl bg-base-900 border border-base-700 hover:border-accent/40 transition-colors overflow-hidden"
    >
      <ExerciseIllustration pattern={exercise.pattern} media={exercise.media} compact className="rounded-none border-0 border-b border-base-700" />
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-semibold text-base-100 leading-snug group-hover:text-accent transition-colors">{exercise.nameEn}</h3>
          <Badge color={DIFFICULTY_COLOR[exercise.difficulty]}>{exercise.difficulty}</Badge>
        </div>
        <p className="text-xs text-base-400 mb-2">{exercise.nameRu}</p>
        <p className="text-xs text-base-300 mb-3 line-clamp-2">{exercise.purpose}</p>
        <div className="flex items-center gap-3 text-xs text-base-400">
          <span className="flex items-center gap-1">
            <Layers size={13} /> {exercise.sets} sets
          </span>
          <span className="flex items-center gap-1">
            <Repeat size={13} /> {exercise.reps}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={13} /> {exercise.restSec}s
          </span>
        </div>
      </div>
    </Link>
  )
}
