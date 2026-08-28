import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import PortfolioButton from "@/components/ui/PortfolioButton";
import PortfolioChip from "@/components/ui/PortfolioChip";
import PortfolioLink from "@/components/ui/PortfolioLink";
import DisplayTitle from "@/components/ui/titles/DisplayTitle";
import { siteSettings } from "@/utils/config/siteSettings";

export default function SectionHero() {
  const t = useTranslations("Pages.Certifications.Hero");

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
            content={<PortfolioButton content={t("Buttons.linkedIn")} />}
            href={siteSettings.urls.githubUrl}
            linkIsExternal
            noUnderline
          />
        </div>
      </div>
    </ContentContainer>
  );
}
