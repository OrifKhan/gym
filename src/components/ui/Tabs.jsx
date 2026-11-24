export default function Tabs({ tabs, active, onChange, className = '' }) {
  return (
    <div className={`flex items-center gap-1 overflow-x-auto no-scrollbar bg-base-900 border border-base-700 rounded-xl p-1 ${className}`}>
      {tabs.map((tab) => {
        const value = typeof tab === 'string' ? tab : tab.value
        const label = typeof tab === 'string' ? tab : tab.label
        const isActive = active === value
        return (
          <button
            key={value}
            onClick={() => onChange(value)}
            className={`whitespace-nowrap px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive ? 'bg-accent text-base-black' : 'text-base-300 hover:text-base-100 hover:bg-base-800'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
