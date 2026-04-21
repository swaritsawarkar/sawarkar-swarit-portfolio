import { motion } from "motion/react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Badge } from "./components/Badge";
import { Card } from "./components/Card";
import { Navigation } from "./components/Navigation";
import { SectionHeader } from "./components/SectionHeader";
import { Achievements } from "./sections/Achievements";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Timeline } from "./sections/Timeline";

export default function App() {
  return (
    <div className="min-h-screen text-foreground dark relative">
      {/* Canvas-based interactive animated background */}
      <AnimatedBackground />

      {/* All page content sits above the background */}
      <div className="relative z-10">
        <Navigation />

        <Hero />

        {/* ABOUT */}
        <motion.section
          id="about"
          className="py-24 bg-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <SectionHeader
                  label="About Me"
                  title="Built different, from day one."
                  subtitle="At 14, I left home and moved into a boarding school. Living independently forged resilience I didn't know I had, and it pushed me to chase every opportunity."
                />
                <div className="space-y-4 text-[#DFD9F7]/75 leading-relaxed">
                  <p>
                    I'm Swarit, a 15-year-old from Dubai navigating 10th grade
                    while building robots, writing code, creating content, and
                    writing a book on the side. Boards are in a year, and I'm
                    not slowing down.
                  </p>
                  <p>
                    I've competed nationally in robotics, spelling, debating,
                    and football. I run social media for robotics leagues,
                    served as CMO at MUNIFY, and travelled to Singapore for AI
                    workshops when most kids my age were figuring out fractions.
                  </p>
                  <p>
                    The common thread? I build things. I speak up. And I don't
                    wait for permission.
                  </p>
                </div>
                <motion.div
                  className="flex flex-wrap gap-2 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {[
                    "Robotics Club",
                    "Content Creation Club",
                    "MUN Club",
                    "Dubai Marathons",
                  ].map((c) => (
                    <Badge key={c} variant="muted">
                      {c}
                    </Badge>
                  ))}
                </motion.div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🌍", stat: "Dubai", label: "Based in" },
                  {
                    icon: "🏫",
                    stat: "Boarding School",
                    label: "Since 8th Grade",
                  },
                  { icon: "🏆", stat: "6+", label: "Major Awards" },
                  { icon: "💻", stat: "5+ Languages", label: "Programming" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                      rotate: i % 2 === 0 ? -8 : 8,
                    }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.12,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                  >
                    <Card
                      className="text-center"
                      data-ocid={`about-stat-${item.label.replace(/\s/g, "-").toLowerCase()}`}
                    >
                      <motion.div
                        className="text-3xl mb-2"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 3,
                          delay: i * 0.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 4,
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      <div className="font-display font-bold text-xl text-[#DFD9F7]">
                        {item.stat}
                      </div>
                      <div className="text-xs text-[#BDE3F0]/80 mt-1">
                        {item.label}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <Achievements />
        <Projects />
        <Timeline />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}
