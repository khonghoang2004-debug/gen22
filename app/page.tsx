import Navbar from './components/Navbar'
import Logo from './components/Logo'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Split Layout */}
      <section id="hero" className="relative bg-black">
        {/* Image Section - Compact Height */}
        <div className="relative h-[24vh] md:h-[28vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat object-cover"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2070&auto=format&fit=crop)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black"></div>
          </div>
        </div>

        {/* Content Block - Pulled Up More */}
        <div className="relative -mt-14 md:-mt-16 bg-black rounded-t-3xl shadow-2xl px-5 py-4 md:px-8 md:py-6">
          <div className="max-w-[320px] mx-auto">
            <div className="flex flex-col items-center text-center gap-2">
              {/* Logo */}
              <Logo size="hero" className="cursor-default" />

              {/* Subtitle */}
              <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-[320px] mx-auto mt-2 mb-3">
                Precizní střih. Moderní styl. Skutečný zážitek.
              </p>

              {/* Primary CTA Button */}
              <a
                href="https://gen22barbershop.reservio.com/booking"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-[320px] bg-white text-black py-3 text-lg font-semibold rounded-xl shadow-lg active:scale-95 transition-all duration-200 text-center"
              >
                Rezervovat termín
              </a>

              {/* Trust Line */}
              <p className="text-xs text-gray-500 mt-1 text-center">
                ✔ Rezervace během 30 sekund
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cenik" className="py-12 md:py-20 px-4 bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-wide mb-4">
              Ceník služeb
            </h2>
            <div className="w-16 h-[1px] bg-gray-700 mx-auto"></div>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Pánský střih */}
            <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-2xl p-5 transition-all duration-300 hover:border-white/40 hover:shadow-lg hover:scale-[1.02] active:scale-95">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">Pánský střih</h3>
                <div className="text-lg font-bold text-white whitespace-nowrap">
                  550 Kč
                </div>
              </div>
              <div className="border-t border-neutral-800 my-3"></div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-[90%]">
                nápoj zdarma, konzultace, střih, úprava obočí, mytí vlasů, styling
              </p>
            </div>

            {/* Úprava vousů */}
            <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-2xl p-5 transition-all duration-300 hover:border-white/40 hover:shadow-lg hover:scale-[1.02] active:scale-95">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">Úprava vousů</h3>
                <div className="text-lg font-bold text-white whitespace-nowrap">
                  400 Kč
                </div>
              </div>
              <div className="border-t border-neutral-800 my-3"></div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-[90%]">
                nápoj zdarma, konzultace, holení vousů, styling vousů
              </p>
            </div>

            {/* Pánský střih + vousy - BEST VALUE */}
            <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-2xl p-5 transition-all duration-300 hover:border-white/40 hover:shadow-lg hover:scale-[1.02] active:scale-95 relative">
              {/* Badge */}
              <div className="absolute -top-2 -right-2">
                <span className="text-xs px-2 py-1 bg-white text-black rounded-full font-semibold">
                  Nejoblíbenější
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">Pánský střih + vousy</h3>
                <div className="text-lg font-bold text-white whitespace-nowrap">
                  950 Kč
                </div>
              </div>
              <div className="border-t border-neutral-800 my-3"></div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-[90%]">
                nápoj zdarma, konzultace, střih, holení vousů, kompletní styling
              </p>
            </div>

            {/* Dětský střih */}
            <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-2xl p-5 transition-all duration-300 hover:border-white/40 hover:shadow-lg hover:scale-[1.02] active:scale-95">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">Dětský střih</h3>
                <div className="text-lg font-bold text-white whitespace-nowrap">
                  450 Kč
                </div>
              </div>
              <div className="border-t border-neutral-800 my-3"></div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-[90%]">
                nápoj zdarma, konzultace, střih, styling
              </p>
            </div>

            {/* Střih strojkem */}
            <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-2xl p-5 transition-all duration-300 hover:border-white/40 hover:shadow-lg hover:scale-[1.02] active:scale-95">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">Střih strojkem</h3>
                <div className="text-lg font-bold text-white whitespace-nowrap">
                  500 Kč
                </div>
              </div>
              <div className="border-t border-neutral-800 my-3"></div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-[90%]">
                pouze strojkem, nápoj zdarma, konzultace, mytí, styling
              </p>
            </div>

            {/* Střih dlouhých vlasů */}
            <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-2xl p-5 transition-all duration-300 hover:border-white/40 hover:shadow-lg hover:scale-[1.02] active:scale-95">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">Střih dlouhých vlasů</h3>
                <div className="text-lg font-bold text-white whitespace-nowrap">
                  650 Kč
                </div>
              </div>
              <div className="border-t border-neutral-800 my-3"></div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-[90%]">
                vlasy delší než uši, nápoj zdarma, konzultace, střih, mytí, styling
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide leading-tight">
              Rezervujte si svůj termín ještě dnes
            </h2>
            <div className="pt-2 md:pt-4">
              <a
                href="https://gen22barbershop.reservio.com/booking"
                target="_blank"
                rel="noopener noreferrer"
                className="block md:inline-block w-full md:w-auto border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-xl md:rounded-full min-h-[48px] flex items-center justify-center hover:bg-white hover:text-black active:opacity-80 transition-all duration-300"
              >
                Rezervovat termín
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-12 md:py-20 px-4 bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 md:mb-16 tracking-wide">
            Kontakt
          </h2>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column - Contact Info */}
            <div className="space-y-4 md:space-y-8 w-full">
              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Vodičkova+34,+110+00+Nové+Město,+Czechia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 min-h-[48px] active:opacity-80 transition-opacity"
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="text-base md:text-lg font-semibold text-white hover:underline">
                  Vodičkova 34, 110 00 Nové Město, Czechia
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+420776107688"
                className="flex items-center gap-3 min-h-[48px] active:opacity-80 transition-opacity"
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="text-base md:text-lg font-semibold text-white hover:underline">
                  +420 776 107 688
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/dam.hoang2601"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 min-h-[48px] active:opacity-80 transition-opacity"
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-base md:text-lg font-semibold text-white hover:underline">
                  Facebook
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/barbergenz_filip"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 min-h-[48px] active:opacity-80 transition-opacity"
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-base md:text-lg font-semibold text-white hover:underline">
                  Instagram
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:gen22barbershop@gmail.com"
                className="flex items-center gap-3 min-h-[48px] active:opacity-80 transition-opacity"
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="text-base md:text-lg font-semibold text-white hover:underline">
                  gen22barbershop@gmail.com
                </div>
              </a>
            </div>

            {/* Right Column - Google Map */}
            <div className="rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 w-full mt-4 md:mt-0">
              <iframe
                src="https://www.google.com/maps?q=Vodičkova+34,+110+00+Nové+Město,+Czechia&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black text-white py-8 md:py-12 px-4 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <p className="text-base md:text-lg font-semibold">© 2026 GEN22 BarberShop</p>
          <p className="text-xs md:text-sm text-gray-400">Všechna práva vyhrazena</p>
        </div>
      </footer>

      {/* Sticky Mobile Booking Button */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <a
          href="https://gen22barbershop.reservio.com/booking"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white/95 backdrop-blur-md text-black text-center py-4 rounded-xl font-semibold shadow-xl min-h-[48px] flex items-center justify-center active:scale-95 transition-all duration-200"
        >
          Rezervovat termín
        </a>
      </div>
    </main>
  )
}
