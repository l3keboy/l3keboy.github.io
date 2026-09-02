"use client";
// ! Client component because google consent mode is client side script

import Script from "next/script";

export default function GoogleConsentModeV2() {
  return (
    // * warning disabled because this is loaded directly into body in layout.tsx
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script id="google-consent-mode" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];

        function gtag(){
          window.dataLayer.push(arguments);
        }

        gtag('consent', 'default', {
          ad_storage: 'denied',
          analytics_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          functionality_storage: 'denied',
          personalization_storage: 'denied',
          security_storage: 'granted',
          wait_for_update: 500
        });
      `}
    </Script>
  );
}
