import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ShutterCardProps {
  children: ReactNode;
  shutterContent: ReactNode;
  className?: string;
  testId?: string;
}

const ShutterCard = ({ children, shutterContent, className = "", testId }: ShutterCardProps) => {
  return (
    <motion.div
      className={`card-shutter tech-card rounded-xl hover-glow ${className}`}
      data-testid={testId}
    >
      <div className="card-shutter-main relative z-0">
        {children}
      </div>
      <div className="card-shutter-content">
        {shutterContent}
      </div>
    </motion.div>
  );
};

export default ShutterCard;