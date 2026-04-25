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
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {label && (
        <span
          className={`
            inline-block text-xs font-medium tracking-[0.12em] uppercase mb-4
            px-3 py-1 rounded-full
            bg-[#1a1a1a] border border-[#333333] text-[#666666]
            font-[Inter,sans-serif]
          `}
        >
          {label}
        </span>
      )}
      <h2
        className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight"
        style={{
          fontFamily: "Inter, -apple-system, Helvetica Neue, sans-serif",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-base leading-relaxed max-w-2xl"
          style={{
            color: "#777777",
            fontFamily: "Inter, -apple-system, Helvetica Neue, sans-serif",
            fontWeight: 300,
            letterSpacing: "0.01em",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
