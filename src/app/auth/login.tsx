'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    // Check if a token already exists in localStorage
    const token = localStorage.getItem('token')
    if (token) {
      // If token exists, redirect to the admin page or a protected route
      router.push('/admin')
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/login', { email, password })
      if (response.data.token) {
        // Store the JWT token in localStorage
        localStorage.setItem('token', response.data.token)
        router.push('/admin') // Redirect to the admin page
      }
    } catch (err) {
      setError('Invalid email or password')
    }
  }

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
