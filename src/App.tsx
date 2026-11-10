import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Lessons from './components/Lessons'
import LessonPage from './components/LessonPage'
import Flashcards from './components/Flashcards'
import { seedDatabase } from './db/seed'

function App() {
  useEffect(() => {
    seedDatabase('guest').catch(console.error)
  }, [])

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/lessons/:id" element={<LessonPage />} />
        <Route path="/flashcards" element={<Flashcards />} />
      </Routes>
    </div>
  )
}

export default App
