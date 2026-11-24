import { NavLink } from 'react-router-dom'
import { Flame } from 'lucide-react'
import { NAV_ITEMS } from './navItems'
import { useAppData } from '../../context/AppDataProvider'

export default function Sidebar() {
  const { profile } = useAppData()

  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 h-screen sticky top-0 border-r border-base-700 bg-base-950">
      <div className="flex items-center gap-2.5 px-6 py-6">
        <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center shadow-glow">
          <Flame size={18} className="text-base-black" />
        </div>
        <div>
          <div className="text-base font-bold leading-tight text-base-100">ATHLETE OS</div>
          <div className="text-[11px] text-base-400 leading-tight">{profile.name}'s Program</div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 space-y-1">
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-accent/15 text-accent border border-accent/30'
                  : 'text-base-300 hover:bg-base-800 hover:text-base-100 border border-transparent'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 text-[11px] text-base-500 border-t border-base-700">
        All data stays on this device.
      </div>
    </aside>
  )
}
