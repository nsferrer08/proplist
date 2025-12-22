import Link from 'next/link'
import React from 'react'

function MainNav() {
  return (
    <div className='hidden lg:flex lg:gap-x-5'>
        <Link rel="stylesheet" href="/" className='mx-2 hover:text-gray-300'>Home</Link>
        <Link rel="stylesheet" href="/about" className='mx-2 hover:text-gray-300'>About</Link>
        <Link rel="stylesheet" href="/contact" className='mx-2 hover:text-gray-300'>Contact</Link>

        {navigation.map((item) => (
        <a
            key={item.name}
            href={item.href}
            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
        >
            {item.name}
        </a>
        ))}
    </div>
  )
}

export default MainNav