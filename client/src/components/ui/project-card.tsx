import { motion } from "framer-motion";
import ShutterCard from "./shutter-card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  delay?: number;
}

const ProjectCard = ({ title, description, image, technologies, delay = 0 }: ProjectCardProps) => {
  const shutterContent = (
    <div className="text-center p-4">
      <h4 className="text-xl font-bold mb-4 font-poppins">Key Features</h4>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center justify-center">
          <i className="fas fa-check-circle mr-2 text-cyber-cyan"></i>
          Advanced AI Integration
        </li>
        <li className="flex items-center justify-center">
          <i className="fas fa-check-circle mr-2 text-cyber-cyan"></i>
          Real-time Processing
        </li>
        <li className="flex items-center justify-center">
          <i className="fas fa-check-circle mr-2 text-cyber-cyan"></i>
          High Precision Control
        </li>
        <li className="flex items-center justify-center">
          <i className="fas fa-check-circle mr-2 text-cyber-cyan"></i>
          Open Source Design
        </li>
      </ul>

    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: false, margin: "-10%" }}
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <ShutterCard
        shutterContent={shutterContent}
        className="cursor-pointer h-full"
        testId={`shutter-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-28 xs:h-32 sm:h-36 md:h-32 lg:h-36 object-cover"
            data-testid={`img-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
          />
        </div>
        <div className="p-2 xs:p-3 sm:p-4">
          <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-cyber-cyan font-poppins" data-testid={`text-project-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </h3>
          <p className="text-gray-300 mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base font-poppins line-clamp-3" data-testid={`text-project-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-electric-blue px-2 xs:px-2.5 sm:px-3 py-0.5 xs:py-1 rounded-full text-xs font-poppins font-semibold"
                data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </ShutterCard>
    </motion.div>
  );
};

export default ProjectCard;
