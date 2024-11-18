'use client'
import Carousel from '@/components/carousel'
import React, { useEffect, useRef } from 'react'

const Page: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Canvas animation logic
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Resize canvas on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Animation variables
    const particles: {
      x: number
      y: number
      dx: number
      dy: number
      size: number
    }[] = []
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

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
        ctx.fill()

        // Move particles
        particle.x += particle.dx
        particle.y += particle.dy

        // Bounce particles off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const slides = [
    { id: 1, content: '', image: '/' },
    { id: 2, content: '', image: '/' },
    { id: 3, content: '', image: '/' },
  ]

  return (
    <>
      {/* Full-Page Wrapper */}
      <div className='relative min-h-screen w-full overflow-hidden'>
        {/* Canvas Background */}
        <canvas
          ref={canvasRef}
          className='absolute left-0 top-0 -z-10'
        ></canvas>

        {/* Black Overlay */}
        <div className='absolute left-0 top-0 h-full w-full bg-black bg-opacity-50'></div>

        {/* Content Section */}
        <div className='relative z-10'>
          {/* Main text */}
          <div className='mb-20 mt-20 flex-wrap text-black text-stroke-purple'>
            <h1 className='text-wrap text-center text-5xl font-medium [text-shadow:_1px_2px_3px_rgba(0,0,0,0.2);]'>
              <span className='text-7xl'>𝕯𝖔𝖛𝖞𝖉𝖔</span>{' '}
              <span className='text-7xl'>𝓟𝓸𝓻𝓽𝓯𝓸𝓵𝓲𝓸</span>
            </h1>
          </div>

          {/* Line */}
          <div className='m-auto flex w-4/12 justify-center bg-black [height:_0.4px]'></div>
          <div className='m-auto mt-4 flex w-9/12 justify-center text-purple-600'>
            {/* Content about me */}
            <p className='text-2xl'>
              As a versatile developer with a solid foundation in JavaScript,
              HTML, CSS, and experience across Next.js and Tailwind CSS, I’m
              dedicated to creating seamless, responsive front-end experiences.
              My background in C# and C++ programming adds a deeper layer to my
              understanding of software development, allowing me to adapt to
              diverse technical challenges. Alongside my coding skills, I bring
              leadership experience and a passion for creating and editing
              visual content. My work reflects a balanced mix of technical
              precision and creative vision, crafted to make a meaningful impact
              across platforms
            </p>
          </div>

          {/* Carousel Section */}
          <main className='flex h-screen w-full flex-col items-center justify-center'>
            <h1 className='mb-6 text-4xl text-black text-stroke-purple'>
              Our largest partners
            </h1>
            <Carousel slides={slides} height='500px' />
          </main>

          <div className='relative mt-8 h-screen w-full overflow-hidden border-4 border-black'>
            <div className='absolute left-0 top-0 h-full w-full'>
              <iframe
                className='h-full w-full object-cover'
                src='https://www.youtube.com/embed/nBJ-kxjrRgY?autoplay=1&mute=1&loop=1&playlist=nBJ-kxjrRgY'
                title='Background Video'
                allow='autoplay; fullscreen'
                frameBorder='0'
              />
            </div>

            {/* Black Overlay */}
            <div className='absolute left-0 top-0 h-full w-full bg-black bg-opacity-50'></div>

            {/* Content Over the GIF */}
            <div className='relative z-10 flex h-full items-center justify-center text-center'>
              <div>
                <h1 className='text-4xl font-bold text-black text-stroke-purple sm:text-6xl'>
                  Luck is what happens when preperation meets opportunity
                </h1>
                <p className='mt-6 text-lg text-purple-600 sm:text-2xl'>
                  𝓑𝓮𝓬𝓸𝓶𝓮 𝓪 𝓹𝓪𝓻𝓪𝓷𝓸𝓲𝓭 𝓼𝓬𝓱𝓲𝔃𝓸𝓹𝓱𝓻𝓮𝓷𝓲𝓬 𝓼𝓸 𝔂𝓸𝓾 𝓪𝓻𝓮 𝓪𝓵𝔀𝓪𝔂𝓼 𝓬𝓸𝓶𝓹𝓮𝓽𝓲𝓷𝓰
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
