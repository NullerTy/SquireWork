import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET as string // Same as the secret used in actions.ts

export function middleware(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1]

  if (!token) {
    // Redirect to login page if no token is found
    return NextResponse.redirect(new URL('/login', req.url))
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { role: string }

    // Check if the user has the 'admin' role
    if (decoded.role !== 'admin') {
      return NextResponse.redirect(new URL('/', req.url)) // Redirect to home if not admin
    }

    return NextResponse.next() // Allow access to admin page
  } catch (error) {
    return NextResponse.redirect(new URL('/login', req.url)) // Redirect to login on error
  }
}

// Apply middleware only to the /admin route
export const config = {
  matcher: '/admin/:path*',
}
