import clsx from "clsx";

import "./globals.css";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { IBM_Plex_Mono, Source_Sans_3, Space_Grotesk } from "next/font/google";

import PortfolioRootLayout from "@/components/layouts/PortfolioRootLayout";

// Fonts
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--portfolio-font-family-primary",
  weight: ["700", "600", "500", "400", "300"],
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--portfolio-font-family-secondary",
  weight: ["900", "800", "700", "600", "500", "400", "300", "200"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--portfolio-font-family-mono",
  weight: ["700", "600", "500", "400", "300", "200", "100"],
});

// Metadata
export const metadata: Metadata = {
  description: "Portfolio website for Luke Hendriks",
  title: "lukehendriks.net",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();

  return (
    <html
      className={`${spaceGrotesk.variable} ${sourceSans3.variable} ${ibmPlexMono.variable} font-family-secondary antialiased`}
      lang={locale}
      suppressHydrationWarning
    >
      <body
        className={clsx(
          // Margins and paddings
          "m-0 p-0 px-6",
          // Heights and widths
          "min-h-dvh max-w-dvw",
          // Colors
          "bg-portfolio-background text-portfolio-text",
          // Fonts
          "text-base",
        )}
      >
        <NextIntlClientProvider>
          <PortfolioRootLayout>{children}</PortfolioRootLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
