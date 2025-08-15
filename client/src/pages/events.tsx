import SectionHeader from "@/components/ui/section-header";
import EventCard from "@/components/ui/event-card";
import AnimatedSection from "@/components/ui/animated-section";
import { motion } from "framer-motion";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Robo Wars Championship 2024",
      description: "Annual combat robotics competition featuring heavyweight bots in intense battles. Showcase your engineering skills and compete for the ultimate prize.",
      icon: "fas fa-trophy",
      info: "March 15-17, 2024",
      infoIcon: "fas fa-calendar"
    },
    {
      title: "AI & Robotics Hackathon",
      description: "48-hour intensive coding marathon to build innovative AI-powered robotic solutions. Form teams and create the next breakthrough technology.",
      icon: "fas fa-code",
      info: "Engineering Building, Lab 301",
      infoIcon: "fas fa-map-marker-alt"
    },
    {
      title: "Arduino Workshop Series",
      description: "Weekly hands-on workshops covering everything from basics to advanced microcontroller programming. Perfect for beginners and experts alike.",
      icon: "fas fa-graduation-cap",
      info: "Every Saturday, 10 AM",
      infoIcon: "fas fa-clock"
    },
    {
      title: "Line Follower Challenge",
      description: "Fast-paced competition testing autonomous navigation and speed optimization. Design the fastest and most accurate line-following robot.",
      icon: "fas fa-medal",
      info: "Open to all skill levels",
      infoIcon: "fas fa-users"
    }
  ];

  const pastEvents = [
    {
      title: "National Robotics Championship 2023",
      description: "Our team secured 2nd place in the national competition with our advanced obstacle detection robot.",
      icon: "fas fa-trophy",
      info: "Winner - 2nd Place",
      infoIcon: "fas fa-medal"
    },
    {
      title: "Smart City Robotics Expo",
      description: "Showcased our warehouse logistics robot to industry professionals and potential investors.",
      icon: "fas fa-building",
      info: "December 2023",
      infoIcon: "fas fa-calendar"
    },
    {
      title: "Inter-University Robo Soccer",
      description: "Participated in the regional robo soccer tournament with our custom-built autonomous soccer bots.",
      icon: "fas fa-futbol",
      info: "3rd Place",
      infoIcon: "fas fa-trophy"
    },
    {
      title: "Tech Innovation Fair",
      description: "Demonstrated our educational robot kit to hundreds of students and educators from local schools.",
      icon: "fas fa-lightbulb",
      info: "November 2023",
      infoIcon: "fas fa-calendar"
    }
  ];

  const workshops = [
    {
      title: "Introduction to Robotics",
      description: "Learn the fundamentals of robotics, including basic electronics, sensors, and programming concepts.",
      duration: "2 hours",
      level: "Beginner",
      frequency: "Monthly"
    },
    {
      title: "Advanced Arduino Programming",
      description: "Deep dive into complex Arduino projects, including sensor integration and wireless communication.",
      duration: "3 hours",
      level: "Intermediate",
      frequency: "Bi-weekly"
    },
    {
      title: "Computer Vision for Robotics",
      description: "Implement object detection and tracking using OpenCV and machine learning algorithms.",
      duration: "4 hours",
      level: "Advanced",
      frequency: "Monthly"
    },
    {
      title: "ROS Fundamentals",
      description: "Master the Robot Operating System for building complex robotic applications and simulations.",
      duration: "6 hours",
      level: "Intermediate",
      frequency: "Quarterly"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-black to-gray-900" data-testid="section-events-hero">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Events & Competitions"
            subtitle="Join us for exciting robotics competitions, workshops, and community events that will challenge and inspire you."
          />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-6 sm:py-8 bg-black circuit-pattern" data-testid="section-upcoming-events">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-cyber-cyan font-poppins" data-testid="text-upcoming-title">
              Upcoming Events
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={event.title}
                {...event}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Schedule */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black" data-testid="section-workshops">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Workshop Schedule"
            subtitle="Regular workshops designed to enhance your robotics skills at every level."
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <AnimatedSection key={workshop.title} delay={index * 0.1}>
                <motion.div
                  className="tech-card p-8 rounded-xl hover-glow"
                  whileHover={{ y: -5 }}
                  data-testid={`card-workshop-${workshop.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <h3 className="text-xl font-bold mb-4 text-cyber-cyan font-poppins" data-testid={`text-workshop-title-${workshop.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {workshop.title}
                  </h3>
                  <p className="text-gray-300 mb-6 font-poppins" data-testid={`text-workshop-description-${workshop.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {workshop.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center" data-testid={`div-workshop-duration-${workshop.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div className="text-electric-blue font-semibold font-poppins">Duration</div>
                      <div className="text-gray-300 font-poppins">{workshop.duration}</div>
                    </div>
                    <div className="text-center" data-testid={`div-workshop-level-${workshop.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div className="text-electric-blue font-semibold font-poppins">Level</div>
                      <div className="text-gray-300 font-poppins">{workshop.level}</div>
                    </div>
                    <div className="text-center" data-testid={`div-workshop-frequency-${workshop.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div className="text-electric-blue font-semibold font-poppins">Frequency</div>
                      <div className="text-gray-300 font-poppins">{workshop.frequency}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-black circuit-pattern" data-testid="section-past-events">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-cyber-cyan font-poppins" data-testid="text-past-title">
              Past Achievements
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <EventCard
                key={event.title}
                {...event}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black" data-testid="section-event-cta">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text font-poppins" data-testid="text-event-cta-title">
              Ready to Participate?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-poppins" data-testid="text-event-cta-description">
              Join our upcoming events and competitions to showcase your skills and learn from fellow robotics enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="bg-electric-blue hover:bg-deep-electric px-8 py-4 rounded-lg font-bold text-lg hover-glow transition-all duration-300 font-poppins"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-register-events"
              >
                <i className="fas fa-calendar-plus mr-2"></i>Register for Events
              </motion.button>
              <motion.button
                className="border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-poppins"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-view-calendar"
              >
                <i className="fas fa-calendar mr-2"></i>View Full Calendar
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Events;
