import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      
      <main className="w-full px-0 py-0 space-y-0 relative">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
