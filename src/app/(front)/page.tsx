'use client'

import React, { useState, useEffect } from 'react'
import ParticleCanvas from '@/components/ParticleCanvas'
import NavigationButtons from '@/components/NavigationButtons'
import ContentDisplay from '@/components/ContentDisplay'
import LoadingScreen from '@/components/LoadingScreen' // Import the LoadingScreen component

const Page: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isFading, setIsFading] = useState(false)
  const [isLoading, setIsLoading] = useState(true) // Track loading state

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

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false) // Hide loading screen after 2 seconds
    }, 2000)
  }, [])

  return (
    <div className='relative min-h-screen w-full bg-gradient-to-r from-purple-800 via-black to-purple-900 font-mono'>
      {/* If still loading, show the LoadingScreen */}
      {isLoading && <LoadingScreen />}

      <div className='flex min-h-screen items-center justify-center px-5'>
        <div className='relative flex min-h-[75vh] w-full max-w-5xl flex-col items-center border-4 border-purple-500 bg-black/60 p-6 shadow-xl md:flex-row'>
          <div className='absolute inset-0 overflow-hidden rounded-md'>
            <ParticleCanvas />
          </div>

          <div className='relative z-20 flex flex-col items-center justify-center space-y-10 md:flex-row md:space-x-10 md:space-y-0'>
            <div className='mb-6 w-full md:mb-0 md:w-1/3'>
              <NavigationButtons
                sections={Object.keys(contentMap)}
                activeSection={activeSection}
                onClick={handleButtonClick}
              />
            </div>

            <div className='w-full text-center md:w-2/3'>
              <div className='mb-6 text-center text-3xl font-medium text-white'>
                <h1 className='mb-4 text-4xl'>
                  <span>Dovydo</span> Portfolio
                </h1>
              </div>

              <div className='transition-opacity duration-500'>
                <div
                  className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
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
