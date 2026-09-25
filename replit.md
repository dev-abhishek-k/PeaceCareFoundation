# Running on Replit

This is the imported Lovable TanStack Start / React / TypeScript application. Keep its existing stack and project structure.

- Dependencies: `bun install --frozen-lockfile` (the project includes `bun.lock`).
- Run: use the **Start application** workflow, which runs `bun run dev` on port 5000.
- Build: `bun run build`.
- Supabase: the imported, untracked `.env` contains the public URL and publishable-key settings used by the app. If those settings change or stop working, provide the corresponding `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_URL`, and `VITE_SUPABASE_PUBLISHABLE_KEY` through Replit environment settings. Never commit secret keys or put a service-role key in a `VITE_` variable.
- The `supabase/migrations` folder is from the original project; setting up this preview does not apply migrations to another database.