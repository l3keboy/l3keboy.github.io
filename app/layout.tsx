"use client";

// Import NextUI Provider
import { HeroUIProvider } from "@heroui/react";

// Import styles
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Luke Hendriks</title>
      <body>
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
