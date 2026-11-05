import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, isLocale, locales, type Locale } from './app/i18n/translations'

const LOCALE_COOKIE = 'NEXT_LOCALE'

function detectLocale(request: NextRequest): Locale {
  // A locale the visitor picked earlier wins over browser language
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale
  }

  const acceptLanguage = request.headers.get('accept-language') ?? ''
  const preferred = acceptLanguage
    .split(',')
    .map((part) => part.split(';')[0].trim().toLowerCase().slice(0, 2))

  for (const lang of preferred) {
    if (isLocale(lang)) {
      return lang
    }
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const matchedLocale = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (matchedLocale) {
    const response = NextResponse.next()
    if (request.cookies.get(LOCALE_COOKIE)?.value !== matchedLocale) {
      response.cookies.set(LOCALE_COOKIE, matchedLocale, {
        maxAge: 60 * 60 * 24 * 365,
        path: '/',
      })
    }
    return response
  }

  const locale = detectLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Skip Next internals and any file with an extension (images, icons, sitemap.xml, ...)
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
