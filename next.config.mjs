/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  webpack: (config) => {
    // react-pdf uses canvas in some paths; alias it away in the browser bundle
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;
