import React from 'react'

type JobCardProps = {
  title: string
  company: string
  duration: string
  location: string
  description: string
  responsibilities: string[]
}

const JobCard = ({
  title,
  company,
  duration,
  location,
  description,
  responsibilities,
}: JobCardProps) => {
  return (
    <div className='mb-8 rounded-lg bg-white p-6 shadow-lg'>
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
