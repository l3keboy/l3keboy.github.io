import {
  type IProjectSiteSettings,
  siteSettings,
} from "@/utils/config/siteSettings";
import { SourceType } from "@/utils/enums/SourceType";
import { Technologies } from "@/utils/enums/Technologies";

// Interfaces
export interface ProjectFilters {
  highlight?: boolean;
  sourceType?: SourceType;
  technologies?: Technologies[];
}
export interface ProjectQueryOptions {
  filters?: ProjectFilters;
}

export class ProjectService {
  static getHighlightedProjects = (): IProjectSiteSettings[] => {
    return siteSettings.projects.filter((project) => project.highlight);
  };

  static getProjectBySlug = (slug: string): IProjectSiteSettings | null => {
    return (
      siteSettings.projects.find((project) => project.slug === slug) ?? null
    );
  };

  static getProjects = ({
    filters,
  }: ProjectQueryOptions = {}): IProjectSiteSettings[] => {
    let projects = [...siteSettings.projects];

    // Filtering
    if (filters?.sourceType) {
      projects = projects.filter(
        (project) => project.type === filters.sourceType,
      );
    }

    if (filters?.technologies?.length) {
      projects = projects.filter((project) =>
        filters.technologies!.every((technology) =>
          project.technologies.includes(technology),
        ),
      );
    }

    if (filters?.highlight !== undefined) {
      projects = projects.filter(
        (project) => project.highlight === filters.highlight,
      );
    }

    return projects;
  };
}
