import Image from 'next/image'

type JobCardProps = {
  title: string
  company: string
  duration: string
  location: string
  description: string
  responsibilities: string[]
  image?: string  // Optional image prop
}

const JobCard = ({
  title,
  company,
  duration,
  location,
  description,
  responsibilities,
  image,
}: JobCardProps) => {
  // Fallback image if none is provided
  const imagePath = image && image.trim() !== '' ? image : '/cute.jpg';  // Default fallback image

  return (
    <div className='mb-8 rounded-lg bg-white p-6 shadow-lg'>
      {/* Conditionally render the image if a valid path exists */}
      {imagePath && (
        <Image
          src={imagePath}  // Use the image path here
          alt={`${title} at ${company}`}  // Descriptive alt text
          width={150}  // Set the width for the image
          height={150} // Set the height for the image
          className="rounded-lg mb-4"
        />
      )}
      <h2 className='text-2xl font-bold text-gray-800'>{title}</h2>
      <p className='text-lg text-gray-600'>
        {company} • {location}
      </p>
      <p className='mb-2 text-sm text-gray-500'>{duration}</p>
      <p className='mb-4 text-gray-700'>{description}</p>
      <h3 className='mb-2 text-lg font-semibold text-gray-800'>
        Key Responsibilities:
      </h3>
      <ul className='list-inside list-disc space-y-1 text-gray-700'>
        {responsibilities.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default JobCard
