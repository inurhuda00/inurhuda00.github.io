/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer")

let envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true

const nextConfig = {
  experimental: {
    webpackBuildWorker: true,
  },
  output: process.env.NODE_ENV !== "production" ? undefined : "export",
  images: {
    unoptimized: envImageUnoptimize,
    domains: ["avatar.vercel.sh"],
  },
  swcMinify: true,
}

module.exports = withContentlayer(nextConfig)
