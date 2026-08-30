import { useTranslations } from "next-intl";
import { ElementType } from "react";

import PortfolioChip from "@/components/ui/PortfolioChip";
import { type ICertificationSiteSettings } from "@/utils/config/siteSettings";

import { IconArrowUpRight } from "../../icons/ArrowUpRight";
import PortfolioLink from "../../ui/PortfolioLink";
import CardTitle from "../../ui/titles/CardTitle";
import { DateDisplay } from "./DateDisplay";

export type ICertification = {
  skills: string[];
} & ICertificationSiteSettings;
export type ICertificationContainer = {
  cardTitleAs?: ElementType;
  certificate: ICertification;
  showSkills?: boolean;
};

export default function CertificationContainer({
  cardTitleAs,
  certificate,
  showSkills,
}: ICertificationContainer) {
  const t = useTranslations("Components.CertificationContainer");

  const certificationContainerShowSkills = showSkills ?? false;
  const certificationContainerCardTitleAs = cardTitleAs ?? "h3";

  return (
    <PortfolioLink
      ariaLabel={t("ariaLabel", { certificate: certificate.certificate.name })}
      classNames="flex-1 flex h-auto w-full"
      content={
        <div className="w-full h-full p-6 rounded-lg bg-surface border border-transparent hover:border-accent hover:border-solid flex flex-col gap-3">
          <div className="flex flex-row justify-between gap-6">
            <CardTitle
              as={certificationContainerCardTitleAs}
              text={certificate.certificate.name}
            />
            <div>
              <IconArrowUpRight />
            </div>
          </div>
          <div className="leading-normal text-muted">
            <DateDisplay
              expiryDate={certificate.expiryDate}
              grantDate={certificate.grantDate}
            />
          </div>
          {certificationContainerShowSkills && (
            <>
              <label>{t("skills").toUpperCase()}</label>
              <div className="flex flex-row flex-wrap gap-x-3 gap-y-1.5">
                {certificate.skills.map((skill) => (
                  <PortfolioChip
                    classNames="px-1.5 py-0.5"
                    key={`${certificate.slug}-${skill}`}
                    size="sm"
                    text={skill}
                    variant="neutral"
                  />
                ))}
              </div>
            </>
          )}
        </div>
      }
      href={certificate.certificate.url}
      linkIsExternal
      noUnderline
    />
  );
}
