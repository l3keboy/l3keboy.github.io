import { useTranslations } from "next-intl";
import { ElementType } from "react";

import { type IProjectSiteSettings } from "@/utils/config/siteSettings";

import PortfolioButton from "../../ui/PortfolioButton";
import PortfolioLink from "../../ui/PortfolioLink";
import CardTitle from "../../ui/titles/CardTitle";
import ImageDisplay from "./ImageDisplay";

export type IProjectContainer = {
  bigIcon?: boolean;
  cardTitleAs?: ElementType;
  project: IProjectSiteSettings;
};

export default function ProjectContainer({
  bigIcon,
  cardTitleAs,
  project,
}: IProjectContainer) {
  const t = useTranslations("Components.ProjectContainer");
  const tProjects = useTranslations("SiteSettings.Projects");

  const projectContainerBigIcon = bigIcon ?? false;
  const projectContainerCardTitleAs = cardTitleAs ?? "h3";

  return (
    <div className="w-full h-full p-6 rounded-lg bg-surface flex flex-col gap-3">
      <div className="flex flex-row justify-between gap-6 w-full relative">
        <CardTitle
          as={projectContainerCardTitleAs}
          text={tProjects(`${project.slug}.title`)}
        />
        <ImageDisplay
          bigIcon={projectContainerBigIcon}
          image={project.image}
          title={tProjects(`${project.slug}.title`)}
        />
      </div>
      <div className="text-muted flex flex-col gap-3">
        <label>
          {project.type} - {tProjects(`${project.slug}.subtitle`)}
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
                content={
                  <PortfolioButton
                    content={tProjects(`${project.slug}.Links.${link.slug}`)}
                    variant={link.highlight ? "primary" : "outline"}
                  />
                }
                href={link.url}
                key={`${project.slug}-${link.slug}`}
                linkIsExternal
                noUnderline
                disableAnimation
              />
            );
          })}

        <PortfolioLink
          ariaLabel={t("ariaLabel", {
            project: `${project.slug}`,
          })}
          content={
            <PortfolioButton
              content={t("projectDetails")}
              key={project.slug}
              variant="tertiary"
            />
          }
          href={`/projects/${project.slug}`}
          noUnderline
          disableAnimation
        />
      </div>
    </div>
  );
}
