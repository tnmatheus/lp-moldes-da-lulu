import React from "react";
import { motion } from "framer-motion";
import {
  Scissors,
  Award,
  Clock,
  Sparkles,
  ShoppingBag,
  Heart,
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    className="feature-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <Icon className="h-10 w-10 text-lulu-primary mb-4" />
    <h3 className="text-xl font-bold mb-2 text-lulu-darkText">{title}</h3>
    <p className="text-lulu-lightText">{description}</p>
  </motion.div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: Scissors,
      title: "Você vai conseguir",
      description:
        "Mesmo que esteja começando agora, vai costurar seu próprio vestido com facilidade e se sentir realizada com o resultado.",
    },
    {
      icon: Award,
      title: "Caimento lindo no corpo",
      description:
        "O molde foi pensado para valorizar o seu corpo, com modelagem leve, confortável e acabamento bonito de verdade.",
    },
    {
      icon: Clock,
      title: "Costure em poucas horas",
      description:
        "Ideal para quem tem pouco tempo: em uma tarde você corta, costura e vê o vestido prontinho!",
    },
    {
      icon: Sparkles,
      title: "Você faz do seu jeito",
      description:
        "Com pequenas mudanças no tecido ou nos detalhes, você cria versões únicas com a sua cara.",
    },
    {
      icon: ShoppingBag,
      title: "Nada de adivinhações",
      description:
        "Você vai saber exatamente por onde começar, com instruções simples e claras — é só imprimir, cortar e seguir.",
    },
    {
      icon: Heart,
      title: "Você vai se orgulhar",
      description:
        "A sensação de vestir algo que você mesma costurou não tem preço. Prepare-se pra elogios sinceros!",
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-lulu-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-lulu-darkText"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Por que escolher o{" "}
            <span className="gradient-text">Vestido Luna</span>?
          </motion.h2>
          <motion.p
            className="text-lg text-lulu-lightText max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nossa modelagem foi desenvolvida para garantir o melhor caimento e
            facilidade de produção.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
