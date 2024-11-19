'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Slide {
  id: number
  content: string
  image?: string // Path to your transparent PNG/GIF
}

interface CarouselProps {
  slides: Slide[]
  height?: string
  width?: string
}

const Carousel: React.FC<CarouselProps> = ({ slides, height = '400px' }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Detect if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
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
      style={{ height }} // Carousel height
    >
      {/* Slides */}
      <div className='relative h-full w-full'>
        <AnimatePresence mode='wait'>
          {slides.map((slide, index) =>
            index === currentIndex ? (
              <motion.div
                key={slide.id}
                className='absolute left-0 top-0 flex h-full w-full items-center justify-center'
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundColor: 'transparent', // Ensure background is transparent
                }}
              >
                {/* Image */}
                {slide.image && (
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    style={{
                      maxWidth: '1200px', // Responsive sizing
                      maxHeight: '1000px', // Ensure it fits within the carousel
                    }}
                  />
                )}
                {/* Content */}
                {slide.content && (
                  <div className='absolute bottom-4 text-center text-white'>
                    {slide.content}
                  </div>
                )}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows (Desktop) */}
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

      {/* Navigation Dots */}
      <div className='absolute bottom-4 z-10 flex w-full justify-center space-x-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-purple-400'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
