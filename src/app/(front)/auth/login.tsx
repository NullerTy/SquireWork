'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const Login = ({
  setView,
}: {
  setView: (view: 'login' | 'register') => void
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/login', { email, password })
      if (response.data.token) {
        localStorage.setItem('token', response.data.token) // Save JWT token
        router.push('/admin') // Redirect to the protected page
      }
    } catch (err) {
      setError('Invalid email or password')
    }
  }

  return (
    <div>
      <h1 className='mb-4 text-center text-2xl'>Login</h1>
      {error && <p className='text-sm text-red-500'>{error}</p>}
      <form onSubmit={handleLogin} className='space-y-4'>
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
        <button
          className='w-full rounded-md bg-purple-600 p-3 text-white hover:bg-purple-700'
          type='submit'
        >
          Login
        </button>
      </form>
      <p className='mt-4 text-center text-white'>
        Dont have an account?{' '}
        <button
          className='text-purple-400 underline'
          onClick={() => setView('register')}
        >
          Register here
        </button>
      </p>
    </div>
  )
}

export default Login
