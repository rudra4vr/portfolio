'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiX, FiPlay, FiImage } from 'react-icons/fi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Project = {
  id: number
  title: string
  category: 'video' | 'logo' | 'animation'
  thumbnail: string
  videoUrl?: string
  description: string
  isPortrait?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'BARISTA Cafe Promo',
    category: 'video',
    thumbnail: '/portfolio/barista-thumbnail.jpeg',
    videoUrl: '/BARISTA Cafe Promo Video.mp4',
    description: 'A promotional video showcasing the art of coffee making and the unique atmosphere of BARISTA Cafe.',
    isPortrait: true
  },
  {
    id: 2,
    title: 'CAFE 27 Experience',
    category: 'video',
    thumbnail: '/portfolio/cafe27-thumbnail.jpeg',
    videoUrl: '/CAFE 27.mp4',
    description: 'An immersive video capturing the essence and experience of CAFE 27.',
    isPortrait: true
  },
  {
    id: 3,
    title: 'Logo Design Collection',
    category: 'logo',
    thumbnail: '/placeholder-logo.jpg',
    description: 'A collection of minimalist logo designs for various clients.',
  },
  {
    id: 4,
    title: '3D Product Animation',
    category: 'animation',
    thumbnail: '/placeholder-animation.jpg',
    description: 'An engaging 3D product animation highlighting key features.',
  },
]

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'video' | 'logo' | 'animation'>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'all' || project.category === selectedCategory
  )

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from('.project-item', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
        },
      })
    }
  }, [selectedCategory])

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8" />
          
          {/* Category Filter */}
          <div className="flex justify-center space-x-4 mb-8">
            {['all', 'video', 'logo', 'animation'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-item group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-video relative">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={project.id <= 2}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {project.videoUrl ? (
                    <FiPlay className="w-12 h-12 text-white" />
                  ) : (
                    <FiImage className="w-12 h-12 text-white" />
                  )}
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className={`relative ${selectedProject.isPortrait ? 'max-w-md' : 'max-w-4xl'} w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  onClick={() => setSelectedProject(null)}
                >
                  <FiX className="w-6 h-6" />
                </button>
                
                <div className={`relative ${selectedProject.isPortrait ? 'aspect-[9/16]' : 'aspect-video'}`}>
                  {selectedProject.videoUrl ? (
                    <video
                      src={selectedProject.videoUrl}
                      controls
                      className="w-full h-full object-contain"
                      poster={selectedProject.thumbnail}
                    />
                  ) : (
                    <Image
                      src={selectedProject.thumbnail}
                      alt={selectedProject.title}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedProject.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio 