"use client";
import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import { siteSettings } from "@/utils/config/siteSettings";
import CertificationContainer, {
  type ICertification,
} from "../../common/certifications/CertificationContainer";

export default function SectionCertificatesDisplay() {
  const t = useTranslations("Pages.Certifications.CertificatesDisplay");
  const tCertifications = useTranslations("SiteSettings.Certifications");

  // #region Get certificates
  const siteSettingsCerts = siteSettings.certifications;

  const certs: ICertification[] = [];
  siteSettingsCerts.forEach((certificate) => {
    certs.push({
      ...certificate,
      skills: Object.values(
        tCertifications.raw(`${certificate.slug}.Skills`),
      ) as string[],
    });
  });
  // #endregion

  // TODO Ordering -> By grant date, expiry date
  // TODO Filtering -> By company

  return (
    <ContentContainer>
      {certs.length <= 0 && <label>{t("noCerts")}</label>}
      {certs.length > 0 && (
        <div className="flex flex-col gap-6">
          {certs.length > 0 &&
            certs.map((cert) => {
              return (
                <CertificationContainer
                  key={cert.slug}
                  certificate={cert}
                  showSkills
                />
              );
            })}
        </div>
      )}
    </ContentContainer>
  );
}
