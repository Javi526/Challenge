/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static.glanacion.com", "arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com"]
  }
}

module.exports = nextConfig
