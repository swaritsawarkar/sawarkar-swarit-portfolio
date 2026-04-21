import { motion } from "motion/react";
import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import { SectionHeader } from "../components/SectionHeader";
import { achievements } from "../data";

const easeSpring = { type: "spring", stiffness: 220, damping: 22 } as const;

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <SectionHeader
            label="Achievements"
            title="Competing at the top."
            subtitle="From national robotics podiums to spelling bees, these are the highlights."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{
                opacity: 0,
                y: 50,
                x: i % 3 === 0 ? -30 : i % 3 === 2 ? 30 : 0,
                scale: 0.9,
              }}
              whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ ...easeSpring, delay: i * 0.08 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <Card
                glow={a.highlight}
                className={a.highlight ? "border-primary/40" : ""}
                data-ocid={`achievement-${a.id}`}
              >
                <div className="flex items-start gap-4">
                  <motion.span
                    className="text-3xl shrink-0"
                    initial={{ rotate: -20, scale: 0.5 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...easeSpring, delay: i * 0.08 + 0.15 }}
                  >
                    {a.icon}
                  </motion.span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display font-bold text-lg text-foreground leading-tight">
                        {a.title}
                      </h3>
                      {a.highlight && <Badge variant="accent">Featured</Badge>}
                    </div>
                    <p className="text-sm font-medium text-primary mt-1">
                      {a.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {a.description}
                    </p>
                    <p className="text-xs text-muted-foreground/60 mt-3 font-mono">
                      {a.year}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
