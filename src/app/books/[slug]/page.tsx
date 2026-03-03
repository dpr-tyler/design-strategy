import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { getAllBooks, getBookBySlug } from "@/lib/books";
import Nav from "@/components/Nav";
import FrameworkCallout from "@/components/FrameworkCallout";
import PullQuote from "@/components/PullQuote";
import SectionLabel from "@/components/SectionLabel";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const books = getAllBooks();
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getBookBySlug(slug);
    return {
      title: `${meta.title} — Strategy Reference`,
      description: meta.thesis,
      openGraph: {
        title: `${meta.title} by ${meta.author}`,
        description: meta.thesis,
        type: "article",
      },
    };
  } catch {
    return { title: "Not Found" };
  }
}

const components = {
  FrameworkCallout,
  PullQuote,
  SectionLabel,
};

export default async function BookPage({ params }: PageProps) {
  const { slug } = await params;

  let meta, content;
  try {
    ({ meta, content } = getBookBySlug(slug));
  } catch {
    notFound();
  }

  const books = getAllBooks();
  const accent = meta!.accent || "#8B7355";

  return (
    <>
      <Nav books={books} currentSlug={slug} />
      <main className="mx-auto max-w-[68ch] px-6 py-16">
        {/* Book Header */}
        <header className="mb-16 pb-12 border-b border-border">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: accent }}>
            {meta!.author} · {meta!.year}
          </p>
          <h1
            className="mb-6 text-5xl leading-tight text-foreground"
            style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
          >
            {meta!.title}
          </h1>
          <p className="text-xl leading-8 text-muted max-w-[52ch]">
            {meta!.thesis}
          </p>
        </header>

        {/* MDX Content */}
        <article className="prose">
          <MDXRemote
            source={content!}
            components={{
              ...components,
              FrameworkCallout: (props) => (
                <FrameworkCallout {...props} accent={accent} />
              ),
              PullQuote: (props) => (
                <PullQuote {...props} accent={accent} />
              ),
            }}
          />
        </article>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-border">
          <a
            href="/"
            className="text-sm text-muted hover:text-foreground transition-colors duration-150"
          >
            ← All books
          </a>
        </div>
      </main>

      <footer className="mx-auto max-w-[68ch] px-6 py-8 border-t border-border mt-4">
        <p className="text-xs text-muted">
          A personal reference. Frameworks, not summaries.
        </p>
      </footer>
    </>
  );
}
