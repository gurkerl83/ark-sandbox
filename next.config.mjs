import bundleAnalyzer from '@next/bundle-analyzer';
import process from 'process';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    // optimizePackageImports: ['@ark-ui/react'],
  },
};

export default withBundleAnalyzer(nextConfig);
