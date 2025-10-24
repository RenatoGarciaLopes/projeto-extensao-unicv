import { Shield, Lock, Eye, FileText, AlertTriangle, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MissionsSection = () => {
  const missions = [
    {
      id: "phishing",
      icon: Shield,
      title: "Missão 1: Detectar Phishing",
      difficulty: "Iniciante",
      badge: "warning",
      content: {
        description: "Aprenda a identificar tentativas de phishing e proteja suas informações pessoais.",
        topics: [
          "O que é phishing e como funciona",
          "Sinais de e-mails suspeitos",
          "Como verificar links antes de clicar",
          "Golpes comuns no WhatsApp e redes sociais"
        ],
        tips: [
          "Sempre verifique o remetente do e-mail",
          "Desconfie de urgências e ameaças",
          "Nunca clique em links suspeitos",
          "Use autenticação de dois fatores"
        ]
      }
    },
    {
      id: "passwords",
      icon: Lock,
      title: "Missão 2: Senhas Invencíveis",
      difficulty: "Iniciante",
      badge: "success",
      content: {
        description: "Crie e gerencie senhas fortes para proteger todas as suas contas online.",
        topics: [
          "Características de senhas fortes",
          "Gerenciadores de senhas",
          "Autenticação de dois fatores (2FA)",
          "Como recuperar contas comprometidas"
        ],
        tips: [
          "Use pelo menos 12 caracteres",
          "Combine letras, números e símbolos",
          "Nunca reutilize senhas",
          "Ative 2FA sempre que possível"
        ]
      }
    },
    {
      id: "privacy",
      icon: Eye,
      title: "Missão 3: Privacidade Digital",
      difficulty: "Intermediário",
      badge: "primary",
      content: {
        description: "Proteja seus dados pessoais e entenda seus direitos digitais.",
        topics: [
          "Configurações de privacidade em redes sociais",
          "Rastreamento online e cookies",
          "VPNs e navegação privada",
          "Compartilhamento seguro de informações"
        ],
        tips: [
          "Revise configurações de privacidade regularmente",
          "Limite informações públicas em perfis",
          "Use navegação privada quando necessário",
          "Desconfie de apps que pedem muitas permissões"
        ]
      }
    },
    {
      id: "lgpd",
      icon: FileText,
      title: "Missão 4: LGPD e Seus Direitos",
      difficulty: "Intermediário",
      badge: "primary",
      content: {
        description: "Conheça a Lei Geral de Proteção de Dados e seus direitos como cidadão digital.",
        topics: [
          "O que é a LGPD",
          "Direitos do titular de dados",
          "Como solicitar acesso/exclusão de dados",
          "Denunciar vazamentos e irregularidades"
        ],
        tips: [
          "Você pode solicitar seus dados de qualquer empresa",
          "Tem direito de corrigir informações incorretas",
          "Pode pedir exclusão de dados desnecessários",
          "Denuncie violações à ANPD"
        ]
      }
    },
    {
      id: "fakenews",
      icon: AlertTriangle,
      title: "Missão 5: Combate à Desinformação",
      difficulty: "Intermediário",
      badge: "warning",
      content: {
        description: "Identifique fake news e aprenda a verificar informações antes de compartilhar.",
        topics: [
          "Como identificar notícias falsas",
          "Ferramentas de fact-checking",
          "Impacto da desinformação",
          "Responsabilidade ao compartilhar"
        ],
        tips: [
          "Verifique a fonte da informação",
          "Procure outras fontes confiáveis",
          "Desconfie de títulos sensacionalistas",
          "Use agências de fact-checking"
        ]
      }
    },
    {
      id: "mobile",
      icon: Smartphone,
      title: "Missão 6: Segurança Mobile",
      difficulty: "Avançado",
      badge: "destructive",
      content: {
        description: "Proteja seu smartphone e dados pessoais contra ameaças mobile.",
        topics: [
          "Apps maliciosos e permissões",
          "Wi-Fi públicas e riscos",
          "Backup e criptografia de dados",
          "Proteção contra roubo de dispositivo"
        ],
        tips: [
          "Baixe apps apenas de lojas oficiais",
          "Evite Wi-Fi públicas para transações",
          "Mantenha sistema e apps atualizados",
          "Configure bloqueio e localização do dispositivo"
        ]
      }
    }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "warning": return "default";
      case "success": return "default";
      case "primary": return "default";
      case "destructive": return "destructive";
      default: return "default";
    }
  };

  return (
    <section id="missions" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Suas <span className="text-gradient">Missões</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete cada missão para dominar os conceitos essenciais de cybersegurança
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <AccordionItem 
                key={mission.id} 
                value={mission.id}
                className="border-none"
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 card-shadow">
                  <AccordionTrigger className="px-6 py-6 hover:no-underline group">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-xl font-bold mb-1">{mission.title}</h3>
                        <Badge variant={getBadgeVariant(mission.badge)} className="text-xs">
                          {mission.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-6 pt-4">
                      <p className="text-muted-foreground text-lg">
                        {mission.content.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="font-bold text-primary">O que você vai aprender:</h4>
                          <ul className="space-y-2">
                            {mission.content.topics.map((topic, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-success mt-1">✓</span>
                                <span className="text-muted-foreground">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-bold text-primary">Dicas de ouro:</h4>
                          <ul className="space-y-2">
                            {mission.content.tips.map((tip, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-warning mt-1">★</span>
                                <span className="text-muted-foreground">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default MissionsSection;
