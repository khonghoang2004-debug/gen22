import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import '../globals.css'
import { dictionaries, isLocale, locales, type Locale } from '../i18n/translations'

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export function generateMetadata({
  params,
}: {
  params: { lang: string }
}): Metadata {
  const lang: Locale = isLocale(params.lang) ? params.lang : 'cs'
  const dict = dictionaries[lang]

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      languages: {
        cs: '/cs',
        en: '/en',
        de: '/de',
        'x-default': '/cs',
      },
    },
    icons: {
      icon: [
        { url: '/logo/gen22-logo3.png', sizes: '32x32', type: 'image/png' },
        { url: '/logo/gen22-logo3.png', sizes: '64x64', type: 'image/png' },
      ],
      shortcut: '/logo/gen22-logo3.png',
      apple: '/logo/gen22-logo3.png',
    },
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  if (!isLocale(params.lang)) {
    notFound()
  }

  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  )
}
