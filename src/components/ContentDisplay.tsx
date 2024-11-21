// ContentDisplay.tsx
type ContentDisplayProps = {
  content: string
  isFading: boolean
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({
  content,
  isFading,
}) => {
  return (
    <div
      className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Ensure the content has consistent block behavior */}
      <div className='p-6 text-base text-white sm:text-lg md:text-xl'>
        {content}
      </div>
    </div>
  )
}

export default ContentDisplay
