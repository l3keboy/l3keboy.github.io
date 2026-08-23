"use client";
// ! Themes are only relevant on the client side, therefore use client

import { ThemeProvider } from "next-themes";
import { type PortfolioLayout } from "@/types/components/layouts/PortfolioLayout";

export default function PortfolioThemeLayout({ children }: PortfolioLayout) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
