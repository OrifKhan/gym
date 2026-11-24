const COLORS = {
  default: 'bg-base-700 text-base-200',
  accent: 'bg-accent/15 text-accent border border-accent/30',
  warning: 'bg-warning/15 text-warning border border-warning/30',
  danger: 'bg-danger/15 text-danger border border-danger/30',
}

export default function Badge({ children, color = 'default', className = '' }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${COLORS[color]} ${className}`}>
      {children}
    </span>
  )
}
