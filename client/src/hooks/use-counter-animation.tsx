import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseCounterAnimationProps {
  end: number;
  duration?: number;
  start?: number;
}

export const useCounterAnimation = ({ 
  end, 
  duration = 2000, 
  start = 0 
}: UseCounterAnimationProps) => {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const startTime = Date.now();
      const endTime = startTime + duration;
      
      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const currentCount = Math.floor(progress * (end - start) + start);
        
        setCount(currentCount);
        
        if (now < endTime) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [isInView, end, start, duration, hasAnimated]);

  return { count, ref };
};

export default useCounterAnimation;