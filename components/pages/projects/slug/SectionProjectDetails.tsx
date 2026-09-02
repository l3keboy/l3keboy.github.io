import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import PortfolioButton from "@/components/ui/PortfolioButton";
import PortfolioChip from "@/components/ui/PortfolioChip";
import PortfolioLink from "@/components/ui/PortfolioLink";
import { type IProjectSiteSettings } from "@/utils/config/siteSettings";

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
          <label className="text-muted">
            {t("technologies").toUpperCase()}
          </label>
          <div className="flex flex-row flex-wrap gap-1.5 mt-3">
            {project.technologies.length > 0 &&
              project.technologies.map((technology) => (
                <PortfolioChip
                  key={`${project.slug}-${technology}`}
                  text={technology}
                  variant="neutral"
                />
              ))}
            {project.technologies.length <= 0 && (
              <label>{t("noTechnologies")}</label>
            )}
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
                    disableAnimation
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
