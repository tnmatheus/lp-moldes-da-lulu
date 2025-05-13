
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FaqItem = ({ value, trigger, content }) => (
  <AccordionItem value={value} className="bg-lulu-soft rounded-lg shadow-soft border border-lulu-border px-6">
    <AccordionTrigger className="text-lg font-medium text-lulu-darkText text-left hover:text-lulu-primary">
      {trigger}
    </AccordionTrigger>
    <AccordionContent className="text-lulu-lightText">{content}</AccordionContent>
  </AccordionItem>
);


const FaqSection = () => {
  const faqs = [
    { value: "item-1", trigger: "Qual o nível de dificuldade para costurar o Vestido Luna?", content: "O Vestido Luna foi projetado para ser acessível tanto para iniciantes quanto para costureiras experientes. As instruções são detalhadas e o processo de costura é simplificado, permitindo que mesmo quem está começando consiga um resultado profissional." },
    { value: "item-2", trigger: "Quais tamanhos estão incluídos na modelagem?", content: "A modelagem básica inclui os tamanhos PP, P, M, G e GG. Na versão Profissional e Ateliê, incluímos também os tamanhos Plus Size (até o 56)." },
    { value: "item-3", trigger: "Posso vender os vestidos que eu fizer com esta modelagem?", content: "Sim! Os pacotes Básico e Profissional permitem que você venda os vestidos produzidos para uso pessoal dos clientes. O pacote Ateliê inclui uma licença comercial completa, que permite produção em maior escala e revenda para outras lojas." },
    { value: "item-4", trigger: "Quanto tecido é necessário para fazer o Vestido Luna?", content: "Para um tamanho médio, você precisará de aproximadamente 2 metros de tecido com largura de 1,40m. A quantidade exata para cada tamanho está detalhada nas instruções da modelagem." },
    { value: "item-5", trigger: "Quais tecidos são recomendados para o Vestido Luna?", content: "O Vestido Luna fica perfeito em tecidos como viscose, crepe, cetim, linho e até mesmo malhas mais estruturadas. Nas instruções, você encontrará recomendações específicas para cada variação do modelo." },
    { value: "item-6", trigger: "Como recebo a modelagem após a compra?", content: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para download dos arquivos PDF da modelagem. Os vídeos tutoriais (incluídos nos pacotes Profissional e Ateliê) estarão disponíveis na área de membros." },
  ];

  return (
    <section id="faq" className="py-20 relative bg-lulu-background">
      <div className="absolute inset-0 faq-section"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-lulu-darkText"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Perguntas <span className="gradient-text">Frequentes</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-lulu-lightText max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Tire suas dúvidas sobre a modelagem do Vestido Luna.
          </motion.p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <FaqItem key={faq.value} {...faq} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
