'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState(null)
  const [content, setContent] = useState(null)

  useEffect(() => {
    fetch('/content/faq.json')
      .then(res => res.json())
      .then(data => setContent(data))
  }, [])

  if (!content) return null

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = content.faqs || []

  return (
    <section id="faq" className="py-20 md:py-32 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{content.headline}</span>
          </h2>
          <p className="text-xl text-gray-300">
            {content.description}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-effect rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                <FaChevronDown
                  className={`text-primary-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center glass-effect rounded-3xl p-8 border-2 border-primary-500/30"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">{content.contactTitle}</h3>
          <p className="text-gray-300 mb-6">
            {content.contactDescription}
          </p>
          <a
            href="https://wa.me/2347010812785?text=Hi,%20I%20have%20questions%20about%20the%20Global%20Income%20Bootcamp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
          >
            {content.contactButton}
          </a>
          <p className="mt-4 text-gray-400 text-sm">
            <a 
              href="https://wa.me/2347010812785?text=Hi,%20I%20want%20to%20register%20for%20the%20Global%20Income%20Bootcamp" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors underline"
            >
              Click here to register via WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
