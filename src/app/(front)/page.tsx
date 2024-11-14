const Page: React.FC = () => {
  const text =
    'As a versatile developer with a solid foundation in JavaScript, HTML, CSS, and experience across Next.js and Tailwind CSS, I’m dedicated to creating seamless, responsive front-end experiences. My background in C# and C++ programming adds a deeper layer to my understanding of software development, allowing me to adapt to diverse technical challenges. Alongside my coding skills, I bring leadership experience and a passion for creating and editing visual content. My work reflects a balanced mix of technical precision and creative vision, crafted to make a meaningful impact across platforms'

  return (
    <>
      {/* Main text */}
      <div className='mb-20 mt-20 flex-wrap'>
        <h1 className='text-wrap text-center text-5xl font-medium [text-shadow:_1px_2px_3px_rgba(0,0,0,0.2);]'>
          <span className='text-7xl text-blue-600'>Dovydo</span>{' '}
          <span className='text-7xl text-emerald-500'>Portfolio</span>
        </h1>
      </div>
      {/* Line */}
      <div className='m-auto flex w-4/12 justify-center bg-black [height:_0.4px]'></div>
      <div className='m-auto mt-4 flex w-9/12 justify-center'>
        {/* Content about me */}
        <p>{text}</p>
      </div>
    </>
  )
}
export default Page
