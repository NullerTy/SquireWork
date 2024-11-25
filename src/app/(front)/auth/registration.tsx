'use client'

import { useState } from 'react'
import axios from 'axios'

const Registration = ({
  setView,
}: {
  setView: (view: 'login' | 'register') => void
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      await axios.post('/api/register', { email, password })
      setSuccess('Account created! You can now log in.')
      setTimeout(() => setView('login'), 2000) // Redirect to login after success
    } catch (err) {
      setError('Error registering account. Try again.')
    }
  }

  return (
    <div>
      <h1 className='mb-4 text-center text-2xl'>Register</h1>
      {error && <p className='text-sm text-red-500'>{error}</p>}
      {success && <p className='text-sm text-green-500'>{success}</p>}
      <form onSubmit={handleRegister} className='space-y-4'>
        <input
          className='w-full rounded-md bg-gray-700 p-3 text-white focus:ring-2 focus:ring-purple-500'
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className='w-full rounded-md bg-gray-700 p-3 text-white focus:ring-2 focus:ring-purple-500'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className='w-full rounded-md bg-gray-700 p-3 text-white focus:ring-2 focus:ring-purple-500'
          type='password'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          className='w-full rounded-md bg-purple-600 p-3 text-white hover:bg-purple-700'
          type='submit'
        >
          Register
        </button>
      </form>
      <p className='mt-4 text-center text-white'>
        Already have an account?{' '}
        <button
          className='text-purple-400 underline'
          onClick={() => setView('login')}
        >
          Log in here
        </button>
      </p>
    </div>
  )
}

export default Registration
