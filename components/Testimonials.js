'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [content, setContent] = useState({
    headline1: "Real Results",
    headline2: "From Real People",
    testimonials: [{name: "Loading...", role: "Loading", content: "Loading content...", image: "/images/default-avatar.jpg"}]
  })

  useEffect(() => {
    fetch('/content/testimonials.json')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => console.error('Failed to load testimonials.json:', err))
  }, [])

  const renderText = (text) => {
    if (!text) return ''
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>
      }
      return part
    })
  }

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-dark-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-400/30 rounded-full text-primary-400 text-sm font-bold mb-4">
            {content.badge}
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent">
              {content.headline1}
            </span>
            <br />
            <span className="text-white">{content.headline2}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {renderText(content.description)}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect border-2 border-primary-500/20 rounded-3xl overflow-hidden hover:border-primary-400/50 transition-all duration-300 group"
            >
              {/* Image */}
              {testimonial.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-4xl font-black text-primary-400 mb-1">{testimonial.amount}</div>
                    <div className="text-xs text-gray-300">{testimonial.result}</div>
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-4">
                  <FaQuoteLeft className="text-primary-500/30 text-2xl absolute -top-2 -left-2" />
                  <p className="text-gray-300 italic leading-relaxed pl-6">
                    {renderText(testimonial.quote)}
                  </p>
                </div>

                {/* Name */}
                <div className="font-bold text-white text-lg"> {testimonial.name}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center glass-effect border-2 border-primary-500/30 rounded-3xl p-12"
        >
          <h3 className="text-3xl md:text-4xl font-black mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent">
              {content.ctaHeadline}
            </span>
          </h3>
          <p className="text-xl text-gray-200 mb-6">
            {renderText(content.ctaDescription)}
          </p>
          <p className="text-2xl font-bold text-primary-400">
            {content.ctaFootnote}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
