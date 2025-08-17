import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Optionally, you can pass config to tell it where your messages live
const withNextIntl = createNextIntlPlugin();

const config: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
};

export default withNextIntl(config);
