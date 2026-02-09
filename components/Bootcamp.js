'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCalendarDay, FaRocket, FaRobot, FaChartLine } from 'react-icons/fa'

export default function Bootcamp() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const day1Content = [
    {
      title: 'The Global Income Map',
      items: [
        'How money really moves online (why creators & traders struggle)',
        'Which global companies pay, and why',
        'The exact position "global income earners" occupy'
      ]
    },
    {
      title: 'Why Nigerians Lose Online',
      items: [
        'The mindset traps',
        'The misinformation problem',
        'Why "learning skills" alone isn\'t enough',
        'How to position yourself correctly from Nigeria'
      ]
    }
  ]

  const day2Content = [
    {
      title: 'Automation & Leverage with AI',
      items: [
        'AI to replace manual work',
        'Simple systems to run income on autopilot',
        'Tools that work even if you have a job, school, or family'
      ]
    },
    {
      title: 'Make Money with AI',
      items: [
        'Finding offers',
        'Creating funnels',
        'Handling follow-ups',
        'Scaling income without hiring a big team'
      ]
    }
  ]

  const bonuses = [
    {
      icon: <FaRocket className="text-3xl" />,
      title: 'Global Income Opportunity List',
      description: 'Curated list of middleman opportunities paying ₦10m to ₦100m yearly without showing your face'
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: 'Businesses Under ₦200k',
      description: 'Real examples and case studies you can start with minimal capital'
    },
    {
      icon: <FaRobot className="text-3xl" />,
      title: 'System Setup Blueprint',
      description: 'One income engine + One traffic source + One automation flow (no overwhelm)'
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: 'Monetization & Scale Strategy',
      description: 'Turn small wins into consistent income that compounds monthly'
    }
  ]

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
            <span className="text-gradient">What Happens At The Bootcamp</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            2 Days of practical systems, not theory. Physical event with hands-on training.
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
                <h3 className="text-3xl font-bold text-white">Day 1 - February 14</h3>
                <p className="text-primary-400 font-medium">Direction & Clarity</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {day1Content.map((section, index) => (
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
                <h3 className="text-3xl font-bold text-white">Day 2 - February 15</h3>
                <p className="text-primary-400 font-medium">Action Taking & Scaling</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {day2Content.map((section, index) => (
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
          <h3 className="text-3xl font-bold text-center mb-8 text-gradient">Exclusive Bonuses Included</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-2xl p-6 text-center group hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="text-primary-400 mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                  {bonus.icon}
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
