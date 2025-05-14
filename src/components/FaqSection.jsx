import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FaqItem = ({ value, trigger, content }) => (
  <AccordionItem
    value={value}
    className="bg-lulu-soft rounded-lg shadow-soft border border-lulu-border px-6"
  >
    <AccordionTrigger className="text-lg font-medium text-lulu-darkText text-left hover:text-lulu-primary">
      {trigger}
    </AccordionTrigger>
    <AccordionContent className="text-lulu-lightText">
      {content}
    </AccordionContent>
  </AccordionItem>
);

const FaqSection = () => {
  const faqs = [
    {
      value: "item-1",
      trigger: "Qual o nível de dificuldade para costurar o Vestido Luna?",
      content:
        "O Vestido Luna foi projetado para ser acessível tanto para iniciantes quanto para costureiras experientes. As instruções são detalhadas e o processo de costura é simplificado, permitindo que mesmo quem está começando consiga um resultado profissional.",
    },
    {
      value: "item-2",
      trigger: "Quais tamanhos estão incluídos na modelagem?",
      content: "A modelagem inclui os tamanhos P, M, G e GG.",
    },

    {
      value: "item-4",
      trigger: "Quanto tecido é necessário para fazer o Vestido Luna?",
      content:
        "A quantidade exata para cada tamanho está detalhada nas instruções da modelagem.",
    },
    {
      value: "item-5",
      trigger: "Quais tecidos são recomendados para o Vestido Luna?",
      content:
        "O Vestido Luna fica perfeito em tecidos como viscose, crepe, cetim, linho e até mesmo malhas mais estruturadas. Nas instruções, você encontrará recomendações específicas para cada variação do modelo.",
    },
    {
      value: "item-6",
      trigger: "Como recebo a modelagem após a compra?",
      content:
        "Assim que o pagamento for aprovado, você receberá acesso imediato à área de membros da Hotmart, onde poderá baixar os arquivos PDF da modelagem e assistir aos vídeos tutoriais com todo o passo a passo. Seguro e fácil de acessar.",
    },
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
