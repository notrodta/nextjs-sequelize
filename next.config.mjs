/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['sequelize'],
  },
  webpack: (config) => {
    config.ignoreWarnings = [
      {
        module: /sequelize/, // A RegExp
      },
    ];
    return config;
  },
};

export default nextConfig;
