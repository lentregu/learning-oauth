# Contract: Architecture Inputs

This contract defines what information must exist before making architectural decisions.

## Required Inputs

Before creating or updating ADRs, the following must be available:

- PRD reference (e.g., `docs/prd/PRD-v1.md`)
- MVP scope boundaries
- Non-functional requirements (security, deployment constraints)
- Deployment target (Kubernetes + Helm)
- Authentication providers (Google + Microsoft)

## Decision Rules

- If a decision impacts the stack, write or update an ADR.
- Prefer the simplest architecture that satisfies MVP.
- Decisions must be reversible where possible.
- Security and operational simplicity are priority constraints.

## Outputs

Architecture work must produce at least one of:

- New or updated ADR
- Updated architecture diagram (Mermaid)
- Updated threat model notes