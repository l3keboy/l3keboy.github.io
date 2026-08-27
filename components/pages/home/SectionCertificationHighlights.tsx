import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import CertificationContainer, {
  type ICertification,
} from "@/components/common/CertificationContainer";
import { siteSettings } from "@/utils/config/siteSettings";
import PortfolioLink from "@/components/ui/PortfolioLink";
import PortfolioChip from "@/components/ui/PortfolioChip";
import HeadingTitle from "@/components/ui/titles/HeadingTitle";

export default function SectionCertificationHighlights() {
  const t = useTranslations("Pages.Home.CertificationHighlights");
  const tCertifications = useTranslations("SiteSettings.Certifications");

  // #region Get highlighted certificates
  const siteSettingsHighlightedCerts = siteSettings.certifications.filter(
    (x) => x.highlight === true,
  );

  const highlightedCerts: ICertification[] = [];
  siteSettingsHighlightedCerts.forEach((certificate) => {
    highlightedCerts.push({
      ...certificate,
      skills: Object.values(
        tCertifications.raw(`${certificate.slug}.Skills`),
      ) as string[],
    });
  });
  // #endregion

  return (
    <ContentContainer>
      <div className="flex flex-col gap-6 mb-6">
        <div className=" flex flex-col gap-3">
          {/* #region Chip */}
          <PortfolioChip text={t("chip")} />
          {/* #endregion */}

          <HeadingTitle text={t("title")} />
        </div>
        <div className="flex flex-col md:flex-row items-stretch gap-3">
          {highlightedCerts.map((cert) => {
            return (
              <CertificationContainer key={cert.slug} certificate={cert} />
            );
          })}
        </div>
      </div>
      <PortfolioLink
        href="/certifications"
        content={t("viewAll")}
        classNames="text-center m-auto text-muted"
      />
    </ContentContainer>
  );
}
