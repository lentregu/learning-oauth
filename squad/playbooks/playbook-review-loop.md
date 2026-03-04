# Playbook: Review Loop

This playbook defines a repeatable review loop to maintain quality.

## 1. Author Self-Review (required)

The author must verify:

- Code compiles
- Local tests run (if applicable)
- No secrets committed
- PR description is clear
- Screenshots/logs included if needed

## 2. Automated Checks (required)

CI must run and pass:

- Lint
- Unit tests
- Build
- Security scans (where configured)
- Helm lint (when infra changes exist)

## 3. Security Review (conditional but strict)

Security review is required for changes involving:

- Auth, sessions, cookies
- OAuth/OIDC configuration
- Token parsing/validation
- Secrets, env vars, CI/CD permissions
- New dependencies
- Helm/Kubernetes resources

## 4. Quality Review

At least one reviewer validates:

- Acceptance criteria
- Code readability
- Maintainability
- Risk notes

## 5. Merge Policy

- Prefer squash merge for feature branches
- Require green CI
- Require at least one approval for non-trivial changes

## 6. Post-Merge

After merge:

- If feature: ensure it is testable in a preview or staging environment
- If infra: ensure rollback plan exists
- Update ADR/PRD if the implementation changed assumptions
