'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const [access, setAccess] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('authToken')

    if (!token) {
      window.location.href = '/login' // Redirect to login if no token
    } else {
      // You could verify the token with the backend if needed here
      setAccess(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('authToken') // Clear the token
    router.push('/login') // Redirect to login page
  }

  if (!access) return <p>Loading...</p>

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-black'>
      <h1 className='mb-6 text-3xl font-bold'>Welcome, Admin!</h1>

      {/* Admin page content */}
      <div className='mb-6'>
        <p className='text-lg'>You have access to the admin panel.</p>
        {/* Add more admin-specific content here */}
      </div>

      {/* Logout button */}
      <button
        onClick={handleLogout}
        className='rounded-md bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600'
      >
        Log Out
      </button>
    </div>
  )
}
