'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { type Locale, type Dictionary } from '../i18n/translations'

interface NavbarProps {
  lang: Locale
  nav: Dictionary['nav']
}

export default function Navbar({ lang, nav }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goHome = () => {
    window.location.href = `/${lang}`
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-neutral-900 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-[80px]">
            <Logo onClick={goHome} variant="auto" size="navbar" className="" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href={`/${lang}#about`}
              className="relative text-white font-medium transition-colors hover:text-brass-light after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brass after:transition-all after:duration-300 hover:after:w-full"
            >
              {nav.about}
            </a>
            <a
              href={`/${lang}#cenik`}
              className="relative text-white font-medium transition-colors hover:text-brass-light after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brass after:transition-all after:duration-300 hover:after:w-full"
            >
              {nav.pricing}
            </a>
            <a
              href={`/${lang}#kontakt`}
              className="relative text-white font-medium transition-colors hover:text-brass-light after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brass after:transition-all after:duration-300 hover:after:w-full"
            >
              {nav.contact}
            </a>
            <LanguageSwitcher lang={lang} />
            <a
              href="https://gen22barbershop.reservio.com/booking"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              {nav.book}
            </a>
          </div>

          {/* Mobile: about link + language switcher (booking is covered by the sticky bottom button) */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={`/${lang}#about`}
              className="border border-neutral-700 bg-black/60 text-white px-3 py-1.5 rounded-full font-semibold text-xs min-h-[32px] flex items-center justify-center whitespace-nowrap active:opacity-80 transition-colors hover:border-brass/70"
            >
              {nav.about}
            </a>
            <LanguageSwitcher lang={lang} compact />
          </div>
        </div>
      </div>
    </nav>
  )
}
