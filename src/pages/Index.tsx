import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import TopicsSection from "@/components/TopicsSection";
import CoordinatorsSection from "@/components/CoordinatorsSection";
import RegisterSection from "@/components/RegisterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <HeroSection />
      <EventsSection />
      <TopicsSection />
      <CoordinatorsSection />
      <RegisterSection />
      <footer className="border-t border-border/40 py-6 sm:py-8 text-center px-4">
        <p className="font-body text-[10px] sm:text-xs text-muted-foreground tracking-widest uppercase">
          © 2026 <span className="text-neon-gold">Gnanamani College of Technology</span> · Association of CSE, AI&DS &amp; IT
        </p>
        <p className="font-body text-[10px] sm:text-xs text-muted-foreground/50 mt-1">
          NH-7, A.K. Samuthiram, Pachal P.O, Namakkal, Tamil Nadu – 637018
        </p>
      </footer>
    </div>
  );
};

export default Index;
