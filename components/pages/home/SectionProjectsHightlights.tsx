import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import ProjectContainer from "@/components/common/projects/ProjectContainer";
import PortfolioChip from "@/components/ui/PortfolioChip";
import PortfolioLink from "@/components/ui/PortfolioLink";
import HeadingTitle from "@/components/ui/titles/HeadingTitle";
import { ProjectService } from "@/services/ProjectService";

export default function SectionProjectHighlights() {
  const t = useTranslations("Pages.Home.ProjectHighlights");

  // #region Get highlighted certificates
  const highlightedProjects = ProjectService.getHighlightedProjects();
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
          {highlightedProjects.length > 0 &&
            highlightedProjects.map((project) => {
              return <ProjectContainer key={project.slug} project={project} />;
            })}
          {highlightedProjects.length <= 0 && <label>{t("noProjects")}</label>}
        </div>
      </div>
      {highlightedProjects.length > 0 && (
        <PortfolioLink
          classNames="text-center m-auto text-muted"
          content={t("viewAll")}
          href="/projects"
        />
      )}
    </ContentContainer>
  );
}
