interface PullQuoteProps {
  children: React.ReactNode;
  accent?: string;
}

export default function PullQuote({ children, accent }: PullQuoteProps) {
  const color = accent || "var(--accent)";

  return (
    <blockquote
      className="my-8 py-6 text-center text-2xl font-serif italic leading-snug"
      style={{ color }}
    >
      {children}
    </blockquote>
  );
}
