import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MissionsSection from "@/components/MissionsSection";
import QuizSection from "@/components/QuizSection";
import GlossarySection from "@/components/GlossarySection";
import ReferencesSection from "@/components/ReferencesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AboutSection />
      <MissionsSection />
      <QuizSection />
      <GlossarySection />
      <ReferencesSection />
    </div>
  );
};

export default Index;
