'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-[100px]">
            <Logo
              onClick={() => scrollToSection('hero')}
              variant="auto"
              size="navbar"
              className=""
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('cenik')}
              className="text-white hover:text-gray-300 transition-colors font-medium"
            >
              Ceník
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="text-white hover:text-gray-300 transition-colors font-medium"
            >
              Kontakt
            </button>
            <a
              href="https://gen22barbershop.reservio.com/booking"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              Rezervovat
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <a
              href="https://gen22barbershop.reservio.com/booking"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-1.5 rounded-full font-semibold text-xs min-h-[36px] flex items-center justify-center active:opacity-80 transition-opacity"
            >
              Rezervovat
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
