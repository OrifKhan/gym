import { Search } from 'lucide-react'

export default function SearchBar({ value, onChange, placeholder = 'Search...', className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base-400" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-base-800 border border-base-600 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-base-100 placeholder:text-base-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50"
      />
    </div>
  )
}
