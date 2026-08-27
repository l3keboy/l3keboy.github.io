import { type IProjectSiteSettings } from "@/utils/config/siteSettings";
import { useTranslations } from "next-intl";
import PortfolioLink from "../ui/PortfolioLink";
import CardTitle from "../ui/titles/CardTitle";
import Image from "next/image";
import PortfolioButton from "../ui/PortfolioButton";

export type IProject = IProjectSiteSettings & {
  title: string;
  subtitle: string;
  description: string;
};
export type IProjectContainer = {
  project: IProject;
  showAllLinks?: boolean;
  showTools?: boolean;
  showLanguages?: boolean;
};

export default function ProjectContainer({
  project,
  showAllLinks,
}: IProjectContainer) {
  const t = useTranslations("Components.ProjectContainer");
  const tProjects = useTranslations("SiteSettings.Projects");

  const projectContainerShowAllLinks = showAllLinks ?? false;

  return (
    <div className="w-full h-full p-6 rounded-lg bg-surface flex flex-col gap-3">
      <div className="flex flex-row justify-between gap-6">
        <CardTitle text={project.title} />
        {project.image && (
          <Image
            height={32}
            width={32}
            src={project.image}
            alt={project.title}
            style={{ height: "auto" }}
          />
        )}
      </div>
      <div className="text-muted flex flex-col gap-3">
        <label>
          {project.type} - {project.subtitle}
        </label>
      </div>
      <div className="flex flex-row gap-3 flex-wrap">
        {project.links
          .filter((x) => (!projectContainerShowAllLinks ? x.highlight : true))
          .map((link) => {
            return (
              <PortfolioLink
                ariaLabel={t("ariaLabel", {
                  project: `${project.slug} ${link.slug}`,
                })}
                noUnderline
                linkIsExternal
                href={link.url}
                key={`${project.slug}-${link.slug}`}
                content={
                  <PortfolioButton
                    variant={link.highlight ? "primary" : "outline"}
                    content={tProjects(`${project.slug}.Links.${link.slug}`)}
                  />
                }
              />
            );
          })}

        <PortfolioLink
          ariaLabel={t("ariaLabel", {
            project: `${project.slug}`,
          })}
          noUnderline
          href={`/projects/${project.slug}`}
          content={
            <PortfolioButton
              key={project.slug}
              variant="tertiary"
              content={t("projectDetails")}
            />
          }
        />
      </div>
    </div>
  );
}
