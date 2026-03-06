import { getAllBooks } from "@/lib/books";
import BookCard from "@/components/BookCard";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Product Strategy Reference",
  description:
    "Key frameworks and mental models from 20 essential product strategy and behavioral economics books — distilled for quick reference.",
  openGraph: {
    title: "Product Strategy Reference",
    description:
      "Key frameworks and mental models from 20 essential product strategy and behavioral economics books.",
    type: "website",
  },
};

export default function Home() {
  const books = getAllBooks();
  const collection1 = books.filter((b) => b.collection === 1);
  const collection2 = books.filter((b) => b.collection === 2);

  return (
    <>
      <Nav books={books} />
      <main className="mx-auto max-w-[68ch] px-6 py-16">
        <header className="mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
            Product Strategy
          </p>
          <h1
            className="mb-4 text-5xl leading-tight text-foreground"
            style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
          >
            The Reference Library
          </h1>
          <p className="text-base leading-8 text-muted max-w-[52ch]">
            Twenty books across two collections. The frameworks and mental models that matter most for
            building products in the AI era — distilled for quick reference.
          </p>
        </header>

        <section className="mb-16">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted border-b border-border pb-3">
            Collection 1 — Product Strategy · {collection1.length} Books
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {collection1.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </section>

        <section>
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted border-b border-border pb-3">
            Collection 2 — Behavioral Economics & Strategy · {collection2.length} Books
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {collection2.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </section>
      </main>
      <footer className="mx-auto max-w-[68ch] px-6 py-8 border-t border-border mt-16">
        <p className="text-xs text-muted">
          A personal reference. Frameworks, not summaries.
        </p>
      </footer>
    </>
  );
}
