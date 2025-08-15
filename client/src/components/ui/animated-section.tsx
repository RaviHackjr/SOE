import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      viewport={{ 
        once: true, 
        margin: "-100px",
        amount: 0.3
      }}
      data-testid="animated-section"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
