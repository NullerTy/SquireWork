import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret' // Use environment variables for security

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, password } = req.body

  try {
    // Find the user by email
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' })
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid credentials' })
    }

    // Generate a token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' })

    res.status(200).json({ message: 'Login successful', token })
  } catch (error) {
    console.error('Error during login:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
