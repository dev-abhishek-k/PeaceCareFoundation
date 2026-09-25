# NGO Help Network — UI prototype

A responsive, frontend-only demonstration of a third-party platform that connects people seeking help with independent NGOs across India.

**This is a demo.** Organizations, case requests, counts, statuses, dashboards, and notifications are sample content labelled “Demo”. Nothing is submitted to a server or saved. Forms validate in the browser and show a **Demo submission** confirmation. Switching dashboard roles is a preview, not authentication. Temporary case actions reset when the page reloads.

## Run in Replit

1. Install dependencies: `bun install --frozen-lockfile`
2. Start the **Start application** workflow, or run `bun run dev`.
3. Open the web preview on port 5000.

## Checks

- `bun run typecheck`
- `bun run build`

The project uses React, TypeScript, Vite and Tailwind CSS. Source is in `frontend/src`, organized by pages, reusable components, mock data and types. There is no backend, database, API, sign-in service, payment processing or Supabase connection in this prototype. No environment variables or database migrations are needed.

## Before using this for real requests

This prototype is **not** suitable for collecting personal details or providing access to real cases. A production service would need a protected backend, authentication and role-based permissions, secure document storage, privacy and consent review, and a verified NGO onboarding process. Do not present demo submissions as requests sent to an NGO.