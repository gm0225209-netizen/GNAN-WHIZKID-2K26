import { motion } from "framer-motion";
import { Code2, Monitor, FileText, Search, Film, Gamepad2 } from "lucide-react";

const events = [
  { icon: FileText, name: "Paper Presentation", desc: "Present your research on cutting-edge topics", color: "gold" },
  { icon: Search, name: "Tech Quiz", desc: "Test your technical knowledge & win big", color: "cyan" },
  { icon: Code2, name: "Code Debugging", desc: "Hunt and squash bugs under the clock", color: "magenta" },
  { icon: Monitor, name: "Web Design", desc: "Craft stunning UIs and user experiences", color: "gold" },
  { icon: Film, name: "Short Film", desc: "Express ideas through cinematic storytelling", color: "cyan" },
  { icon: Gamepad2, name: "Non-Technical Events", desc: "Fun-filled activities for everyone", color: "magenta" },
];

const colorMap = {
  gold: {
    icon: "text-neon-gold",
    card: "glass-card",
    border: "neon-border-gold",
    badge: "bg-neon-gold/10 text-neon-gold",
    line: "bg-neon-gold",
    hover: "hover:border-neon-gold/70 hover:shadow-[0_0_20px_hsl(49_90%_73%/0.15)]",
  },
  cyan: {
    icon: "text-neon-cyan",
    card: "glass-card-cyan",
    border: "neon-border-cyan",
    badge: "bg-neon-cyan/10 text-neon-cyan",
    line: "bg-neon-cyan",
    hover: "hover:border-neon-cyan/70 hover:shadow-[0_0_20px_hsl(190_100%_70%/0.25)]",
  },
  magenta: {
    icon: "text-neon-magenta",
    card: "glass-card-magenta",
    border: "neon-border-magenta",
    badge: "bg-neon-magenta/10 text-neon-magenta",
    line: "bg-neon-magenta",
    hover: "hover:border-neon-magenta/70 hover:shadow-[0_0_20px_hsl(340_85%_60%/0.25)]",
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring" as const, bounce: 0.2 },
  },
};

const EventsSection = () => {
  return (
    <section id="events" className="py-16 sm:py-24 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="font-body text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-neon-gold/60 mb-2 sm:mb-3">Compete &amp; Conquer</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold gradient-text-gold glow-text-gold mb-3 sm:mb-4">
            EVENTS
          </h2>
          <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-neon-gold to-transparent mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {events.map((event, i) => {
            const colors = colorMap[event.color as keyof typeof colorMap];
            const Icon = event.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`${colors.card} rounded-xl p-4 sm:p-6 ${colors.border} ${colors.hover} transition-all duration-300 cursor-pointer group`}
              >
                <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-lg ${colors.badge} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`w-5 sm:w-6 h-5 sm:h-6 ${colors.icon}`} />
                </div>
                <div className={`h-0.5 w-8 ${colors.line} mb-3 sm:mb-4 rounded-full group-hover:w-12 transition-all duration-300`} />
                <h3 className="font-display text-xs sm:text-sm font-bold tracking-wider text-foreground mb-1.5 sm:mb-2">
                  {event.name}
                </h3>
                <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {event.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Important Dates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 sm:mt-14 glass-card-cyan neon-border-cyan rounded-xl p-5 sm:p-6"
        >
          <h3 className="font-display text-xs sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-neon-cyan mb-4 sm:mb-5">
            Important Dates
          </h3>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
              <div>
                <p className="font-body text-[10px] sm:text-xs text-muted-foreground tracking-wider uppercase mb-1">
                  Paper Submission Deadline
                </p>
                <p className="font-display text-sm sm:text-base font-bold gradient-text-cyan">
                  09.03.2026
                </p>
              </div>
              <div>
                <p className="font-body text-[10px] sm:text-xs text-muted-foreground tracking-wider uppercase mb-1">
                  Intimation for Selection
                </p>
                <p className="font-display text-sm sm:text-base font-bold gradient-text-cyan">
                  10.03.2026
                </p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className="font-body text-[10px] sm:text-xs text-muted-foreground tracking-wider uppercase mb-1">
                Send Papers to
              </p>
              <a
                href="mailto:gnanwhizkid3@gmail.com"
                className="font-display text-sm sm:text-base font-bold text-neon-cyan hover:text-neon-cyan/80 transition-colors duration-200 underline underline-offset-4 decoration-neon-cyan/40"
              >
                gnanwhizkid3@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
