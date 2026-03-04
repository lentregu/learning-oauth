# PRD v1 – learning-oauth

## 1. Product Vision

**learning-oauth** is a web-based educational application designed to help developers deeply understand OAuth 2.0 and OpenID Connect through:

- Structured explanations per specification
- Sequence diagrams explained step by step
- Progress tracking per chapter
- Assessment tests (20 questions, 80% passing threshold)
- The ability to ask questions about each specification

The goal is to transform each specification into an interactive learning chapter.

---

## 2. MVP Objectives

The MVP must allow:

1. Authentication with:
   - Google
   - Microsoft (Office 365 / Entra ID)

2. Viewing:
   - A list of available specifications
   - Detailed view of each specification

3. Progress tracking per specification

4. Final test per specification:
   - 20 questions
   - Minimum 80% to pass
   - Attempt and result storage

5. Basic question system about the specification

---

## 3. MVP Scope

### 3.1 Authentication

- Login required to access content.
- Providers:
  - Google (OIDC)
  - Microsoft Entra ID (OIDC)
- Secure session persistence.
- Functional logout.

**Out of scope (v1):**
- Manual email/password registration.
- Advanced multi-tenancy.
- Administrative roles.

---

### 3.2 Specifications Included in MVP

The MVP must include at minimum:

1. OAuth 2.0 Authorization Code Grant  
2. OAuth 2.0 Client Credentials  
3. OpenID Connect Authorization Code Flow  
4. ID Token (structure and validation)

Each specification must include:

- Short description
- Objective
- Use cases
- Step-by-step flow explanation
- Sequence diagram (Mermaid)
- Navigable sections

---

### 3.3 Progress Tracking

The system must:

- Record progress per section.
- Display completion percentage.
- Mark a specification as completed when the test is passed.

---

### 3.4 Test

- 20 multiple-choice questions (minimum 4 options each).
- Automatic grading.
- Passing threshold: ≥ 80%.
- Store:
  - Date
  - Score
  - Pass/fail status
- Allow retakes.

---

### 3.5 Question System per Specification

Each specification must include a "Ask about this spec" section allowing users to:

- Request clarification about:
  - Flows
  - Parameters
  - Errors
  - Claims
  - Edge cases

For MVP:

- May be implemented as guided interaction based on stored content.
- Advanced LLM/RAG integration is not mandatory for first iteration.

---

## 4. Functional Requirements

### FR-01
Users must authenticate before accessing content.

### FR-02
Users must be able to choose authentication provider (Google or Microsoft).

### FR-03
The system must display a list of available specifications.

### FR-04
Each specification must provide navigable sections.

### FR-05
The system must track progress per user and specification.

### FR-06
The system must provide a 20-question final test per specification.

### FR-07
The system must calculate and store test results.

### FR-08
The system must display overall user progress.

---

## 5. Non-Functional Requirements

### Security

- Correct OIDC implementation.
- CSRF protection.
- Secure cookies.
- No secret exposure in client-side code.
- Proper token validation.
- Secure environment variable management.

### Performance

- Initial load time under 2 seconds under normal conditions.
- Non-blocking diagram rendering.

### Scalability

- Deployable on Kubernetes.
- Lightweight Docker image.
- Environment-based configuration.

### Observability (Minimum)

- Structured logging.
- Proper server-side error handling.

---

## 6. Data Model (MVP)

### users

- id
- email
- name
- provider
- created_at

### specs

- id
- slug
- title
- description

### sections

- id
- spec_id
- title
- order

### progress

- user_id
- spec_id
- percent
- last_section

### quiz_attempts

- id
- user_id
- spec_id
- score
- passed
- created_at

---

## 7. Success Metrics

- Users can authenticate without errors.
- Users can complete a specification.
- Users can pass a test.
- Progress persistence works correctly.
- Successful deployment to Kubernetes.

---

## 8. Post-MVP Roadmap

- Ranking system.
- Real token simulation mode.
- OAuth sandbox environment.
- LLM + RAG integration.
- Admin panel.
- Downloadable certificate.