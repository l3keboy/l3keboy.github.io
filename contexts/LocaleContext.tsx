"use client";
import { siteSettings } from "@/utils/config/siteSettings";
import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ReactNode } from "react";
import { useCookies } from "react-cookie";

// Interfaces
export interface ILocaleContext {
  locale: string;
  setLocale: ({ userPreferredLocale }: ISetLocale) => Promise<void>;
  resolveSupportedLocale: () => string;
}
export interface ISetLocale {
  userPreferredLocale: string;
}

// Context
export const LocaleContext = createContext<ILocaleContext>({
  locale: "en-US",
  setLocale: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  resolveSupportedLocale: function (): string {
    throw new Error("Function not implemented.");
  },
});

// Component
export default function LocaleContextProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const router = useRouter();

  const [cookies, setCookie] = useCookies(["LUKEHENDRIKS_NET_LOCALE"]);
  const [userLocale, setUserLocale] = useState<string>(
    cookies.LUKEHENDRIKS_NET_LOCALE ?? navigator.language,
  );

  const getLocale = useCallback(async () => {
    let localeCookie = cookies.LUKEHENDRIKS_NET_LOCALE;

    if (!localeCookie) {
      const browserLocale = navigator.language;
      setCookie("LUKEHENDRIKS_NET_LOCALE", browserLocale);
      localeCookie = browserLocale;
      router.refresh();
    }
    setUserLocale(localeCookie);
  }, [cookies.LUKEHENDRIKS_NET_LOCALE, router, setCookie]);

  const setLocale = useCallback(
    async ({ userPreferredLocale }: ISetLocale) => {
      setCookie("LUKEHENDRIKS_NET_LOCALE", userPreferredLocale);
      router.refresh();
      setUserLocale(userPreferredLocale);
    },
    [router, setCookie],
  );

  const resolveSupportedLocale = () => {
    return (siteSettings.siteMetadata.supportedSiteLanguages.find(
      (x) => x === userLocale,
    )?.length ?? 0 > 0)
      ? userLocale
      : siteSettings.siteMetadata.supportedSiteLanguages[0];
  };

  useEffect(() => {
    const run = async () => {
      getLocale();
    };
    run();
  }, [getLocale]);

  return (
    <LocaleContext.Provider
      value={{
        locale: userLocale,
        setLocale: setLocale,
        resolveSupportedLocale: resolveSupportedLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

// Hooks
export const useLocaleContext = () => useContext(LocaleContext);
