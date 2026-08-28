import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import PortfolioChip from "@/components/ui/PortfolioChip";
import DisplayTitle from "@/components/ui/titles/DisplayTitle";

export default function SectionHero() {
  const t = useTranslations("Pages.Stack.Hero");

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
      </div>
    </ContentContainer>
  );
}
