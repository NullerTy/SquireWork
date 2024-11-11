import Link from 'next/link'

export const ProjectCard = ({
  title,
  description,
  image,
  link,
}: {
  title: string
  description: string
  image: string
  link: string
}) => {
  return (
    <div className='overflow-hidden rounded-lg bg-white shadow-lg'>
      <img src={image} alt={title} className='h-48 w-full object-cover' />
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
