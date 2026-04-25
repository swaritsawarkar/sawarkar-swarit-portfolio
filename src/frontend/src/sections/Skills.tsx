import { motion } from "motion/react";
import { Badge } from "../components/Badge";
import { SectionHeader } from "../components/SectionHeader";
import { skillGroups } from "../data";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <SectionHeader
            label="Skills"
            title="The full stack of me."
            subtitle="From hardware to software, from video edits to speeches."
          />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.09, delayChildren: 0.05 },
            },
            hidden: {},
          }}
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: easeOut }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div
                className="skill-card rounded-xl p-6 h-full"
                data-ocid={`skill-group-${group.category.replace(/\s/g, "-").toLowerCase()}`}
              >
                <h3 className="font-display font-semibold text-xs uppercase tracking-[0.14em] text-white mb-4">
                  {group.category}
                </h3>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.06,
                        delayChildren: i * 0.07 + 0.15,
                      },
                    },
                    hidden: {},
                  }}
                >
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={{
                        hidden: { opacity: 0, scale: 0.7 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      transition={{ duration: 0.3, ease: easeOut }}
                      whileHover={{ scale: 1.07, y: -1.5 }}
                    >
                      <Badge variant="muted">{skill}</Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Book teaser */}
        <motion.div
          className="mt-12 rounded-2xl border border-[#333] bg-[#111] p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeOut }}
          data-ocid="book-teaser"
        >
          <motion.div
            className="text-5xl"
            animate={{ rotate: [0, 4, -4, 0] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          >
            📖
          </motion.div>
          <div className="flex-1">
            <Badge variant="outline" className="mb-3">
              Writing in Progress
            </Badge>
            <h3 className="font-display font-semibold text-xl text-white mt-2">
              Gen Z Is Cooked
            </h3>
            <p className="text-[#666] mt-2 leading-relaxed max-w-2xl text-sm">
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
