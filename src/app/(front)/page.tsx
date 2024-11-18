import Carousel from '@/components/carousel'
import React from 'react'

const Page: React.FC = () => {
  const text =
    'As a versatile developer with a solid foundation in JavaScript, HTML, CSS, and experience across Next.js and Tailwind CSS, I’m dedicated to creating seamless, responsive front-end experiences. My background in C# and C++ programming adds a deeper layer to my understanding of software development, allowing me to adapt to diverse technical challenges. Alongside my coding skills, I bring leadership experience and a passion for creating and editing visual content. My work reflects a balanced mix of technical precision and creative vision, crafted to make a meaningful impact across platforms'

  const slides = [
    { id: 1, content: '', image: '/placehodlersmile.png' },
    { id: 2, content: '', image: '/placehodlersmile.png' },
    { id: 3, content: '', image: '/placehodlersmile.png' }, // Example with an image
  ]

  return (
    <>
      {/* Full-Page Wrapper */}
      <div className='relative min-h-screen w-full overflow-hidden'>
        {/* GIF Background */}
        <img
          src='/scar.gif' // Replace with your GIF file path
          alt='Background GIF'
          className='absolute left-0 top-0 -z-10 h-full w-full object-cover'
        />

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
            <p>{text}</p>
          </div>

          {/* Carousel Section */}
          <main className='flex h-screen w-full flex-col items-center justify-center'>
            <h1 className='mb-6 text-4xl text-black text-stroke-purple'>
              𝓞𝓾𝓻 𝓫𝓲𝓰𝓰𝓮𝓼𝓽 𝓹𝓪𝓻𝓽𝓷𝓮𝓻𝓼
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
                  𝓛𝓾𝓬𝓴 𝓲𝓼 𝔀𝓱𝓪𝓽 𝓱𝓪𝓹𝓹𝓮𝓷𝓼 𝔀𝓱𝓮𝓷 𝓹𝓻𝓮𝓹𝓪𝓻𝓪𝓽𝓲𝓸𝓷 𝓶𝓮𝓮𝓽𝓼 𝓸𝓹𝓹𝓸𝓻𝓽𝓾𝓷𝓲𝓽𝔂
                </h1>
                <p className='mt-4 text-lg text-purple-600 sm:text-2xl'>
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
