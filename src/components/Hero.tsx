'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const Hero = () => {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (backgroundRef.current) {
      // Create a timeline for color transitions
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { duration: 5, ease: 'power1.inOut' }
      })

      // Define gradient combinations that match the theme
      const gradients = [
        'linear-gradient(135deg, #8b5cf6, #ec4899)', // Purple to Pink
        'linear-gradient(135deg, #7c3aed, #db2777)', // Darker Purple to Darker Pink
        'linear-gradient(135deg, #6d28d9, #be185d)', // Deep Purple to Deep Pink
        'linear-gradient(135deg, #5b21b6, #9d174d)', // Rich Purple to Rich Pink
        'linear-gradient(135deg, #4c1d95, #831843)'  // Royal Purple to Royal Pink
      ]

      // Add each gradient transition to the timeline
      gradients.forEach((gradient) => {
        tl.to(backgroundRef.current, {
          background: gradient,
          duration: 5
        })
      })
    }
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 transition-all duration-1000 ease-in-out bg-gradient-to-br from-purple-500 via-pink-500 to-red-500"
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creative Designer
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Crafting Visual Stories Through Design & Animation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#portfolio"
              className="inline-block bg-white/90 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-white transition-colors text-lg"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="w-1 h-2 bg-white/70 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 