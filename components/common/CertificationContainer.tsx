import { type ICertificationSiteSettings } from "@/utils/config/siteSettings";
import CardTitle from "../ui/titles/CardTitle";
import { useTranslations } from "next-intl";
import { useLocaleContext } from "@/contexts/LocaleContext";
import { IconArrowUpRight } from "../icons/ArrowUpRight";
import PortfolioLink from "../ui/PortfolioLink";

export type ICertification = ICertificationSiteSettings & {
  skills: string[];
};
export type ICertificationContainer = {
  certificate: ICertification;
  showSkills?: boolean;
};

export default function CertificationContainer({
  certificate,
  showSkills,
}: ICertificationContainer) {
  const { resolveSupportedLocale } = useLocaleContext();
  const t = useTranslations("Components.CertificationContainer");

  const certificationContainerShowSkills = showSkills ?? false;

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
            <CardTitle text={certificate.certificate.name} />
            <div>
              <IconArrowUpRight />
            </div>
          </div>
          <div className="leading-normal text-muted">
            <span>
              {t("granted")}{" "}
              {new Intl.DateTimeFormat(resolveSupportedLocale(), {
                year: "numeric",
                month: "long",
              }).format(certificate.grantDate)}
            </span>
            {" - "}
            {certificate.expiryDate && (
              <span>
                {t("expires")}{" "}
                {new Intl.DateTimeFormat(resolveSupportedLocale(), {
                  year: "numeric",
                  month: "long",
                }).format(certificate.expiryDate)}
              </span>
            )}
          </div>
        </div>
      }
    />
  );
}
