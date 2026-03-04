import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Zap, FileText, X } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <section className="relative sm:min-h-screen flex flex-col items-center justify-start sm:justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/backg.jpeg')` }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[hsl(270,30%,10%,0.7)]" />
      {/* Vibrant color fog layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(190,100%,70%,0.08)] via-transparent to-[hsl(49,90%,73%,0.06)]" />
      <div className="absolute inset-0 bg-gradient-to-tl from-[hsl(340,85%,60%,0.06)] via-transparent to-[hsl(280,60%,65%,0.05)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(270,30%,10%)]" />

      {/* Atmospheric glow spots — vibrant multi-color */}
      <div className="absolute top-[5%] left-[10%] w-[350px] h-[350px] rounded-full bg-[hsl(190,100%,70%,0.08)] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-[hsl(340,85%,60%,0.07)] blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[hsl(49,90%,73%,0.05)] blur-[140px] pointer-events-none" />

      {/* Subtle stone-like texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(49,90%,73%) 0.5px, transparent 0.5px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Mist animation overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none animate-mist"
        style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 0%, hsl(200,70%,55%,0.15) 30%, transparent 50%, hsl(35,65%,45%,0.1) 70%, transparent 100%)
          `,
          backgroundSize: '200% 100%',
        }}
      />

      {/* Ember-like floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
            background: i % 2 === 0
              ? 'hsl(49, 90%, 73%)'
              : 'hsl(340, 85%, 60%)',
          }}
          animate={{ y: [-4, 4, -4], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.6 }}
        />
      ))}

      <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-5xl mx-auto pt-16 pb-10 sm:pt-20 sm:pb-0">
        {/* College logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 sm:mb-6 flex flex-col items-center text-center"
        >
          {/* Logo centered */}
          <div className="flex items-center justify-center">
            <img
              src="/gnan%20logo.jpeg"
              alt="Gnanamani Logo"
              className="w-48 sm:w-64 md:w-80 h-36 sm:h-48 md:h-60 object-contain drop-shadow-[0_0_28px_hsl(49_90%_73%/0.4)]"
              style={{ clipPath: "inset(16% 6% 16% 6% round 16px)" }}
            />
          </div>
          <p className="font-body text-xs sm:text-sm md:text-base text-neon-gold font-semibold tracking-wide mt-3">
            Association of CSE, IT &amp; AI&amp;DS
          </p>
        </motion.div>

        {/* Organizes tag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-body text-xs sm:text-sm md:text-base text-foreground/70 mb-4 sm:mb-6 tracking-wide"
        >
          Proudly Organizes a{" "}
          <span className="text-neon-amber font-semibold">National Level Technical Symposium</span>
        </motion.p>

        {/* Main title — Norse epic style */}
        <div className="mb-6 sm:mb-8">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black tracking-wider leading-none">
            <motion.span
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7, type: "spring", bounce: 0.4 }}
              className="gradient-text-gold glow-text-gold animate-neon-flicker inline-block"
            >
              GNAN
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8, type: "spring", bounce: 0.35 }}
              className="gradient-text-cyan glow-text-cyan inline-block"
            >
              WHIZKID
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.7, type: "spring", bounce: 0.4 }}
              className="gradient-text-magenta glow-text-magenta inline-block"
            >
              2K26
            </motion.span>
          </h1>
        </div>

        {/* Date & Info badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-2 glass-card px-4 sm:px-5 py-2.5 sm:py-3 rounded-full neon-border-gold">
            <Calendar className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-neon-gold" />
            <span className="font-body font-semibold text-xs sm:text-sm tracking-wide">MAR 13, 2026</span>
          </div>
          <a
            href="https://maps.app.goo.gl/d9Fe5tuo3zujkmt5A?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 glass-card-magenta px-4 sm:px-5 py-2.5 sm:py-3 rounded-full neon-border-magenta hover:opacity-80 transition-opacity duration-200"
          >
            <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-neon-magenta" />
            <span className="font-body font-semibold text-xs sm:text-sm tracking-wide">Institution Location</span>
          </a>
          <div className="flex items-center gap-2 glass-card px-4 sm:px-5 py-2.5 sm:py-3 rounded-full neon-border-gold">
            <Zap className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-neon-gold" />
            <span className="font-body font-semibold text-xs sm:text-sm tracking-wide">REG FEE: ₹250</span>
          </div>
        </motion.div>

        {/* CTA Buttons — stone/bronze aesthetic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4"
        >
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdTDPHUHbHfcQ3XN0OZC7hcZxgiG-NybtxHBP7uk8iwArQdDQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="font-display text-xs sm:text-sm font-bold tracking-widest uppercase px-6 sm:px-8 py-3 sm:py-4 rounded-lg btn-primary glow-gold hover:shadow-[0_0_35px_hsl(49_90%_73%/0.5)] transition-shadow duration-300 text-center"
          >
            Register Now
          </motion.a>
          <motion.a
            href="#events"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="font-display text-xs sm:text-sm font-bold tracking-widest uppercase px-6 sm:px-8 py-3 sm:py-4 rounded-lg glass-card neon-border-cyan text-neon-cyan hover:shadow-[0_0_30px_hsl(190_100%_70%/0.35)] transition-shadow duration-300 text-center"
          >
            View Events
          </motion.a>
        </motion.div>

        {/* Brochure Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mt-6 sm:mt-8 flex justify-center"
        >
          <motion.button
            onClick={() => setBrochureOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-3 glass-card neon-border-gold px-6 sm:px-8 py-4 sm:py-5 rounded-2xl hover:shadow-[0_0_40px_hsl(49_90%_73%/0.45)] transition-all duration-300 cursor-pointer"
          >
            {/* Glow behind icon */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(49,90%,73%,0.08)] to-transparent pointer-events-none" />
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[hsl(49,90%,73%,0.15)] group-hover:bg-[hsl(49,90%,73%,0.25)] transition-colors duration-300">
              <FileText className="w-5 h-5 text-neon-gold" />
            </div>
            <div className="text-left">
              <p className="font-display text-xs sm:text-sm font-bold tracking-widest uppercase text-neon-gold leading-tight">
                Brochure
              </p>
              <p className="font-body text-[10px] sm:text-xs text-foreground/50 tracking-wide mt-0.5">
                Click to view event brochure
              </p>
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Brochure Lightbox Modal */}
      <AnimatePresence>
        {brochureOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setBrochureOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-[0_0_60px_hsl(49_90%_73%/0.3)] border border-[hsl(49,90%,73%,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setBrochureOpen(false)}
                className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white hover:bg-black/80 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
              <img
                src="/brochure.jpeg"
                alt="Event Brochure"
                className="w-full h-auto block"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
