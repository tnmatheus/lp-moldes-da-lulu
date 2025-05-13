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
              Modelagem do <span className="gradient-text">Vestido Luna</span>{" "}
              para Costureiras Criativas
            </h1>
            <p className="text-lg text-lulu-lightText mb-8">
              Crie o vestido perfeito com nossa modelagem exclusiva. Elegante,
              versátil e fácil de fazer, o Vestido Luna vai transformar seu
              negócio de costura.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                onClick={handleBuyNow}
                className="bg-lulu-primary hover:bg-lulu-buttonHover text-lulu-background px-8 py-6 rounded-xl text-lg font-semibold shadow-medium hover:shadow-lg transition-all duration-300"
              >
                Quero Fazer o Vestido Luna
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
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
