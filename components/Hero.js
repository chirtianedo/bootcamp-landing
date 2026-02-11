'use client'
import { motion } from 'framer-motion'
import { FaArrowDown, FaPlay } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)
  const [content, setContent] = useState({
    headline1: "Stop Chasing Opportunities.",
    headline2: "Start Being The Opportunity.",
    subheadline: "Loading...",
    videoThumbnail: "/images/video-thumbnail.jpg",
    videoCaption: "Loading...",
    stats: [{number: "0", label: "..."}],
    primaryButtonText: "Register Now",
    secondaryButtonText: "Watch Video"
  })

  useEffect(() => {
    fetch('/content/hero.json')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => console.error('Failed to load hero.json:', err))
  }, [])

  const scrollToForm = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-950">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <img
              src={content.logo}
              alt="Global Income Bootcamp"
              className="h-16 md:h-20 w-auto"
            />
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block text-white mb-2">{content.headline1}</span>
            <span className="block bg-gradient-to-r from-primary-400 via-emerald-400 to-primary-500 bg-clip-text text-transparent">
              {content.headline2}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto leading-relaxed font-medium">
            {content.subheadline}
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {content.subheadline2}
          </p>


          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8 max-w-4xl mx-auto"
          >
            {!showVideo ? (
              <div
                onClick={() => setShowVideo(true)}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary-500/30 transition-all duration-300"
              >
                <img
                  src={content.videoThumbnail}
                  alt="Watch Video"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg glow-effect">
                    <FaPlay className="text-white text-2xl ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-white font-bold text-lg md:text-xl bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg">
                    WATCH THE VIDEO. IT EXPLAINS EVERYTHING.
                  </p>
                </div>
              </div>
            ) : (
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src={`${content.videoUrl}?autoplay=1&title=0&byline=0&portrait=0`}
                  title="Global Income Bootcamp"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(16, 185, 129, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToForm}
              className="px-10 py-5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 rounded-xl text-white font-bold text-xl shadow-2xl hover:shadow-emerald-500/60 transition-all duration-300"
              style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}
            >
              {content.primaryButton}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 glass-effect border-2 border-emerald-400/50 rounded-xl text-white font-bold text-xl hover:bg-emerald-500/10 transition-all duration-300"
            >
              {content.secondaryButton}
            </motion.button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mt-16">
            {content.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-effect border-2 border-primary-500/20 rounded-2xl p-6 text-center hover:border-primary-400/50 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-5xl font-black bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <FaArrowDown className="text-primary-400 text-3xl animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
