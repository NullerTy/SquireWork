'use client'

import React, { useState } from 'react'
import ParticleCanvas from '@/components/ParticleCanvas'
import NavigationButtons from '@/components/NavigationButtons'
import ContentDisplay from '@/components/ContentDisplay'

const Page: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isFading, setIsFading] = useState(false)

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

  return (
    <div className='mw-20 relative min-h-screen w-full border-2 border-sky-500 font-mono'>
      {/* Particle Background */}
      <ParticleCanvas />

      {/* Black Overlay */}
      <div className='absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-50 p-5'>
        {/* Main Content */}
        <div className='relative z-20 flex w-full max-w-4xl flex-col items-center space-y-6 p-5 md:flex-row md:space-x-8 md:space-y-0'>
          {/* Navigation Buttons */}
          <div className='flex w-full justify-center md:w-1/3 md:justify-start'>
            <NavigationButtons
              sections={Object.keys(contentMap)}
              activeSection={activeSection}
              onClick={handleButtonClick}
            />
          </div>

          {/* Content Display */}
          <div className='w-full text-center md:w-2/3'>
            <div className='mb-6 text-9xl font-medium text-black text-stroke-purple'>
              <h1 className='mb-8 grid h-32 grid-cols-2 gap-4 text-5xl'>
                <span>𝕯𝖔𝖛𝖞𝖉𝖔</span> <span>𝓟𝓸𝓻𝓽𝓯𝓸𝓵𝓲𝓸</span>
              </h1>
            </div>
            <ContentDisplay
              content={contentMap[activeSection!] || ''}
              isFading={isFading}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
