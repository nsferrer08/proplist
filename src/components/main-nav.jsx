import Link from 'next/link'
import React from 'react'

function MainNav() {
  return (
    <div className='hidden lg:flex lg:gap-x-12'>
        <Link rel="stylesheet" href="/" className='mx-2 hover:text-gray-300'>Home</Link>
        <Link rel="stylesheet" href="/about" className='mx-2 hover:text-gray-300'>About</Link>
        <Link rel="stylesheet" href="/contact" className='mx-2 hover:text-gray-300'>Contact</Link>
    </div>
  )
}

export default MainNav