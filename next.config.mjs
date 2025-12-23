/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  
  // next.config.js
  module.exports = {
    output: 'export',
    basePath: '/nxtjs-proplist',
    trailingSlash: true, // Recommended for GitHub Pages
  };
};

export default nextConfig;
