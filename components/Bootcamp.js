'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaCalendarDay, FaRocket, FaRobot, FaChartLine } from 'react-icons/fa'

export default function Bootcamp() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [content, setContent] = useState({
    headline: "The 2-Day Bootcamp",
    description: "Loading content...",
    day1: {
      title: "Day 1",
      subtitle: "Loading...",
      sections: [{title: "Loading", items: ["Loading..."]}]
    },
    day2: {
      title: "Day 2",
      subtitle: "Loading...",
      sections: [{title: "Loading", items: ["Loading..."]}]
    },
    bonuses: [{title: "Bonus", description: "Loading..."}]
  })

  useEffect(() => {
    fetch('/content/bootcamp.json')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => console.error('Failed to load bootcamp.json:', err))
  }, [])

  const iconMap = {
    FaRocket: <FaRocket className="text-3xl" />,
    FaChartLine: <FaChartLine className="text-3xl" />,
    FaRobot: <FaRobot className="text-3xl" />
  }

  return (
    <section id="bootcamp" className="py-20 md:py-32 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
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

        {/* Day 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12 border-2 border-primary-500/30">
            <div className="flex items-center gap-4 mb-8">
              <FaCalendarDay className="text-4xl text-primary-400" />
              <div>
                <h3 className="text-3xl font-bold text-white">{content.day1.title}</h3>
                <p className="text-primary-400 font-medium">{content.day1.subtitle}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {content.day1.sections.map((section, index) => (
                <div key={index} className="bg-dark-900/50 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-primary-400 mb-4">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary-400 mt-1">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Day 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12 border-2 border-primary-500/30">
            <div className="flex items-center gap-4 mb-8">
              <FaCalendarDay className="text-4xl text-primary-400" />
              <div>
                <h3 className="text-3xl font-bold text-white">{content.day2.title}</h3>
                <p className="text-primary-400 font-medium">{content.day2.subtitle}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {content.day2.sections.map((section, index) => (
                <div key={index} className="bg-dark-900/50 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-primary-400 mb-4">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary-400 mt-1">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bonuses */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gradient">{content.bonusesHeadline}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-2xl p-6 text-center group hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="text-primary-400 mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                  {iconMap[bonus.icon] || iconMap.FaRocket}
                </div>
                <h4 className="text-lg font-bold mb-3 text-white">{bonus.title}</h4>
                <p className="text-sm text-gray-400">{bonus.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
