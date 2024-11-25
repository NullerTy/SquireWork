'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    // Check if the user is authenticated by verifying the token
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/auth/login') // Redirect to login if no token
    } else {
      // Optionally, validate the token by making a request to your backend
      setIsAuthenticated(true) // Token exists, assume user is authenticated
    }
  }, [router])

  if (!isAuthenticated) {
    return <p>Loading...</p> // Show loading or redirecting state
  }

  return (
    <div>
      <h1>Welcome to the Admin Page</h1>
      {/* Admin content goes here */}
    </div>
  )
}

export default AdminPage
