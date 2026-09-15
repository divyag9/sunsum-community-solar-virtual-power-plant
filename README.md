---
title: Sunsum Community Solar Virtual Power Plant
description: Community-owned virtual power plant software for the Microsoft 2026 Global Hackathon
---

## Overview

Sunsum is a Microsoft 2026 Global Hackathon project exploring software for a
community-owned solar virtual power plant. The project is currently in its
initial design phase.

## Goals

- Coordinate community solar generation, storage, and flexible demand
- Give participants transparent insight into energy and financial outcomes
- Support secure, reliable integrations with energy devices and services
- Build an open foundation that communities can adapt to local needs

## Project status

The repository contains a minimal Next.js application template. Its main page
submits a name to a server-side API route and displays the response. The
template uses React, TypeScript, ESLint, and minimal CSS.

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open <http://localhost:3000> in a browser.

Use these commands to validate a change:

```bash
npm run lint
npm run build
```

## Application structure

- `app/page.tsx` contains the form and submission state
- `app/api/submit/route.ts` validates and handles form submissions
- `app/globals.css` contains the minimal global styles
- `app/layout.tsx` defines the shared page layout and metadata

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. By
participating, you agree to follow [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

Report security concerns privately according to [SECURITY.md](SECURITY.md).

## License

This project is licensed under the [MIT License](LICENSE).
