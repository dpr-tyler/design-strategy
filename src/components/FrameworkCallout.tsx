interface FrameworkCalloutProps {
  children: React.ReactNode;
  accent?: string;
}

export default function FrameworkCallout({ children, accent }: FrameworkCalloutProps) {
  const borderColor = accent || "var(--accent)";
  const bgColor = accent ? `${accent}1A` : "color-mix(in srgb, var(--accent) 8%, transparent)";

  return (
    <div
      className="my-4 rounded-r-md py-3 pl-4 pr-4"
      style={{
        borderLeft: `2px solid ${borderColor}`,
        backgroundColor: bgColor,
      }}
    >
      <div className="text-sm leading-relaxed text-foreground">
        {children}
      </div>
    </div>
  );
}
