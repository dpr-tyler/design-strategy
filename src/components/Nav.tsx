import Link from "next/link";
import { BookMeta } from "@/lib/types";

interface NavProps {
  books?: BookMeta[];
  currentSlug?: string;
}

export default function Nav({ books, currentSlug }: NavProps) {
  return (
    <nav className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-[68ch] items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-lg text-foreground hover:text-accent transition-colors duration-150"
          style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
        >
          Strategy Reference
        </Link>
        {books && books.length > 0 && (
          <div className="hidden md:flex items-center gap-6">
            {books.slice(0, 5).map((book) => (
              <Link
                key={book.slug}
                href={`/books/${book.slug}`}
                className={`text-xs transition-colors duration-150 ${
                  currentSlug === book.slug
                    ? "text-accent font-medium"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {book.title}
              </Link>
            ))}
          </div>
        )}
        <Link
          href="/"
          className="text-xs text-muted hover:text-foreground transition-colors duration-150"
        >
          All books →
        </Link>
      </div>
    </nav>
  );
}
