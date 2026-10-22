import { fixupConfigRules } from "@eslint/compat";
import nextVitals from 'eslint-config-next/core-web-vitals'
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  ...fixupConfigRules(nextVitals),
  perfectionist.configs["recommended-alphabetical"],
  {
    ignores: ["node_modules", ".next", ".vercel"],
  },
]);

export default eslintConfig;
