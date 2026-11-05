import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../globals.css'
import { dictionaries, isLocale, locales, type Locale } from '../i18n/translations'

const SITE_URL = 'https://gen22barbershop.cz'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const OG_LOCALES: Record<Locale, string> = {
  cs: 'cs_CZ',
  en: 'en_US',
  de: 'de_DE',
}

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
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        cs: '/cs',
        en: '/en',
        de: '/de',
        'x-default': '/cs',
      },
    },
    openGraph: {
      type: 'website',
      url: `/${lang}`,
      siteName: 'GEN22 BarberShop',
      title: dict.meta.title,
      description: dict.meta.description,
      locale: OG_LOCALES[lang],
      alternateLocale: Object.values(OG_LOCALES).filter(
        (l) => l !== OG_LOCALES[lang]
      ),
      images: [
        {
          url: '/og.jpg',
          width: 1200,
          height: 630,
          alt: 'GEN22 BarberShop',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: ['/og.jpg'],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
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

  const lang = params.lang
  const dict = dictionaries[lang]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Barbershop',
    '@id': `${SITE_URL}/#barbershop`,
    name: 'GEN22 BarberShop',
    description: dict.meta.description,
    url: `${SITE_URL}/${lang}`,
    telephone: '+420776107688',
    email: 'gen22barbershop@gmail.com',
    priceRange: '150 Kč – 950 Kč',
    currenciesAccepted: 'CZK',
    image: [`${SITE_URL}/about/storefront.jpg`, `${SITE_URL}/og.jpg`],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vodičkova 34',
      addressLocality: 'Praha 1',
      postalCode: '110 00',
      addressCountry: 'CZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.0807,
      longitude: 14.4249,
    },
    sameAs: [
      'https://www.facebook.com/dam.hoang2601',
      'https://www.instagram.com/barbergenz_filip',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: dict.pricing.title,
      itemListElement: dict.pricing.services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
        },
        price: service.price.replace(/[^\d]/g, ''),
        priceCurrency: 'CZK',
      })),
    },
  }

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
