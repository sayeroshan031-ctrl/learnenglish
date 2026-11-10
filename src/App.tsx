import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Lessons from './components/Lessons'
import LessonPage from './components/LessonPage'
import Flashcards from './components/Flashcards'
import Onboarding from './components/Onboarding'
import { seedDatabase } from './db/seed'
import { useAppStore } from './store/useAppStore'

function App() {
  const isOnboarded = useAppStore((s) => s.isOnboarded)
  const location = useLocation()

  useEffect(() => {
    seedDatabase('guest').catch(console.error)
  }, [])

  if (!isOnboarded && location.pathname !== '/welcome') {
    return <Navigate to="/welcome" replace />
  }

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/welcome" element={<Onboarding />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/lessons/:id" element={<LessonPage />} />
        <Route path="/flashcards" element={<Flashcards />} />
      </Routes>
    </div>
  )
}

export default App
