import { motion } from "motion/react";
import { Badge } from "../components/Badge";
import { SectionHeader } from "../components/SectionHeader";
import { skillGroups } from "../data";

const easeSpring = { type: "spring", stiffness: 220, damping: 22 } as const;

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <SectionHeader
            label="Skills"
            title="The full stack of me."
            subtitle="From hardware to software, from video edits to speeches."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ ...easeSpring, delay: i * 0.1 }}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.25 },
              }}
            >
              <div
                className="skill-card rounded-xl p-6 h-full"
                data-ocid={`skill-group-${group.category.replace(/\s/g, "-").toLowerCase()}`}
              >
                <motion.h3
                  className="font-display font-bold text-sm uppercase tracking-widest text-[#BDE3F0] mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.15 }}
                >
                  {group.category}
                </motion.h3>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.07,
                        delayChildren: i * 0.08 + 0.2,
                      },
                    },
                    hidden: {},
                  }}
                >
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={{
                        hidden: { opacity: 0, scale: 0.6, rotate: -8 },
                        visible: { opacity: 1, scale: 1, rotate: 0 },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Badge variant="muted">{skill}</Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Book teaser */}
        <motion.div
          className="mt-12 rounded-2xl border border-[#BDE3F0] bg-[#2D0A4E]/60 backdrop-blur-sm p-8 flex flex-col md:flex-row items-start md:items-center gap-6 glow-accent"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <motion.div
            className="text-5xl"
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1, 1] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
            }}
          >
            📖
          </motion.div>
          <div className="flex-1">
            <Badge variant="accent" className="mb-3">
              Writing in Progress
            </Badge>
            <h3 className="font-display font-bold text-2xl text-[#DFD9F7]">
              "Gen Z Is Cooked"
            </h3>
            <p className="text-[#DFD9F7]/75 mt-2 leading-relaxed max-w-2xl">
              A 15-year-old's take on attention, trends, comparison, and the
              quiet ways the internet is changing how we think, feel, and see
              ourselves.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
