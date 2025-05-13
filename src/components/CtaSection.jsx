
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CtaSection = ({ handleBuyNow }) => {
  return (
    <section className="py-20 cta-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-lulu-darkText"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Transforme sua costura com o <span className="gradient-text">Vestido Luna</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-lulu-lightText mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Junte-se a centenas de costureiras que já estão lucrando e encantando clientes com esta modelagem exclusiva.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              onClick={handleBuyNow}
              className="bg-lulu-primary hover:bg-lulu-buttonHover text-lulu-background px-8 py-6 rounded-xl text-lg font-semibold shadow-medium hover:shadow-lg transition-all duration-300"
            >
              Quero Fazer o Vestido Luna
            </Button>
            <p className="mt-4 text-sm text-lulu-lightText">Garantia de 30 dias ou seu dinheiro de volta</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
