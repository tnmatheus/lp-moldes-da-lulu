import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PriceCard = ({
  title,
  price,
  features,
  isFeatured = false,
  delay,
  handleBuyNow,
}) => (
  <motion.div
    className={`price-card ${isFeatured ? "featured" : ""}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    {isFeatured && (
      <div className="absolute top-0 right-0 bg-gradient-to-r from-lulu-primary to-lulu-accent text-lulu-background text-xs font-bold px-3 py-1 rounded-bl-lg">
        MAIS POPULAR
      </div>
    )}
    <h3 className="text-xl font-bold mb-2 text-lulu-darkText">{title}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold text-lulu-primary">R${price}</span>
      <span className="text-lulu-lightText"> / único</span>
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="h-5 w-5 text-lulu-primary mt-0.5" />
          <span className="ml-2 text-lulu-lightText">{feature}</span>
        </li>
      ))}
    </ul>
    <Button
      onClick={handleBuyNow}
      className={`w-full ${
        isFeatured
          ? "bg-lulu-primary hover:bg-lulu-buttonHover text-lulu-background"
          : "bg-lulu-background hover:bg-lulu-soft text-lulu-primary border border-lulu-accent"
      }`}
    >
      Comprar Agora
    </Button>
  </motion.div>
);

const PricingSection = ({ handleBuyNow }) => {
  const pricingPlans = [
    {
      title: "MoldeVestido Luna",
      price: 24,
      features: [
        "Modelagem completa (PDF)",
        "Tamanhos P ao GG",
        "Vídeo tutorial completo",
        "Suporte por 30 dias",
      ],
      isFeatured: true,
    },
  ];

  return (
    <section id="precos" className="py-20 bg-lulu-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-lulu-darkText"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Invista na sua <span className="gradient-text">carreira</span>
          </motion.h2>
          <motion.p
            className="text-lg text-lulu-lightText max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Escolha o pacote que melhor se adapta às suas necessidades.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PriceCard
              key={index}
              {...plan}
              delay={index * 0.2}
              handleBuyNow={handleBuyNow}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
