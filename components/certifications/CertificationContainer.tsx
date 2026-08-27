import { type ICertificationSiteSettings } from "@/utils/config/siteSettings";
import CardTitle from "../ui/titles/CardTitle";
import { useTranslations } from "next-intl";
import { IconArrowUpRight } from "../icons/ArrowUpRight";
import PortfolioLink from "../ui/PortfolioLink";
import { DateDisplay } from "./DateDisplay";

export type ICertification = ICertificationSiteSettings & {
  skills: string[];
};
export type ICertificationContainer = {
  certificate: ICertification;
};

export default function CertificationContainer({
  certificate,
}: ICertificationContainer) {
  const t = useTranslations("Components.CertificationContainer");

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
            <DateDisplay
              grantDate={certificate.grantDate}
              expiryDate={certificate.expiryDate}
            />
          </div>
        </div>
      }
    />
  );
}
