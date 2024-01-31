// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
      },
    ],
    unoptimized: true,
  },
  output: 'export', // ตั้งค่าการใช้งานเป็น Static HTML Export
};

export default nextConfig;
