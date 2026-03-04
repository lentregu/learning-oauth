# Contract: Definition of Done (DoD)

This contract defines the minimum quality bar for merging changes.

## Global DoD (applies to every PR)

A PR is considered "Done" only if:

- It links to an issue (e.g., `Closes #123`) or explains why not.
- CI checks pass (lint, tests, build).
- No secrets are committed (keys, tokens, client secrets, private URLs).
- Changes are small and reviewable (or explicitly justified).
- Documentation is updated when behavior or architecture changes.

## Code DoD (for application changes)

- TypeScript builds successfully.
- Lint passes.
- Tests exist for critical logic or core flows.
- No "TODO" that blocks functionality remains.

## Security DoD (when applicable)

Required when changes touch:

- Auth, sessions, cookies
- OAuth/OIDC config
- Token handling
- Secrets / env vars
- New dependencies
- Kubernetes/Helm resources

In those cases:

- Security considerations are documented in the PR.
- Recommended mitigations are applied.
- No sensitive values are logged.

## Infrastructure DoD (when applicable)

Required when changes touch:

- Helm charts
- Kubernetes manifests
- GitHub Actions workflows

In those cases:

- Helm lint passes.
- A rollback plan is stated in the PR.
- Deployment docs/values are updated if needed.