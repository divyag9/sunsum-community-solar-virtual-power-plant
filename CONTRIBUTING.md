---
title: Contributing to Sunsum
description: Development and collaboration guidelines for Sunsum contributors
---

## Before you start

- Search existing issues and pull requests before opening a new one
- Use an issue to agree on scope for substantial changes
- Keep pull requests focused on one concern
- Never commit credentials, private customer data, or production exports

## Development workflow

1. Create a branch from the latest `main` branch.
2. Make the smallest change that satisfies the agreed acceptance criteria.
3. Add or update tests for behavior changes.
4. Run the repository checks documented by the selected technology stack.
5. Open a pull request and complete its checklist.
6. Address review feedback and keep the branch current with `main`.

Use descriptive branch names such as `feature/device-enrollment` or
`fix/interval-validation`. Write imperative commit subjects such as
`Add interval validation`.

## Pull request expectations

Pull requests must explain the motivation, implementation, validation, and
operational or security impact. New dependencies require a reason and should
be actively maintained, appropriately licensed, and pinned through the
project's package manager.

Generated code is held to the same review and testing standard as manually
written code. Review AI-generated changes for correctness, security,
licensing, and unnecessary complexity before submitting them.

## Domain expectations

Energy, billing, control, and participant data can have safety, privacy, and
financial consequences. Changes in these areas must document assumptions,
units, time zones, failure behavior, authorization boundaries, and audit
requirements.
