import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll";

export default function Projects() {
  const { ref, isInView } = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: "Obstacle Detection Robot",
      description:
        "Advanced autonomous navigation system using ultrasonic sensors and AI pathfinding algorithms.",
      image: "https://i.postimg.cc/Fs4zT4qb/Obstacle-detection-robot.jpg",
      tags: ["Arduino", "Sensors", "AI"],
    },
    {
      id: 2,
      title: "Line Following Robot",
      description:
        "Precision-guided robot that follows predetermined paths using infrared sensors and PID control.",
      image: "https://i.postimg.cc/jd45910p/download.jpg",
      tags: ["IR Sensors", "PID Control", "Motors"],
    },
    {
      id: 3,
      title: "6-DOF Robotic Arm",
      description:
        "Industrial-grade robotic arm with precise movement control and computer vision integration.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Servo Motors", "Computer Vision", "ROS"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black circuit-pattern">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-cyber-cyan mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our innovative robotics projects that push the boundaries of
            technology and creativity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="tech-card rounded-xl overflow-hidden hover-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              data-testid={`project-card-${project.id}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-cyber-cyan">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-electric-blue px-3 py-1 rounded-full text-sm"
                      data-testid={`tag-${tag.toLowerCase()}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="text-cyber-cyan hover:text-white transition-colors duration-300"
                  data-testid={`button-learn-more-${project.id}`}
                >
                  Learn More <ArrowRight className="inline ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            className="bg-electric-blue hover:bg-deep-electric px-8 py-4 rounded-lg font-bold text-lg hover-glow transition-all duration-300"
            data-testid="button-view-all-projects"
          >
            <svg
              className="mr-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
            </svg>
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
