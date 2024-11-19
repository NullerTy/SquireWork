'use client'

import React, { useEffect, useRef, useState } from 'react'

type Particle = {
  x: number
  y: number
  dx: number
  dy: number
  size: number
}

const Page: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isFading, setIsFading] = useState(false)

  // State for managing the GIFs that are visible
  const [gifUrl, setGifUrl] = useState<string | null>(null)

  // Canvas animation logic
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    const particles: Particle[] = []
    const particleCount = 100
    const colors = ['#6A0DAD', '#800080', '#9932CC', '#BA55D3']

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw the purple radial gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      )
      gradient.addColorStop(0, '#6A0DAD')
      gradient.addColorStop(1, '#000')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
        ctx.fill()

        particle.x += particle.dx
        particle.y += particle.dy

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // GIFs to display
  const gifs = ['/bit.gif', '/bit.gif', '/bit.gif']

  useEffect(() => {
    const gifInterval = setInterval(() => {
      // Randomly select a GIF
      const randomGif = gifs[Math.floor(Math.random() * gifs.length)]
      setGifUrl(randomGif)

      // Set the GIF to disappear after a random interval (e.g., 3-5 seconds)
      setTimeout(
        () => {
          setGifUrl(null)
        },
        Math.random() * 2000 + 3000
      ) // 3-5 seconds
    }, 5000) // New GIF every 5 seconds

    return () => clearInterval(gifInterval)
  }, [])

  const contentMap: Record<string, string> = {
    Home: '',
    FAQ: 'Can i use your code? No.',
    Contact: 'Discord: macroclock Github: NullerTy',
    Info: 'As a versatile developer with a solid foundation in JavaScript, HTML, CSS, and experience across Next.js and Tailwind CSS, I’m dedicated to creating seamless, responsive front-end experiences. My background in C# and C++ programming adds a deeper layer to my understanding of software development, allowing me to adapt to diverse technical challenges. Alongside my coding skills, I bring leadership experience and a passion for creating and editing visual content. My work reflects a balanced mix of technical precision and creative vision, crafted to make a meaningful impact across platforms',
    Projects:
      'This is currently my pride of jewel but i have worked on simple game account shops with friends.',
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
    <>
      <div className='relative min-h-screen w-full font-mono'>
        {/* Canvas Background */}
        <canvas
          ref={canvasRef}
          className='absolute left-0 top-0 -z-10'
        ></canvas>

        {/* Black Overlay */}
        <div className='absolute left-0 top-0 z-10 h-full w-full bg-black bg-opacity-50'></div>

        {/* GIF Background */}
        {gifUrl && (
          <div
            className='absolute left-0 top-0 z-0 h-full w-full'
            style={{
              backgroundImage: `url(${gifUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.7,
              transition: 'opacity 1s ease-in-out',
            }}
          ></div>
        )}

        {/* Content Section */}
        <div className='relative z-20 flex min-h-screen'>
          <div className='flex w-1/3 flex-col items-center justify-center space-y-4'>
            {Object.keys(contentMap).map((section) =>
              section === activeSection ? (
                <div
                  key={section}
                  className='h-4 w-4 rounded-full bg-purple-600 transition-transform duration-300'
                ></div>
              ) : (
                <button
                  key={section}
                  onClick={() => handleButtonClick(section)}
                  className='w-40 rounded-lg bg-transparent px-4 py-2 text-lg font-semibold text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white active:scale-95'
                >
                  {section}
                </button>
              )
            )}
          </div>

          <div className='w-2/3 p-10'>
            <div className='mb-10 mt-20 text-black text-stroke-purple'>
              <h1 className='text-wrap text-center text-5xl font-medium [text-shadow:_1px_2px_3px_rgba(0,0,0,0.2);]'>
                <span className='text-7xl'>𝕯𝖔𝖛𝖞𝖉𝖔</span>{' '}
                <span className='text-7xl'>𝓟𝓸𝓻𝓽𝓯𝓸𝓵𝓲𝓸</span>
              </h1>
            </div>

            <div
              className={`mt-10 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
            >
              <p className='text-lg text-white'>{contentMap[activeSection!]}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
