import type { NextConfig } from "next";

import bundleAnalyzer from "@next/bundle-analyzer";
import createNextIntlPlugin from "next-intl/plugin";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

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
      allowedDevOrigins: ["localhost"],
    }),
  };
};

module.exports = (phase: string) =>
  withBundleAnalyzer(
    withNextIntl(nextConfig(phase))
  );
