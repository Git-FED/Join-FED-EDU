# Architecture Decision Records

## ADR-001: Use static files for onboarding documentation

- **Status:** Accepted
- **Date:** 2026-10-03
- **Decision:** Use Markdown and static HTML/CSS/JavaScript rather than a server-side application.
- **Reason:** New members should be able to read the guide directly from GitHub or GitHub Pages without installing dependencies or providing data.
- **Consequence:** Interactive features must degrade gracefully, and external services must not be required for the core onboarding flow.
