import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import PortfolioChip from "@/components/ui/PortfolioChip";
import HeadingTitle from "@/components/ui/titles/HeadingTitle";
import { siteSettings } from "@/utils/config/siteSettings";
import ProjectContainer, {
  type IProject,
} from "@/components/common/ProjectContainer";
import PortfolioLink from "@/components/ui/PortfolioLink";

export default function SectionProjectHighlights() {
  const t = useTranslations("Pages.Home.ProjectHighlights");
  const tProjects = useTranslations("SiteSettings.Projects");

  // #region Get highlighted certificates
  const siteSettingsHighlightedProjects = siteSettings.projects.filter(
    (x) => x.highlight === true,
  );

  const highlightedProjects: IProject[] = [];
  siteSettingsHighlightedProjects.forEach((project) => {
    highlightedProjects.push({
      ...project,
      title: tProjects(`${project.slug}.title`),
      subtitle: tProjects(`${project.slug}.subtitle`),
      description: tProjects(`${project.slug}.description`),
    });
  });
  // #endregion

  return (
    <ContentContainer showDivider>
      <div className="flex flex-col gap-6 mb-6">
        <div className=" flex flex-col gap-3">
          {/* #region Chip */}
          <PortfolioChip text={t("chip")} />
          {/* #endregion */}

          <HeadingTitle text={t("title")} />
        </div>
        <div className="flex flex-col md:flex-row items-stretch gap-3">
          {highlightedProjects.map((project) => {
            return (
              <ProjectContainer
                key={project.slug}
                project={project}
                showLanguages
                showTools
              />
            );
          })}
        </div>
      </div>
      <PortfolioLink
        href="/projects"
        content={t("viewAll")}
        classNames="text-center m-auto text-muted"
      />
    </ContentContainer>
  );
}
