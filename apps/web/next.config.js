/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    if (dev) {
      // HMR (Hot Module Replacement) 설정
      config.watchOptions = {
        ignored: [
          '**/node_modules',
          '**/.git',
          '**/.next',
          '**/.turbo',
          '**/dist',
          '**/packages/**',
          '**/apps/storybook/**',
        ],
      };
    }
    return config;
  },
};

export default nextConfig;
