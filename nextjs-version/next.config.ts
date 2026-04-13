import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
  },
  turbopack: {},

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui.shadcn.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },

  // Headers for better security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirects for better SEO
  async redirects() {
    return [
      {
        source: '/landing',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/dashboard/:path*',
        destination: 'http://127.0.0.1:8000/admin',
        permanent: true,
      },
      {
        source: '/dashboard-2/:path*',
        destination: 'http://127.0.0.1:8000/admin',
        permanent: true,
      },
      {
        source: '/auth/:path*',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/mail/:path*',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/tasks/:path*',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/chat/:path*',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/calendar/:path*',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/users/:path*',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
