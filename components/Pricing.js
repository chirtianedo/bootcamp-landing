'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaCheck, FaClock, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [content, setContent] = useState({
    headline: "Investment & Registration",
    features: ["Loading..."],
    registrationTitle: "Secure Your Spot",
    guaranteeTitle: "Loading...",
    guaranteeDescription: "Loading...",
    seatsAvailable: "100"
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    fetch('/content/pricing.json')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => console.error('Failed to load pricing.json:', err))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const features = content.features || []

  return (
    <section id="register" className="py-20 md:py-32 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Secure Your Seat</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Limited to 100 seats only. When seats finish, registration closes.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-300">
              <FaClock className="text-primary-400" />
              <span>Feb 14-15, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FaMapMarkerAlt className="text-primary-400" />
              <span>Abuja, Nigeria</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FaShieldAlt className="text-primary-400" />
              <span>100% Money-Back Guarantee</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect rounded-3xl p-8 md:p-12 border-2 border-primary-500/30 sticky top-8"
          >
            <div className="text-center mb-8">
              <div className="text-gray-400 line-through text-xl mb-2">₦100,000</div>
              <div className="text-6xl font-bold text-gradient mb-2">₦25,000</div>
              <div className="text-gray-300">One-time payment</div>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheck className="text-primary-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary-500/10 border border-primary-500/30 rounded-2xl p-6 mb-6">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <FaShieldAlt className="text-primary-400" />
                {content.guaranteeTitle}
              </h4>
              <p className="text-sm text-gray-300">
                {content.guaranteeDescription}
              </p>
            </div>

            <div className="text-center">
              <div className="text-primary-400 font-semibold mb-2">⚡ Only {content.seatsAvailable} Seats Available</div>
              <div className="text-gray-400 text-sm">Physical venue capacity is limited</div>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-effect rounded-3xl p-8 md:p-12"
          >
            {!submitted ? (
              <>
                <h3 className="text-3xl font-bold mb-6 text-white">Register Now</h3>
                <p className="text-gray-300 mb-8">
                  Fill out the form below to secure your seat. You&apos;ll receive payment instructions 
                  and be added to the WhatsApp group.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label className="block text-gray-300 mb-2 font-medium group-focus-within:text-primary-400 transition-colors">Full Name *</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-dark-900/80 backdrop-blur-sm border-2 border-gray-700/50 rounded-2xl text-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 focus:outline-none transition-all duration-300 hover:border-gray-600 placeholder-gray-500"
                        placeholder="Enter your full name"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 to-emerald-500/0 group-focus-within:from-primary-500/5 group-focus-within:to-emerald-500/5 pointer-events-none transition-all duration-300"></div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-gray-300 mb-2 font-medium group-focus-within:text-primary-400 transition-colors">Email Address *</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-dark-900/80 backdrop-blur-sm border-2 border-gray-700/50 rounded-2xl text-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 focus:outline-none transition-all duration-300 hover:border-gray-600 placeholder-gray-500"
                        placeholder="your@email.com"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 to-emerald-500/0 group-focus-within:from-primary-500/5 group-focus-within:to-emerald-500/5 pointer-events-none transition-all duration-300"></div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-gray-300 mb-2 font-medium group-focus-within:text-primary-400 transition-colors">Phone Number *</label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-dark-900/80 backdrop-blur-sm border-2 border-gray-700/50 rounded-2xl text-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 focus:outline-none transition-all duration-300 hover:border-gray-600 placeholder-gray-500"
                        placeholder="+234 xxx xxx xxxx"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 to-emerald-500/0 group-focus-within:from-primary-500/5 group-focus-within:to-emerald-500/5 pointer-events-none transition-all duration-300"></div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-gray-300 mb-2 font-medium group-focus-within:text-primary-400 transition-colors">WhatsApp Number *</label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-dark-900/80 backdrop-blur-sm border-2 border-gray-700/50 rounded-2xl text-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 focus:outline-none transition-all duration-300 hover:border-gray-600 placeholder-gray-500"
                        placeholder="+234 xxx xxx xxxx"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 to-emerald-500/0 group-focus-within:from-primary-500/5 group-focus-within:to-emerald-500/5 pointer-events-none transition-all duration-300"></div>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 rounded-2xl text-white font-bold text-xl shadow-2xl hover:shadow-emerald-500/60 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                    style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}
                  >
                    <span className="relative z-10">{isSubmitting ? '⏳ Processing...' : '🎟️ Reserve My Seat for ₦25,000'}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>

                  <p className="text-sm text-gray-400 text-center">
                    By registering, you agree to receive updates about the bootcamp via email and WhatsApp.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheck className="text-4xl text-primary-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Registration Successful!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for registering. You&apos;ll receive payment instructions and 
                  WhatsApp group details via email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary-400 hover:text-primary-300 font-medium"
                >
                  Register another person
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
