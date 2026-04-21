import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

const spring = { type: "spring", stiffness: 200, damping: 20 } as const;

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Decorative radial spotlight — purple/lavender */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(45,10,78,0.35) 0%, rgba(189,227,240,0.08) 50%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24">
        {/* Status pill */}
        <motion.div
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#BDE3F0]/70 bg-[#2D0A4E]/60 text-[#DFD9F7] text-sm font-mono backdrop-blur-sm"
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...spring, delay: 0.05 }}
        >
          <span className="w-2 h-2 rounded-full bg-[#E0FFFE] animate-pulse" />
          10th Grade · Boarding School · Dubai
        </motion.div>

        {/* Name */}
        <motion.h1
          className="font-display text-6xl md:text-8xl font-bold leading-none tracking-tight mb-4"
          initial={{ opacity: 0, y: 60, skewY: 4 }}
          animate={{ opacity: 1, y: 0, skewY: 0 }}
          transition={{ ...spring, delay: 0.15 }}
        >
          <span className="gradient-accent">Swarit</span>
          <br />
          <motion.span
            className="text-[#DFD9F7]"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...spring, delay: 0.28 }}
          >
            Sawarkar
          </motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl text-[#DFD9F7]/75 max-w-2xl mx-auto mt-6 leading-relaxed font-body"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.42,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Roboticist. Builder. Speaker. Writer.
          <br />
          <span className="text-[#E0FFFE]/90">
            15 years old and already making things that matter.
          </span>
        </motion.p>

        {/* Tags */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mt-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.55 },
            },
            hidden: {},
          }}
        >
          {[
            "🏆 2x National Podium",
            "🤖 Robotics",
            "💻 AI & Code",
            "✍️ Author in Progress",
          ].map((tag) => (
            <motion.span
              key={tag}
              className="px-3 py-1.5 rounded-full bg-[#2D0A4E]/70 border border-[#BDE3F0]/70 text-sm text-[#DFD9F7]/90 font-body backdrop-blur-sm"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.85 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.85,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.button
            type="button"
            onClick={() => scrollTo("achievements")}
            className="px-8 py-3.5 rounded-xl font-semibold bg-[#DFD9F7] text-[#020B2D] hover:bg-[#E0FFFE] border border-[#BDE3F0] transition-all duration-200 glow-accent"
            data-ocid="hero-cta-achievements"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            See My Work
          </motion.button>
          <motion.button
            type="button"
            onClick={() => scrollTo("contact")}
            className="px-8 py-3.5 rounded-xl font-medium border border-[#BDE3F0]/70 text-[#DFD9F7] hover:bg-[#2D0A4E]/60 hover:border-[#E0FFFE] transition-all duration-200 backdrop-blur-sm"
            data-ocid="hero-cta-contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={() => scrollTo("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#BDE3F0]/70 hover:text-[#E0FFFE] transition-colors"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          delay: 1.2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
}
