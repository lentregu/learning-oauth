# Contract: Security Gates

This contract defines minimum security requirements for the repository.

## Secrets

- No secrets may be committed to the repository.
- All secrets must be injected via environment variables or Kubernetes Secrets.
- Example secrets:
  - OAuth client secrets
  - Signing keys
  - Database passwords
  - API keys

## Authentication (OIDC)

- Use standard OIDC flows for Google and Microsoft.
- Use secure session handling.
- Do not expose client secrets to the browser.

## Cookies / Sessions

- Cookies must be `HttpOnly`, `Secure`, and use an appropriate `SameSite` policy.
- Session rotation should be enabled if supported by the auth library.

## CSRF

- CSRF protection must be enabled for any state-changing endpoints.

## Token Handling

- Do not log tokens.
- Validate issuer, audience, expiration, and signature as appropriate.
- Do not accept tokens from untrusted sources.

## Dependencies

- Avoid introducing unnecessary dependencies.
- Any new dependency must be justified in the PR.
- Security scanning must run in CI (where configured).

## CI/CD Permissions

- GitHub Actions workflows must use least privilege permissions.
- Avoid `permissions: write-all`.
- Use OIDC for cloud authentication when possible.