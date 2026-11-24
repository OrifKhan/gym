import { useState } from 'react'
import { Menu, Flame } from 'lucide-react'
import MobileNav from './MobileNav'

export default function TopBar({ title }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="lg:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-4 bg-base-950/95 backdrop-blur border-b border-base-700">
        <button onClick={() => setOpen(true)} className="p-2 -ml-2 text-base-200">
          <Menu size={22} />
        </button>
        <div className="flex items-center gap-2">
          <Flame size={16} className="text-accent" />
          <span className="font-semibold text-base-100">{title || 'Athlete OS'}</span>
        </div>
        <div className="w-8" />
      </header>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  )
}
