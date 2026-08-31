"use client";
// ! Client side component because contexts can only be made client side

import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useState } from "react";
import { ReactNode } from "react";
import { useCookies } from "react-cookie";

import { siteSettings } from "@/utils/config/siteSettings";

// Interfaces
export interface ILocaleContext {
  setLocale: ({ userPreferredLocale }: ISetLocale) => Promise<void>;
}
export interface ISetLocale {
  userPreferredLocale: string;
}

// Context
export const LocaleContext = createContext<ILocaleContext>({
  setLocale: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
});

// Component
export default function LocaleContextProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const router = useRouter();

  const [_, setCookie] = useCookies(["LUKEHENDRIKS_NET_LOCALE"]);

  const setLocale = useCallback(
    async ({ userPreferredLocale }: ISetLocale) => {
      const supportedLocales = siteSettings.siteMetadata.supportedSiteLanguages;
      if (!supportedLocales.includes(userPreferredLocale)) {
        return;
      }
      setCookie("LUKEHENDRIKS_NET_LOCALE", userPreferredLocale, { path: "/" });
      router.refresh();
    },
    [router, setCookie],
  );

  return (
    <LocaleContext.Provider
      value={{
        setLocale: setLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

// Hooks
export const useLocaleContext = () => useContext(LocaleContext);
