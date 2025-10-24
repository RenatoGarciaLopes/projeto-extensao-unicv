import { Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToMissions = () => {
    const missionsSection = document.getElementById("missions");
    missionsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary-glow" />
            <span className="text-sm font-medium text-foreground">Educação e Defesa Digital 2025</span>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Aprenda{" "}
              <span className="text-gradient">Cybersegurança</span>
              <br />
              de Forma Divertida
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Domine os conceitos de segurança digital através de missões interativas e desafios gamificados
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground hover:opacity-90 transition-opacity text-lg px-8 py-6 glow"
              onClick={scrollToMissions}
            >
              <Shield className="w-5 h-5 mr-2" />
              Iniciar Missões
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-6"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Sobre o Projeto
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient">6+</div>
              <div className="text-sm text-muted-foreground">Tópicos</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient">100%</div>
              <div className="text-sm text-muted-foreground">Gratuito</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient">3 ODS</div>
              <div className="text-sm text-muted-foreground">Alinhados</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
