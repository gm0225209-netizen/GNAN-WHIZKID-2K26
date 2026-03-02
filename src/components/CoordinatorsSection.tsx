import { motion } from "framer-motion";
import { GraduationCap, Users, Phone } from "lucide-react";

const facultyCoordinators = [
  { name: "Prof. M.S.Sabari", phone: "9524497810" },
  { name: "Prof. J.Gayathri", phone: "9788513628" },
  { name: "Prof. D.Manikandaprabhu", phone: "9176672626" },
];

const studentCoordinators = [
  { name: "T.Bathrinath", phone: "6379279833" },
  { name: "Y.Nandhakumar", phone: "6369539763" },
  { name: "M.Ajithkumar", phone: "6369317787" },
  { name: "I.Venkatesan", phone: "7397101370" },
  { name: "T.Jeeva", phone: "7812879418" },
  { name: "M.Sabareeshwaran", phone: "8525951408" },
];

const CoordinatorCard = ({
  name,
  phone,
  delay,
  iconColor = "text-neon-gold",
}: {
  name: string;
  phone: string;
  delay: number;
  iconColor?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -15 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className="flex items-center gap-3 py-2.5 sm:py-3 border-b border-border/30 last:border-0 group"
  >
    <div className={`w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-neon-gold/10 flex items-center justify-center flex-shrink-0`}>
      <Phone className={`w-3 sm:w-3.5 h-3 sm:h-3.5 ${iconColor}`} />
    </div>
    <div className="min-w-0">
      <p className="font-body text-xs sm:text-sm font-semibold text-white group-hover:text-neon-gold transition-colors duration-200 truncate">{name}</p>
      <a
        href={`tel:${phone}`}
        className="font-body text-[10px] sm:text-xs text-neon-cyan/80 hover:text-neon-cyan transition-colors"
      >
        +91 {phone}
      </a>
    </div>
  </motion.div>
);

const CoordinatorsSection = () => {
  return (
    <section id="coordinators" className="py-16 sm:py-24 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="font-body text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-neon-cyan/60 mb-2 sm:mb-3">Get in Touch</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold gradient-text-cyan glow-text-cyan mb-3 sm:mb-4">
            COORDINATORS
          </h2>
          <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Faculty */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card neon-border-gold rounded-xl p-4 sm:p-6"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-neon-gold/10 flex items-center justify-center">
                <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5 text-neon-gold" />
              </div>
              <div>
                <p className="font-body text-[10px] sm:text-xs text-muted-foreground tracking-wider uppercase">Contact</p>
                <h3 className="font-display text-xs sm:text-sm font-bold text-neon-gold">Faculty Coordinators</h3>
              </div>
            </div>
            {facultyCoordinators.map((c, i) => (
              <CoordinatorCard key={i} {...c} delay={i * 0.08} iconColor="text-neon-gold" />
            ))}
          </motion.div>

          {/* Students */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="glass-card-magenta neon-border-magenta rounded-xl p-4 sm:p-6"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-neon-magenta/10 flex items-center justify-center">
                <Users className="w-4 sm:w-5 h-4 sm:h-5 text-neon-magenta" />
              </div>
              <div>
                <p className="font-body text-[10px] sm:text-xs text-muted-foreground tracking-wider uppercase">Contact</p>
                <h3 className="font-display text-xs sm:text-sm font-bold text-neon-magenta">Student Coordinators</h3>
              </div>
            </div>
            {studentCoordinators.map((c, i) => (
              <CoordinatorCard key={i} {...c} delay={i * 0.06} iconColor="text-neon-magenta" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
