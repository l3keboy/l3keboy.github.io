import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import PortfolioButton from "@/components/ui/PortfolioButton";
import PortfolioChip from "@/components/ui/PortfolioChip";
import PortfolioLink from "@/components/ui/PortfolioLink";
import DisplayTitle from "@/components/ui/titles/DisplayTitle";
import { type IProjectSiteSettings } from "@/utils/config/siteSettings";
import ImageDisplay from "@/components/common/projects/ImageDisplay";

// Interfaces
export interface ISectionHero {
  project: IProjectSiteSettings;
}

export default function SectionHero({ project }: ISectionHero) {
  const t = useTranslations("SiteSettings.Projects");

  return (
    <ContentContainer showDivider>
      <div className="flex flex-col gap-6 mb-6">
        <div className="flex flex-row justify-between gap-12 relative">
          <div className="flex flex-col gap-3 ">
            {/* #region Chip */}
            <PortfolioChip text={t(`${project.slug}.subtitle`)} />
            {/* #endregion */}

            <DisplayTitle
              classNames="md:max-w-[50%]"
              text={t(`${project.slug}.title`)}
            />
          </div>
          <ImageDisplay
            bigIcon
            fullIcon
            title={t(`${project.slug}.title`)}
            image={project.image}
          />
        </div>
        <label className="md:max-w-[45%] text-muted">
          {t(`${project.slug}.description`)}
        </label>
        <div className="flex flex-row gap-3">
          <PortfolioLink
            content={
              <PortfolioButton
                content={t(
                  `${project.slug}.Links.${project.links.filter((x) => x.highlight)[0].slug}`,
                )}
              />
            }
            href={project.links.filter((x) => x.highlight)[0].url}
            linkIsExternal
            noUnderline
          />
        </div>
      </div>
    </ContentContainer>
  );
}
