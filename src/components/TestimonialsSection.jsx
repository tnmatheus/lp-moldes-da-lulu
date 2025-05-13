import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TestimonialCard = ({ name, text, image, delay }) => (
  <motion.div
    className="testimonial-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="flex items-center mb-4">
      <div className="flex-shrink-0">
        <img
          className="h-12 w-12 rounded-full object-cover"
          alt={`Foto de ${name}`}
          src={image}
        />
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-semibold text-lulu-darkText">{name}</h4>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 text-lulu-accent fill-lulu-accent"
            />
          ))}
        </div>
      </div>
    </div>
    <p className="text-lulu-lightText">{text}</p>
  </motion.div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana Paula",
      text: "Nunca achei que conseguiria costurar um vestido sozinha. O molde é claro, direto e o vídeo me ajudou demais. Me senti capaz e realizada!",
      image: "https://moldesdalulu.com.br/depoimento2.webp",
    },
    {
      name: "Mariana",
      text: "Não sabia nem por onde começar, mas a explicação é super simples.",
      image: "https://moldesdalulu.com.br/depoimento3.webp",
    },
    {
      name: "Claudia",
      text: "Com dois filhos e a correria do dia a dia, eu precisava de algo prático. Esse molde me salvou! Rápido de entender, fácil de costurar e o vestido ficou lindo.",
      image: "https://moldesdalulu.com.br/depoimento4.webp",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-lulu-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-lulu-darkText"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            O que dizem nossas{" "}
            <span className="gradient-text">costureiras</span>
          </motion.h2>
          <motion.p
            className="text-lg text-lulu-lightText max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Centenas de profissionais já transformaram seus negócios com nossa
            modelagem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
