import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import { CertificationsService } from "@/services/CertificationsService";

import CertificationContainer from "../../common/certifications/CertificationContainer";

export default function SectionCertificatesDisplay() {
  const t = useTranslations("Pages.Certifications.CertificatesDisplay");

  // #region Get certificates
  const certs = CertificationsService.getCertifications({});
  // #endregion

  // TODO Ordering -> By grant date, expiry date
  // TODO Filtering -> By company, Highlight

  return (
    <ContentContainer>
      {certs.length <= 0 && <label>{t("noCerts")}</label>}
      {certs.length > 0 && (
        <div className="flex flex-col gap-6">
          {certs.length > 0 &&
            certs.map((cert) => {
              return (
                <CertificationContainer
                  cardTitleAs="h2"
                  certificate={cert}
                  key={cert.slug}
                  showSkills
                />
              );
            })}
        </div>
      )}
    </ContentContainer>
  );
}
