import { Github, Instagram, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";
import { contactLinks } from "../data";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  instagram: <Instagram size={18} />,
  mail: <Mail size={18} />,
  phone: <Phone size={18} />,
};

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <SectionHeader
            label="Contact"
            title="Let's build something together."
            subtitle="Whether it's collaborating on a project, an internship, or just connecting, I'm always open."
            centered
          />
          <p className="text-[#666] mt-2 mb-10 text-sm leading-relaxed">
            Reach out for collaborations, opportunities, or just a conversation.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
            hidden: {},
          }}
        >
          {contactLinks.map((link) =>
            link.href ? (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-[#333] bg-[#111] text-[#aaa] cursor-pointer font-medium text-sm tracking-wide hover:border-[#555] hover:text-white transition-colors duration-200"
                data-ocid={`contact-${link.icon}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <span className="text-[#555]">{iconMap[link.icon]}</span>
                <span>{link.label}</span>
              </motion.a>
            ) : (
              <motion.div
                key={link.label}
                className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-[#333] bg-[#111] text-[#aaa] cursor-default select-text font-medium text-sm tracking-wide"
                data-ocid={`contact-${link.icon}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <span className="text-[#555]">{iconMap[link.icon]}</span>
                <span>{link.label}</span>
              </motion.div>
            ),
          )}
        </motion.div>

        <motion.div
          className="mt-16 pt-8 border-t border-white/[0.06] text-xs text-[#444]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
        >
          <p>&copy; {new Date().getFullYear()} Swarit Sawarkar.</p>
        </motion.div>
      </div>
    </section>
  );
}
