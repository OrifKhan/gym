import { PenTool, Film } from 'lucide-react'
import StickFigure from './StickFigure'
import { getPose } from '../../data/poses'

export default function ExerciseIllustration({ pattern, media, className = '', compact = false }) {
  if (media) {
    return (
      <div className={`relative rounded-2xl bg-base-800 border border-base-700 overflow-hidden ${className}`}>
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-base-900/80 border border-base-600 rounded-full px-2.5 py-1 text-[10px] font-medium text-base-300 z-10">
          <Film size={10} />
          Real Demonstration
        </div>
        <div className={`flex items-center justify-center bg-black ${compact ? 'h-40' : 'h-72'}`}>
          <img src={media} alt="Exercise demonstration" className="h-full w-full object-contain" loading="lazy" />
        </div>
        {!compact && <div className="px-4 py-2 text-center text-[11px] text-base-500">Demonstration via oss.exercisedb.dev (open exercise database)</div>}
      </div>
    )
  }

  const pose = getPose(pattern)

  return (
    <div className={`relative rounded-2xl bg-base-800 border border-base-700 overflow-hidden ${className}`}>
      <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-base-900/80 border border-base-600 rounded-full px-2.5 py-1 text-[10px] font-medium text-base-300 z-10">
        <PenTool size={10} />
        Illustration
      </div>
      <div className={`grid grid-cols-2 ${compact ? 'p-3' : 'p-5'}`}>
        <div className="flex flex-col items-center">
          <StickFigure pose={pose.start} equipment={pose.equipment} highlight={pose.highlight} showHighlight={false} />
          {!compact && <span className="text-[11px] text-base-400 mt-1 font-medium">Starting Position</span>}
        </div>
        <div className="flex flex-col items-center border-l border-base-700">
          <StickFigure pose={pose.execution} equipment={pose.equipment} highlight={pose.highlight} />
          {!compact && <span className="text-[11px] text-accent mt-1 font-medium">Execution</span>}
        </div>
      </div>
      {!compact && (
        <div className="px-4 pb-3 text-center text-[11px] text-base-500">{pose.label} diagram — original illustration, not a photograph</div>
      )}
    </div>
  )
}
