import React from "react";
import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

const StatsSection = () => {
  const stats = [
    { end: 300, label: "Costureiras Satisfeitas", prefix: "+" },
    { customText: "Do P ao GG", label: "Tamanhos Disponíveis" },
    { end: 100, label: "Taxa de Aprovação", suffix: "%" },
  ];

  return (
    <section className="py-16 bg-lulu-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold text-lulu-primary mb-2">
                {stat.customText || (
                  <>
                    {stat.prefix}
                    <CountUp end={stat.end} />
                    {stat.suffix}
                  </>
                )}
              </p>

              <p className="text-lulu-lightText">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
