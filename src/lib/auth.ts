// File: src/lib/auth.ts
import prisma from './db'

export async function loginUser({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const user = await prisma.user.findUnique({ where: { email } })
  if (user && user.password === password) {
    return user
  }
  return null
}

export async function registerUser({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const user = await prisma.user.create({ data: { email, password } })
  return user
}
