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
    <div className='flex flex-col items-center space-y-3 md:items-start'>
      {sections.map((section) =>
        activeSection === section ? (
          <div
            key={section}
            className='h-4 w-4 rounded-full bg-purple-600 transition-transform duration-300'
          ></div>
        ) : (
          <button
            key={section}
            onClick={() => onClick(section)}
            className='w-full rounded-lg bg-transparent px-4 py-2 text-lg font-semibold text-purple-600 transition-transform duration-300 hover:bg-purple-600 hover:text-white'
          >
            {section}
          </button>
        )
      )}
    </div>
  )
}

export default NavigationButtons
