import assert from "node:assert/strict";
import { test } from "node:test";

import { ProjectService } from "@/services/ProjectService";
import { siteSettings } from "@/utils/config/siteSettings";

test("getProjects returns all projects in configured order by default", () => {
  assert.deepEqual(ProjectService.getProjects(), siteSettings.projects);
});

test("getProjectBySlug returns a matching project or null", () => {
  const project = siteSettings.projects[0];
  assert.ok(project);

  assert.equal(ProjectService.getProjectBySlug(project.slug), project);
  assert.equal(ProjectService.getProjectBySlug("missing-project"), null);
});

test("getProjects filters by source type", () => {
  const project = siteSettings.projects[0];
  assert.ok(project);

  assert.deepEqual(
    ProjectService.getProjects({ filters: { sourceType: project.type } }),
    siteSettings.projects.filter(({ type }) => type === project.type),
  );
});

test("getProjects matches any selected technology", () => {
  const technologies = [
    ...new Set(siteSettings.projects.flatMap(({ technologies }) => technologies)),
  ].slice(0, 2);
  assert.equal(technologies.length, 2);

  assert.deepEqual(
    ProjectService.getProjects({ filters: { technologies } }),
    siteSettings.projects.filter((project) =>
      technologies.some((technology) =>
        project.technologies.includes(technology),
      ),
    ),
  );
});

test("getProjects filters highlights, including an explicit false value", () => {
  assert.deepEqual(
    ProjectService.getHighlightedProjects(),
    siteSettings.projects.filter(({ highlight }) => highlight),
  );
  assert.deepEqual(
    ProjectService.getProjects({ filters: { highlight: false } }),
    siteSettings.projects.filter(({ highlight }) => !highlight),
  );
});