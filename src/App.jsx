import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import TopBar from './components/layout/TopBar'
import Dashboard from './pages/Dashboard'
import Program from './pages/Program'
import ProgramWeek from './pages/ProgramWeek'
import TodayWorkout from './pages/TodayWorkout'
import ExerciseLibrary from './pages/ExerciseLibrary'
import ExerciseDetail from './pages/ExerciseDetail'
import MMA from './pages/MMA'
import Nutrition from './pages/Nutrition'
import BodyProgress from './pages/BodyProgress'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import WeeklyReview from './pages/WeeklyReview'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="flex min-h-screen bg-base-black">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/program" element={<Program />} />
          <Route path="/program/week/:weekNumber" element={<ProgramWeek />} />
          <Route path="/today" element={<TodayWorkout />} />
          <Route path="/workout/:weekNumber/:dayKey" element={<TodayWorkout />} />
          <Route path="/exercises" element={<ExerciseLibrary />} />
          <Route path="/exercises/:exerciseId" element={<ExerciseDetail />} />
          <Route path="/mma" element={<MMA />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/progress" element={<BodyProgress />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/review" element={<WeeklyReview />} />
          <Route path="/review/:weekNumber" element={<WeeklyReview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
