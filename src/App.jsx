
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductShowcaseSection from "@/components/ProductShowcaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";

function App() {
  const { toast } = useToast();

  const handleBuyNow = () => {
    toast({
      title: "Obrigado pelo interesse!",
      description: "Em breve você receberá a modelagem do Vestido Luna.",
      duration: 5000,
      className: "bg-lulu-soft border-lulu-primary text-lulu-darkText",
    });
  };

  return (
    <div className="min-h-screen bg-lulu-background text-lulu-darkText">
      <Header handleBuyNow={handleBuyNow} />
      <main>
        <HeroSection handleBuyNow={handleBuyNow} />
        <StatsSection />
        <FeaturesSection />
        <ProductShowcaseSection />
        <TestimonialsSection />
        <PricingSection handleBuyNow={handleBuyNow} />
        <CtaSection handleBuyNow={handleBuyNow} />
        <FaqSection />
      </main>
      <Footer />
      <MobileCta handleBuyNow={handleBuyNow} />
      <Toaster />
    </div>
  );
}

export default App;
