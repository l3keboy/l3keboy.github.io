import { type ICertificationSiteSettings } from "@/utils/config/siteSettings";
import CardTitle from "../../ui/titles/CardTitle";
import { useTranslations } from "next-intl";
import { IconArrowUpRight } from "../../icons/ArrowUpRight";
import PortfolioLink from "../../ui/PortfolioLink";
import { DateDisplay } from "./DateDisplay";
import PortfolioChip from "@/components/ui/PortfolioChip";
import { ElementType } from "react";

export type ICertification = ICertificationSiteSettings & {
  skills: string[];
};
export type ICertificationContainer = {
  certificate: ICertification;
  showSkills?: boolean;
  cardTitleAs?: ElementType;
};

export default function CertificationContainer({
  certificate,
  showSkills,
  cardTitleAs,
}: ICertificationContainer) {
  const t = useTranslations("Components.CertificationContainer");

  const certificationContainerShowSkills = showSkills ?? false;
  const certificationContainerCardTitleAs = cardTitleAs ?? "h3";

  return (
    <PortfolioLink
      ariaLabel={t("ariaLabel", { certificate: certificate.certificate.name })}
      noUnderline
      linkIsExternal
      classNames="flex-1 flex h-auto w-full"
      href={certificate.certificate.url}
      content={
        <div className="w-full h-full p-6 rounded-lg bg-surface border border-transparent hover:border-accent hover:border-solid flex flex-col gap-3">
          <div className="flex flex-row justify-between gap-6">
            <CardTitle
              text={certificate.certificate.name}
              as={certificationContainerCardTitleAs}
            />
            <div>
              <IconArrowUpRight />
            </div>
          </div>
          <div className="leading-normal text-muted">
            <DateDisplay
              grantDate={certificate.grantDate}
              expiryDate={certificate.expiryDate}
            />
          </div>
          {certificationContainerShowSkills && (
            <>
              <label>{t("skills")}</label>
              <div className="flex flex-row flex-wrap gap-x-3 gap-y-1.5">
                {certificate.skills.map((skill) => (
                  <PortfolioChip
                    size="sm"
                    color="accent"
                    variant="soft"
                    classNames="px-1.5 py-0.5"
                    text={skill}
                    key={`${certificate.slug}-${skill}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      }
    />
  );
}
