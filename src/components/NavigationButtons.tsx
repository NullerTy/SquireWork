import React from 'react'

interface NavigationButtonsProps {
  sections: string[]
  activeSection: string | null
  onClick: (section: string) => void
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  sections,
  activeSection,
  onClick,
}) => {
  return (
    <div className='flex flex-col space-y-4'>
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => onClick(section)}
          className={`w-full transform rounded-lg bg-purple-700 px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-purple-600 focus:outline-none ${activeSection === section ? 'bg-purple-900' : ''}`}
          style={{ minWidth: '100px' }} // Ensures the button's width is consistent
        >
          {section}
        </button>
      ))}
    </div>
  )
}

export default NavigationButtons
