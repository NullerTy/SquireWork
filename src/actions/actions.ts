'use server'

import prisma from '@/lib/db'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const JWT_SECRET = 'your_jwt_secret_here' // Replace with a strong secret key
const TOKEN_EXPIRATION = '1h' // Token expiration time

// Register User
export async function registerUser(
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()
  const confirmPassword = formData.get('confirmPassword')?.toString()
  const role = formData.get('role')?.toString() || 'user' // Default role is 'user'

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
      role, // Save the user's role (user/admin)
    },
  })

  return { success: true, message: 'User registered successfully.' }
}

// Login User
export async function loginUser(
  formData: FormData
): Promise<{ success: boolean; message: string; token?: string }> {
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

  // Generate JWT token
  const token = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET, {
    expiresIn: TOKEN_EXPIRATION,
  })

  return { success: true, message: 'Login successful.', token }
}

// Logout User
export async function logoutUser(): Promise<{
  success: boolean
  message: string
}> {
  return { success: true, message: 'Logout successful.' }
}

// Verify Admin Access
export async function verifyAdminAccess(
  token: string
): Promise<{ success: boolean; message: string }> {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { role: string }
    if (decoded.role !== 'admin') {
      return { success: false, message: 'Access denied. Admins only.' }
    }
    return { success: true, message: 'Access granted.' }
  } catch (error) {
    return { success: false, message: 'Invalid token.' }
  }
}
