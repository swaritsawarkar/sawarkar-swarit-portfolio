import { motion } from "motion/react";
import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import { SectionHeader } from "../components/SectionHeader";
import { achievements } from "../data";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <SectionHeader
            label="Achievements"
            title="Competing at the top."
            subtitle="From national robotics podiums to spelling bees, these are the highlights."
          />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
            hidden: {},
          }}
        >
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                  x: i % 3 === 0 ? -20 : i % 3 === 2 ? 20 : 0,
                },
                visible: { opacity: 1, y: 0, x: 0 },
              }}
              transition={{ duration: 0.6, ease: easeOut }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <Card glow={a.highlight} data-ocid={`achievement.item.${i + 1}`}>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-xl">
                    {a.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start gap-2 flex-wrap">
                      <h3 className="font-display font-semibold text-base text-white leading-snug">
                        {a.title}
                      </h3>
                      {a.highlight && <Badge variant="outline">Featured</Badge>}
                    </div>
                    <p className="text-xs font-medium text-[#888] mt-1 tracking-wide">
                      {a.subtitle}
                    </p>
                    <p className="text-sm text-[#666] mt-2 leading-relaxed">
                      {a.description}
                    </p>
                    <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                      <span className="text-xs font-mono text-[#555] bg-[#1a1a1a] border border-[#2a2a2a] px-2 py-0.5 rounded-full">
                        {a.year}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
