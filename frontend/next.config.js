/** @type {import('next').NextConfig} */

const nextConfig  =  {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['https://api.diramazioni.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.diramazioni.net',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      }
    ],
  },
}

module.exports = nextConfig;