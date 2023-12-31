/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    experimental: {
        // serverActions: true,
    },
      typescript: {
   ignoreBuildErrors: true,
    },
    eslint: {
        // ignoreDuringBuilds: true,
    },
    
     transpilePackages: ['@/components'],
    swcMinify: true,
}

module.exports = nextConfig
