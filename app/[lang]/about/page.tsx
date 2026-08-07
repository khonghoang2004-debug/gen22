import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { dictionaries, isLocale, type Locale } from '../../i18n/translations'

const BOOKING_URL = 'https://gen22barbershop.reservio.com/booking'

export function generateMetadata({
  params,
}: {
  params: { lang: string }
}): Metadata {
  const lang: Locale = isLocale(params.lang) ? params.lang : 'cs'
  const dict = dictionaries[lang]

  return {
    title: dict.about.metaTitle,
    description: dict.about.metaDescription,
    alternates: {
      languages: {
        cs: '/cs/about',
        en: '/en/about',
        de: '/de/about',
        'x-default': '/cs/about',
      },
    },
  }
}

function AboutImage({
  src,
  alt,
  priority = false,
}: {
  src: string
  alt: string
  priority?: boolean
}) {
  return (
    <div className="relative w-full aspect-[3/4] max-h-[520px] rounded-2xl overflow-hidden border border-neutral-800">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority={priority}
      />
    </div>
  )
}

export default function AboutPage({ params }: { params: { lang: string } }) {
  const lang: Locale = isLocale(params.lang) ? params.lang : 'cs'
  const dict = dictionaries[lang]
  const about = dict.about

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar lang={lang} nav={dict.nav} />

      {/* Page Header */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12 px-4 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide mb-3">
            {about.title}
          </h1>
          <p className="text-base md:text-lg text-gray-400">{about.subtitle}</p>
          <div className="w-16 h-[1px] bg-gray-700 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Story */}
      <section className="py-10 md:py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-full space-y-4 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide mb-4">
                {about.story.title}
              </h2>
              {about.story.paragraphs.map((p) => (
                <p key={p} className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="w-full order-1 md:order-2">
              <AboutImage src="/about/sign.jpg" alt="Trust me I'm a barber" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Specialization */}
      <section className="py-10 md:py-16 px-4 bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-full">
              <AboutImage src="/about/tools.jpg" alt="GEN22 BarberShop tools" />
            </div>
            <div className="w-full space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide mb-4">
                {about.specialization.title}
              </h2>
              {about.specialization.paragraphs.map((p) => (
                <p key={p} className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {p}
                </p>
              ))}
              <div className="grid grid-cols-2 gap-2 md:gap-3 pt-2">
                {about.specialization.services.map((service) => (
                  <div
                    key={service}
                    className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-xl px-3 py-2.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:border-white/40"
                  >
                    {service}
                  </div>
                ))}
              </div>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed pt-2">
                {about.specialization.outro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-10 md:py-16 px-4 bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-full space-y-4 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide mb-4">
                {about.location.title}
              </h2>
              {about.location.paragraphs.map((p) => (
                <p key={p} className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="w-full order-1 md:order-2">
              <AboutImage src="/about/storefront.jpg" alt="GEN22 BarberShop – Vodičkova, Praha 1" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-10 md:py-16 px-4 bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-full">
              <AboutImage src="/about/station.jpg" alt="GEN22 BarberShop interior" />
            </div>
            <div className="w-full space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide mb-4">
                {about.experience.title}
              </h2>
              {about.experience.paragraphs.map((p) => (
                <p key={p} className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {p}
                </p>
              ))}
              <ul className="space-y-2 pt-1">
                {about.experience.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm md:text-base text-gray-300">
                    <span className="text-white mt-0.5">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {about.experience.outro.map((p) => (
                <p key={p} className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Thanks + CTA */}
      <section className="py-12 md:py-20 px-4 bg-black border-t border-neutral-800">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide mb-2">
            {about.thanks.title}
          </h2>
          {about.thanks.paragraphs.map((p) => (
            <p key={p} className="text-sm md:text-base text-gray-300 leading-relaxed">
              {p}
            </p>
          ))}
          <div className="pt-6">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block md:inline-block w-full md:w-auto border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-xl md:rounded-full min-h-[48px] flex items-center justify-center hover:bg-white hover:text-black active:opacity-80 transition-all duration-300"
            >
              {dict.cta.button}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black text-white py-8 md:py-12 px-4 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <p className="text-base md:text-lg font-semibold">{dict.footer.copyright}</p>
          <p className="text-xs md:text-sm text-gray-400">{dict.footer.rights}</p>
        </div>
      </footer>

      {/* Sticky Mobile Booking Button */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white/95 backdrop-blur-md text-black text-center py-4 rounded-xl font-semibold shadow-xl min-h-[48px] flex items-center justify-center active:scale-95 transition-all duration-200"
        >
          {dict.hero.cta}
        </a>
      </div>
    </main>
  )
}
