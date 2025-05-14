import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-lulu-primary to-lulu-accent text-lulu-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <Heart
                className="h-6 w-6 text-lulu-background"
                fill="currentColor"
              />
              <span className="text-xl font-bold">Vestido Luna</span>
            </div>
            <p className="text-lulu-background/80 max-w-xs">
              Modelagem exclusiva para mulheres que desejam criar peças únicas.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#beneficios"
                    className="text-lulu-background/80 hover:text-lulu-background transition-colors"
                  >
                    Benefícios
                  </a>
                </li>
                <li>
                  <a
                    href="#depoimentos"
                    className="text-lulu-background/80 hover:text-lulu-background transition-colors"
                  >
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a
                    href="#precos"
                    className="text-lulu-background/80 hover:text-lulu-background transition-colors"
                  >
                    Preços
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-lulu-background/80 hover:text-lulu-background transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li className="text-lulu-background/80">
                  contato@moldesdalulu.com.br
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-lulu-background/30 mt-12 pt-8 text-center">
          <p className="text-lulu-background/80">
            &copy; {new Date().getFullYear()} Vestido Luna. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
