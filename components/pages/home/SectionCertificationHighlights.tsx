import { useTranslations } from "next-intl";

import CertificationContainer from "@/components/common/certifications/CertificationContainer";
import ContentContainer from "@/components/common/ContentContainer";
import PortfolioChip from "@/components/ui/PortfolioChip";
import PortfolioLink from "@/components/ui/PortfolioLink";
import HeadingTitle from "@/components/ui/titles/HeadingTitle";
import { CertificationsService } from "@/services/CertificationsService";

export default function SectionCertificationHighlights() {
  const t = useTranslations("Pages.Home.CertificationHighlights");

  // #region Get highlighted certificates
  const highlightedCerts = CertificationsService.getHighlightedCertifications();
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
          {highlightedCerts.length > 0 &&
            highlightedCerts.map((cert) => {
              return (
                <CertificationContainer certificate={cert} key={cert.slug} />
              );
            })}
          {highlightedCerts.length <= 0 && <label>{t("noCerts")}</label>}
        </div>
      </div>
      {highlightedCerts.length > 0 && (
        <PortfolioLink
          classNames="text-center m-auto text-muted"
          content={t("viewAll")}
          href="/certifications"
        />
      )}
    </ContentContainer>
  );
}
