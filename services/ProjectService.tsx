import {
  type IProjectSiteSettings,
  siteSettings,
} from "@/utils/config/siteSettings";

export class ProjectService {
  static getAllProjects = (): IProjectSiteSettings[] => {
    return siteSettings.projects;
  };

  static getProjectBySlug = (slug: string): IProjectSiteSettings | null => {
    return (
      siteSettings.projects.find((project) => project.slug === slug) ?? null
    );
  };

  static getHighlightedProjects = (): IProjectSiteSettings[] => {
    return siteSettings.projects.filter((project) => project.highlight);
  };
}
