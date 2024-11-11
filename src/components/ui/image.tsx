import Image from 'next/image'

const MyComponent = () => {
  return (
    <div>
      <Image
        src='/beautiful.jpg' // The path to the image in the public directory
        alt='Beautiful image'
        width={500} // Specify the width
        height={300} // Specify the height
      />
    </div>
  )
}

export default MyComponent
