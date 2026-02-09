'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaUserSecret, FaBriefcase, FaEyeSlash } from 'react-icons/fa'
import Image from 'next/image'

export default function Why() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: <FaUserSecret className="text-4xl" />,
      title: 'No Products Yet',
      description: 'You don\'t need to create your own products. Learn to position yourself with existing global opportunities.'
    },
    {
      icon: <FaBriefcase className="text-4xl" />,
      title: 'Full-Time Job? No Problem',
      description: 'Perfect for side income. Build systems that work even while you\'re at your 9-5 or running other businesses.'
    },
    {
      icon: <FaEyeSlash className="text-4xl" />,
      title: 'Don\'t Show Your Face',
      description: 'Opportunity where you don\'t need to be visible. Earn quietly, repeatably, and globally.'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">This Works Even If</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-3xl p-8 text-center group hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="text-primary-400 mb-6 inline-block group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass-effect rounded-3xl p-12 border-2 border-primary-500/30"
        >
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="relative min-h-[400px] md:min-h-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/PA 1.jpeg"
                alt="Praise Akinlami"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
            </motion.div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Why Should You Listen To Me?
              </h3>
              <p className="text-xl text-gray-200 mb-4 leading-relaxed">
                My name is <span className="text-primary-400 font-semibold">Praise Akinlami</span>. I&apos;m a global income earner.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                In 2020, I lived in a flooded apartment. That experience changed how I saw my life. I decided I was done struggling and made a clear choice to do better.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Today, I&apos;ve made close to <span className="text-primary-400 font-semibold">₦1 billion online</span> and trained over <span className="text-primary-400 font-semibold">6,000 people</span>. Hundreds of them are now millionaires through the skills and systems I teach.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I&apos;ve built a community of over <span className="text-primary-400 font-semibold">300,000 people</span> across social media and I earn from anywhere in the world. Most importantly, I live life on my own terms.
              </p>
              <p className="text-lg text-white font-semibold leading-relaxed">
                My story is proof that where you start does not have to limit where you end up.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
