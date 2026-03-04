# Playbook: Issue → PR → Merge

This playbook defines how work moves through the repository.

## 1. Create an Issue

Every change starts with an issue (feature, bug, chore, ADR update).

Each issue must include:

- Goal
- Scope
- Acceptance criteria
- Out of scope
- Risks / open questions

Use `.github/ISSUE_TEMPLATE/*` whenever possible.

## 2. Branching

Create a branch per issue:

- `feat/<issue-id>-short-name`
- `fix/<issue-id>-short-name`
- `chore/<issue-id>-short-name`
- `docs/<issue-id>-short-name`

## 3. PR Requirements

A PR must:

- Link the issue it implements (e.g., `Closes #123`)
- Be small and reviewable
- Include tests (or explain why not)
- Include documentation updates if required
- Pass CI

## 4. Review Order

1. Self-review by author
2. Security review (if auth, sessions, tokens, secrets, deps, or infra changes)
3. Code review
4. Merge

## 5. Definition of Done

A PR is “done” when:

- CI passes
- Acceptance criteria satisfied
- No secrets committed
- Docs updated (if needed)
- Review checklist completed
