"use client";
import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import { siteSettings } from "@/utils/config/siteSettings";
import ProjectContainer, { type IProject } from "../../common/ProjectContainer";

export default function SectionProjectsDisplay() {
  const t = useTranslations("Pages.Projects.ProjectsDisplay");
  const tProjects = useTranslations("SiteSettings.Projects");

  // #region Get projects
  const siteSettingsProjects = siteSettings.projects;

  const projects: IProject[] = [];
  siteSettingsProjects.forEach((project) => {
    projects.push({
      ...project,
      title: tProjects(`${project.slug}.title`),
      subtitle: tProjects(`${project.slug}.subtitle`),
      description: tProjects(`${project.slug}.description`),
    });
  });
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
                  key={project.slug}
                  project={project}
                  bigIcon
                />
              );
            })}
        </div>
      )}
    </ContentContainer>
  );
}
