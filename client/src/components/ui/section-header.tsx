import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({ title, subtitle, className = "" }: SectionHeaderProps) => {
  return (
    <motion.div
      className={`text-center mb-8 sm:mb-12 md:mb-16 px-4 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.25, 0.25, 0.75] 
      }}
      viewport={{ 
        once: true, 
        margin: "-50px",
        amount: 0.3 
      }}
      data-testid="section-header"
    >
      <motion.h2 
        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 glow-text font-poppins" 
        data-testid="text-section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.1,
          ease: [0.25, 0.25, 0.25, 0.75] 
        }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="w-16 xs:w-20 sm:w-24 h-1 bg-cyber-cyan mx-auto mb-6 sm:mb-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.3,
          ease: [0.25, 0.25, 0.25, 0.75] 
        }}
        viewport={{ once: true }}
        data-testid="div-section-divider"
      />
      {subtitle && (
        <motion.p 
          className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-poppins px-2" 
          data-testid="text-section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.4,
            ease: [0.25, 0.25, 0.25, 0.75] 
          }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
