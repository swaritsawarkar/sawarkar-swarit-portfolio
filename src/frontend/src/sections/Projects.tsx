import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "../components/Badge";
import { SectionHeader } from "../components/SectionHeader";
import { projects } from "../data";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <SectionHeader
            label="Projects"
            title="Things I've actually built."
            subtitle="Not just ideas: working projects, shipped code, and real initiatives."
          />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.08 },
            },
            hidden: {},
          }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              variants={{
                hidden: { opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 20 },
                visible: { opacity: 1, x: 0, y: 0 },
              }}
              transition={{ duration: 0.65, ease: easeOut }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              data-ocid={`project.item.${i + 1}`}
            >
              <div className="project-card flex flex-col gap-4 h-full rounded-xl p-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-semibold text-lg text-white leading-tight">
                    {p.title}
                  </h3>
                  <span
                    className={`shrink-0 text-xs font-mono px-2.5 py-1 rounded-full border ${
                      p.status === "in-progress"
                        ? "text-[#aaa] border-[#444] bg-[#1a1a1a]"
                        : "text-[#888] border-[#333] bg-[#1a1a1a]"
                    }`}
                  >
                    {p.status === "in-progress" ? "In Progress" : "Completed"}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#777] leading-relaxed flex-1">
                  {p.description}
                </p>

                {/* Tech tags */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: i * 0.08 + 0.2,
                      },
                    },
                    hidden: {},
                  }}
                >
                  {p.tags.map((tag) => (
                    <motion.div
                      key={tag}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      transition={{ duration: 0.3, ease: easeOut }}
                    >
                      <Badge variant="muted">{tag}</Badge>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Links */}
                <div className="flex items-center gap-4 flex-wrap mt-1">
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#777] hover:text-white transition-colors duration-200"
                      data-ocid={`project.item.${i + 1}-github`}
                    >
                      <Github size={14} />
                      View on GitHub
                      <ExternalLink size={11} />
                    </a>
                  )}
                  {p.websiteUrl && (
                    <a
                      href={p.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[#777] hover:text-white border border-[#333] hover:border-[#555] px-3 py-1.5 rounded-lg transition-all duration-200"
                      data-ocid={`project.item.${i + 1}-website`}
                    >
                      Visit Website
                      <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
