import { Shield, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-bold text-xl">CyberEdu</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Capacitando a comunidade através da educação em cybersegurança.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold">Links Úteis</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#missions" className="hover:text-primary transition-colors">
                  Missões
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-primary transition-colors">
                  Quiz
                </a>
              </li>
              <li>
                <a href="#glossary" className="hover:text-primary transition-colors">
                  Glossário
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold">Recursos Externos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://www.gov.br/anpd/pt-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  ANPD - Autoridade Nacional de Proteção de Dados
                </a>
              </li>
              <li>
                <a
                  href="https://www.cert.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  CERT.br - Centro de Estudos e Respostas
                </a>
              </li>
              <li>
                <a
                  href="https://cartilha.cert.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Cartilha de Segurança para Internet
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
