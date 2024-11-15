import Link from 'next/link'
import Image from 'next/image'

export const ProjectCard = ({
  title,
  description,
  link,
  image,
}: {
  title: string
  description: string
  link: string
  image?: string
}) => {
  const imagePath = image && image.trim() !== '' ? image : '/cute.jpg' // Default image path

  return (
    <div className='bg-gray overflow-hidden rounded-lg shadow-lg'>
      {imagePath && (
        <Image
          src={imagePath} // Use the image path here
          alt={`${title} at ${description}`} // Descriptive alt text
          width={150} // Set the width for the image
          height={150} // Set the height for the image
          className='mb-4 rounded-lg'
        />
      )}
      <div className='p-6'>
        <h2 className='text-xl font-semibold text-black text-stroke-red'>
          {title}
        </h2>
        <p className='mt-2 text-black text-stroke-red'>{description}</p>
        <Link href={link} passHref>
          <div className='mt-4 cursor-pointer text-black text-stroke-red'>
            View Project
          </div>
        </Link>
      </div>
    </div>
  )
}
