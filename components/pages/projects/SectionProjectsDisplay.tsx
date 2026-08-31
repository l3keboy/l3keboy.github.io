import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import { ProjectService } from "@/services/ProjectService";
import { SourceType } from "@/utils/enums/SourceType";
import { Technologies } from "@/utils/enums/Technologies";

import ProjectContainer from "../../common/projects/ProjectContainer";
import ProjectsSort from "./ProjectsSort";

// Interfaces
export interface ISectionProjectDisplayParams {
  highlight?: string;
  technology?: string;
  type?: string;
}

export default function SectionProjectsDisplay({
  highlight,
  technology,
  type,
}: ISectionProjectDisplayParams) {
  const t = useTranslations("Pages.Projects.ProjectsDisplay");

  // #region Get projects
  const technologies = technology?.split(",") ?? [];
  const projects = ProjectService.getProjects({
    filters: {
      highlight: highlight === undefined ? undefined : highlight === "true",
      sourceType: type as SourceType | undefined,
      technologies: technologies as Technologies[],
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
