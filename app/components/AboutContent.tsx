import Image from 'next/image'
import { type Dictionary } from '../i18n/translations'

function AboutImage({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  return (
    <div className="relative w-full aspect-[3/4] max-h-[520px] rounded-2xl overflow-hidden border border-neutral-800">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  )
}

export default function AboutContent({ about }: { about: Dictionary['about'] }) {
  return (
    <section id="about" className="bg-black border-t border-neutral-900 scroll-mt-12 md:scroll-mt-16">
      {/* Header */}
      <div className="pt-12 md:pt-20 pb-2 md:pb-4 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-wide mb-3">
            {about.title}
          </h2>
          <p className="text-base md:text-lg text-neutral-400">{about.subtitle}</p>
          <div className="w-16 h-px bg-brass/60 mx-auto mt-6"></div>
        </div>
      </div>

      {/* Story */}
      <div className="py-10 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-full space-y-4 order-2 md:order-1">
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-wide mb-4">
                {about.story.title}
              </h3>
              {about.story.paragraphs.map((p) => (
                <p key={p} className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="w-full order-1 md:order-2">
              <AboutImage src="/about/sign.jpg" alt="Trust me I'm a barber" />
            </div>
          </div>
        </div>
      </div>

      {/* Specialization */}
      <div className="py-10 md:py-16 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-full">
              <AboutImage src="/about/tools.jpg" alt="GEN22 BarberShop tools" />
            </div>
            <div className="w-full space-y-4">
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-wide mb-4">
                {about.specialization.title}
              </h3>
              {about.specialization.paragraphs.map((p) => (
                <p key={p} className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {p}
                </p>
              ))}
              <div className="grid grid-cols-2 gap-2 md:gap-3 pt-2">
                {about.specialization.services.map((service) => (
                  <div
                    key={service}
                    className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-xl px-3 py-2.5 text-center text-sm font-semibold text-white transition-colors duration-300 hover:border-brass/60"
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
      </div>

      {/* Location */}
      <div className="py-10 md:py-16 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-full space-y-4 order-2 md:order-1">
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-wide mb-4">
                {about.location.title}
              </h3>
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
      </div>

      {/* Experience */}
      <div className="py-10 md:py-16 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-full">
              <AboutImage src="/about/station.jpg" alt="GEN22 BarberShop interior" />
            </div>
            <div className="w-full space-y-4">
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-wide mb-4">
                {about.experience.title}
              </h3>
              {about.experience.paragraphs.map((p) => (
                <p key={p} className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {p}
                </p>
              ))}
              <ul className="space-y-2 pt-1">
                {about.experience.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm md:text-base text-gray-300">
                    <span className="text-brass mt-0.5">✔</span>
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
      </div>

      {/* Thanks */}
      <div className="py-10 md:py-16 px-4 border-t border-neutral-900">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold tracking-wide mb-2">
            {about.thanks.title}
          </h3>
          {about.thanks.paragraphs.map((p) => (
            <p key={p} className="text-sm md:text-base text-gray-300 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
