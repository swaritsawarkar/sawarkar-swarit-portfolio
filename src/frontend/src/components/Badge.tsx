import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    // #1a1a1a bg, #444 border, #aaa text
    default: "bg-[#1a1a1a] text-[#aaaaaa] border border-[#444444]",
    // #222 bg, #555 border, white text — slightly brighter
    accent: "bg-[#222222] text-white border border-[#555555]",
    // very dark bg, muted grey text
    muted: "bg-[#141414] text-[#666666] border border-[#333333]",
    // transparent, visible border
    outline: "bg-transparent text-[#cccccc] border border-[#444444]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide",
        "font-[Inter,sans-serif]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
