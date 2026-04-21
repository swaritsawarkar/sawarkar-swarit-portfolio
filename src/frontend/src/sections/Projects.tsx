import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "../components/Badge";
import { SectionHeader } from "../components/SectionHeader";
import { projects } from "../data";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <SectionHeader
            label="Projects"
            title="Things I've actually built."
            subtitle="Not just ideas: working projects, shipped code, and real initiatives."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -50 : 50,
                rotateY: i % 2 === 0 ? -8 : 8,
              }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{
                scale: 1.02,
                rotateY: i % 2 === 0 ? 2 : -2,
                y: -6,
                transition: { duration: 0.25 },
              }}
              style={{ perspective: 800 }}
            >
              <div
                className="flex flex-col gap-4 h-full rounded-xl p-6 project-card"
                data-ocid={`project-${p.id}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-bold text-xl text-[#DFD9F7] leading-tight">
                    {p.title}
                  </h3>
                  <span
                    className={`shrink-0 text-xs font-mono px-2.5 py-1 rounded-full border ${
                      p.status === "in-progress"
                        ? "text-amber-300 border-amber-300/60 bg-amber-300/10"
                        : "text-[#E0FFFE] border-[#BDE3F0]/60 bg-[#BDE3F0]/10"
                    }`}
                  >
                    {p.status === "in-progress" ? "In Progress" : "Completed"}
                  </span>
                </div>

                <p className="text-[#DFD9F7]/75 text-sm leading-relaxed flex-1">
                  {p.description}
                </p>

                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.06,
                        delayChildren: i * 0.1 + 0.2,
                      },
                    },
                    hidden: {},
                  }}
                >
                  {p.tags.map((tag) => (
                    <motion.div
                      key={tag}
                      variants={{
                        hidden: { opacity: 0, scale: 0.7, y: 8 },
                        visible: { opacity: 1, scale: 1, y: 0 },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <Badge variant="muted">{tag}</Badge>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="flex items-center gap-4 flex-wrap mt-1">
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#BDE3F0] hover:text-[#E0FFFE] transition-colors"
                      data-ocid={`project-${p.id}-github`}
                    >
                      <Github size={14} />
                      View on GitHub
                      <ExternalLink size={12} />
                    </a>
                  )}
                  {p.websiteUrl && (
                    <a
                      href={p.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#BDE3F0] hover:text-[#E0FFFE] transition-colors border border-[#BDE3F0]/60 px-3 py-1.5 rounded-lg hover:border-[#E0FFFE] hover:bg-[#BDE3F0]/10"
                      data-ocid={`project-${p.id}-website`}
                    >
                      Visit Website
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
