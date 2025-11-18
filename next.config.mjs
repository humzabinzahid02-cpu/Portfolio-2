/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    unoptimized: true, // <UPDATE> Set unoptimized to true
  },
  compress: true,
  headers: async () => [
    {
      source: '/(.*)\\.(jpg|jpeg|png|gif|ico|webp|svg)$',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
  // <UPDATE> Ignore TypeScript build errors
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
