import { Routes, Route, NavLink } from 'react-router'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="flex gap-6 border-b p-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <main className="mx-auto max-w-5xl p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}
