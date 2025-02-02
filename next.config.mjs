/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [`${process.env.DOMAIN}`, 'imgur.com', 'picsum.photos']
  },
};

export default nextConfig;
