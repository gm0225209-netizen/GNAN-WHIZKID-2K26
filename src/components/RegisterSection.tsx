import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Trophy } from "lucide-react";

const RegisterSection = () => {
  return (
    <section id="register" className="py-16 sm:py-24 px-4 relative overflow-hidden">
      {/* Static radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-gradient-radial from-neon-gold/8 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Trophy */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <Trophy className="w-8 sm:w-10 h-8 sm:h-10 text-neon-gold animate-float" />
          </div>

          <p className="font-body text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-neon-gold/60 mb-3 sm:mb-4">Join the Experience</p>

          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-black gradient-text-gold glow-text-gold mb-3 sm:mb-4">
            REGISTER
          </h2>
          <h3 className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            &amp; WIN EXCITING <span className="gradient-text-cyan glow-text-cyan">PRIZES</span>
          </h3>

          <p className="font-body text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            Registration fee of just <span className="text-neon-gold font-semibold">₹250 per student</span>.
            Secure your spot at Gnanamani's biggest tech event of the year!
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 px-4 sm:px-0">
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdTDPHUHbHfcQ3XN0OZC7hcZxgiG-NybtxHBP7uk8iwArQdDQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 font-display text-xs sm:text-sm font-bold tracking-widest uppercase px-6 sm:px-10 py-4 sm:py-5 rounded-xl btn-primary glow-gold hover:shadow-[0_0_40px_hsl(49_90%_73%/0.5)] transition-shadow duration-300"
            >
              Register Now <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="mailto:gnanwhizkid3@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 font-display text-xs sm:text-sm font-bold tracking-widest uppercase px-6 sm:px-10 py-4 sm:py-5 rounded-xl glass-card neon-border-cyan text-neon-cyan hover:shadow-[0_0_20px_hsl(190_100%_70%/0.3)] transition-shadow duration-300"
            >
              Submit Paper <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-3 gap-2 sm:gap-4"
        >
          {[
            { value: "6+", label: "Events", border: "neon-border-gold", gradient: "gradient-text-gold" },
            { value: "7+", label: "Paper Topics", border: "neon-border-cyan", gradient: "gradient-text-cyan" },
            { value: "₹250", label: "Reg. Fee", border: "neon-border-magenta", gradient: "gradient-text-magenta" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`glass-card ${stat.border} rounded-xl py-4 sm:py-6 px-2 sm:px-4`}
            >
              <p className={`font-display text-xl sm:text-2xl md:text-3xl font-black mb-1 ${stat.gradient}`}>
                {stat.value}
              </p>
              <p className="font-body text-[9px] sm:text-xs text-muted-foreground tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterSection;
