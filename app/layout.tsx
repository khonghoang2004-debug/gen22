import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GEN22 BarberShop - Precizní střih. Moderní styl.',
  description: 'Profesionální barbershop v centru Prahy. Pánské střihy, úprava vousů a kompletní styling služby.',
  icons: {
    icon: [
      { url: '/logo/gen22-logo3.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo/gen22-logo3.png', sizes: '64x64', type: 'image/png' },
    ],
    shortcut: '/logo/gen22-logo3.png',
    apple: '/logo/gen22-logo3.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  )
}
