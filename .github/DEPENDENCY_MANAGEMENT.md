# Dependency & Security Automation — Quick Setup

Purpose

- Summarizes repository settings and steps to fully enable Dependabot, automated security fixes, lockfile maintenance and auto-merge for safe dependency updates.

What was added

- `dependabot.yml` — weekly npm + GitHub Actions updates, plus a weekly lockfile-only job.
- `ci.yml` — GitHub Actions job that runs `npm ci`, lint, `tsc`, and `build` on PRs and pushes.
- `dependabot-automerge.yml` — attempts to merge Dependabot (or `dependencies`-labeled) PRs when checks pass.

Required GitHub settings (manual)

1. Settings → Security & analysis:
   - Enable **Dependabot alerts**.
   - Enable **Dependabot security updates** (auto-fixes for vulnerabilities).
   - Enable **Automated security fixes** if available for your plan.
2. Settings → Merge button / Pull requests:
   - Enable **Allow auto-merge** (optional). Our workflow will try to merge, but repo-level auto-merge is helpful.
3. Settings → Branches → Branch protection rules (for `main` / `master`):
   - Require pull request reviews before merging: 1 (optional; note below).
   - Require status checks to pass: add `CI` (or the exact workflow check name) — this must pass for auto-merge.
   - Require branches to be up to date before merging: enabled (recommended).
   - Dismiss stale pull request approvals when new commits are pushed: enabled (recommended).

Notes about auto-merge and branch protection

- If branch protection requires reviewer approvals, the auto-merge workflow may be blocked. Options:
  - Allow Dependabot PRs to be auto-approved (via a small GitHub Action that adds an approval) before merging.
  - Lower the approval requirement for dependency-only updates, or add a CODEOWNERS rule to control reviewers.
  - Keep approvals required and review Dependabot PRs manually.

Testing recommendations

- Minimal (low-effort): the added `ci.yml` already runs build + lint + type-check. This is sufficient to detect most breakages from dependency bumps.
- Recommended: add unit/integration tests and update `ci.yml` to run `npm test` so Dependabot PRs must pass tests before merging.

Local verification

- To verify CI steps locally run:

```bash
npm ci
npm run lint
npm run tsc
npm run build
```

Optional next automation I can add for you

- Auto-approve Dependabot PRs (adds a GitHub Action to approve PRs created by `dependabot[bot]`). This lets the existing auto-merge workflow merge them even when approvals are required.
- Add `npm test` invocation to CI and scaffold a basic test setup (Jest + React Testing Library) if you want tests added.

If you want, I can add the auto-approve workflow now (it’s a small file) — shall I add it?
