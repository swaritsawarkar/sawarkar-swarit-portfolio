import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  "data-ocid"?: string;
}

export function Card({
  children,
  className,
  hover = true,
  glow = false,
  "data-ocid": dataOcid,
}: CardProps) {
  return (
    <div
      data-ocid={dataOcid}
      className={cn(
        // Near-black card with clearly visible grey border on black background
        "rounded-xl p-6",
        "bg-[#111111] border border-[#333333]",
        hover && "card-hover cursor-default",
        // Monochrome glow — very subtle white highlight
        glow && "shadow-[0_0_20px_rgba(255,255,255,0.06)] border-[#444444]",
        className,
      )}
    >
      {children}
    </div>
  );
}
