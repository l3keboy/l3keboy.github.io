import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

function flattenEntries(
  obj: Record<string, unknown>,
  prefix = "",
): [string, unknown][] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return value && typeof value === "object" && !Array.isArray(value)
      ? flattenEntries(value as Record<string, unknown>, path)
      : [[path, value]];
  });
}

function loadMessages(locale: string): Record<string, unknown> {
  const raw = readFileSync(
    new URL(`./${locale}.json`, import.meta.url),
    "utf-8",
  );
  return JSON.parse(raw);
}

test("nl and en message catalogs declare the same keys", () => {
  const nl = flattenEntries(loadMessages("nl"))
    .map(([key]) => key)
    .sort();
  const en = flattenEntries(loadMessages("en"))
    .map(([key]) => key)
    .sort();
  assert.deepEqual(nl, en);
});

// Arrays are allowed for lists read with `t.raw()` (e.g. heroWords,
// aboutParagraphs), as long as they hold only non-empty strings.
test("nl and en message catalogs have non-empty string values", () => {
  for (const locale of ["nl", "en"]) {
    for (const [key, value] of flattenEntries(loadMessages(locale))) {
      const strings = Array.isArray(value) ? value : [value];
      assert.notEqual(strings.length, 0, `${locale}: ${key} is empty`);
      for (const item of strings) {
        assert.equal(typeof item, "string", `${locale}: ${key}`);
        assert.notEqual(item, "", `${locale}: ${key} is empty`);
      }
    }
  }
});