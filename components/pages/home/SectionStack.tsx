import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import PortfolioChip from "@/components/ui/PortfolioChip";
import HeadingTitle from "@/components/ui/titles/HeadingTitle";
import { siteSettings } from "@/utils/config/siteSettings";
import PortfolioLink from "@/components/ui/PortfolioLink";

export default function SectionStack() {
  const t = useTranslations("Pages.Home.Stack");
  const tStack = useTranslations("SiteSettings.Stack");

  return (
    <ContentContainer showDivider>
      <div className="flex flex-col gap-6 mb-6">
        <div className=" flex flex-col gap-3">
          {/* #region Chip */}
          <PortfolioChip text={t("chip")} />
          {/* #endregion */}

          <HeadingTitle text={t("title")} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-y-6 gap-x-3">
          {siteSettings.stack.length > 0 &&
            siteSettings.stack.map((stack) => (
              <div className="grow" key={stack.slug}>
                <label className="text-muted">
                  {tStack(`Categories.${stack.slug}`).toUpperCase()}
                </label>
                <div className="flex flex-row flex-wrap gap-1.5 mt-3">
                  {stack.tools.length > 0 &&
                    stack.tools
                      .filter((x) => x.highlighted)
                      .map((tool) => (
                        <PortfolioChip
                          key={`${stack.slug}-${tool.tool}`}
                          text={tool.tool}
                          variant="neutral"
                        />
                      ))}
                  {stack.tools.length <= 0 && <label>{t("noTools")}</label>}
                </div>
              </div>
            ))}
          {siteSettings.stack.length <= 0 && <label>{t("noStacks")}</label>}
        </div>
      </div>
      <PortfolioLink
        classNames="text-center m-auto text-muted"
        content={t("viewAll")}
        href="/stack"
      />
    </ContentContainer>
  );
}
