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
          className={`font-medium text-white transition-all duration-300 ${
            activeSection === section
              ? 'h-4 w-4 rounded-full bg-purple-500' // Active button (dot)
              : 'h-10 w-32 rounded-md border-2 border-purple-500 hover:bg-purple-700 hover:text-white' // Inactive button (full word)
          }`}
        >
          {activeSection === section ? null : section} {/* Show full word */}
        </button>
      ))}
    </div>
  )
}

export default NavigationButtons
