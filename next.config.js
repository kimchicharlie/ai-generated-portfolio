/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    domains: [],
    unoptimized: true,
  },
};

module.exports = nextConfig;
