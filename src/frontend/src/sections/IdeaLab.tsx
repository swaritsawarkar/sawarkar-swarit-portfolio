import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";
import { ideaLabItems } from "../data";
import type { IdeaLabItem } from "../types";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

function statusVariant(status: string): string {
  if (status === "Prototype / V1") {
    return "border border-[#555] bg-[#1a1a1a] text-[#ccc] shadow-[0_0_8px_rgba(255,255,255,0.08)]";
  }
  return "border border-[#333] bg-[#111] text-[#666]";
}

function IdeaCard({ item, index }: { item: IdeaLabItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: easeOut }}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group relative flex flex-col gap-4 rounded-2xl border border-[#3a3a3a] bg-[#0d0d0d] p-6 transition-all duration-300 hover:border-[#555] hover:shadow-[0_0_24px_rgba(255,255,255,0.05)]"
      data-ocid={`idea-lab.item.${index + 1}`}
    >
      {/* Subtle top-edge glow line on hover */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display font-semibold text-white text-base leading-snug tracking-tight">
          {item.title}
        </h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide ${statusVariant(item.status)}`}
        >
          {item.status}
        </span>
      </div>

      <p className="text-[#777] text-sm leading-relaxed flex-1">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-[#2a2a2a] bg-[#111] px-2 py-0.5 text-[11px] text-[#555] tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function IdeaLab() {
  return (
    <section id="idea-lab" className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <SectionHeader
            label="Idea Lab"
            title="Things I am exploring and building."
            subtitle="Not finished products. Just ideas with momentum, concepts being shaped into something real."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          {ideaLabItems.map((item, i) => (
            <IdeaCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
