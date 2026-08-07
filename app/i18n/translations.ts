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

export interface AboutSection {
  title: string
  paragraphs: string[]
}

export interface Dictionary {
  meta: {
    title: string
    description: string
  }
  nav: {
    about: string
    pricing: string
    contact: string
    book: string
  }
  about: {
    metaTitle: string
    metaDescription: string
    title: string
    subtitle: string
    story: AboutSection
    specialization: AboutSection & { services: string[]; outro: string }
    location: AboutSection
    experience: AboutSection & { items: string[]; outro: string[] }
    thanks: AboutSection
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
      about: 'O mně',
      pricing: 'Ceník',
      contact: 'Kontakt',
      book: 'Rezervovat',
    },
    about: {
      metaTitle: 'O mně – Příběh GEN22 BarberShop',
      metaDescription:
        'Jmenuji se Hoang. Přečtěte si příběh Gen22 Barbershop v centru Prahy 1 – od dětství v maminčině salonu po vlastní barbershop na Vodičkově ulici.',
      title: 'O mně',
      subtitle: 'Příběh Gen22 Barbershop',
      story: {
        title: 'Když se koníček stane životní cestou',
        paragraphs: [
          'Jmenuji se Hoang a stříhání vlasů mě provází prakticky celý život.',
          'Moje maminka je kadeřnice, takže už jako malé dítě jsem trávil hodiny v salonu a sledoval ji při práci. Fascinovalo mě, jak může správný účes změnit člověku sebevědomí i náladu. Právě tehdy jsem věděl, že jednou chci dělat to samé.',
          'Po základní škole jsem vystudoval tříletou kadeřnickou školu. Po jejím dokončení jsem začal pracovat s maminkou. Její salon byl zaměřený hlavně na dámskou klientelu, ale postupně jsem zjistil, že mě mnohem více baví pánské střihy.',
          'Proto jsem se rozhodl vydat vlastní cestou.',
        ],
      },
      specialization: {
        title: 'Specializuji se pouze na pánské střihy',
        paragraphs: [
          'Začal jsem pracovat v několika barbershopech v centru Prahy, kde jsem získával zkušenosti s různými styly a technikami.',
          'Každý zákazník měl jiné vlasy, jiný styl i jiná očekávání.',
          'Právě díky tomu jsem si vytvořil vlastní přístup ke stříhání.',
        ],
        services: [
          'Skin Fade',
          'Mid Fade',
          'Low Fade',
          'Buzz Cut',
          'Crop',
          'Classic Barber Style',
          'Beard Trim',
          "Modern Men's Haircut",
        ],
        outro:
          'Ať už chcete klasický střih nebo moderní barber styl, vždy se snažím najít účes, který vám bude opravdu sedět.',
      },
      location: {
        title: 'Gen22 Barbershop – Praha 1',
        paragraphs: [
          'Nakonec jsem našel místo, kde jsem chtěl budovat svou značku.',
          'Dnes pracuji v Gen22 Barbershop na ulici Vodičkova, jen několik minut od Václavského náměstí, v samotném centru Prahy 1.',
          'Díky této poloze si nás snadno najdou nejen lidé z Prahy, ale také turisté z celého světa, kteří hledají kvalitní barber v centru Prahy.',
        ],
      },
      experience: {
        title: 'Nejde jen o střih',
        paragraphs: [
          'Věřím, že návštěva barbera by měla být zážitkem.',
          'Proto se snažím věnovat pozornost každému detailu.',
          'Kromě kvalitního střihu u mě dostanete také:',
        ],
        items: [
          'profesionální konzultaci',
          'mytí vlasů',
          'relaxační masáž hlavy',
          'úpravu účesu',
          'doporučení vhodných produktů',
          'přátelskou atmosféru bez spěchu',
        ],
        outro: [
          'Mým cílem není pouze ostříhat vlasy.',
          'Chci, abyste odcházeli spokojení a rádi se vraceli.',
        ],
      },
      thanks: {
        title: 'Děkuji',
        paragraphs: [
          'Pokud jste už byli mým zákazníkem, děkuji vám za důvěru.',
          'A pokud ke mně přijdete poprvé, budu rád, když se stanete součástí mé cesty.',
          'Gen22 Barbershop je teprve na začátku a já se budu každý den snažit být lepším barberem než včera.',
          'Těším se na vás v Gen22 Barbershop Praha 1.',
        ],
      },
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
      about: 'About',
      pricing: 'Prices',
      contact: 'Contact',
      book: 'Book now',
    },
    about: {
      metaTitle: 'About Me – The Story of GEN22 BarberShop',
      metaDescription:
        "My name is Hoang. Read the story of Gen22 Barbershop in the centre of Prague 1 – from a childhood in my mom's salon to my own barbershop on Vodičkova street.",
      title: 'About Me',
      subtitle: 'The Story of Gen22 Barbershop',
      story: {
        title: 'When a hobby becomes a life path',
        paragraphs: [
          'My name is Hoang, and cutting hair has been part of my life for as long as I can remember.',
          "My mom is a hairdresser, so even as a small child I spent hours in her salon watching her work. I was fascinated by how the right haircut can change a person's confidence and mood. That was the moment I knew I wanted to do the same one day.",
          "After elementary school I completed a three-year hairdressing school. Once I finished, I started working with my mom. Her salon focused mainly on women's clients, but over time I discovered that I enjoyed men's haircuts much more.",
          'So I decided to go my own way.',
        ],
      },
      specialization: {
        title: "I specialize exclusively in men's haircuts",
        paragraphs: [
          'I started working in several barbershops in the centre of Prague, gaining experience with different styles and techniques.',
          'Every client had different hair, a different style and different expectations.',
          "That's exactly how I developed my own approach to cutting hair.",
        ],
        services: [
          'Skin Fade',
          'Mid Fade',
          'Low Fade',
          'Buzz Cut',
          'Crop',
          'Classic Barber Style',
          'Beard Trim',
          "Modern Men's Haircut",
        ],
        outro:
          'Whether you want a classic cut or a modern barber style, I always try to find a haircut that truly suits you.',
      },
      location: {
        title: 'Gen22 Barbershop – Prague 1',
        paragraphs: [
          'In the end, I found the place where I wanted to build my brand.',
          'Today I work at Gen22 Barbershop on Vodičkova street, just a few minutes from Wenceslas Square, in the very centre of Prague 1.',
          'Thanks to this location, we are easy to find not only for people from Prague, but also for visitors from all over the world looking for a quality barber in the centre of Prague.',
        ],
      },
      experience: {
        title: "It's not just about the haircut",
        paragraphs: [
          'I believe a visit to the barber should be an experience.',
          "That's why I pay attention to every detail.",
          'Besides a quality haircut, you will also get:',
        ],
        items: [
          'professional consultation',
          'hair wash',
          'relaxing head massage',
          'hair styling',
          'product recommendations',
          'a friendly, unhurried atmosphere',
        ],
        outro: [
          'My goal is not just to cut your hair.',
          'I want you to leave happy — and be glad to come back.',
        ],
      },
      thanks: {
        title: 'Thank You',
        paragraphs: [
          'If you have already been my client, thank you for your trust.',
          'And if you are coming to me for the first time, I will be glad to have you become part of my journey.',
          'Gen22 Barbershop is only at the beginning, and every day I will keep trying to be a better barber than I was yesterday.',
          'I look forward to seeing you at Gen22 Barbershop Prague 1.',
        ],
      },
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
      about: 'Über mich',
      pricing: 'Preise',
      contact: 'Kontakt',
      book: 'Termin buchen',
    },
    about: {
      metaTitle: 'Über mich – Die Geschichte von GEN22 BarberShop',
      metaDescription:
        'Mein Name ist Hoang. Lesen Sie die Geschichte von Gen22 Barbershop im Zentrum von Prag 1 – von der Kindheit im Salon meiner Mutter bis zum eigenen Barbershop in der Vodičkova-Straße.',
      title: 'Über mich',
      subtitle: 'Die Geschichte von Gen22 Barbershop',
      story: {
        title: 'Wenn ein Hobby zum Lebensweg wird',
        paragraphs: [
          'Mein Name ist Hoang und das Haareschneiden begleitet mich praktisch mein ganzes Leben.',
          'Meine Mutter ist Friseurin, deshalb habe ich schon als kleines Kind Stunden im Salon verbracht und ihr bei der Arbeit zugesehen. Es hat mich fasziniert, wie der richtige Haarschnitt das Selbstbewusstsein und die Stimmung eines Menschen verändern kann. Genau damals wusste ich, dass ich eines Tages dasselbe machen möchte.',
          'Nach der Grundschule habe ich eine dreijährige Friseurschule absolviert. Danach begann ich, mit meiner Mutter zu arbeiten. Ihr Salon war vor allem auf Damen ausgerichtet, aber nach und nach merkte ich, dass mir Herrenhaarschnitte viel mehr Freude machen.',
          'Deshalb entschied ich mich, meinen eigenen Weg zu gehen.',
        ],
      },
      specialization: {
        title: 'Ich spezialisiere mich ausschließlich auf Herrenhaarschnitte',
        paragraphs: [
          'Ich arbeitete in mehreren Barbershops im Zentrum von Prag, wo ich Erfahrungen mit verschiedenen Stilen und Techniken sammelte.',
          'Jeder Kunde hatte anderes Haar, einen anderen Stil und andere Erwartungen.',
          'Genau dadurch habe ich meinen eigenen Ansatz beim Schneiden entwickelt.',
        ],
        services: [
          'Skin Fade',
          'Mid Fade',
          'Low Fade',
          'Buzz Cut',
          'Crop',
          'Classic Barber Style',
          'Beard Trim',
          "Modern Men's Haircut",
        ],
        outro:
          'Ob klassischer Schnitt oder moderner Barber-Style – ich versuche immer, den Haarschnitt zu finden, der wirklich zu Ihnen passt.',
      },
      location: {
        title: 'Gen22 Barbershop – Prag 1',
        paragraphs: [
          'Schließlich habe ich den Ort gefunden, an dem ich meine Marke aufbauen wollte.',
          'Heute arbeite ich im Gen22 Barbershop in der Vodičkova-Straße, nur wenige Minuten vom Wenzelsplatz entfernt, im Herzen von Prag 1.',
          'Dank dieser Lage finden uns nicht nur die Prager, sondern auch Besucher aus aller Welt, die einen guten Barber im Zentrum von Prag suchen.',
        ],
      },
      experience: {
        title: 'Es geht nicht nur um den Haarschnitt',
        paragraphs: [
          'Ich glaube, ein Besuch beim Barber sollte ein Erlebnis sein.',
          'Deshalb achte ich auf jedes Detail.',
          'Neben einem hochwertigen Haarschnitt bekommen Sie bei mir außerdem:',
        ],
        items: [
          'professionelle Beratung',
          'Haarwäsche',
          'entspannende Kopfmassage',
          'Styling der Frisur',
          'Produktempfehlungen',
          'eine freundliche Atmosphäre ohne Hektik',
        ],
        outro: [
          'Mein Ziel ist nicht nur, Haare zu schneiden.',
          'Ich möchte, dass Sie zufrieden gehen und gerne wiederkommen.',
        ],
      },
      thanks: {
        title: 'Danke',
        paragraphs: [
          'Wenn Sie schon Kunde bei mir waren, danke ich Ihnen für Ihr Vertrauen.',
          'Und wenn Sie zum ersten Mal zu mir kommen, freue ich mich, wenn Sie Teil meines Weges werden.',
          'Gen22 Barbershop steht erst am Anfang, und ich werde jeden Tag versuchen, ein besserer Barber zu sein als gestern.',
          'Ich freue mich auf Sie im Gen22 Barbershop Prag 1.',
        ],
      },
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
