'use server'

import prisma from '@/lib/db'
import bcrypt from 'bcrypt' // Hashing library

export async function registerUser(formData: FormData) {
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()
  const confirmPassword = formData.get('confirmPassword')?.toString()

  // Validate required fields
  if (!email || !password || !confirmPassword) {
    throw new Error('All fields are required.')
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    throw new Error('Passwords do not match.')
  }

  // Check if the email is already in use
  const existingUser = await prisma.user.findUnique({
    where: { email },
  })

  if (existingUser) {
    throw new Error('Email is already registered.')
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10)

  // Create the user in the database
  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  })

  console.log('User registered successfully:', email)
}
