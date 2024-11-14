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
  const imagePath = image && image.trim() !== '' ? image : '/cute.jpg'; // Default image path

  return (
    <div className='overflow-hidden rounded-lg bg-white shadow-lg'>
      {imagePath && (
        <Image
          src={imagePath} // Use the image path here
          alt={`${title} at ${description}`} // Descriptive alt text
          width={150} // Set the width for the image
          height={150} // Set the height for the image
          className="rounded-lg mb-4"
        />
      )}
      <div className='p-6'>
        <h2 className='text-xl font-semibold text-gray-800'>{title}</h2>
        <p className='mt-2 text-gray-600'>{description}</p>
        <Link href={link} passHref>
          <div className='mt-4 cursor-pointer text-blue-500'>View Project</div>
        </Link>
      </div>
    </div>
  )
}
