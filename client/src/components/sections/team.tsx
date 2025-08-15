import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll";

export default function Team() {
  const { ref, isInView } = useScrollAnimation();

  const teamMembers = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Club President",
      specialty: "AI & Machine Learning",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Technical Lead",
      specialty: "Embedded Systems",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
    {
      id: 3,
      name: "Mike Rodriguez",
      role: "Hardware Designer",
      specialty: "Mechanical Engineering",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
    {
      id: 4,
      name: "Emma Davis",
      role: "Software Engineer",
      specialty: "ROS & Computer Vision",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
  ];

  return (
    <section id="team" className="py-20 bg-black circuit-pattern">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-cyber-cyan mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the passionate innovators driving our robotics revolution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="tech-card p-6 rounded-xl text-center hover-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              data-testid={`team-member-${member.id}`}
            >
              <img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-cyber-cyan object-cover"
              />
              <h3 className="text-xl font-bold mb-2 text-cyber-cyan">
                {member.name}
              </h3>
              <p className="text-electric-blue mb-2">{member.role}</p>
              <p className="text-gray-300 text-sm">{member.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
