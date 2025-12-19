'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import MainNav from './main-nav';
import MobileNav from './mobile-nav';


function Header() {

    // const [isOpen, setIsOpen] = useState(false);

  return (
    
    <header className='sticky top-0 w-full border-b flex py-6 px-2'>
        <nav className='mx-auto flex items-center justify-between container'>
            <div className='flex lg:flex-1 px-2 md:px-0'>
                <Link href='/'>Property Listing</Link>
            </div>

            {/* Desktop */}
            <MainNav />
            
            {/* Mobile */}
            <MobileNav />
            
            {/* Both View */}
            <div className='hidden lg:flex lg:flex-1 lg:justify-end uppercase text-xs'>
                <Link href='login' className='ps-3 pe-3 hover:text-gray-500'>log in</Link>
            </div>
        </nav>
    </header>
  )
}

export default Header