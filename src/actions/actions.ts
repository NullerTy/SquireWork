'use server'

import prisma from '@/lib/db'
import bcrypt from 'bcrypt'

export async function registerUser(
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()
  const confirmPassword = formData.get('confirmPassword')?.toString()

  if (!email || !password || !confirmPassword) {
    return { success: false, message: 'All fields are required.' }
  }

  if (password !== confirmPassword) {
    return { success: false, message: 'Passwords do not match.' }
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  })

  if (existingUser) {
    return { success: false, message: 'Email is already registered.' }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  })

  return { success: true, message: 'User registered successfully.' }
}

export async function loginUser(
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()

  if (!email || !password) {
    return { success: false, message: 'Email and password are required.' }
  }

  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    return { success: false, message: 'User not found.' }
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    return { success: false, message: 'Invalid credentials.' }
  }

  return { success: true, message: 'Login successful.' }
}
