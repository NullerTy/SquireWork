import Link from 'next/link'
import React from 'react'

const Page: React.FC = () => {
  return (
    <div>
      <div className='flex min-h-screen flex-col justify-between bg-white p-8 pt-0 text-gray-900 md:pt-8'>
        <main className='mx-auto w-full max-w-[60ch] space-y-6'>
          <h1 className='transition-element pt-12 font-medium'>
            Dovydas Povilaitis
          </h1>
          <p className='leading-snug text-gray-800'>
            I am a specialist developer, i work with javascript/react/next.js
            and some other lanquages. I also enjoy editing videos and posting
            them on{' '}
            <a
              href='https://www.youtube.com/@holyauth'
              className='text-red-500 hover:text-red-800'
            >
              youtube
            </a>{' '}
            I have great english communication skills.
          </p>
          <h2 className='mb-3 mt-8 font-medium text-gray-800'>Writing</h2>
          <ul className='list-disc space-y-1 pl-5 text-gray-800'>
            <li className='pl-1'>
              <Link
                href='/dh'
                target='_blank'
                rel='noopener noreferrer'
                className='text-red-500 hover:text-red-800'
              >
                Development History
              </Link>
            </li>
            <li className='pl-1'>
              <a
                href='https://www.youtube.com/@holyauth'
                className='text-red-500 hover:text-red-800'
              >
                Previous projects
              </a>
            </li>
            <li className='pl-1'>
              <a
                href='https://www.youtube.com/@holyauth'
                className='text-red-500 hover:text-red-800'
              >
                Some niche things
              </a>
            </li>
            <li className='pl-1'>
              <a
                href='https://www.youtube.com/@holyauth'
                className='text-red-500 hover:text-red-800'
              >
                Editing projects
              </a>
            </li>
          </ul>
          <h2 className='mb-3 mt-8 font-medium text-gray-800'>Code</h2>
          <ul className='list-disc space-y-1 pl-5 text-gray-800'>
            <li className='pl-1'>
              <Link
                href='/dh'
                target='_blank'
                rel='noopener noreferrer'
                className='text-red-500 hover:text-red-800'
              >
                next-css-starter
              </Link>
            </li>
            <li className='pl-1'>
              <Link
                href='/dh'
                target='_blank'
                rel='noopener noreferrer'
                className='text-red-500 hover:text-red-800'
              >
                something something
              </Link>
            </li>
            <li className='pl-1'>
              <Link
                href='/dh'
                target='_blank'
                rel='noopener noreferrer'
                className='text-red-500 hover:text-red-800'
              >
                Will be added later
              </Link>
            </li>
          </ul>
        </main>
        <footer className='mt-12 text-center'>
          <div className='flex justify-center space-x-4 tracking-tight'>
            <a className='text-gray-400 transition-colors duration-200 hover:text-red-800'>
              Nefbook
            </a>
            <a
              href='https://www.youtube.com/@holyauth'
              className='text-gray-400 transition-colors duration-200 hover:text-red-800'
            >
              Youtube
            </a>
            <a className='text-gray-400 transition-colors duration-200 hover:text-red-800'>
              linkedin
            </a>
            <a className='text-gray-400 transition-colors duration-200 hover:text-red-800'>
              github
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
export default Page
