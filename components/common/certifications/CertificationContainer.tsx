import { useTranslations } from "next-intl";
import { ElementType } from "react";

import PortfolioChip from "@/components/ui/PortfolioChip";
import { type ICertificationSiteSettings } from "@/utils/config/siteSettings";

import { IconArrowUpRight } from "../../icons/ArrowUpRight";
import PortfolioLink from "../../ui/PortfolioLink";
import CardTitle from "../../ui/titles/CardTitle";
import { DateDisplay } from "./DateDisplay";

export type ICertificationContainer = {
  cardTitleAs?: ElementType;
  certificate: ICertificationSiteSettings;
  showSkills?: boolean;
};

export default function CertificationContainer({
  cardTitleAs,
  certificate,
  showSkills,
}: ICertificationContainer) {
  const t = useTranslations("Components.CertificationContainer");
  const tCertifications = useTranslations("SiteSettings.Certifications");

  const certificationContainerShowSkills = showSkills ?? false;
  const certificationContainerCardTitleAs = cardTitleAs ?? "h3";

  const skills = Object.values(
    tCertifications.raw(`${certificate.slug}.Skills`),
  ) as string[];

  return (
    <PortfolioLink
      ariaLabel={t("ariaLabel", { certificate: certificate.certificate.name })}
      classNames="flex-1 flex h-auto w-full transition-all duration-200 ease-[cubic-bezier(.16,1,.3,1)] data-hovered:-translate-y-0.5 data-pressed:translate-y-0 data-pressed:opacity-100 motion-reduce:transition-none motion-reduce:translate-y-0"
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
                {skills.map((skill) => (
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
      disableAnimation
    />
  );
}
