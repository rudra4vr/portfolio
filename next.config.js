/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig 