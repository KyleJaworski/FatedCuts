const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export', // 🔹 Enables static export for GitHub Pages
  basePath: isProd ? '/FatedCuts' : '', // ✅ Use basePath only in production
  assetPrefix: isProd ? '/FatedCuts/' : '', // ✅ Fix assets only in production
  trailingSlash: true, // 🔹 Ensures paths end with "/"
  images: {
    unoptimized: true, // 🔹 Required for GitHub Pages (prevents image optimization issues)
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // 🔹 Support MDX if used
}

module.exports = nextConfig
