import { FlatCompat } from "@eslint/eslintrc";
import nextVitals from 'eslint-config-next/core-web-vitals'
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig, globalIgnores } from 'eslint/config'
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = defineConfig([
  // ...compat.extends("next/typescript"),
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  ...nextVitals,
  perfectionist.configs["recommended-alphabetical"],
  {
    ignores: ["node_modules", ".next"],
  },
]);

export default eslintConfig;
