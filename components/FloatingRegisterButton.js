'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaTicketAlt } from 'react-icons/fa'

export default function FloatingRegisterButton() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const registerSection = document.getElementById('register')
      if (registerSection) {
        const rect = registerSection.getBoundingClientRect()
        // Hide button when register section is visible
        setIsVisible(rect.top > window.innerHeight)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToRegister = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      onClick={scrollToRegister}
      className="fixed top-6 right-6 z-50 px-6 py-3 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 rounded-full text-white font-bold shadow-2xl hover:shadow-emerald-500/60 transition-all duration-300 flex items-center gap-2 group"
      style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaTicketAlt className="text-xl group-hover:rotate-12 transition-transform" />
      <span className="hidden sm:inline">Register Now</span>
      
      {/* Blinking effect */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-500"></span>
      </span>
    </motion.button>
  )
}
