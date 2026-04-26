import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Edits", href: "#edits" },
  { label: "Timeline", href: "#timeline" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href === "#hero" ? "hero" : href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-ocid="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-[20px] border-b border-white/[0.08] shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("#hero")}
          className="font-display font-bold text-2xl tracking-tight text-white hover:opacity-70 transition-opacity duration-200"
          aria-label="Go to top"
          data-ocid="nav-logo"
        >
          S.S.
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-0.5"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => scrollTo(link.href)}
              data-ocid={`nav-link-${link.label.toLowerCase()}`}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 ${
                activeSection === link.href.slice(1)
                  ? "text-white border border-[#444] bg-white/[0.04]"
                  : "text-[#aaa] hover:text-white border border-transparent hover:border-[#2a2a2a] hover:bg-white/[0.03]"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold tracking-wide text-white border border-[#444] hover:bg-white hover:text-black transition-all duration-200"
            data-ocid="nav-cta"
          >
            Connect
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-[#aaa] hover:text-white hover:bg-white/[0.05] transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          data-ocid="nav-mobile-toggle"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-[20px] border-b border-white/[0.08]">
          <nav
            className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-0.5"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left px-3 py-3 rounded-lg text-sm font-medium text-[#aaa] hover:text-white hover:bg-white/[0.04] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-white border border-[#444] text-center hover:bg-white hover:text-black transition-all duration-200"
            >
              Connect
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
