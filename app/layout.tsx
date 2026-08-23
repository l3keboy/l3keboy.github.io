import PortfolioRootLayout from "@/components/layouts/PortfolioRootLayout";
import "./globals.css";
import { getLocale } from "next-intl/server";
import { Space_Grotesk, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";

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

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${sourceSans3.variable} ${ibmPlexMono.variable} font-family-secondary antialiased`}
      suppressHydrationWarning
    >
      <body className="m-0 p-0 min-h-full min-w-full max-w-full bg-portfolio-background text-portfolio-text">
        <PortfolioRootLayout>{children}</PortfolioRootLayout>
      </body>
    </html>
  );
}
