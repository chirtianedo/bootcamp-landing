'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaUserSecret, FaBriefcase, FaEyeSlash } from 'react-icons/fa'

export default function Why() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [content, setContent] = useState({
    headline: "Why This Works",
    features: [{title: "Loading...", description: "Loading content...", icon: "FaUserSecret"}],
    profileHeadline: "Loading...",
    profileName: "Loading",
    profileImage: "/images/PA 1.jpeg",
    profileBio: "Loading content..."
  })

  useEffect(() => {
    fetch('/content/why.json')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => console.error('Failed to load why.json:', err))
  }, [])

  const icons = [<FaUserSecret key="icon-0" className="text-4xl" />, <FaBriefcase key="icon-1" className="text-4xl" />, <FaEyeSlash key="icon-2" className="text-4xl" />]

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
            <span className="text-white">{content.headline}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-3xl p-8 text-center group hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="text-primary-400 mb-6 inline-block group-hover:scale-110 transition-transform duration-300">
                {icons[index]}
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
                src={content.profileImage}
                alt={content.profileName}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
            </motion.div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                {content.profileHeadline}
              </h3>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: content.profileBio.replace(/\*\*(.*?)\*\*/g, '<span class="text-primary-400 font-semibold">$1</span>').replace(/\n/g, '<br/>') }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
