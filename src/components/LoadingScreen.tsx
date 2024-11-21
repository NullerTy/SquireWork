// LoadingScreen.tsx
import React from 'react'

const LoadingScreen: React.FC = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80'>
      <div className='text-3xl font-bold text-white'>
        <div className='spinner-border h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-purple-500'></div>
        <p>Loading...</p>
      </div>
    </div>
  )
}

export default LoadingScreen
