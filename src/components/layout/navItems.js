import {
  LayoutDashboard,
  CalendarRange,
  Dumbbell,
  Library,
  Swords,
  Apple,
  LineChart,
  BarChart3,
  Settings as SettingsIcon,
} from 'lucide-react'

export const NAV_ITEMS = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/program', label: '12-Week Program', icon: CalendarRange },
  { to: '/today', label: "Today's Workout", icon: Dumbbell },
  { to: '/exercises', label: 'Exercise Library', icon: Library },
  { to: '/mma', label: 'MMA Training', icon: Swords },
  { to: '/nutrition', label: 'Nutrition', icon: Apple },
  { to: '/progress', label: 'Body Progress', icon: LineChart },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/settings', label: 'Settings', icon: SettingsIcon },
]
