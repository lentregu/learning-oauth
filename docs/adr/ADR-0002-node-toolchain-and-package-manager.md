# ADR-0002 – Node Toolchain and Package Manager Version Management

Status: Accepted

Date: 2026-03-05

## Context

The **learning-oauth** project is implemented using the Node.js ecosystem with **Next.js**, **TypeScript**, and associated tooling.

The project relies on a JavaScript package manager to:

- Install dependencies
- Maintain a lockfile
- Ensure reproducible builds
- Support automated CI/CD pipelines

Inconsistent package manager versions across developer environments and CI systems can lead to:

- Lockfile inconsistencies
- Installation differences
- Non-reproducible builds
- CI failures caused by version mismatches

Historically, CI pipelines often install a specific version of a package manager (e.g. pnpm) directly in the workflow configuration. However, this creates **multiple sources of truth** when the project also declares a package manager version in `package.json`.

The Node.js ecosystem now provides **Corepack**, a tool that ensures the correct package manager version is used based on project configuration.

The team (human developers and AI agents) requires a **single, authoritative way to determine the package manager version** used by the project.

## Decision

The project will use the following package management strategy.

### Package Manager

The project uses **pnpm** as its package manager.

### Version Source of Truth

The package manager version is defined in `package.json` using the `packageManager` field.

Example:

```json
{
  "packageManager": "pnpm@10.11.0"
}