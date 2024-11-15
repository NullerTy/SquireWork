import Carousel from '@/components/carousel'
import React from 'react'
const Page: React.FC = () => {
  const text =
    'As a versatile developer with a solid foundation in JavaScript, HTML, CSS, and experience across Next.js and Tailwind CSS, I’m dedicated to creating seamless, responsive front-end experiences. My background in C# and C++ programming adds a deeper layer to my understanding of software development, allowing me to adapt to diverse technical challenges. Alongside my coding skills, I bring leadership experience and a passion for creating and editing visual content. My work reflects a balanced mix of technical precision and creative vision, crafted to make a meaningful impact across platforms'

  const slides = [
    { id: 1, content: 'Giga Chad', image: '/beautiful.jpg' },
    { id: 2, content: 'Frames go brrrrr', image: '/creagif.gif' },
    { id: 3, content: 'Its fine', image: '/cute.jpg' }, // Example with an image
  ]

  return (
    <>
      {/* Main text */}
      <div className='mb-20 mt-20 flex-wrap text-black text-stroke-red'>
        <h1 className='text-wrap text-center text-5xl font-medium [text-shadow:_1px_2px_3px_rgba(0,0,0,0.2);]'>
          <span className='text-7xl'>Dovydo</span>{' '}
          <span className='text-7xl'>Portfolio</span>
        </h1>
      </div>
      {/* Line */}
      <div className='m-auto flex w-4/12 justify-center bg-black [height:_0.4px]'></div>
      <div className='m-auto mt-4 flex w-9/12 justify-center text-black text-stroke-red'>
        {/* Content about me */}
        <p>{text}</p>
      </div>

      <main className='flex h-screen w-full flex-col items-center justify-center border-4 border-black'>
        <h1 className='mb-6 text-4xl text-black text-stroke-red'>
          Our collaborators
        </h1>
        <Carousel slides={slides} height='500px' />
      </main>

      <div className='relative mt-8 h-screen w-full overflow-hidden border-4 border-black'>
        {/* YouTube Video Background */}
        <div className='absolute left-0 top-0 h-full w-full'>
          <iframe
            className='h-full w-full object-cover'
            src='https://www.youtube.com/embed/XjsVVq18SUU?autoplay=1&mute=1&loop=1&playlist=XjsVVq18SUU'
            title='Background Video'
            allow='autoplay; fullscreen'
            frameBorder='0'
          />
        </div>

        {/* Black Overlay */}
        <div className='absolute left-0 top-0 h-full w-full bg-black bg-opacity-50'></div>

        {/* Content Over the Video */}
        <div className='relative z-10 flex h-full items-center justify-center text-center text-black text-stroke-red'>
          <div>
            <h1 className='text-4xl font-bold sm:text-6xl'>
              Luck is what happens when preparation meets opportunity
            </h1>
            <p className='mt-4 text-lg sm:text-2xl'>
              Become a paranoid schizophrenic so you are always competing.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Page
