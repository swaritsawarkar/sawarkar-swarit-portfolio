import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
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
          ? "bg-[#020B2D]/95 backdrop-blur-md border-b border-[#BDE3F0]/60 shadow-elevated"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollTo("#hero")}
          className="font-display font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity duration-200"
          aria-label="Go to top"
        >
          <span className="gradient-accent">S.S.</span>
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`px-3 py-2 rounded-lg text-sm font-body font-medium transition-all duration-200 ${
                activeSection === link.href.slice(1)
                  ? "text-[#E0FFFE] bg-[#2D0A4E]/60 border border-[#BDE3F0]/80"
                  : "text-[#DFD9F7]/80 hover:text-[#E0FFFE] hover:bg-[#2D0A4E]/40 border border-transparent hover:border-[#BDE3F0]/40"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="ml-3 px-4 py-2 rounded-lg text-sm font-medium bg-[#DFD9F7] text-[#020B2D] hover:bg-[#E0FFFE] border border-[#BDE3F0] transition-all duration-200 glow-accent font-semibold"
            data-ocid="nav-cta"
          >
            Let's Connect
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-[#DFD9F7]/80 hover:text-[#E0FFFE] hover:bg-[#2D0A4E]/50 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          data-ocid="nav-mobile-toggle"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#020B2D]/98 backdrop-blur-md border-b border-[#BDE3F0]/50">
          <nav
            className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left px-3 py-3 rounded-lg text-sm font-medium text-[#DFD9F7]/80 hover:text-[#E0FFFE] hover:bg-[#2D0A4E]/50 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="mt-2 px-4 py-3 rounded-lg text-sm font-medium bg-[#DFD9F7] text-[#020B2D] text-center hover:bg-[#E0FFFE] border border-[#BDE3F0] transition-colors font-semibold"
            >
              Let's Connect
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
