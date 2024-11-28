'use client'

import { registerUser } from '@/actions/actions'
import { useState } from 'react'
import Link from 'next/link'

export default function SignUpPage() {
  const [feedback, setFeedback] = useState<string | null>(null) // State to store feedback messages

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFeedback(null) // Reset feedback

    const formData = new FormData(e.currentTarget)

    try {
      const response = await registerUser(formData)

      if (response.success) {
        // Optionally, redirect to login or show success message
        setFeedback('Sign-up successful! Please log in.')
      } else {
        setFeedback(response.message)
      }
    } catch (error) {
      setFeedback('An unexpected error occurred. Please try again.')
    }
  }

  return (
    <main className='flex flex-col items-center gap-y-5 pt-24 text-center'>
      <h1 className='text-3xl font-semibold'>Sign Up</h1>

      <form
        onSubmit={handleSignUp}
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
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          required
          className='rounded-md border px-3 py-2'
        />
        <button
          type='submit'
          className='rounded-md bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600'
        >
          Sign Up
        </button>
      </form>

      {/* Feedback Message */}
      {feedback && <p className='mt-2 text-red-500'>{feedback}</p>}

      <p className='text-sm text-gray-600'>
        Already have an account?{' '}
        <Link href='/login' className='text-blue-500 hover:underline'>
          Log In
        </Link>
      </p>
    </main>
  )
}
