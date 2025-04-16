import { useState, useEffect, useCallback } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import React from 'react'
import logo from '../assets/Aish_logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 10;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={shouldReduceMotion ? {} : { y: -100 }}
      animate={shouldReduceMotion ? {} : { y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : ''
      }`}
    >
      <nav className="w-full mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#"
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={shouldReduceMotion ? {} : { opacity: 1 }}
            className="flex items-center h-full"
            transition={{ duration: 0.3 }}
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="h-20 w-auto object-contain transition-all duration-300 invert" 
            />
          </motion.a>

          <div className="hidden md:flex items-center justify-end space-x-16 flex-1 pl-16">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: -20 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-medium tracking-wide text-gray-200 hover:text-blue-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-70 flex justify-end md:hidden">
          <div className="w-3/4 max-w-xs bg-gray-900 h-full p-8 flex flex-col space-y-8 animate-slide-in-right">
            <button className="self-end mb-8 p-2 rounded hover:bg-gray-800" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-semibold text-gray-200 hover:text-blue-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  )
}

export default Navbar 
const LazyLogoImage = React.lazy(() => import('../assets/Aish_logo.png'));