import assert from "node:assert/strict";
import { test } from "node:test";

import { CertificationsService } from "@/services/CertificationsService";
import { siteSettings } from "@/utils/config/siteSettings";

test("getCertificationBySlug returns a matching certification or null", () => {
  const certification = siteSettings.certifications[0];
  assert.ok(certification);

  assert.equal(
    CertificationsService.getCertificationBySlug(certification.slug),
    certification,
  );
  assert.equal(
    CertificationsService.getCertificationBySlug("missing-certification"),
    null,
  );
});

test("getCertifications filters by company and highlight", () => {
  const certification = siteSettings.certifications[0];
  assert.ok(certification);

  assert.deepEqual(
    CertificationsService.getHighlightedCertifications(),
    siteSettings.certifications.filter(({ highlight }) => highlight),
  );
  assert.deepEqual(
    CertificationsService.getCertifications({
      filters: {
        company: [certification.company.name],
        highlight: certification.highlight,
      },
    }),
    siteSettings.certifications.filter(
      (item) =>
        item.company.name === certification.company.name &&
        item.highlight === certification.highlight,
    ).sort((a, b) => b.grantDate.getTime() - a.grantDate.getTime()),
  );
});

test("getCertifications sorts grant dates in both directions", () => {
  const ascending = CertificationsService.getCertifications({
    sortBy: "grantDate",
    sortDirection: "asc",
  });
  const descending = CertificationsService.getCertifications();

  assert.deepEqual(
    ascending.map(({ grantDate }) => grantDate.getTime()),
    [...ascending]
      .map(({ grantDate }) => grantDate.getTime())
      .sort((a, b) => a - b),
  );
  assert.deepEqual(
    descending.map(({ grantDate }) => grantDate.getTime()),
    [...descending]
      .map(({ grantDate }) => grantDate.getTime())
      .sort((a, b) => b - a),
  );
});

test("expiry date sorting puts missing dates last without mutating settings", () => {
  const originalOrder = siteSettings.certifications.map(({ slug }) => slug);
  const certifications = CertificationsService.getCertifications({
    sortBy: "expiryDate",
    sortDirection: "asc",
  });
  const dates = certifications.flatMap(({ expiryDate }) =>
    expiryDate ? [expiryDate.getTime()] : [],
  );
  const firstMissingDate = certifications.findIndex(({ expiryDate }) => !expiryDate);

  assert.ok(certifications.some(({ expiryDate }) => !expiryDate));
  assert.ok(
    dates.every((date, index) => index === 0 || dates[index - 1] <= date),
  );
  assert.ok(
    firstMissingDate === -1 ||
      certifications
        .slice(firstMissingDate)
        .every(({ expiryDate }) => !expiryDate),
  );
  assert.deepEqual(
    siteSettings.certifications.map(({ slug }) => slug),
    originalOrder,
  );
});