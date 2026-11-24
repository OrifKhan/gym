import Card from './Card'

export default function StatTile({ icon: Icon, label, value, sub, accent = false, className = '' }) {
  return (
    <Card className={`flex flex-col gap-2 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-base-300 uppercase tracking-wide">{label}</span>
        {Icon && <Icon size={16} className={accent ? 'text-accent' : 'text-base-400'} />}
      </div>
      <div className={`text-2xl font-bold ${accent ? 'text-accent' : 'text-base-100'}`}>{value}</div>
      {sub && <div className="text-xs text-base-400">{sub}</div>}
    </Card>
  )
}
