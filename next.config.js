/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['m.media-amazon.com', 'avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
