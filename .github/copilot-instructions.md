---
title: GitHub Copilot Instructions
description: Repository-wide guidance for AI-assisted work on Sunsum
---

## Project context

Sunsum is community-owned solar virtual power plant software. Treat energy
control, participant identity, billing, telemetry, and device integrations as
high-impact domains where incorrect behavior can create safety, privacy, or
financial harm.

## Review priorities

When reviewing a pull request, prioritize exploitable security weaknesses,
incorrect behavior, authorization gaps, unsafe device commands, privacy or
financial risks, dependency risk, and missing tests. Explain the concrete
failure scenario and point to the smallest relevant code location. Avoid
blocking on cosmetic preferences or speculative concerns without an observable
impact.

## Working rules

- Read the relevant issue, nearby code, tests, and documentation before editing
- Make focused changes that satisfy explicit acceptance criteria
- Prefer existing project patterns and standard libraries over new abstractions
- Do not invent device, tariff, regulatory, or market requirements
- State assumptions when requirements are incomplete
- Preserve unrelated work and avoid broad refactors without approval
- Never add secrets, personal data, production telemetry, or credentials
- Pin dependencies through the selected package manager and justify additions

## Correctness and safety

- Represent physical quantities with explicit units and validated ranges
- Treat time zones, daylight saving transitions, and interval boundaries explicitly
- Use decimal-safe arithmetic for money and document rounding rules
- Default device-control paths to fail-safe behavior and bounded commands
- Enforce authorization at service boundaries, not only in the user interface
- Keep audit-relevant actions attributable and avoid logging sensitive values
- Validate all data received from devices, users, files, and external services

## Validation

Add or update focused tests for behavior changes. Cover boundary values,
failure paths, authorization, time handling, and unit conversions when they
apply. Run the narrowest relevant checks first, then the repository-wide checks
before finishing. Report any check that could not be run.

Do not claim regulatory compliance, production readiness, security, or test
coverage without verifiable evidence.
