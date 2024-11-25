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
    <div className='relative min-h-screen bg-gradient-to-r from-purple-800 via-black to-purple-900 font-mono'>
      {isLoading && <LoadingScreen />}

      <div className='flex min-h-screen items-center justify-center px-5'>
        {/* Main Container */}
        <div className='relative flex w-full max-w-5xl flex-col border-4 border-purple-500 bg-black/60 p-4 shadow-xl md:min-h-[75vh] md:flex-row'>
          {/* Background Animation */}
          <div className='absolute inset-0 overflow-hidden rounded-md'>
            <ParticleCanvas />
          </div>

          {/* Main Content */}
          <div className='relative z-20 flex w-full flex-col items-center md:flex-row'>
            {/* Navigation Buttons */}
            <div className='flex h-auto w-full flex-shrink-0 items-center justify-center md:h-full md:w-[250px]'>
              <div className='flex h-full flex-col items-center justify-center gap-4'>
                <NavigationButtons
                  sections={Object.keys(contentMap)}
                  activeSection={activeSection}
                  onClick={handleButtonClick}
                />
              </div>
            </div>

            {/* Content Display */}
            <div className='flex h-72 w-full flex-grow flex-col items-center justify-center text-center'>
              <div className='mb-6 h-48 w-full text-center text-3xl font-medium text-transparent text-stroke-purple'>
                <h1 className='mb-4 text-4xl'>
                  <span>𝓓𝓸𝓿𝔂𝓭𝓸</span> 𝓟𝓸𝓻𝓽𝓯𝓸𝓵𝓲𝓸
                </h1>
              </div>

              <div className='flex h-full w-full items-center justify-center transition-opacity duration-500'>
                <div
                  className={`transition-opacity duration-500 ${
                    isFading ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <ContentDisplay
                    content={contentMap[activeSection!]}
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
