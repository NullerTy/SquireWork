import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = 'your_jwt_secret' // Replace with the same secret

export function middleware(req: NextRequest) {
  const token = req.cookies.get('auth_token')

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  try {
    jwt.verify(token.value, JWT_SECRET)
    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: '/admin',
}
