import Image from 'next/image'

type MyComponentProps = {
  image?: string
}

const MyComponent = ({ image }: MyComponentProps) => {
  return (
    <div>
      <Image
        src={image || '/cute.jpg'}
        alt='Beautiful image'
        width={500}
        height={300}
      />
    </div>
  )
}

export default MyComponent
