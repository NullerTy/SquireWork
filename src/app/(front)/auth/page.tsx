'use client'

import { useState } from 'react'
import Login from './login'
import Registration from './registration'

const AuthPage = () => {
  const [view, setView] = useState<'login' | 'register'>('login')

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-900'>
      <div className='w-full max-w-md rounded-md bg-gray-800 p-6 shadow-md'>
        {view === 'login' ? (
          <Login setView={setView} />
        ) : (
          <Registration setView={setView} />
        )}
      </div>
    </div>
  )
}

export default AuthPage
