'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Define slide properties
interface Slide {
  id: number
  content: string // JSX content or text for the slide
  bgColor?: string // Optional background color
  image?: string // Optional image for the slide
}

interface CarouselProps {
  slides: Slide[] // Array of slides
  height?: string // Optional height for the carousel (default is "400px")
}

const Carousel: React.FC<CarouselProps> = ({ slides, height = '400px' }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Detect if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize() // Check on initial load
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div
      className='relative w-full overflow-hidden'
      style={{ height }} // Allow dynamic height adjustment
    >
      {/* Slides */}
      <div className='relative h-full w-full text-black text-stroke-red'>
        <AnimatePresence mode='wait'>
          {slides.map((slide, index) =>
            index === currentIndex ? (
              <motion.div
                key={slide.id}
                className={`absolute left-0 top-0 flex h-full w-full items-center justify-center text-2xl text-white`}
                style={{
                  backgroundColor: slide.bgColor || 'transparent',
                  backgroundImage: slide.image
                    ? `url(${slide.image})`
                    : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {slide.content}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Arrows for navigation (visible on desktop only) */}
      {!isMobile && (
        <>
          <button
            className='absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white'
            onClick={handlePrev}
          >
            &#8249;
          </button>
          <button
            className='absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white'
            onClick={handleNext}
          >
            &#8250;
          </button>
        </>
      )}

      {/* Dots for navigation */}
      <div className='absolute bottom-4 z-10 flex w-full justify-center space-x-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-red-400'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
