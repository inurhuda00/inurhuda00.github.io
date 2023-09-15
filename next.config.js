/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer")

let envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true

const nextConfig = {
  output: process.env.NODE_ENV !== "production" ? undefined : "export",
  images: {
    unoptimized: envImageUnoptimize,
    domains: [
      "cdn.dribbble.com",
      "lh3.googleusercontent.com",
      "ui-avatars.com",
      "localhost",
      "avatar.vercel.sh",
    ],
  },
  swcMinify: true,
}

module.exports = withContentlayer(nextConfig)
