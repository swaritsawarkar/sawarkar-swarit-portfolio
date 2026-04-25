import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

// Premium expo-out easing — smooth, confident, no bounce
const REVEAL_EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Very subtle white bottom glow — replaces colored spotlight */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24">
        {/* Status pill */}
        <motion.div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-sm font-mono"
          style={{
            background: "#1a1a1a",
            border: "1px solid #444",
            color: "#888",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: REVEAL_EASE, delay: 0.05 }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#666" }}
          />
          10th Grade · Boarding School · Dubai
        </motion.div>

        {/* Name — signature reveal animation */}
        <h1 className="font-display text-6xl md:text-8xl font-semibold leading-none tracking-tight mb-4">
          {/* "Swarit" — overflow:hidden clips the slide-in to create mask reveal */}
          <div className="overflow-hidden inline-block">
            <motion.span
              className="inline-block text-white"
              initial={{ x: -40, opacity: 0, filter: "blur(3px)" }}
              animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 1.1,
                ease: REVEAL_EASE,
                delay: 0.2,
              }}
            >
              Swarit
            </motion.span>
          </div>
          <br />
          {/* "Sawarkar" — 180ms stagger after Swarit */}
          <div className="overflow-hidden inline-block">
            <motion.span
              className="inline-block text-white"
              initial={{ x: -40, opacity: 0, filter: "blur(3px)" }}
              animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 1.1,
                ease: REVEAL_EASE,
                delay: 0.38,
              }}
            >
              Sawarkar
            </motion.span>
          </div>
        </h1>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mx-auto mt-6 leading-relaxed font-body"
          style={{ color: "#aaa" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.55,
            ease: REVEAL_EASE,
          }}
        >
          Roboticist. Builder. Speaker. Writer.
          <br />
          <span style={{ color: "#666" }}>
            15 years old and already making things that matter.
          </span>
        </motion.p>

        {/* Skill tags */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mt-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.65 },
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
              className="px-3 py-1.5 rounded-full text-sm font-body"
              style={{
                background: "#111",
                border: "1px solid #333",
                color: "#aaa",
              }}
              variants={{
                hidden: { opacity: 0, y: 16, scale: 0.88 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: REVEAL_EASE,
          }}
        >
          {/* Primary CTA — white border, white text, fills white on hover */}
          <motion.button
            type="button"
            onClick={() => scrollTo("achievements")}
            className="px-8 py-3.5 rounded-xl font-semibold transition-all duration-250"
            style={{
              border: "1px solid rgba(255,255,255,0.85)",
              color: "#fff",
              background: "transparent",
            }}
            data-ocid="hero-cta-achievements"
            whileHover={{
              scale: 1.04,
              y: -2,
              backgroundColor: "#ffffff",
              color: "#000000",
            }}
            whileTap={{ scale: 0.97 }}
          >
            See My Work
          </motion.button>

          {/* Secondary CTA — dimmer border, grey text */}
          <motion.button
            type="button"
            onClick={() => scrollTo("contact")}
            className="px-8 py-3.5 rounded-xl font-medium transition-all duration-250"
            style={{
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#aaa",
              background: "transparent",
            }}
            data-ocid="hero-cta-contact"
            whileHover={{
              scale: 1.03,
              y: -2,
              borderColor: "rgba(255,255,255,0.7)",
              color: "#fff",
            }}
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 transition-colors"
        style={{ color: "#444" }}
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          delay: 1.3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        whileHover={{ color: "#aaaaaa" } as Record<string, string>}
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
}
