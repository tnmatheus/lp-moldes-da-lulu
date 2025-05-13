import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const DetailItem = ({ title, description }) => (
  <li className="flex items-start">
    <div className="flex-shrink-0 mt-1">
      <Check className="h-5 w-5 text-lulu-primary" />
    </div>
    <div className="ml-3">
      <p className="text-lg font-medium text-lulu-darkText">{title}</p>
      <p className="text-lulu-lightText">{description}</p>
    </div>
  </li>
);

const ProductShowcaseSection = () => {
  const details = [
    {
      title: "Decote elegante",
      description:
        "Valoriza o colo sem ser exagerado, perfeito para diversas ocasiões.",
    },
    {
      title: "Cintura marcada",
      description:
        "Desenho que valoriza a silhueta feminina, criando um visual equilibrado.",
    },
    {
      title: "Comprimento versátil",
      description:
        "Opções de comprimento que podem ser facilmente ajustadas conforme preferência.",
    },
    {
      title: "Mangas diferenciadas",
      description:
        "Design exclusivo que adiciona um toque de sofisticação ao modelo.",
    },
  ];

  return (
    <section className="py-20 bg-lulu-soft">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-lulu-darkText">
              Detalhes que fazem a{" "}
              <span className="gradient-text">diferença</span>
            </h2>
            <ul className="space-y-4">
              {details.map((detail, index) => (
                <DetailItem key={index} {...detail} />
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="md:w-1/2 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <img
                  class="rounded-lg shadow-soft"
                  alt="Detalhe do decote do Vestido Luna"
                  src="https://moldesdalulu.com.br/vestido4.webp"
                />
              </div>
              <div className="relative mt-10">
                <img
                  class="rounded-lg shadow-soft"
                  alt="Detalhe da cintura do Vestido Luna"
                  src="https://moldesdalulu.com.br/vestido2.webp"
                />
              </div>
              <div className="relative mt-6">
                <img
                  class="rounded-lg shadow-soft"
                  alt="Detalhe da manga do Vestido Luna"
                  src="https://moldesdalulu.com.br/vestido3.webp"
                />
              </div>
              <div className="relative">
                <img
                  class="rounded-lg shadow-soft"
                  alt="Vestido Luna completo"
                  src="https://moldesdalulu.com.br/vestido5.webp"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;
