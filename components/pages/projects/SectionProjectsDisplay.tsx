import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import { ProjectService } from "@/services/ProjectService";

import ProjectContainer from "../../common/projects/ProjectContainer";

export default function SectionProjectsDisplay() {
  const t = useTranslations("Pages.Projects.ProjectsDisplay");

  // #region Get projects
  const projects = ProjectService.getProjects({});
  // #endregion

  // TODO Filtering -> Highlighted, Source type (Open/Closed), Tools used?

  return (
    <ContentContainer>
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
