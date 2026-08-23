import CookieContext from "@/contexts/CookieContext";
import LocaleContextProvider from "@/contexts/LocaleContext";
import TimeZoneContextProvider from "@/contexts/TimezoneContext";
import { type PortfolioLayout } from "@/types/components/layouts/PortfolioLayout";
import PortfolioThemeLayout from "./PortfolioThemeLayout";

export default function PortfolioRootLayout({ children }: PortfolioLayout) {
  return (
    <PortfolioThemeLayout>
      <CookieContext>
        <LocaleContextProvider>
          <TimeZoneContextProvider>{children}</TimeZoneContextProvider>
        </LocaleContextProvider>
      </CookieContext>
    </PortfolioThemeLayout>
  );
}
