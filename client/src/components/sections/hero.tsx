import { motion } from "framer-motion";
import { Rocket, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center circuit-pattern"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.postimg.cc/DwCzfbz5/Ai-power.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 glow-text animate-float"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Innovating the Future
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-8 text-cyber-cyan"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          One Bot at a Time
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          SOE Robotics Club is a community of tech enthusiasts passionate about
          designing, building, and programming robots. From beginner-friendly
          projects to advanced AI-powered bots, we explore creativity and innovation
          in every build.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-electric-blue hover:bg-deep-electric px-8 py-4 rounded-lg font-bold text-lg hover-glow transition-all duration-300"
            data-testid="button-join-club"
          >
            <Rocket className="mr-2" />
            Join Our Club
          </Button>
          <Button
            onClick={() => scrollToSection("projects")}
            variant="outline"
            className="border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            data-testid="button-view-projects"
          >
            <Play className="mr-2" />
            View Projects
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <ChevronDown className="text-cyber-cyan text-2xl" />
      </motion.div>
    </section>
  );
}
