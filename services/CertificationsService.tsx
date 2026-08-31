import {
  type ICertificationSiteSettings,
  siteSettings,
} from "@/utils/config/siteSettings";

export class CertificationsService {
  static getAllCertifications = (): ICertificationSiteSettings[] => {
    return siteSettings.certifications;
  };

  static getCertificationBySlug = (
    slug: string,
  ): ICertificationSiteSettings | null => {
    return (
      siteSettings.certifications.find((cert) => cert.slug === slug) ?? null
    );
  };

  static getHighlightedCertifications = (): ICertificationSiteSettings[] => {
    return siteSettings.certifications.filter((cert) => cert.highlight);
  };
}
