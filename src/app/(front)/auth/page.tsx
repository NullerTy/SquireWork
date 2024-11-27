import { registerUser } from '@/actions/actions'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <main className='flex flex-col items-center gap-y-5 pt-24 text-center'>
      <h1 className='text-3xl font-semibold'>Sign Up</h1>

      {/* Sign Up Form */}
      <form
        action={registerUser}
        className='flex w-[300px] flex-col gap-y-4 text-black'
      >
        {/* Email Input */}
        <input
          type='email'
          name='email'
          placeholder='Email'
          required
          className='rounded-md border px-3 py-2'
        />

        {/* Password Input */}
        <input
          type='password'
          name='password'
          placeholder='Password'
          required
          className='rounded-md border px-3 py-2'
        />

        {/* Confirm Password Input */}
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          required
          className='rounded-md border px-3 py-2'
        />

        {/* Submit Button */}
        <button
          type='submit'
          className='rounded-md bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600'
        >
          Sign Up
        </button>
      </form>

      {/* Link to Login Page */}
      <p className='text-sm text-gray-600'>
        Already have an account?{' '}
        <Link href='/login' className='text-blue-500 hover:underline'>
          Sign In
        </Link>
      </p>
    </main>
  )
}
