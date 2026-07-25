'use client'

import { useEffect, useRef, useState } from 'react'
import { locales, type Locale } from '../i18n/translations'

const LOCALE_INFO: Record<Locale, { code: string; nativeName: string }> = {
  cs: { code: 'CZ', nativeName: 'Čeština' },
  en: { code: 'EN', nativeName: 'English' },
  de: { code: 'DE', nativeName: 'Deutsch' },
}

function FlagIcon({ locale, className = '' }: { locale: Locale; className?: string }) {
  const common = `inline-block rounded-[2px] flex-shrink-0 ${className}`

  if (locale === 'cs') {
    return (
      <svg viewBox="0 0 60 40" className={common} aria-hidden="true">
        <rect width="60" height="20" fill="#FFFFFF" />
        <rect y="20" width="60" height="20" fill="#D7141A" />
        <path d="M0,0 L30,20 L0,40 Z" fill="#11457E" />
      </svg>
    )
  }

  if (locale === 'de') {
    return (
      <svg viewBox="0 0 60 40" className={common} aria-hidden="true">
        <rect width="60" height="14" fill="#000000" />
        <rect y="13" width="60" height="14" fill="#DD0000" />
        <rect y="26" width="60" height="14" fill="#FFCE00" />
      </svg>
    )
  }

  // en — Union Jack (simplified for small sizes)
  return (
    <svg viewBox="0 0 60 40" className={common} aria-hidden="true">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" strokeWidth="8" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="3" />
      <path d="M30,0 V40 M0,20 H60" stroke="#FFFFFF" strokeWidth="13" />
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="8" />
    </svg>
  )
}

interface LanguageSwitcherProps {
  lang: Locale
  compact?: boolean
}

export default function LanguageSwitcher({ lang, compact = false }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex items-center gap-1.5 rounded-full border border-neutral-700 bg-black/60 font-semibold text-white transition-colors hover:border-white/50 ${
          compact ? 'px-2 py-1 text-[11px]' : 'px-3 py-1.5 text-xs'
        }`}
      >
        <FlagIcon locale={lang} className={compact ? 'w-4' : 'w-5'} />
        <span>{LOCALE_INFO[lang].code}</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className={`${compact ? 'w-3 h-3' : 'w-3.5 h-3.5'} transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown - vertical list */}
      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-2 min-w-[150px] rounded-xl border border-neutral-700 bg-neutral-900 shadow-xl overflow-hidden z-50"
        >
          {locales.map((locale) => (
            <a
              key={locale}
              href={`/${locale}`}
              role="option"
              aria-selected={locale === lang}
              className={`flex items-center gap-2.5 px-3.5 py-2.5 text-sm font-medium transition-colors ${
                locale === lang
                  ? 'bg-white text-black'
                  : 'text-gray-300 hover:bg-neutral-800 hover:text-white'
              }`}
            >
              <FlagIcon locale={locale} className="w-5" />
              <span>{LOCALE_INFO[locale].nativeName}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
