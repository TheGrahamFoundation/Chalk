# Contributing

Open a focused pull request against `main` from a fork. Search existing issues first; discuss large features before implementing them. Use `feat/`, `fix/`, `docs/`, or `infra/` branch names.

## Local checks

Use Node.js 22 or newer and run:

```sh
npm ci --ignore-scripts
npm run build
npm test
npm audit --audit-level=high
```

Include a reproducible test for changed behavior, update usage documentation, and explain compatibility risks. Never commit credentials, private data, proprietary code, generated dependency folders, or real customer repository fixtures. Use invented test data.

Contributions are accepted under this project's MIT license. Submit only work you have the right to contribute; retain third-party notices.

## Review layers

1. Automated checks: build, tests, formatting errors and dependency audit.
2. Maintainer review: correctness, scope, documentation and backwards compatibility. At least one approving review is required for contributor PRs; new commits dismiss old approvals and conversations must be resolved.
3. Founder escalation: security boundaries, licensing, governance, breaking public contracts, disputed changes and release/publication decisions.

Do not ping the founder on routine issues. No bot auto-approves or merges PRs. CI changes and sensitive policy files require owner review. Fork workflows need maintainer approval before running; they receive no repository secrets or write token.

Only the current administrator can bootstrap governance while there is no independent maintainer. This is an explicit administrative exception, not permission for contributors or automation to bypass reviews. Remove the exception when a second maintainer is appointed.

Report vulnerabilities privately as described in SECURITY.md, never in a public issue.
