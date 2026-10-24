
import { Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx'
import Footer from './components/footer/Footer.jsx'
import ProjectPage from './pages/ProjectPage.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen bg-white text-gray-900">
      <Sidebar />

      <main className="min-w-0 flex-1 p-6 md:p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/water-gun" element={<ProjectPage project="water-gun"/>} />
          <Route path="/project/road-guess" element={<ProjectPage project="road-guess"/>} />
          <Route path="/project/library-management-system" element={<ProjectPage project="library-management-system"/>} />
        </Routes>
        <Footer/>
      </main>
    </div>
  )
}
