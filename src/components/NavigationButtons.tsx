// NavigationButtons.tsx
import React from 'react'

type NavigationButtonsProps = {
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
    <div className='flex flex-col items-center space-y-4'>
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => onClick(section)}
          className={`transition-all duration-300 ${
            activeSection === section
              ? 'h-4 w-4 rounded-full bg-purple-500' // When active, show a dot
              : 'h-10 w-10 rounded-md border-2 border-purple-500' // When inactive, show a square
          }`}
        >
          {activeSection === section ? null : section[0]}{' '}
          {/* Show first letter when not active */}
        </button>
      ))}
    </div>
  )
}

export default NavigationButtons
