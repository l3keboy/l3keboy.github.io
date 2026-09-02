"use client";
// ! use client because cookies are client side

import Script from "next/script";

export default function CookieDeclaration() {
  if (!process.env.NEXT_PUBLIC_COOKIEBOT_ID) return null;
  return (
    <>
      <Script
        id="cookie-declaration"
        src={`https://consent.cookiebot.com/${process.env.NEXT_PUBLIC_COOKIEBOT_ID}/cd.js`}
        strategy="afterInteractive"
      />
      <div id="CookieDeclaration" />
    </>
  );
}
