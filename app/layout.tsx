"use client";

// Import NextUI Provider
import { NextUIProvider } from "@nextui-org/react";

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
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
