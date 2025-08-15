import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll";

export default function About() {
  const { ref, isInView } = useScrollAnimation();

  const stats = [
    { value: "50+", label: "Active Members" },
    { value: "25+", label: "Projects Completed" },
    { value: "15+", label: "Competitions Won" },
    { value: "3", label: "Years of Excellence" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            About Our Club
          </h2>
          <div className="w-24 h-1 bg-cyber-cyan mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Robotics Workshop"
              className="rounded-xl shadow-lg hover-glow"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-cyber-cyan">Our Mission</h3>
            <p className="text-lg mb-6 text-gray-300">
              We are dedicated to fostering innovation and creativity in robotics
              and automation. Our club provides a collaborative environment where
              students can learn, experiment, and build cutting-edge robotic
              solutions.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="tech-card p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <h4 className="font-bold text-electric-blue mb-2 text-2xl">
                    {stat.value}
                  </h4>
                  <p className="text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
