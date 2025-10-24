import { ExternalLink, BookOpen, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const ReferencesSection = () => {
  const references = [
    {
      title: "ANPD - Autoridade Nacional de Proteção de Dados",
      url: "https://www.gov.br/anpd/pt-br",
      description: "Órgão responsável pela proteção de dados pessoais no Brasil",
      icon: Shield,
    },
    {
      title: "CERT.br - Centro de Estudos e Respostas",
      url: "https://www.cert.br/",
      description: "Tratamento de incidentes de segurança em redes brasileiras",
      icon: Shield,
    },
    {
      title: "Cartilha de Segurança para Internet",
      url: "https://cartilha.cert.br/",
      description: "Guia completo sobre segurança na internet",
      icon: BookOpen,
    },
  ];

  return (
    <section id="references" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Referências e <span className="text-gradient">Recursos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Links úteis para aprofundar seus conhecimentos em cybersegurança
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {references.map((ref, index) => {
            const Icon = ref.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in card-shadow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block space-y-4"
                >
                  <div className="flex items-start justify-between">
                    <Icon className="w-8 h-8 text-primary" />
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {ref.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {ref.description}
                    </p>
                  </div>
                </a>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ReferencesSection;
