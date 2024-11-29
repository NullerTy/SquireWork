'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function AdminPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if `isAdmin` query parameter exists and is true
    const isAdmin = searchParams.get('isAdmin') === 'true'

    if (!isAdmin) {
      // Redirect back to login page if not authorized
      router.push('/login')
    }
  }, [router, searchParams])

  return (
    <main className='flex flex-col items-center justify-center pt-24 text-center'>
      <h1 className='text-3xl font-semibold'>Welcome to the Admin Dashboard</h1>
      <p className='mt-4 text-gray-600'>You have admin privileges.</p>
    </main>
  )
}
