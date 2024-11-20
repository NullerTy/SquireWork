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
      className={`transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <p className='text-base text-white sm:text-lg md:text-xl'>{content}</p>
    </div>
  )
}

export default ContentDisplay
