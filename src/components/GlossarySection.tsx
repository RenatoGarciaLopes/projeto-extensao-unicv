import { Book, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const GlossarySection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const terms = [
    {
      term: "Phishing",
      definition: "Técnica de fraude que usa e-mails ou mensagens falsas para roubar informações pessoais, senhas e dados bancários."
    },
    {
      term: "Malware",
      definition: "Software malicioso projetado para danificar, infectar ou obter acesso não autorizado a sistemas e dados."
    },
    {
      term: "Ransomware",
      definition: "Tipo de malware que criptografa arquivos e exige pagamento de resgate para liberá-los."
    },
    {
      term: "Autenticação de Dois Fatores (2FA)",
      definition: "Camada extra de segurança que requer duas formas de verificação para acessar uma conta."
    },
    {
      term: "VPN",
      definition: "Virtual Private Network - cria uma conexão segura e criptografada entre seu dispositivo e a internet."
    },
    {
      term: "Criptografia",
      definition: "Processo de codificar informações para que apenas pessoas autorizadas possam acessá-las."
    },
    {
      term: "LGPD",
      definition: "Lei Geral de Proteção de Dados - lei brasileira que regula o tratamento de dados pessoais."
    },
    {
      term: "Firewall",
      definition: "Sistema de segurança que monitora e controla o tráfego de rede, bloqueando acessos não autorizados."
    },
    {
      term: "Engenharia Social",
      definition: "Manipulação psicológica de pessoas para obter informações confidenciais ou acesso a sistemas."
    },
    {
      term: "Backup",
      definition: "Cópia de segurança de dados importante para proteção contra perda, roubo ou corrupção."
    },
    {
      term: "Cookies",
      definition: "Pequenos arquivos armazenados no navegador que rastreiam atividades e preferências online."
    },
    {
      term: "DDoS",
      definition: "Ataque que sobrecarrega um sistema com tráfego excessivo, tornando-o indisponível."
    }
  ];

  const filteredTerms = terms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="glossary" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Book className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">
              <span className="text-gradient">Glossário</span> Digital
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Termos essenciais de cybersegurança explicados de forma simples
          </p>
        </div>

        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar termo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-6 text-lg bg-card/50 border-primary/20"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredTerms.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 card-shadow"
            >
              <h3 className="text-xl font-bold text-primary mb-3">{item.term}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.definition}</p>
            </Card>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              Nenhum termo encontrado. Tente outra busca.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GlossarySection;
