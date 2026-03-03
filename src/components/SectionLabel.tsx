interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
      {children}
    </p>
  );
}
