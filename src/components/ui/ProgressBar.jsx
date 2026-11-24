export default function ProgressBar({ value = 0, max = 100, className = '', trackClassName = '', barClassName = '', label }) {
  const pct = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0
  return (
    <div className={className}>
      {label && (
        <div className="flex items-center justify-between mb-1.5 text-xs text-base-300">
          <span>{label}</span>
          <span className="text-base-100 font-medium">{Math.round(pct)}%</span>
        </div>
      )}
      <div className={`h-2 w-full rounded-full bg-base-700 overflow-hidden ${trackClassName}`}>
        <div
          className={`h-full rounded-full bg-accent transition-all duration-500 ease-out ${barClassName}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
