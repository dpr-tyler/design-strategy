# AGENTS.md

## Cursor Cloud specific instructions

This is a static Next.js 16 (App Router) site with MDX content — no database, no external APIs, no environment variables required.

**Single service:** Next.js dev server (`npm run dev` on port 3000).

### Quick reference

- **Dev server:** `npm run dev` (Turbopack-powered, port 3000)
- **Build:** `npm run build`
- **Type-check:** `npx tsc --noEmit`
- **No ESLint or test runner** is configured in this repo; `npm run build` (which includes TypeScript checking) is the primary correctness gate.

### Caveats

- Content lives in `content/books/*.mdx` — changes to MDX files are picked up by the dev server's hot reload.
- There are no `.env` files needed; the app reads only from the local filesystem.
- Next.js 16 with React 19 requires Node.js 18+. The environment ships with Node 22 which works fine.
