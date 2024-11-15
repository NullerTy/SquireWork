import Image from 'next/image'

type MyComponentProps = {
  image?: string
}

const MyComponent = ({ image }: MyComponentProps) => {
  return (
    <div className='relative h-64 w-full'>
      <Image
        src={image || '/cute.jpg'}
        alt='Beautiful image'
        layout='fill'
        objectFit='cover'
      />
    </div>
  )
}

export default MyComponent
