import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  webpack: config => {
    config.watchOptions = {
      ignored: [
        '**/node_modules',
        '**/.git',
        '**/.next',
        '**/Application Data',
      ],
    };

    return config;
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
