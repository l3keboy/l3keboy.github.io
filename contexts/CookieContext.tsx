"use client";
// ! Client side component because contexts can only be made client side

import { CookiesProvider } from "react-cookie";

export default function CookieContext({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CookiesProvider>{children}</CookiesProvider>;
}
