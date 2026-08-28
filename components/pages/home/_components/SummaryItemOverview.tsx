"use client";
// ! Locales are client side, therefore use client

import { useLocaleContext } from "@/contexts/LocaleContext";
import { useMessages, useTranslations } from "next-intl";
import SummaryItem, { ISummaryItem } from "./SummaryItem";
import { siteSettings } from "@/utils/config/siteSettings";

export default function SummaryItemOverview() {
  const t = useTranslations("Pages.Home.Hero");
  const { resolveSupportedLocale } = useLocaleContext();
  const messages = useMessages();

  // #region Get summary items
  const keys = Object.keys(messages.Pages.Home.Hero.Summary);

  const summaryItems: ISummaryItem[] = [];
  keys.forEach((key) => {
    summaryItems.push({
      description: t(`Summary.${key}.description`, {
        education: siteSettings.currentEducation,
        employee: siteSettings.currentEmployee,
        languages: siteSettings.currentLanguages
          .map((x) =>
            new Intl.DisplayNames([resolveSupportedLocale()], {
              type: "language",
            }).of(x),
          )
          .join(", "),
        location:
          new Intl.DisplayNames([resolveSupportedLocale()], {
            type: "region",
          }).of(siteSettings.currentLocation) ?? "",
      }),
      key: parseInt(key),
      title: t(`Summary.${key}.title`),
    });
  });
  // #endregion
  return (
    <div className="flex flex-col md:flex-row gap-0">
      {summaryItems.map((item) => {
        return <SummaryItem item={item} key={item.key} />;
      })}
    </div>
  );
}
