import Link from "next/link";
import { BookMeta } from "@/lib/types";

interface BookCardProps {
  book: BookMeta;
}

export default function BookCard({ book }: BookCardProps) {
  const accent = book.accent || "#8B7355";

  return (
    <Link href={`/books/${book.slug}`} className="group block">
      <article className="h-full rounded-lg border border-border bg-white p-6 transition-shadow duration-200 hover:shadow-md">
        <div className="mb-3 flex items-baseline justify-between gap-2">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: accent }}
          >
            {book.year}
          </span>
        </div>
        <h2
          className="mb-1 font-serif text-2xl leading-tight text-foreground group-hover:opacity-80 transition-opacity duration-200"
          style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
        >
          {book.title}
        </h2>
        <p className="mb-4 text-sm text-muted">{book.author}</p>
        <p className="text-sm leading-relaxed text-foreground/80">{book.thesis}</p>
        <div className="mt-5 flex items-center gap-1">
          <span
            className="text-xs font-medium"
            style={{ color: accent }}
          >
            Read frameworks
          </span>
          <span className="text-xs" style={{ color: accent }}>→</span>
        </div>
      </article>
    </Link>
  );
}
