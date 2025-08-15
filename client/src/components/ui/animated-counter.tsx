import { useCounterAnimation } from "@/hooks/use-counter-animation";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
  testId?: string;
}

const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  suffix = "", 
  className = "",
  testId 
}: AnimatedCounterProps) => {
  const { count, ref } = useCounterAnimation({ end, duration });

  return (
    <span ref={ref} className={className} data-testid={testId}>
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;