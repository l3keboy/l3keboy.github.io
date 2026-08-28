import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import { type IProjectSiteSettings } from "@/utils/config/siteSettings";
import PortfolioChip from "@/components/ui/PortfolioChip";
import PortfolioLink from "@/components/ui/PortfolioLink";
import PortfolioButton from "@/components/ui/PortfolioButton";

// Interfaces
export interface ISectionHero {
  project: IProjectSiteSettings;
}

export default function SectionProjectDetails({ project }: ISectionHero) {
  const t = useTranslations("Pages.Projects.Slug.ProjectDetails");
  const tProjects = useTranslations("SiteSettings.Projects");

  return (
    <ContentContainer>
      <div className="grid grid-cols-1 gap-y-6 gap-x-3">
        <div>
          <label className="text-muted">{t("languages").toUpperCase()}</label>
          <div className="flex flex-row flex-wrap gap-1.5 mt-3">
            {project.languages.length > 0 &&
              project.languages.map((language) => (
                <PortfolioChip
                  key={`${project.slug}-${language}`}
                  text={language}
                  variant="neutral"
                />
              ))}
            {project.languages.length <= 0 && <label>{t("noLanguages")}</label>}
          </div>
        </div>
        <div>
          <label className="text-muted">{t("tools").toUpperCase()}</label>
          <div className="flex flex-row flex-wrap gap-1.5 mt-3">
            {project.tools.length > 0 &&
              project.tools.map((tool) => (
                <PortfolioChip
                  key={`${project.slug}-${tool}`}
                  text={tool}
                  variant="neutral"
                />
              ))}
            {project.languages.length <= 0 && <label>{t("noTools")}</label>}
          </div>
        </div>
        <div>
          <label className="text-muted">{t("links").toUpperCase()}</label>
          <div className="flex flex-row flex-wrap gap-1.5 mt-3">
            {project.links
              .filter((x) => x.highlight === false)
              .map((link) => {
                return (
                  <PortfolioLink
                    ariaLabel={t("ariaLabel", {
                      project: `${project.slug} ${link.slug}`,
                    })}
                    content={
                      <PortfolioButton
                        content={tProjects(
                          `${project.slug}.Links.${link.slug}`,
                        )}
                        variant={link.highlight ? "primary" : "tertiary"}
                      />
                    }
                    href={link.url}
                    key={`${project.slug}-${link.slug}`}
                    linkIsExternal
                    noUnderline
                  />
                );
              })}
            {project.links.filter((x) => x.highlight === false).length <= 0 && (
              <label>{t("noLinks")}</label>
            )}
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}
