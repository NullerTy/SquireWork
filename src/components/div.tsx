import React from 'react'

interface DivProps {
  children: React.ReactNode
  className?: string // Optional: to allow additional custom classes if needed
}

export default function Div({ children, className = '' }: DivProps) {
  return (
    <div
      className={`rounded-md bg-red-300 p-4 text-white shadow-md ${className}`}
    >
      {children}
    </div>
  )
}
