# Playbook: Agent Handoff

This playbook defines how agents coordinate and pass work to each other.

## Core Principle

Agents communicate through artifacts in the repository, not through assumptions.

Artifacts:

- PRD: `docs/prd/*`
- ADRs: `docs/adr/*`
- Threat model: `docs/threat-model/*`
- Contracts: `squad/contracts/*`
- Playbooks: `squad/playbooks/*`

## Handoff Rules

### Product Owner → Architect

Trigger:

- New feature area
- Ambiguous requirements
- Non-functional requirements impact

Outputs expected:

- Updated PRD (if needed)
- Architecture questions answered
- Acceptance criteria clarified

### Architect → Frontend Developer

Trigger:

- New system component
- Auth/session changes
- Database model changes
- Deployment topology changes

Outputs expected:

- ADR created/updated
- Diagram updated
- Implementation constraints documented

### Frontend Developer → Tester

Trigger:

- Feature merged to main
- Core user flows updated

Outputs expected:

- Unit/integration tests
- Smoke test scenario

### Any Agent → Security Engineer

Trigger (mandatory):

- Authentication / authorization changes
- Token handling changes
- Secret management changes
- Dependency additions
- Kubernetes/Helm workflow changes

Outputs expected:

- Security review notes
- Required mitigations documented

### DevOps Engineer ↔ Everyone

DevOps supplies:

- CI checks
- Build/deploy pipelines
- Preview environments

Other agents must:

- Keep PRs compatible with CI/CD constraints

## “I Need Clarification” Rule

If an agent cannot proceed safely, it must:

1. Open an issue with specific questions
2. Propose 1–2 reasonable options
3. State a recommended default if no response
4. Never make assumptions