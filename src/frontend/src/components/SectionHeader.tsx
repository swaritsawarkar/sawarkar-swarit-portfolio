interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase text-primary mb-3 px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
