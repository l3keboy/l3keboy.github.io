import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import { siteSettings } from "@/utils/config/siteSettings";

import PortfolioChip from "@/components/ui/PortfolioChip";

export default function SectionStackDisplay() {
  const t = useTranslations("Pages.Projects.ProjectsDisplay");
  const tStack = useTranslations("SiteSettings.Stack");

  return (
    <ContentContainer>
      <div className="grid grid-cols-1 gap-y-6 gap-x-3">
        {siteSettings.stack.length > 0 &&
          siteSettings.stack.map((stack) => (
            <div className="grow" key={stack.slug}>
              <label className="text-muted">
                {tStack(`Categories.${stack.slug}`).toUpperCase()}
              </label>
              <div className="flex flex-row flex-wrap gap-1.5 mt-3">
                {stack.tools.length > 0 &&
                  stack.tools.map((tool) => (
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
    </ContentContainer>
  );
}
