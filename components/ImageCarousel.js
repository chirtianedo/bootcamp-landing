'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function ImageCarousel() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const images = [
    {
      src: '/images/PA 1.jpeg',
      alt: 'Praise Akinlami - Global Income Expert',
      caption: 'Teaching Global Income Systems'
    },
    {
      src: '/images/PA 2.jpeg',
      alt: 'Praise Akinlami Success Story',
      caption: 'From Struggle to Success'
    },
    {
      src: '/images/PA 3.jpg',
      alt: 'Praise Akinlami Training',
      caption: 'Training 6,000+ Students'
    }
  ]

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary-500/80 hover:bg-primary-500 rounded-full flex items-center justify-center text-white shadow-xl backdrop-blur-sm transition-all duration-300"
        aria-label="Scroll left"
      >
        <FaChevronLeft />
      </button>
      
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary-500/80 hover:bg-primary-500 rounded-full flex items-center justify-center text-white shadow-xl backdrop-blur-sm transition-all duration-300"
        aria-label="Scroll right"
      >
        <FaChevronRight />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-80 md:w-96 snap-center group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary-500/30 transition-all duration-300">
              <div className="relative h-80 md:h-96 bg-dark-800">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 320px, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-900 to-transparent">
                <p className="text-white font-bold text-lg">{image.caption}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-primary-500/30 hover:bg-primary-500 transition-colors cursor-pointer"
          />
        ))}
      </div>
    </div>
  )
}
