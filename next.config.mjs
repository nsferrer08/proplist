/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  /* config options here */
  reactCompiler: true,

  // Use the repo name for production, empty string for local
  basePath: isProd ? '/proplist' : '',
  // Optional: assetPrefix is often needed for images/CSS to load
  assetPrefix: isProd ? '/proplist/' : '',
  output: 'export', // Required for GitHub Pages
  images: {
    unoptimized: true, // Required for GitHub Pages
  },

};

export default nextConfig;
