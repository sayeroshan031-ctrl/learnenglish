import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import { seedDatabase } from './db/seed'

function App() {
  useEffect(() => {
    seedDatabase('guest').catch(console.error)
  }, [])

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
