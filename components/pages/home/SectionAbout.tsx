"use client";
import { useMessages, useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import PortfolioChip from "@/components/ui/PortfolioChip";
import HeadingTitle from "@/components/ui/titles/HeadingTitle";

export default function SectionAbout() {
  const t = useTranslations("Pages.Home.About");
  const messages = useMessages();

  // #region About paragraphs
  const keysParagraphs = Object.keys(messages.Pages.Home.About.Paragraphs);

  const aboutParagraphs: string[] = [];
  keysParagraphs.forEach((key) => {
    aboutParagraphs.push(t(`Paragraphs.${key}`));
  });
  // #endregion

  // #region Background paragraphs
  const keysBackgroundParagraphs = Object.keys(
    messages.Pages.Home.About.Background.Paragraphs,
  );

  const aboutBackgroundParagraphs: string[] = [];
  keysBackgroundParagraphs.forEach((key) => {
    aboutBackgroundParagraphs.push(t(`Background.Paragraphs.${key}`));
  });
  // #endregion

  return (
    <ContentContainer showDivider>
      <div className="flex flex-col md:flex-row justify-between gap-24">
        <div className="flex flex-col gap-6 w-full md:w-[85%]">
          <div className=" flex flex-col gap-3">
            {/* #region Chip */}
            <PortfolioChip text={t("chip")} />
            {/* #endregion */}

            <HeadingTitle text={t("title")} />
          </div>
          {aboutParagraphs.map((paragraph, idx) => {
            return (
              <label key={idx} className="text-muted">
                {paragraph}
              </label>
            );
          })}
        </div>
        <div className="grow flex flex-col gap-3">
          {/* #region Chip */}
          <PortfolioChip text={t("Background.chip")} />
          {/* #endregion */}

          {aboutBackgroundParagraphs.map((paragraph, idx) => {
            return (
              <label key={idx} className="text-muted">
                {paragraph}
              </label>
            );
          })}
        </div>
      </div>
    </ContentContainer>
  );
}
