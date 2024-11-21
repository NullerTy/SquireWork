'use client'

import React, { useState, useEffect } from 'react'
import ParticleCanvas from '@/components/ParticleCanvas'
import NavigationButtons from '@/components/NavigationButtons'
import ContentDisplay from '@/components/ContentDisplay'
import LoadingScreen from '@/components/LoadingScreen'

const Page: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isFading, setIsFading] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const contentMap: Record<string, string> = {
    Home: '',
    FAQ: 'Can I use your code? No.',
    Contact: 'Discord: macroclock Github: NullerTy',
    Info: 'I’m a versatile developer with a foundation in JavaScript, HTML, CSS, and Next.js.',
    Projects: 'I have worked on simple game account shops with friends.',
  }

  const handleButtonClick = (section: string) => {
    if (section === activeSection) return
    setIsFading(true)
    setTimeout(() => {
      setActiveSection(section)
      setIsFading(false)
    }, 500)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div className='relative min-h-screen w-full bg-gradient-to-r from-purple-800 via-black to-purple-900 font-mono'>
      {isLoading && <LoadingScreen />}

      <div className='flex min-h-screen items-center justify-center px-5'>
        {/* Main Container */}
        <div className='relative flex h-full min-h-[75vh] w-full max-w-5xl flex-col border-4 border-purple-500 bg-black/60 p-6 shadow-xl md:flex-row'>
          {/* Background Animation */}
          <div className='absolute inset-0 overflow-hidden rounded-md'>
            <ParticleCanvas />
          </div>

          {/* Main Content */}
          <div className='md:space-x h-full-10 relative z-20 flex h-full w-full space-y-10 md:flex-row md:space-y-0'>
            {/* Navigation Buttons */}
            <div
              className='w-full flex-shrink-0 md:w-[250px]' // Fixed width for buttons
            >
              <NavigationButtons
                sections={Object.keys(contentMap)}
                activeSection={activeSection}
                onClick={handleButtonClick}
              />
            </div>

            {/* Content Display */}
            <div className='w-full flex-grow text-center md:w-auto'>
              <div className='mb-6 text-center text-3xl font-medium text-white'>
                <h1 className='mb-4 text-4xl'>
                  <span>Dovydo</span> Portfolio
                </h1>
              </div>

              <div className='transition-opacity duration-500'>
                <div
                  className={`transition-opacity duration-500 ${
                    isFading ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <ContentDisplay
                    content={
                      contentMap[activeSection!] || 'Welcome to my portfolio!'
                    }
                    isFading={isFading}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
