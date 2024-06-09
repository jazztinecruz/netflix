'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import NavMenu from './menu'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`px-4 lg:px-10 py-2 flex items-center gap-2 lg:gap-6 sticky top-0 z-[999] ${
        isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black to-transparent'
      }`}
    >
      <div className="hidden lg:block w-32 h-20 relative">
        <Image src="/logo/netflix.png" alt="Netflix" fill sizes="w-auto h-auto" className="object-center" />
      </div>
      <div className="lg:hidden w-14 h-14 relative -ml-3">
        <Image src="/logo/n-symbol.png" alt="Netflix" fill sizes="w-auto h-auto" className="object-center" />
      </div>
      <NavMenu />
      <Link href="/signin" className="ml-auto">
        <button className="bg-red-600 text-white rounded py-2 px-3 font-semibold text-sm hover:scale-105 transition-all duration-300">
          Sign In
        </button>
      </Link>
    </nav>
  )
}

export default Navbar
