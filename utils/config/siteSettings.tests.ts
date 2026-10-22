import assert from "node:assert/strict";
import { test } from "node:test";

import { siteSettings } from "@/utils/config/siteSettings";

function assertUniqueSlugs(collection: string, slugs: string[]) {
  const duplicateSlugs = slugs.filter(
    (slug, index) => slugs.indexOf(slug) !== index,
  );

  assert.deepEqual(
    duplicateSlugs,
    [],
    `${collection} contains duplicate slugs`,
  );
}

test("projects have unique slugs", () => {
  assertUniqueSlugs(
    "Projects",
    siteSettings.projects.map(({ slug }) => slug),
  );
});

test("certifications have unique slugs", () => {
  assertUniqueSlugs(
    "Certifications",
    siteSettings.certifications.map(({ slug }) => slug),
  );
});