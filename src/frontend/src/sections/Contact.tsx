import { Github, Instagram, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";
import { contactLinks } from "../data";

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  instagram: <Instagram size={20} />,
  mail: <Mail size={20} />,
  phone: <Phone size={20} />,
};

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: easeOut }}
        >
          <SectionHeader
            label="Contact"
            title="Let's build something together."
            subtitle="Whether it's collaborating on a project, an internship, or just connecting, I'm always open."
            centered
          />

          <p className="text-[#DFD9F7]/70 mt-2 mb-10">
            Reach out for collaborations, opportunities, or just a conversation.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.15 },
            },
            hidden: {},
          }}
        >
          {contactLinks.map((link) => {
            const isExternalLink = link.href.startsWith("http");
            const sharedClass =
              "flex items-center gap-3 px-6 py-3.5 rounded-xl border border-[#BDE3F0]/70 bg-[#2D0A4E]/60 backdrop-blur-sm transition-all duration-200 font-medium text-sm";

            const itemVariants = {
              hidden: { opacity: 0, y: 30, scale: 0.88 },
              visible: { opacity: 1, y: 0, scale: 1 },
            };
            const itemTransition = {
              type: "spring" as const,
              stiffness: 260,
              damping: 22,
            };

            if (isExternalLink) {
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${sharedClass} text-[#DFD9F7]/85 hover:border-[#E0FFFE] hover:bg-[#2D0A4E]/80 hover:shadow-[0_0_20px_rgba(189,227,240,0.25)] hover:text-[#E0FFFE]`}
                  data-ocid={`contact-${link.icon}`}
                  variants={itemVariants}
                  transition={itemTransition}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {iconMap[link.icon]}
                  {link.label}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={link.label}
                className={`${sharedClass} text-[#DFD9F7]/85 cursor-default select-text`}
                data-ocid={`contact-${link.icon}`}
                variants={itemVariants}
                transition={itemTransition}
                whileHover={{ scale: 1.03, y: -2 }}
              >
                {iconMap[link.icon]}
                {link.label}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16 pt-8 border-t border-[#BDE3F0]/30 text-sm text-[#DFD9F7]/55"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
        >
          <p>
            © {new Date().getFullYear()} Swarit Sawarkar. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BDE3F0] hover:text-[#E0FFFE] hover:underline transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
