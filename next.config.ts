import type { NextConfig } from "next";

import bundleAnalyzer from "@next/bundle-analyzer";
import createNextIntlPlugin from "next-intl/plugin";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

import { siteSettings } from "./utils/config/siteSettings";

const withNextIntl = createNextIntlPlugin(
  "./utils/lib/next-intl/translationsRequest.tsx"
);

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = (phase: string): NextConfig => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    output: "standalone",
    reactStrictMode: false,
    ...(isDev && {
      allowedDevOrigins: ["localhost", "192.168.254.203"],
    }),
    redirects() {
      return [
        siteSettings.maintenance === true
          ? {
              destination: '/maintenance',
              permanent: false,
              source: '/((?!maintenance|cms|_next|api|favicon.ico).*)',
            }
          : null,
        siteSettings.maintenance === false
          ? { destination: '/', permanent: false, source: '/maintenance' }
          : null,
      ].filter(Boolean) as never;
    },
  };
};

module.exports = (phase: string) =>
  withBundleAnalyzer(withNextIntl(nextConfig(phase)));