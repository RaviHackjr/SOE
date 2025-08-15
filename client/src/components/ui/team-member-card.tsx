import { motion } from "framer-motion";
import ShutterCard from "./shutter-card";

interface TeamMemberCardProps {
  name: string;
  role: string;
  specialty: string;
  image: string;
  delay?: number;
}

const TeamMemberCard = ({ name, role, specialty, image, delay = 0 }: TeamMemberCardProps) => {
  const shutterContent = (
    <div className="text-center p-4">
      <div className="mb-4">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto border-2 border-white object-cover"
        />
      </div>
      <h4 className="text-lg sm:text-xl font-bold mb-3 font-poppins">{name}</h4>
      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-center">
          <i className="fas fa-briefcase mr-2 text-cyber-cyan"></i>
          <span>{role}</span>
        </div>
        <div className="flex items-center justify-center">
          <i className="fas fa-star mr-2 text-cyber-cyan"></i>
          <span>{specialty}</span>
        </div>
        <div className="flex items-center justify-center">
          <i className="fas fa-envelope mr-2 text-cyber-cyan"></i>
          <span>Contact Member</span>
        </div>
      </div>

    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: false, margin: "-10%" }}
      data-testid={`card-member-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <ShutterCard
        shutterContent={shutterContent}
        className="cursor-pointer h-full"
        testId={`shutter-card-member-${name.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="p-3 sm:p-4 text-center">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 border-2 border-cyber-cyan object-cover"
            data-testid={`img-member-${name.toLowerCase().replace(/\s+/g, '-')}`}
          />
          <h3 className="text-base sm:text-lg font-bold mb-1 text-cyber-cyan font-poppins" data-testid={`text-member-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {name}
          </h3>
          <p className="text-electric-blue mb-1 font-poppins font-semibold text-xs sm:text-sm" data-testid={`text-member-role-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {role}
          </p>
          <p className="text-gray-300 text-xs font-poppins" data-testid={`text-member-specialty-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {specialty}
          </p>
        </div>
      </ShutterCard>
    </motion.div>
  );
};

export default TeamMemberCard;
