import { useTranslations } from "next-intl";

import ContentContainer from "@/components/common/ContentContainer";
import {
  CertificationSortDirection,
  CertificationSortField,
  CertificationsService,
} from "@/services/CertificationsService";

import CertificationContainer from "../../common/certifications/CertificationContainer";
import { Companies } from "@/utils/enums/Company";
import CertificationsSort from "./CertificationsSort";

// Interfaces
export interface ISectionCertificatesDisplayParams {
  company?: string;
  highlight?: string;
  sortBy?: CertificationSortField;
  sortDirection?: CertificationSortDirection;
}

export default function SectionCertificatesDisplay({
  company,
  highlight,
  sortBy,
  sortDirection,
}: ISectionCertificatesDisplayParams) {
  const t = useTranslations("Pages.Certifications.CertificatesDisplay");

  // #region Get certificates
  const certs = CertificationsService.getCertifications({
    filters: {
      company: company as Companies | undefined,
      highlight: highlight === undefined ? undefined : highlight === "true",
    },
    sortBy: sortBy,
    sortDirection: sortDirection,
  });
  // #endregion

  return (
    <ContentContainer>
      <CertificationsSort />
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
