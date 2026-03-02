import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const formsUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdTDPHUHbHfcQ3XN0OZC7hcZxgiG-NybtxHBP7uk8iwArQdDQ/viewform";

  const links = [
    { href: "#events", label: "Events" },
    { href: "#topics", label: "Topics" },
    { href: "#coordinators", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 py-3 sm:py-4"
    >
      <div className="max-w-6xl mx-auto glass-card neon-border-gold rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
        <div className="font-display text-[10px] sm:text-xs font-bold tracking-widest">
          <span className="gradient-text-gold">GNAN WHIZKID</span>
          <span className="text-neon-magenta ml-1">2K26</span>
        </div>

        {/* Desktop links — right aligned */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 ml-auto">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-body text-sm text-muted-foreground hover:text-neon-gold transition-colors duration-200 tracking-wide cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href={formsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-muted-foreground hover:text-neon-gold transition-colors duration-200 tracking-wide cursor-pointer"
          >
            Register
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-neon-gold p-1">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden max-w-6xl mx-auto mt-2 glass-card rounded-xl px-4 sm:px-6 py-3 sm:py-4 flex flex-col gap-2"
        >
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => { scrollTo(link.href); setMobileOpen(false); }}
              className="font-body text-sm text-muted-foreground hover:text-neon-gold transition-colors py-2 border-b border-border/30 last:border-0 text-left cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href={formsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="font-display text-xs font-bold tracking-widest uppercase px-4 py-2.5 rounded-lg btn-primary text-center mt-2 cursor-pointer block"
          >
            Register
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;
