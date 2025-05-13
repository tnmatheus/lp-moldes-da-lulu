
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const MobileCta = ({ handleBuyNow }) => {
  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 bg-lulu-background border-t border-lulu-border p-4 md:hidden z-40 shadow-soft"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <Button 
        onClick={handleBuyNow}
        className="w-full bg-lulu-primary hover:bg-lulu-buttonHover text-lulu-background"
      >
        <ShoppingBag className="h-4 w-4 mr-2" />
        Comprar Agora
      </Button>
    </motion.div>
  );
};

export default MobileCta;
