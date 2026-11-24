import { NavLink } from 'react-router-dom'
import { Flame, X } from 'lucide-react'
import { NAV_ITEMS } from './navItems'

export default function MobileNav({ open, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden animate-fadeIn">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="absolute left-0 top-0 h-full w-72 bg-base-950 border-r border-base-700 flex flex-col animate-slideUp">
        <div className="flex items-center justify-between px-5 py-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center shadow-glow">
              <Flame size={18} className="text-base-black" />
            </div>
            <span className="text-base font-bold text-base-100">ATHLETE OS</span>
          </div>
          <button onClick={onClose} className="text-base-400 hover:text-base-100 p-1">
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 space-y-1">
          {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive ? 'bg-accent/15 text-accent border border-accent/30' : 'text-base-300 hover:bg-base-800'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}
