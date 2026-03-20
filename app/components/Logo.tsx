'use client'

import Image from 'next/image'
import { useState } from 'react'

interface LogoProps {
  className?: string
  variant?: 'auto' | 'white' | 'dark'
  onClick?: () => void
  size?: 'navbar' | 'hero'
}

export default function Logo({ className = '', variant = 'auto', onClick, size = 'navbar' }: LogoProps) {
  const [imageError, setImageError] = useState(false)

  const handleError = () => {
    setImageError(true)
  }

  // Text fallback - ALWAYS available
  const textFallback = (
    <span className={`font-bold text-white tracking-wide whitespace-nowrap block ${
      size === 'navbar' 
        ? 'text-sm md:text-lg lg:text-xl' 
        : 'text-2xl md:text-4xl lg:text-5xl'
    }`}>
      GEN22 BarberShop
    </span>
  )

  // Content to render
  const content = !imageError ? (
    size === 'navbar' ? (
      <Image
        src="/logo/gen22-logo2.png"
        alt="GEN22 BarberShop"
        width={180}
        height={50}
        className="object-contain h-10 md:h-12 w-auto"
        priority
        onError={handleError}
      />
    ) : (
      <div className="w-[200px] md:w-[240px] max-w-[75%] mx-auto mb-0">
        <Image
          src="/logo/gen22-logo2.png"
          alt="GEN22 BarberShop"
          width={240}
          height={240}
          className="object-contain w-full h-auto shadow-xl"
          style={{ filter: 'brightness(1.1)' }}
          priority
          onError={handleError}
        />
      </div>
    )
  ) : (
    textFallback
  )

  // If onClick is provided, wrap in button (for navbar), otherwise use div (for hero)
  if (onClick) {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`flex items-center ${className} hover:opacity-80 active:opacity-60 transition-opacity`}
      >
        {content}
      </button>
    )
  }

  // No onClick - render as div (for hero section)
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {content}
    </div>
  )
}
