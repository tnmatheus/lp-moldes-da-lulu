import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";

const Header = ({ handleBuyNow }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-lulu-background/90 backdrop-blur-sm border-b border-lulu-border"
      initial={{ y: 0 }}
      animate={{ y: isHeaderVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="https://moldesdalulu.com.br/logo-vetor.webp"
            alt="Logo Moldes da Lulu"
            className="h-11 w-auto"
          />

          <span className="text-xl font-bold gradient-text">Vestido Luna</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#beneficios"
            className="text-sm font-medium text-lulu-lightText hover:text-lulu-primary transition-colors"
          >
            Benefícios
          </a>
          <a
            href="#depoimentos"
            className="text-sm font-medium text-lulu-lightText hover:text-lulu-primary transition-colors"
          >
            Depoimentos
          </a>
          <a
            href="#precos"
            className="text-sm font-medium text-lulu-lightText hover:text-lulu-primary transition-colors"
          >
            Preços
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-lulu-lightText hover:text-lulu-primary transition-colors"
          >
            FAQ
          </a>
        </nav>
        <Button
          onClick={handleBuyNow}
          className="hidden md:flex items-center space-x-2 bg-lulu-primary hover:bg-lulu-buttonHover text-lulu-background"
        >
          <ShoppingBag className="h-4 w-4" />
          <span>Comprar Agora</span>
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
