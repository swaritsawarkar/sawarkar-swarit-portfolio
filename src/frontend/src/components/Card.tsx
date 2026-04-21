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
        // Solid #BDE3F0 border — fully visible on dark navy/purple backgrounds
        "bg-card/70 backdrop-blur-sm rounded-xl p-6",
        "border border-[#BDE3F0]",
        hover && "card-hover cursor-default",
        glow && "glow-accent border-[#E0FFFE]",
        className,
      )}
    >
      {children}
    </div>
  );
}
