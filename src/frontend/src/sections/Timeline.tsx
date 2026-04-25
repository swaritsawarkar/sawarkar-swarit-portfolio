import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { timeline } from "../data";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const typeBadge: Record<string, string> = {
  achievement: "text-[#aaa] border-[#444] bg-[#1a1a1a]",
  experience: "text-[#aaa] border-[#3a3a3a] bg-[#1a1a1a]",
  education: "text-[#aaa] border-[#3a3a3a] bg-[#1a1a1a]",
  project: "text-[#aaa] border-[#3a3a3a] bg-[#1a1a1a]",
};

export function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progressHeight, setProgressHeight] = useState(0);

  /* Scroll-driven progress line */
  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const sectionHeight = el.offsetHeight;
      const viewportH = window.innerHeight;
      // progress: 0 when section top reaches viewport bottom, 1 when section bottom passes viewport center
      const scrolled = viewportH - rect.top;
      const total = sectionHeight + viewportH * 0.5;
      const ratio = Math.min(Math.max(scrolled / total, 0), 1);
      setProgressHeight(ratio * 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="timeline" className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
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
        <div ref={sectionRef} className="relative mt-12 pt-4">
          {/* Base vertical rod — static grey */}
          <div
            className="absolute left-[7px] md:left-1/2 top-4 bottom-0 w-[2px] bg-[#222] md:-translate-x-px"
            aria-hidden="true"
          />

          {/* Animated scroll-progress overlay */}
          <div
            className="absolute left-[7px] md:left-1/2 top-4 w-[2px] md:-translate-x-px transition-none overflow-hidden"
            style={{ height: "calc(100% - 1rem)" }}
            aria-hidden="true"
          >
            <div
              className="w-full bg-white/60 transition-[height] duration-200 ease-out"
              style={{ height: `${progressHeight}%` }}
            />
          </div>

          <div className="space-y-10">
            {timeline.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={event.id}
                  className={`relative flex gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                  data-ocid={`timeline.item.${i + 1}`}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -30 : 30,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.6,
                    ease: easeOut,
                    delay: 0.04 * (i % 5),
                  }}
                >
                  {/* Desktop card */}
                  <div
                    className={`hidden md:block w-1/2 ${
                      isLeft ? "pr-10 text-right" : "pl-10"
                    }`}
                  >
                    <div
                      className={`inline-block text-left timeline-card rounded-xl p-5 max-w-sm ${
                        isLeft ? "float-right" : ""
                      }`}
                    >
                      <span
                        className={`text-xs font-mono font-medium px-2 py-0.5 rounded-full border inline-block ${typeBadge[event.type]}`}
                      >
                        {event.type.charAt(0).toUpperCase() +
                          event.type.slice(1)}
                      </span>
                      <h3 className="font-display font-semibold text-sm text-white mt-2 leading-snug">
                        {event.title}
                      </h3>
                      <p className="text-xs text-[#888] font-medium mt-1">
                        {event.organization}
                      </p>
                      <p className="text-xs text-[#666] mt-2 leading-relaxed">
                        {event.description}
                      </p>
                      {event.websiteUrl && (
                        <a
                          href={event.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-[#777] hover:text-white transition-colors duration-200 mt-3 border border-[#333] hover:border-[#555] px-2.5 py-1 rounded-full"
                          data-ocid={`timeline.item.${i + 1}-website`}
                        >
                          Visit Website ↗
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Timeline dot — precisely centered on the vertical line */}
                  <motion.div
                    className="absolute left-[8px] md:left-1/2 top-5 w-[10px] h-[10px] rounded-full timeline-dot -translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                      delay: 0.04 * (i % 5) + 0.1,
                    }}
                  />

                  {/* Year badge (desktop) */}
                  <div
                    className={`hidden md:flex absolute top-3.5 ${
                      isLeft ? "left-1/2 ml-6" : "right-1/2 mr-6 justify-end"
                    } items-center`}
                  >
                    <motion.span
                      className="font-mono font-semibold text-xs text-[#888] bg-[#1a1a1a] border border-[#2a2a2a] px-2.5 py-1 rounded-full"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.04 * (i % 5) + 0.15 }}
                    >
                      {event.year}
                    </motion.span>
                  </div>

                  {/* Mobile card */}
                  <div className="pl-8 md:hidden w-full">
                    <div className="timeline-card rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="font-mono font-semibold text-xs text-[#888] bg-[#1a1a1a] border border-[#2a2a2a] px-2 py-0.5 rounded-full">
                          {event.year}
                        </span>
                        <span
                          className={`text-xs font-mono px-2 py-0.5 rounded-full border ${typeBadge[event.type]}`}
                        >
                          {event.type.charAt(0).toUpperCase() +
                            event.type.slice(1)}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-sm text-white leading-snug">
                        {event.title}
                      </h3>
                      <p className="text-xs text-[#888] mt-0.5">
                        {event.organization}
                      </p>
                      <p className="text-xs text-[#666] mt-2 leading-relaxed">
                        {event.description}
                      </p>
                      {event.websiteUrl && (
                        <a
                          href={event.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-[#777] hover:text-white transition-colors duration-200 mt-3 border border-[#333] hover:border-[#555] px-2.5 py-1 rounded-full"
                          data-ocid={`timeline.item.${i + 1}-website-mobile`}
                        >
                          Visit Website ↗
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            className="relative flex justify-center mt-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
          >
            <div className="px-4 py-2 rounded-full border border-[#333] bg-[#111] text-[#888] text-xs font-mono font-medium">
              📖 Writing In Progress, 2026
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
