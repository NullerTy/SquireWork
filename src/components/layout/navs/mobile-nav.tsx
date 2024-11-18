'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { NavItem } from '@/types'
import Link from 'next/link'
import { Icons } from '@/components/icons'
import React from 'react'

interface NavProps {
  items?: NavItem[]
}

const MobileNav: React.FC<NavProps> = ({ items }) => {
  return (
    <div className='flex items-center'>
      <Sheet>
        <SheetTrigger aria-controls={'mobile-nav'}>
          <Menu className='fill-current text-pink-600' />
        </SheetTrigger>
        <SheetContent side='left' className='w-11/12'>
          <Link href='/'>
            <Icons.logo className='w-40 cursor-pointer fill-primary stroke-current pb-6 text-pink-600' />
          </Link>
          <nav>
            <ul className='space-y-4 text-white'>
              {items?.map((item) => (
                <li key={item.href}>
                  <Link
                    className='text-lg font-medium text-black text-stroke-purple hover:text-primary'
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
