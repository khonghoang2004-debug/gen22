/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:lang(cs|en|de)/about',
        destination: '/:lang#about',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
