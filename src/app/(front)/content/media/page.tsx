import Image from 'next/image'

const Page: React.FC = () => {
  return (
    <main className='flex flex-col items-center justify-center p-8'>
      <h1 className='mb-6 text-center text-5xl font-bold text-black text-stroke-purple'>
        Media
      </h1>

      <section className='mb-16 w-full max-w-4xl'>
        <h2 className='mb-4 text-3xl font-semibold text-black text-stroke-purple'>
          Featured Video
        </h2>
        <div className='aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg shadow-lg'>
          <iframe
            src='https://www.youtube.com/embed/XjsVVq18SUU'
            frameBorder='0'
            allowFullScreen
            title='Featured Video'
            className='h-full w-full'
          ></iframe>
        </div>
      </section>

      <section className='mb-16 w-full max-w-6xl'>
        <h2 className='mb-4 text-3xl font-semibold text-black text-stroke-purple'>
          Gallery
        </h2>
        <div className='bg-gray grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className='border-light-blue-500 flex h-48 items-center justify-center overflow-hidden rounded-lg border-4 border-opacity-100 bg-gray-200 shadow-md'
            >
              <Image
                src='/beautiful.jpg'
                alt={`Image ${item}`}
                width={250}
                height={1}
                className='rounded:lg border-red border-4'
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
export default Page
