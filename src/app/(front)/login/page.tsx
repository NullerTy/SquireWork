'use client'

import { loginUser } from '@/actions/actions'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const [feedback, setFeedback] = useState<string | null>(null) // State to store feedback messages
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFeedback(null) // Reset feedback

    const formData = new FormData(e.currentTarget)

    try {
      const response = await loginUser(formData)

      if (response.success) {
        // Redirect to the admin page on success
        router.push('/admin')
      } else {
        // Set feedback message for errors
        setFeedback(response.message)
      }
    } catch (error) {
      setFeedback('An unexpected error occurred. Please try again.')
    }
  }

  return (
    <main className='flex flex-col items-center gap-y-5 pt-24 text-center'>
      <h1 className='text-3xl font-semibold'>Log In</h1>

      <form
        onSubmit={handleLogin}
        className='flex w-[300px] flex-col gap-y-4 text-black'
      >
        <input
          type='email'
          name='email'
          placeholder='Email'
          required
          className='rounded-md border px-3 py-2'
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          required
          className='rounded-md border px-3 py-2'
        />
        <button
          type='submit'
          className='rounded-md bg-green-500 px-4 py-2 font-medium text-white hover:bg-green-600'
        >
          Log In
        </button>
      </form>

      {/* Feedback Message */}
      {feedback && <p className='mt-2 text-red-500'>{feedback}</p>}

      <p className='text-sm text-gray-600'>
        Don’t have an account?{' '}
        <Link href='/signup' className='text-blue-500 hover:underline'>
          Sign Up
        </Link>
      </p>
    </main>
  )
}
