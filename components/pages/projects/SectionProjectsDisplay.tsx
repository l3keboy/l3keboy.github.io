import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import { ProjectService } from "@/services/ProjectService";

import ProjectContainer from "../../common/projects/ProjectContainer";
import { Technologies } from "@/utils/enums/Technologies";
import { SourceType } from "@/utils/enums/SourceType";
import ProjectsSort from "./ProjectsSort";

// Interfaces
export interface ISectionProjectDisplayParams {
  technology?: string;
  type?: string;
  highlight?: string;
}

export default function SectionProjectsDisplay({
  technology,
  type,
  highlight,
}: ISectionProjectDisplayParams) {
  const t = useTranslations("Pages.Projects.ProjectsDisplay");

  // #region Get projects
  const technologies = technology?.split(",") ?? [];
  const projects = ProjectService.getProjects({
    filters: {
      technologies: technologies as Technologies[],
      sourceType: type as SourceType | undefined,
      highlight: highlight === undefined ? undefined : highlight === "true",
    },
  });
  // #endregion

  return (
    <ContentContainer>
      <ProjectsSort />
      {projects.length <= 0 && <label>{t("noProjects")}</label>}
      {projects.length > 0 && (
        <div className="flex flex-col gap-6">
          {projects.length > 0 &&
            projects.map((project) => {
              return (
                <ProjectContainer
                  bigIcon
                  cardTitleAs="h2"
                  key={project.slug}
                  project={project}
                />
              );
            })}
        </div>
      )}
    </ContentContainer>
  );
}
