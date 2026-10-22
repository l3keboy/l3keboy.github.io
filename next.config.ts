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

// Baseline security headers for every response. HSTS isn't here: Vercel
// already sends it for the custom domain. A Content-Security-Policy is still
// to do (it needs nonces and room for the Vercel Analytics scripts).
const securityHeaders = [
  // Don't let browsers guess a response's type from its contents.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Other sites only see the origin when a visitor follows a link out.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Nothing on the site is meant to be embedded in another site's frame.
  { key: "X-Frame-Options", value: "DENY" },
  // Switch off browser features the site never uses.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig = (phase: string): NextConfig => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    experimental: {
      useTypeScriptCli: true,
    },
    poweredByHeader: false,
    reactCompiler: true,
    reactStrictMode: isDev,
    ...(isDev && {
      allowedDevOrigins: ["localhost", "192.168.254.203"],
    }),
    headers() {
      return [{ headers: securityHeaders, source: "/:path*" }];
    },
    images: {
      remotePatterns: [
        {
          hostname: "github.com",
          protocol: "https",
        },
        {
          hostname: "solyra-coaching.nl",
          protocol: "https",
        },
        {
          hostname: "partio.app",
          protocol: "https",
        },
      ],
    },
    redirects() {
      return [
        siteSettings.siteMetadata.maintenance === true
          ? {
              destination: '/maintenance',
              permanent: false,
              source: '/((?!maintenance|cms|_next|api|favicon.ico).*)',
            }
          : null,
        siteSettings.siteMetadata.maintenance === false
          ? { destination: '/', permanent: false, source: '/maintenance' }
          : null,
      ].filter(Boolean) as never;
    },
  };
};

module.exports = (phase: string) =>
  withBundleAnalyzer(withNextIntl(nextConfig(phase)));