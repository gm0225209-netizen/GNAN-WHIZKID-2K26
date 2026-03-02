import { motion } from "framer-motion";
import { Brain, Database, Wifi, Bot, Cloud, Shield, Eye } from "lucide-react";

const topics = [
  { icon: Brain, name: "Machine Learning", color: "gold" },
  { icon: Database, name: "Big Data Analytics", color: "cyan" },
  { icon: Wifi, name: "Internet of Things", color: "magenta" },
  { icon: Bot, name: "Artificial Intelligence", color: "gold" },
  { icon: Cloud, name: "Cloud Computing", color: "cyan" },
  { icon: Shield, name: "Cyber Security", color: "magenta" },
  { icon: Eye, name: "Image Processing", color: "gold" },
];

const colorMap = {
  gold: "text-neon-gold border-neon-gold/30 bg-neon-gold/5 hover:bg-neon-gold/12 hover:border-neon-gold/60 hover:shadow-[0_0_15px_hsl(49_90%_73%/0.15)]",
  cyan: "text-neon-cyan border-neon-cyan/30 bg-neon-cyan/5 hover:bg-neon-cyan/12 hover:border-neon-cyan/60 hover:shadow-[0_0_15px_hsl(190_100%_70%/0.25)]",
  magenta: "text-neon-magenta border-neon-magenta/30 bg-neon-magenta/5 hover:bg-neon-magenta/12 hover:border-neon-magenta/60 hover:shadow-[0_0_15px_hsl(340_85%_60%/0.25)]",
};

const TopicsSection = () => {
  return (
    <section id="topics" className="py-16 sm:py-24 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="font-body text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-neon-amber/60 mb-2 sm:mb-3">Paper Presentation</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold gradient-text-magenta glow-text-magenta mb-3 sm:mb-4">
            TOPICS
          </h2>
          <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-neon-magenta to-transparent mx-auto mb-3 sm:mb-4" />
          <p className="font-body text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
            Submit your paper on any of the following cutting-edge technology domains
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {topics.map((topic, i) => {
            const Icon = topic.icon;
            const colorClass = colorMap[topic.color as keyof typeof colorMap];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-3 sm:py-4 rounded-xl border transition-all duration-300 cursor-pointer ${colorClass}`}
              >
                <Icon className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                <span className="font-body font-semibold text-xs sm:text-sm tracking-wide text-foreground">
                  {topic.name}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TopicsSection;
