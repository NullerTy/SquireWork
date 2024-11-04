'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'

import { topNav } from '@/config/site'
import MainNav from './main-nav'
import MobileNav from './mobile-nav'
import { useEffect, useState } from 'react'

export function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 0)
    }

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  // TODO set color of topbar to same as background light and dark so that tranparency works ( example: bg-[#FFFF] )
  return (
    <div >
      
    </div>
  )
}
