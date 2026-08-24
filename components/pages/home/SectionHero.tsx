"use client";
import { useMessages, useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import PortfolioButton from "@/components/ui/PortfolioButton";
import PortfolioChip from "@/components/ui/PortfolioChip";
import PortfolioLink from "@/components/ui/PortfolioLink";
import DisplayTitle from "@/components/ui/titles/DisplayTitle";
import { siteSettings } from "@/utils/config/siteSettings";

import SummaryItem, { type ISummaryItem } from "./_components/SummaryItem";
import { useLocaleContext } from "@/contexts/LocaleContext";

export default function SectionHero() {
  const t = useTranslations("Pages.Home.Hero");
  const { resolveSupportedLocale } = useLocaleContext();
  const messages = useMessages();

  // #region Get summary items
  const keys = Object.keys(messages.Pages.Home.Hero.Summary);

  const summaryItems: ISummaryItem[] = [];
  keys.forEach((key) => {
    summaryItems.push({
      description: t(`Summary.${key}.description`, {
        employee: siteSettings.currentEmployee,
        education: siteSettings.currentEducation,
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
    <ContentContainer showDivider>
      <div className="flex flex-col gap-6 mb-6">
        <div className="flex flex-col gap-3">
          {/* #region Chip */}
          <PortfolioChip text={t("chip")} />
          {/* #endregion */}

          <DisplayTitle
            classNames="md:max-w-[50%]"
            text={t.rich("title", {
              styled: (chunks) => <span className="text-accent">{chunks}</span>,
            })}
          />
        </div>
        <label className="md:max-w-[45%] text-muted">{t("description")}</label>
        <div className="flex flex-row gap-3">
          <PortfolioLink
            content={<PortfolioButton content={t("Buttons.viewProjects")} />}
            href={siteSettings.urls.githubUrl}
            linkIsExternal
            noUnderline
          />
          <PortfolioLink
            content={
              <PortfolioButton
                content={t("Buttons.getInTouch")}
                variant="outline"
              />
            }
            href={siteSettings.urls.linkedInUrl}
            linkIsExternal
            noUnderline
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-0">
        {summaryItems.map((item) => {
          return <SummaryItem item={item} key={item.key} />;
        })}
      </div>
    </ContentContainer>
  );
}
