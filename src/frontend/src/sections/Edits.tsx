import { ExternalLink, Instagram, Play } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface Reel {
  id: string;
  label: string;
  type: string;
  description: string;
  href: string;
}

const reels: Reel[] = [
  {
    id: "reel1",
    label: "Football Edit #1",
    type: "Velocity Edit",
    description:
      "High-pace football velocity edit built in After Effects. Motion-synced cuts, smooth transitions.",
    href: "https://www.instagram.com/reel/DXkDrNpjaz5/",
  },
  {
    id: "reel2",
    label: "Football Edit #2",
    type: "Velocity Edit",
    description:
      "Another football velocity reel with tight pacing and crisp After Effects compositing.",
    href: "https://www.instagram.com/reel/DXlQiA1jXeR/",
  },
];

function ReelCard({ reel, index }: { reel: Reel; index: number }) {
  return (
    <motion.a
      href={reel.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: easeOut }}
      whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
      className="group relative flex flex-col gap-5 rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] p-7 transition-all duration-300 hover:border-[#484848] hover:shadow-[0_0_28px_rgba(255,255,255,0.05)] cursor-pointer"
      data-ocid={`edits.item.${index + 1}`}
    >
      {/* Top-edge glow on hover */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Play indicator */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#333] bg-[#111] transition-all duration-300 group-hover:border-[#555] group-hover:bg-[#1a1a1a]">
            <Play
              size={14}
              className="text-[#aaa] ml-0.5 group-hover:text-white transition-colors duration-200"
              fill="currentColor"
            />
          </div>
          <div>
            <p className="font-display font-semibold text-white text-sm leading-tight tracking-tight">
              {reel.label}
            </p>
            <p className="text-[10px] text-[#555] tracking-widest uppercase mt-0.5">
              {reel.type}
            </p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 shrink-0 text-[#555] transition-colors duration-200 group-hover:text-[#aaa]">
          <Instagram size={13} />
          <ExternalLink size={11} />
        </span>
      </div>

      {/* Description */}
      <p className="text-[#666] text-sm leading-relaxed">{reel.description}</p>

      {/* Bottom tag */}
      <div className="flex items-center gap-2">
        <span className="rounded-md border border-[#2a2a2a] bg-[#111] px-2.5 py-0.5 text-[11px] text-[#555] tracking-wide">
          After Effects
        </span>
        <span className="rounded-md border border-[#2a2a2a] bg-[#111] px-2.5 py-0.5 text-[11px] text-[#555] tracking-wide">
          Football
        </span>
        <span className="rounded-md border border-[#2a2a2a] bg-[#111] px-2.5 py-0.5 text-[11px] text-[#555] tracking-wide">
          Motion
        </span>
      </div>
    </motion.a>
  );
}

export function Edits() {
  return (
    <section id="edits" className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <SectionHeader
            label="Edits"
            title="Football velocity edits. Built in After Effects."
            subtitle="Motion-synced cuts, tight pacing, shot on the pitch. More coming."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          {reels.map((reel, i) => (
            <ReelCard key={reel.id} reel={reel} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
        >
          <a
            href="https://www.instagram.com/swaritlol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-sm text-[#777] hover:text-white border border-[#333] hover:border-[#555] px-5 py-2.5 rounded-xl transition-all duration-200 hover:bg-white/[0.03]"
            data-ocid="edits.view-all-link"
          >
            <Instagram size={14} />
            View all edits on Instagram
            <ExternalLink size={11} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
