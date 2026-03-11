import { getAllBooks, getCollections, COLLECTION_NAMES } from "@/lib/books";
import BookCard from "@/components/BookCard";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Product Strategy Reference",
  description:
    "Key frameworks and mental models from 60 essential books across six collections — distilled for quick reference.",
  openGraph: {
    title: "Product Strategy Reference",
    description:
      "Key frameworks and mental models from 60 essential books across six collections — distilled for quick reference.",
    type: "website",
  },
};

export default function Home() {
  const books = getAllBooks();
  const collections = getCollections(books);

  return (
    <>
      <Nav collections={collections} />
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
            Sixty books across six collections. The frameworks and mental models that matter most for
            building products in the AI era — distilled for quick reference.
          </p>
        </header>

        {collections.map((col, index) => {
          const colBooks = books.filter((b) => b.collection === col.id);
          const isLast = index === collections.length - 1;
          return (
            <section
              key={col.id}
              id={`collection-${col.id}`}
              className={isLast ? "" : "mb-16"}
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted border-b border-border pb-3">
                Collection {col.id} — {COLLECTION_NAMES[col.id]} · {colBooks.length} Books
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {colBooks.map((book) => (
                  <BookCard key={book.slug} book={book} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
      <footer className="mx-auto max-w-[68ch] px-6 py-8 border-t border-border mt-16">
        <p className="text-xs text-muted">
          A personal reference. Frameworks, not summaries.
        </p>
      </footer>
    </>
  );
}
