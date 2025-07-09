/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // or 'export' if static
  trailingSlash: true,
  skipTrailingSlashRedirect: true
}

module.exports = nextConfig