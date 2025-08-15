import { motion } from "framer-motion";

interface EventCardProps {
  title: string;
  description: string;
  icon: string;
  info: string;
  infoIcon: string;
  delay?: number;
}

const EventCard = ({ title, description, icon, info, infoIcon, delay = 0 }: EventCardProps) => {
  return (
    <motion.div
      className="tech-card p-8 rounded-xl hover-glow cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      data-testid={`card-event-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex items-center mb-6">
        <i className={`${icon} text-3xl text-cyber-cyan mr-4`} data-testid={`icon-event-${title.toLowerCase().replace(/\s+/g, '-')}`}></i>
        <h3 className="text-2xl font-bold font-poppins" data-testid={`text-event-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
      </div>
      <p className="text-gray-300 mb-4 font-poppins" data-testid={`text-event-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {description}
      </p>
      <div className="flex items-center text-electric-blue">
        <i className={`${infoIcon} mr-2`} data-testid={`icon-event-info-${title.toLowerCase().replace(/\s+/g, '-')}`}></i>
        <span className="font-poppins font-semibold" data-testid={`text-event-info-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {info}
        </span>
      </div>
    </motion.div>
  );
};

export default EventCard;
