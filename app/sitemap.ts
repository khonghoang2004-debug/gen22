import type { MetadataRoute } from 'next'
import { locales } from './i18n/translations'

const SITE_URL = 'https://gen22barbershop.cz'

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${SITE_URL}/${l}`])
  )

  return locales.map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: lang === 'cs' ? 1 : 0.8,
    alternates: { languages },
  }))
}
