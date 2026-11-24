export default function EmptyState({ icon: Icon, title, description, action, className = '' }) {
  return (
    <div className={`flex flex-col items-center justify-center text-center py-12 px-6 ${className}`}>
      {Icon && (
        <div className="w-14 h-14 rounded-2xl bg-base-800 border border-base-700 flex items-center justify-center mb-4">
          <Icon size={24} className="text-base-400" />
        </div>
      )}
      <h3 className="text-base font-semibold text-base-100 mb-1">{title}</h3>
      {description && <p className="text-sm text-base-400 max-w-sm mb-4">{description}</p>}
      {action}
    </div>
  )
}
