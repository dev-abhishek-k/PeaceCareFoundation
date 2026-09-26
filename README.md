# Peace Care Foundation — UI prototype

A responsive, frontend-only preview of Peace Care Foundation's mission—care for homeless dogs, children, adults and elders—alongside sample journeys for finding support, volunteering and exploring independent NGO profiles.

**This is a UI preview.** Organization listings, case requests, impact figures, statuses, dashboards, and notifications are sample content labelled “Sample” or “Preview”, not verified operational data. Previous site copy inspired the mission and program descriptions, but this prototype does not verify past figures, activities or contact details. Nothing is submitted to a server or saved. Forms validate in the browser and show a **Preview submission** confirmation. Switching dashboard roles is a preview, not authentication. Temporary case actions reset when the page reloads.

## Run in Replit

1. Install dependencies: `bun install --frozen-lockfile`
2. Start the **Start application** workflow, or run `bun run dev`.
3. Open the web preview on port 5000.

## Checks

- `bun run typecheck`
- `bun run build`

The project uses React, TypeScript, Vite and Tailwind CSS. Source is in `frontend/src`, organized by pages, reusable components, mock data and types. There is no backend, database, API, sign-in service, payment processing or Supabase connection in this prototype. No environment variables or database migrations are needed.

State and city selectors use the offline, MIT-licensed `indian-states-cities` list (1,218 city records), supplemented with newer names and sample locations. It is a broad list, not an official or exhaustive registry; the request and volunteer forms offer “Other city” for places not listed. Directory results remain sample profiles, so choosing a city without a listed NGO may show no matches.

## Before using this for real requests

This prototype is **not** suitable for collecting personal details or providing access to real cases. A production service would need a protected backend, authentication and role-based permissions, secure document storage, privacy and consent review, and a verified NGO onboarding process. Do not present preview submissions as requests sent to an NGO.

## Tests

Run the pledge and admin workflow tests with:

```sh
bun test
```

These tests use in-memory mock clients. They do not import the configured Supabase client, make network requests, or write to any Supabase project.
