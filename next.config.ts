import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['i.scdn.co', 'spotifycdn.com', 'mosaic.scdn.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.scdn.co*',
      },
      {
        protocol: 'https',
        hostname: '*.spotifycdn.com*',
      },
    ],
  },
};

export default nextConfig;
