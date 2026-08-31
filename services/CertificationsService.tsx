import {
  type ICertificationSiteSettings,
  siteSettings,
} from "@/utils/config/siteSettings";
import { Companies } from "@/utils/enums/Company";

// Interfaces
export interface CertificationFilters {
  company?: Companies[];
  highlight?: boolean;
}
export interface CertificationQueryOptions {
  filters?: CertificationFilters;
  sortBy?: CertificationSortField;
  sortDirection?: CertificationSortDirection;
}

export type CertificationSortDirection = "asc" | "desc";

export type CertificationSortField = "expiryDate" | "grantDate";

// Service
export class CertificationsService {
  static getCertificationBySlug = (
    slug: string,
  ): ICertificationSiteSettings | null => {
    return (
      siteSettings.certifications.find((cert) => cert.slug === slug) ?? null
    );
  };

  static getCertifications = ({
    filters,
    sortBy = "grantDate",
    sortDirection = "desc",
  }: CertificationQueryOptions = {}): ICertificationSiteSettings[] => {
    let certifications = [...siteSettings.certifications];

    // Filtering
    if (filters?.company) {
      certifications = certifications.filter((cert) =>
        filters.company?.includes(cert.company.name),
      );
    }

    if (filters?.highlight !== undefined) {
      certifications = certifications.filter(
        (cert) => cert.highlight === filters.highlight,
      );
    }

    // Sorting
    certifications.sort((a, b) => {
      const aDate = a[sortBy]?.getTime();
      const bDate = b[sortBy]?.getTime();

      if (aDate === undefined) return 1;
      if (bDate === undefined) return -1;

      return sortDirection === "asc" ? aDate - bDate : bDate - aDate;
    });

    return certifications;
  };

  static getHighlightedCertifications = (): ICertificationSiteSettings[] => {
    return siteSettings.certifications.filter((cert) => cert.highlight);
  };
}
