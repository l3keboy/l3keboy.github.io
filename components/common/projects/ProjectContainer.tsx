import { type IProjectSiteSettings } from "@/utils/config/siteSettings";
import { useTranslations } from "next-intl";
import PortfolioLink from "../../ui/PortfolioLink";
import CardTitle from "../../ui/titles/CardTitle";
import PortfolioButton from "../../ui/PortfolioButton";
import { ElementType } from "react";
import ImageDisplay from "./ImageDisplay";

export type IProject = IProjectSiteSettings & {
  title: string;
  subtitle: string;
  description: string;
};
export type IProjectContainer = {
  project: IProject;
  bigIcon?: boolean;
  cardTitleAs?: ElementType;
};

export default function ProjectContainer({
  project,
  bigIcon,
  cardTitleAs,
}: IProjectContainer) {
  const t = useTranslations("Components.ProjectContainer");
  const tProjects = useTranslations("SiteSettings.Projects");

  const projectContainerBigIcon = bigIcon ?? false;
  const projectContainerCardTitleAs = cardTitleAs ?? "h3";

  return (
    <div className="w-full h-full p-6 rounded-lg bg-surface flex flex-col gap-3">
      <div className="flex flex-row justify-between gap-6 w-full relative">
        <CardTitle text={project.title} as={projectContainerCardTitleAs} />
        <ImageDisplay
          image={project.image}
          title={project.title}
          bigIcon={projectContainerBigIcon}
        />
      </div>
      <div className="text-muted flex flex-col gap-3">
        <label>
          {project.type} - {project.subtitle}
        </label>
      </div>
      <div className="flex flex-row gap-3 flex-wrap">
        {project.links
          .filter((x) => x.highlight)
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
