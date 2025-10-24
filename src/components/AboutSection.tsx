import { Target, Users, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const ods = [
    {
      icon: Target,
      number: "9",
      title: "Indústria, Inovação e Infraestrutura",
      description: "Promovendo infraestrutura resiliente e inovação tecnológica"
    },
    {
      icon: Users,
      number: "11",
      title: "Cidades e Comunidades Sustentáveis",
      description: "Construindo comunidades digitalmente seguras e inclusivas"
    },
    {
      icon: Globe,
      number: "17",
      title: "Parcerias em Prol das Metas",
      description: "Fortalecendo colaboração para segurança digital"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre o <span className="text-gradient">Projeto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capacitar a comunidade para compreender leis cibernéticas e riscos tecnológicos, 
            promovendo uma cultura digital mais segura, consciente e responsável.
          </p>
        </div>

        {/* Mission Card */}
        <Card className="p-8 mb-12 bg-card/50 backdrop-blur-sm border-primary/20 card-shadow">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Nossa Missão</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desenvolver e entregar conhecimento acessível sobre educação e defesa digital para a comunidade, 
              formando cidadãos conscientes e protegidos no ambiente digital. Através de uma abordagem interativa 
              e gamificada, buscamos reduzir vulnerabilidades e disseminar boas práticas online.
            </p>
          </div>
        </Card>

        {/* ODS Cards */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-center mb-8">
            ODS <span className="text-gradient">Relacionados</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {ods.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 card-shadow group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-3xl font-bold text-primary">ODS {item.number}</span>
                    </div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Target Audience */}
        <Card className="p-8 mt-12 bg-gradient-primary text-primary-foreground card-shadow">
          <div className="flex items-center gap-4 mb-4">
            <Users className="w-8 h-8" />
            <h3 className="text-2xl font-bold">Público-Alvo</h3>
          </div>
          <p className="text-lg opacity-90">
            Comunidade em geral, com foco especial em inclusão e segurança digital. 
            Nosso conteúdo é desenvolvido para ser acessível a todos, independentemente do nível de conhecimento técnico.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
