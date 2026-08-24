"use client";
// ! Themes are only relevant on the client side, therefore use client

import { ThemeProvider } from "next-themes";

import { type IPortfolioLayout } from "@/types/components/layouts/PortfolioLayout";

export default function PortfolioThemeLayout({ children }: IPortfolioLayout) {
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
