import { motion } from "framer-motion";
import { Trophy, GraduationCap, Code, Medal, Calendar, Clock, MapPin, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll";

export default function Events() {
  const { ref, isInView } = useScrollAnimation();

  const events = [
    {
      id: 1,
      title: "Robo Wars Championship",
      description:
        "Annual combat robotics competition featuring heavyweight bots in intense battles.",
      icon: Trophy,
      info: "Next Event: March 2024",
      infoIcon: Calendar,
    },
    {
      id: 2,
      title: "Arduino Workshop Series",
      description:
        "Weekly hands-on workshops covering everything from basics to advanced microcontroller programming.",
      icon: GraduationCap,
      info: "Every Saturday, 10 AM",
      infoIcon: Clock,
    },
    {
      id: 3,
      title: "AI & Robotics Hackathon",
      description:
        "48-hour intensive coding marathon to build innovative AI-powered robotic solutions.",
      icon: Code,
      info: "Engineering Building, Lab 301",
      infoIcon: MapPin,
    },
    {
      id: 4,
      title: "Line Follower Challenge",
      description:
        "Fast-paced competition testing autonomous navigation and speed optimization.",
      icon: Medal,
      info: "Open to all skill levels",
      infoIcon: Users,
    },
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Events & Competitions
          </h2>
          <div className="w-24 h-1 bg-cyber-cyan mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            const InfoIconComponent = event.infoIcon;

            return (
              <motion.div
                key={event.id}
                className="tech-card p-8 rounded-xl hover-glow"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                data-testid={`event-card-${event.id}`}
              >
                <div className="flex items-center mb-6">
                  <IconComponent className="text-3xl text-cyber-cyan mr-4 w-8 h-8" />
                  <h3 className="text-2xl font-bold">{event.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="flex items-center text-electric-blue">
                  <InfoIconComponent className="mr-2 w-5 h-5" />
                  <span>{event.info}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
