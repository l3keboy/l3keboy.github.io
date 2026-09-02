"use client";
// ! use client because cookies are client side

import Script from "next/script";

export default function Cookiebot() {
  if (!process.env.NEXT_PUBLIC_COOKIEBOT_ID) return null;
  return (
    // * Warning disabled because this is rendered in root layout.tsx
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script
      data-blockingmode="auto"
      data-cbid={process.env.NEXT_PUBLIC_COOKIEBOT_ID}
      id="cookiebot"
      src="https://consent.cookiebot.com/uc.js"
      strategy="beforeInteractive"
    />
  );
}
