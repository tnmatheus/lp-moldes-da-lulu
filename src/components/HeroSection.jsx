import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = ({ handleBuyNow }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-lulu-soft">
      <div className="absolute inset-0 hero-pattern"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-lulu-darkText">
              E se o próximo vestido que você costurar fosse o{" "}
              <span className="gradient-text">mais bonito que já fez?</span>{" "}
            </h1>
            <p className="text-lg text-lulu-lightText mb-8">
              Com o Molde Luna, você cria um vestido com acabamento de loja,
              feito por você — do zero, em casa, com apoio total no vídeo. É só
              imprimir, cortar e costurar.
            </p>
            <p className="text-base text-lulu-darkText mb-6 italic">
              🎥 Quer ver como é simples? <strong>Assista ao vídeo</strong> e
              descubra como o molde funciona na prática.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                onClick={handleBuyNow}
                className="bg-lulu-primary hover:bg-lulu-buttonHover text-lulu-background px-8 py-6 rounded-xl text-lg font-semibold shadow-medium hover:shadow-lg transition-all duration-300"
              >
                Começar meu vestido agora
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-lulu-primary/30 to-lulu-accent/30 rounded-full blur-3xl opacity-50"></div>
              <iframe
                src="https://player.vimeo.com/video/1083216040?h=0fad9f021d"
                title="VSL Vestido Luna"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="relative rounded-2xl shadow-2xl w-full aspect-video"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
