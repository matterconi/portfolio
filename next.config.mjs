import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(nextConfig, {
  org: 'mm-d2',
  project: 'javascript-nextjs',
  authToken: process.env.SENTRY_AUTH_TOKEN, // Ensure the token is pulled from environment variables

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  widenClientFileUpload: true,
  reactComponentAnnotation: { enabled: true },
  tunnelRoute: '/monitoring',
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
