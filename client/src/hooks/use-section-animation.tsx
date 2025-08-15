import { useRef } from "react";
import { useInView } from "framer-motion";

interface SectionAnimationProps {
  threshold?: number;
}

export const useSectionAnimation = ({ threshold = 0.2 }: SectionAnimationProps = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: false // Allow animations to trigger multiple times
  });

  return { ref, isInView };
};

export default useSectionAnimation;