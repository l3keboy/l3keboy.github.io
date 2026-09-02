"use client";
// ! Client component because google tag manager is client side script

import { GoogleTagManager as NextGoogleTagManager } from "@next/third-parties/google";

export default function GoogleAnalytics() {
  if (!process.env.NEXT_PUBLIC_GTM_ID) return null;
  return <NextGoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />;
}
