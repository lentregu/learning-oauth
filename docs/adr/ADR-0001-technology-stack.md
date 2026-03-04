# ADR-0001 – Technology Stack

Status: Accepted

Date: 2026-03-04

## Context

The **learning-oauth** project is a web application designed to help developers learn OAuth 2.0 and OpenID Connect through structured explanations, diagrams, progress tracking, and quizzes.

The system must:

- Support authentication using Google and Microsoft (OIDC)
- Provide a responsive web UI
- Persist user progress
- Be deployable on Kubernetes
- Support CI/CD automation
- Be maintainable and easy to evolve

The team (human + AI agents) needs a stack that maximizes developer productivity while keeping the architecture simple and maintainable.

## Decision

The project will use the following technology stack.

### Frontend / Web Application

Next.js (React + TypeScript)

Reasons:

- Mature ecosystem
- Strong TypeScript support
- Server-side rendering and API routes
- Good integration with authentication libraries
- Excellent developer experience

### Authentication

Auth.js (NextAuth)

Reasons:

- Built-in support for OAuth and OpenID Connect
- Supports Google and Microsoft providers
- Handles sessions securely
- Well integrated with Next.js

### Database

MySQL

Reasons:

- Reliable relational database
- Mature ecosystem
- Simple and efficient for the MVP data model
- Well supported by cloud providers and Kubernetes deployments
- Strong tooling and operational familiarity

### ORM

Prisma

Reasons:

- Type-safe database access
- Excellent developer experience
- Schema-driven development
- Works well with TypeScript
- Supports MySQL as a first-class database provider

### Content Format

Markdown

Specification content will be stored as Markdown files in the repository.

Reasons:

- Easy to version in Git
- Simple to render
- Easy for AI agents to maintain
- Compatible with static processing

### Diagrams

Mermaid

Reasons:

- Text-based diagrams
- Easy to version
- Easily rendered in modern web frameworks

### Containerization

Docker

Reasons:

- Standard container runtime
- Compatible with Kubernetes

### Deployment

Kubernetes with Helm

Reasons:

- Reproducible deployments
- Environment configuration
- Easy CI/CD integration
- Good compatibility with containerized applications

### CI/CD

GitHub Actions

Reasons:

- Native integration with GitHub
- Good support for container builds
- Easy automation of testing and deployments

## Consequences

### Positive

- Strong TypeScript ecosystem
- Fast development iteration
- Clear separation between infrastructure and application
- Good compatibility with AI-assisted development
- Simple relational database suited for MVP requirements

### Negative

- Requires Node.js ecosystem knowledge
- Kubernetes introduces operational complexity

### Risks

- Authentication configuration complexity
- Managing secrets securely in Kubernetes
- Proper configuration of database connections and migrations

## Alternatives Considered

### PostgreSQL

Rejected.

PostgreSQL offers powerful advanced features, but the project’s initial data model is simple and does not require those capabilities. MySQL provides sufficient functionality with simpler operational requirements.

### Separate Frontend + Backend

Rejected.

This would introduce unnecessary architectural complexity for the MVP.

### Python / Django

Rejected.

Less alignment with the React ecosystem and frontend-first architecture.

### Static Site

Rejected.

The application requires authentication and persistent user progress.

## Related Documents

- docs/prd/PRD-v1.md