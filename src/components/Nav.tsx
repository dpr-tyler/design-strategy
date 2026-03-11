import Link from "next/link";

interface Collection {
  id: number;
  name: string;
}

interface NavProps {
  collections?: Collection[];
}

export default function Nav({ collections }: NavProps) {
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
        {collections && collections.length > 0 && (
          <div className="hidden md:flex items-center gap-6">
            {collections.map((col) => (
              <Link
                key={col.id}
                href={`/#collection-${col.id}`}
                className="text-xs text-muted hover:text-foreground transition-colors duration-150"
              >
                Collection {col.id} — {col.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
