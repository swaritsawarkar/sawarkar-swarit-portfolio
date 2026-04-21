import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";
import { timeline } from "../data";

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

// Navy/purple/lavender type colors
const typeColors: Record<string, string> = {
  achievement: "text-amber-300 border-amber-300/50 bg-amber-300/10",
  experience: "text-[#E0FFFE] border-[#BDE3F0]/50 bg-[#BDE3F0]/10",
  education: "text-[#DFD9F7] border-[#DFD9F7]/50 bg-[#DFD9F7]/10",
  project: "text-[#E0FFFE] border-[#E0FFFE]/50 bg-[#E0FFFE]/10",
};

const typeGlow: Record<string, string> = {
  achievement: "rgba(252, 211, 77, 0.30)",
  experience: "rgba(189, 227, 240, 0.30)",
  education: "rgba(223, 217, 247, 0.28)",
  project: "rgba(224, 255, 254, 0.28)",
};

export function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <SectionHeader
            label="Timeline"
            title="The journey so far."
            subtitle="From 7th-grade DIY hacks to international stages, every step stacked."
            centered
          />
        </motion.div>

        {/* Extra top padding so first entry clears the fixed navbar */}
        <div className="relative mt-12 pt-4">
          {/* Vertical connector line — centered on md, left-offset on mobile */}
          <div
            className="absolute left-[7px] md:left-1/2 top-4 bottom-0 w-[2px] timeline-line md:-translate-x-px"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {timeline.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={event.id}
                  className={`relative flex gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  data-ocid={`timeline-${event.id}`}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -60 : 60,
                    scale: 0.93,
                  }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 22,
                    delay: 0.04 * (i % 5),
                  }}
                >
                  {/* Desktop card */}
                  <div
                    className={`hidden md:block w-1/2 ${
                      isLeft ? "pr-10 text-right" : "pl-10"
                    }`}
                  >
                    <motion.div
                      className={`inline-block text-left timeline-card rounded-xl p-5 ${
                        isLeft ? "float-right" : ""
                      }`}
                      whileHover={{
                        scale: 1.03,
                        y: -4,
                        boxShadow: `0 0 0 1.5px rgba(189,227,240,0.7), 0 12px 40px ${typeGlow[event.type]}, 0 0 60px rgba(45,10,78,0.25)`,
                        transition: { duration: 0.25 },
                      }}
                    >
                      <div
                        className={`text-xs font-mono font-semibold mb-2 px-2 py-0.5 rounded-full inline-block border ${typeColors[event.type]}`}
                      >
                        {event.type.charAt(0).toUpperCase() +
                          event.type.slice(1)}
                      </div>
                      <h3 className="font-display font-bold text-base text-[#DFD9F7] mt-2">
                        {event.title}
                      </h3>
                      <p className="text-xs text-[#BDE3F0] font-medium mt-1">
                        {event.organization}
                      </p>
                      <p className="text-xs text-[#DFD9F7]/70 mt-2 leading-relaxed">
                        {event.description}
                      </p>
                      {event.websiteUrl && (
                        <a
                          href={event.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-[#BDE3F0] hover:text-[#E0FFFE] transition-colors mt-3 border border-[#BDE3F0]/50 px-2.5 py-1 rounded-full hover:border-[#E0FFFE]"
                          data-ocid={`timeline-${event.id}-website`}
                        >
                          Visit Website ↗
                        </a>
                      )}
                    </motion.div>
                  </div>

                  {/* Timeline dot — precisely centered on the vertical line */}
                  <motion.div
                    className="absolute left-[8px] md:left-1/2 top-6 w-4 h-4 rounded-full timeline-dot -translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                      delay: 0.04 * (i % 5) + 0.15,
                    }}
                  />

                  {/* Year badge (desktop) */}
                  <div
                    className={`hidden md:flex absolute top-4 ${
                      isLeft ? "left-1/2 ml-7" : "right-1/2 mr-7 justify-end"
                    } items-center`}
                  >
                    <motion.span
                      className="font-mono font-bold text-sm text-[#BDE3F0]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.04 * (i % 5) + 0.2 }}
                    >
                      {event.year}
                    </motion.span>
                  </div>

                  {/* Mobile card */}
                  <div className="pl-10 md:hidden w-full">
                    <motion.div
                      className="timeline-card rounded-xl p-5"
                      whileHover={{ scale: 1.02, y: -3 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono font-bold text-sm text-[#BDE3F0]">
                          {event.year}
                        </span>
                        <span
                          className={`text-xs font-mono px-2 py-0.5 rounded-full border ${typeColors[event.type]}`}
                        >
                          {event.type.charAt(0).toUpperCase() +
                            event.type.slice(1)}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-base text-[#DFD9F7]">
                        {event.title}
                      </h3>
                      <p className="text-xs text-[#BDE3F0] mt-0.5">
                        {event.organization}
                      </p>
                      <p className="text-xs text-[#DFD9F7]/70 mt-2 leading-relaxed">
                        {event.description}
                      </p>
                      {event.websiteUrl && (
                        <a
                          href={event.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-[#BDE3F0] hover:text-[#E0FFFE] transition-colors mt-3 border border-[#BDE3F0]/50 px-2.5 py-1 rounded-full hover:border-[#E0FFFE]"
                          data-ocid={`timeline-${event.id}-website-mobile`}
                        >
                          Visit Website ↗
                        </a>
                      )}
                    </motion.div>
                  </div>

                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            className="relative flex justify-center mt-8"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 18,
              delay: 0.2,
            }}
          >
            <div className="px-4 py-2 rounded-full border border-[#BDE3F0]/70 bg-[#2D0A4E]/60 text-[#DFD9F7] text-xs font-mono font-semibold glow-accent">
              📖 Writing In Progress, 2026
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
