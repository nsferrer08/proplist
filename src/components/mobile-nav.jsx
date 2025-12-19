import Link from 'next/link'
import React from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from 'lucide-react'

function MobileNav() {
  return (
    <div className='flex lg:hidden'>
        <Sheet>
            <SheetTrigger><AlignJustify /></SheetTrigger>
            <SheetContent side='left'>
                <SheetTitle className="sr-only">menu</SheetTitle>
                <div className='flex py-3.5 px-2'>
                    <Link href='/'>Property Listing</Link>
                </div>
                <div className='flex flex-col justify-start gap-y-5'>
                    <Link rel="stylesheet" href="/" className='mx-2 hover:text-gray-300'>Home</Link>
                    <Link rel="stylesheet" href="/about" className='mx-2 hover:text-gray-300'>About</Link>
                    <Link rel="stylesheet" href="/contact" className='mx-2 hover:text-gray-300'>Contact</Link>
                </div>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileNav