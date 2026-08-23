import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // Helpers
  const cookieStore = await cookies();

  // Determine locale
  const locale =
    cookieStore.get("LUKEHENDRIKS_NET_LOCALE")?.value.slice(0, 2) || "en";

  return {
    locale,
    messages: (await import(`../../../translations/${locale}.json`)).default,
  };
});
