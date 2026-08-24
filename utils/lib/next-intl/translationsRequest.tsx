import { siteSettings } from "@/utils/config/siteSettings";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // Helpers
  const cookieStore = await cookies();

  // Determine locale
  const preferredLocale = cookieStore
    .get("LUKEHENDRIKS_NET_LOCALE")
    ?.value.slice(0, 2);
  const locale =
    siteSettings.siteMetadata.supportedSiteLanguages.filter(
      (x) => x === preferredLocale,
    ).length > 0
      ? siteSettings.siteMetadata.supportedSiteLanguages.filter(
          (x) => x === preferredLocale,
        )[0]
      : "en";

  return {
    locale,
    messages: (await import(`../../../translations/${locale}.json`)).default,
  };
});
