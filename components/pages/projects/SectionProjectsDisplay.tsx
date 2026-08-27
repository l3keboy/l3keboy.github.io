"use client";
import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import { siteSettings } from "@/utils/config/siteSettings";
import { type IProject } from "../home/_components/ProjectContainer";

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

  return (
    <ContentContainer>
      {projects.length <= 0 && <label>{t("noProjects")}</label>}
      {projects.length > 0 && <div></div>}
    </ContentContainer>
  );
}
