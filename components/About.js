'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [content, setContent] = useState({
    headline: "Who Are Global Earners?",
    description: "They are people who understand how global companies acquire customers.",
    problems: ["Loading content..."],
    solutions: ["Loading content..."],
    bottomText: "Loading..."
  })

  useEffect(() => {
    fetch('/content/about.json')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => console.error('Failed to load about.json:', err))
  }, [])

  return (
    <section id="about" className="py-20 md:py-32 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{content.headline}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {content.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold mb-6 text-white">The Problem</h3>
            <ul className="space-y-4">
              {content.problems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-red-400 text-xl mt-1">✗</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-effect rounded-3xl p-8 md:p-12 border-2 border-primary-500/30"
          >
            <h3 className="text-3xl font-bold mb-6 text-gradient">The Solution</h3>
            <ul className="space-y-4">
              {content.solutions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary-400 text-xl mt-1">✓</span>
                  <span className="text-gray-100 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-2xl text-gray-200 font-medium max-w-4xl mx-auto leading-relaxed whitespace-pre-line">
            {content.bottomText}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
