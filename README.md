# Product Strategy Reference

A curated library of 30 books across three collections — frameworks and mental models for product strategy, behavioral economics, and human behavior, distilled for quick reference.

**Live:** [design-strategy.vercel.app](https://design-strategy.vercel.app/)

## Collections

1. **Product Strategy** — Lean Startup, Shape Up, Inspired, Crossing the Chasm, and more
2. **Behavioral Economics & Strategy** — Thinking, Fast and Slow, Nudge, Predictably Irrational, and more
3. **Psychology & Human Behavior** — Atomic Habits, Drive, Mindset, and more

Each book page includes thesis, core frameworks, mental models, and key principles — designed for quick lookup, not summaries.

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- [Tailwind CSS](https://tailwindcss.com) 4
- [MDX](https://mdxjs.com) via `next-mdx-remote` and `gray-matter`

## Project Structure

```
content/books/     # MDX files (one per book)
src/
  app/             # Next.js App Router pages
  components/      # BookCard, Nav, FrameworkCallout, PullQuote, SectionLabel
  lib/             # books.ts (content loading), types.ts
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a Book

1. Create `content/books/<slug>.mdx` with frontmatter: `title`, `author`, `year`, `thesis`, `collection` (1–3), optional `accent`
2. Use `<SectionLabel>`, `<FrameworkCallout>`, and `<PullQuote>` components in the MDX body
