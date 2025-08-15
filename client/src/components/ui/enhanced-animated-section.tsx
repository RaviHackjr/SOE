import { motion } from "framer-motion";
import { ReactNode } from "react";

interface EnhancedAnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number;
}

const EnhancedAnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up",
  duration = 0.6
}: EnhancedAnimatedSectionProps) => {
  
  const getInitialState = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: 30 };
      case "down": return { opacity: 0, y: -30 };
      case "left": return { opacity: 0, x: -30 };
      case "right": return { opacity: 0, x: 30 };
      case "fade": return { opacity: 0 };
      default: return { opacity: 0, y: 30 };
    }
  };

  const getFinalState = () => {
    switch (direction) {
      case "up": return { opacity: 1, y: 0 };
      case "down": return { opacity: 1, y: 0 };
      case "left": return { opacity: 1, x: 0 };
      case "right": return { opacity: 1, x: 0 };
      case "fade": return { opacity: 1 };
      default: return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialState()}
      whileInView={getFinalState()}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      viewport={{ 
        once: true, 
        margin: "-50px",
        amount: 0.2
      }}
      data-testid="enhanced-animated-section"
    >
      {children}
    </motion.div>
  );
};

export default EnhancedAnimatedSection;