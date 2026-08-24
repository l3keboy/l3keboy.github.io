"use client";
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
export interface ISetTimeZone {
  userPreferredTimeZone: string;
}
export interface ITimeZoneContext {
  setTimeZone: ({ userPreferredTimeZone }: ISetTimeZone) => Promise<void>;
  userTimeZone: string;
}

// Context
export const TimeZoneContext = createContext<ITimeZoneContext>({
  setTimeZone: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  userTimeZone: "Europe/Amsterdam",
});

// Component
export default function TimeZoneContextProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const router = useRouter();

  const [cookies, setCookie] = useCookies(["LUKEHENDRIKS_NET_TIMEZONE"]);
  const [userTimeZone, setUserTimeZone] = useState<string>(
    cookies.LUKEHENDRIKS_NET_TIMEZONE ??
      Intl.DateTimeFormat().resolvedOptions().timeZone,
  );

  const getTimeZone = useCallback(async () => {
    let timeZoneCookie = cookies.LUKEHENDRIKS_NET_TIMEZONE;

    if (!timeZoneCookie) {
      const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setCookie("LUKEHENDRIKS_NET_TIMEZONE", browserTimezone);
      timeZoneCookie = browserTimezone;
      router.refresh();
    }
    setUserTimeZone(timeZoneCookie);
  }, [cookies.LUKEHENDRIKS_NET_TIMEZONE, router, setCookie]);

  const setTimeZone = useCallback(
    async ({ userPreferredTimeZone }: ISetTimeZone) => {
      setCookie("LUKEHENDRIKS_NET_TIMEZONE", userPreferredTimeZone);
      router.refresh();
      setUserTimeZone(userPreferredTimeZone);
    },
    [router, setCookie],
  );

  useEffect(() => {
    const run = async () => {
      getTimeZone();
    };
    run();
  }, [getTimeZone]);

  return (
    <TimeZoneContext.Provider
      value={{
        setTimeZone: setTimeZone,
        userTimeZone: userTimeZone,
      }}
    >
      {children}
    </TimeZoneContext.Provider>
  );
}

// Hooks
export const useTimeZoneContext = () => useContext(TimeZoneContext);
