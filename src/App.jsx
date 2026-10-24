
import { Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Sidebar from './components/Sidebar.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen bg-white text-gray-900">
      <Sidebar />

      <main className="min-w-0 flex-1 p-6 md:p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}
