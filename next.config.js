const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  output: 'export', // 🔹 Enables static export for GitHub Pages
  basePath: '/your-repo-name', // 🔹 IMPORTANT: Set this to your GitHub repo name
  trailingSlash: true, // 🔹 Ensures paths end with "/"
  images: {
    unoptimized: true, // 🔹 Required for GitHub Pages (prevents image optimization issues)
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // 🔹 Support MDX if used
})

module.exports = nextConfig
