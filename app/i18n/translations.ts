export const locales = ['cs', 'en', 'de'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'cs'

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export interface ServiceItem {
  name: string
  price: string
  description: string
  popular?: boolean
}

export interface Dictionary {
  meta: {
    title: string
    description: string
  }
  nav: {
    pricing: string
    contact: string
    book: string
  }
  hero: {
    tagline: string
    cta: string
    trust: string
  }
  pricing: {
    title: string
    popularBadge: string
    services: ServiceItem[]
  }
  cta: {
    title: string
    button: string
  }
  contact: {
    title: string
  }
  footer: {
    copyright: string
    rights: string
  }
}

export const dictionaries: Record<Locale, Dictionary> = {
  cs: {
    meta: {
      title: 'GEN22 BarberShop - Precizní střih. Moderní styl.',
      description:
        'Profesionální barbershop v centru Prahy. Pánské střihy, úprava vousů a kompletní styling služby.',
    },
    nav: {
      pricing: 'Ceník',
      contact: 'Kontakt',
      book: 'Rezervovat',
    },
    hero: {
      tagline: 'Precizní střih. Moderní styl. Skutečný zážitek.',
      cta: 'Rezervovat termín',
      trust: '✔ Rezervace během 30 sekund',
    },
    pricing: {
      title: 'Ceník služeb',
      popularBadge: 'Nejoblíbenější',
      services: [
        {
          name: 'Pánský střih',
          price: '550 Kč',
          description:
            'nápoj zdarma, konzultace, střih, úprava obočí, mytí vlasů, styling',
        },
        {
          name: 'Úprava vousů',
          price: '400 Kč',
          description: 'nápoj zdarma, konzultace, holení vousů, styling vousů',
        },
        {
          name: 'Pánský střih + vousy',
          price: '950 Kč',
          description:
            'nápoj zdarma, konzultace, střih, holení vousů, kompletní styling',
          popular: true,
        },
        {
          name: 'Dětský střih',
          price: '450 Kč',
          description: 'nápoj zdarma, konzultace, střih, styling',
        },
        {
          name: 'Střih strojkem',
          price: '500 Kč',
          description: 'pouze strojkem, nápoj zdarma, konzultace, mytí, styling',
        },
        {
          name: 'Střih dlouhých vlasů',
          price: '650 Kč',
          description:
            'vlasy delší než uši, nápoj zdarma, konzultace, střih, mytí, styling',
        },
      ],
    },
    cta: {
      title: 'Rezervujte si svůj termín ještě dnes',
      button: 'Rezervovat termín',
    },
    contact: {
      title: 'Kontakt',
    },
    footer: {
      copyright: '© 2026 GEN22 BarberShop',
      rights: 'Všechna práva vyhrazena',
    },
  },
  en: {
    meta: {
      title: 'GEN22 BarberShop - Precise cuts. Modern style.',
      description:
        "Professional barbershop in the centre of Prague. Men's haircuts, beard trims and complete styling services.",
    },
    nav: {
      pricing: 'Prices',
      contact: 'Contact',
      book: 'Book now',
    },
    hero: {
      tagline: 'Precise cuts. Modern style. A real experience.',
      cta: 'Book an appointment',
      trust: '✔ Booking takes 30 seconds',
    },
    pricing: {
      title: 'Price List',
      popularBadge: 'Most popular',
      services: [
        {
          name: "Men's Haircut",
          price: '550 Kč',
          description:
            'free drink, consultation, haircut, eyebrow trim, hair wash, styling',
        },
        {
          name: 'Beard Trim',
          price: '400 Kč',
          description: 'free drink, consultation, beard shave, beard styling',
        },
        {
          name: 'Haircut + Beard',
          price: '950 Kč',
          description:
            'free drink, consultation, haircut, beard shave, complete styling',
          popular: true,
        },
        {
          name: "Kids' Haircut",
          price: '450 Kč',
          description: 'free drink, consultation, haircut, styling',
        },
        {
          name: 'Clipper Cut',
          price: '500 Kč',
          description:
            'clippers only, free drink, consultation, hair wash, styling',
        },
        {
          name: 'Long Hair Cut',
          price: '650 Kč',
          description:
            'hair longer than ears, free drink, consultation, haircut, hair wash, styling',
        },
      ],
    },
    cta: {
      title: 'Book your appointment today',
      button: 'Book an appointment',
    },
    contact: {
      title: 'Contact',
    },
    footer: {
      copyright: '© 2026 GEN22 BarberShop',
      rights: 'All rights reserved',
    },
  },
  de: {
    meta: {
      title: 'GEN22 BarberShop - Präziser Schnitt. Moderner Stil.',
      description:
        'Professioneller Barbershop im Zentrum von Prag. Herrenhaarschnitte, Bartpflege und komplettes Styling.',
    },
    nav: {
      pricing: 'Preise',
      contact: 'Kontakt',
      book: 'Termin buchen',
    },
    hero: {
      tagline: 'Präziser Schnitt. Moderner Stil. Ein echtes Erlebnis.',
      cta: 'Termin buchen',
      trust: '✔ Buchung in 30 Sekunden',
    },
    pricing: {
      title: 'Preisliste',
      popularBadge: 'Am beliebtesten',
      services: [
        {
          name: 'Herrenhaarschnitt',
          price: '550 Kč',
          description:
            'Getränk gratis, Beratung, Haarschnitt, Augenbrauenkorrektur, Haarwäsche, Styling',
        },
        {
          name: 'Bartpflege',
          price: '400 Kč',
          description: 'Getränk gratis, Beratung, Bartrasur, Bartstyling',
        },
        {
          name: 'Haarschnitt + Bart',
          price: '950 Kč',
          description:
            'Getränk gratis, Beratung, Haarschnitt, Bartrasur, komplettes Styling',
          popular: true,
        },
        {
          name: 'Kinderhaarschnitt',
          price: '450 Kč',
          description: 'Getränk gratis, Beratung, Haarschnitt, Styling',
        },
        {
          name: 'Maschinenhaarschnitt',
          price: '500 Kč',
          description:
            'nur mit der Maschine, Getränk gratis, Beratung, Haarwäsche, Styling',
        },
        {
          name: 'Langhaarschnitt',
          price: '650 Kč',
          description:
            'Haare länger als die Ohren, Getränk gratis, Beratung, Haarschnitt, Haarwäsche, Styling',
        },
      ],
    },
    cta: {
      title: 'Buchen Sie noch heute Ihren Termin',
      button: 'Termin buchen',
    },
    contact: {
      title: 'Kontakt',
    },
    footer: {
      copyright: '© 2026 GEN22 BarberShop',
      rights: 'Alle Rechte vorbehalten',
    },
  },
}
