import SectionHeader from "@/components/ui/section-header";
import TeamMemberCard from "@/components/ui/team-member-card";
import AnimatedSection from "@/components/ui/animated-section";
import { motion } from "framer-motion";

const Team = () => {
  const coreTeam = [
    {
      name: "Alex Chen",
      role: "Club President",
      specialty: "AI & Machine Learning",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Sarah Johnson",
      role: "Technical Lead",
      specialty: "Embedded Systems",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b784?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Mike Rodriguez",
      role: "Hardware Designer",
      specialty: "Mechanical Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Emma Davis",
      role: "Software Engineer",
      specialty: "ROS & Computer Vision",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    }
  ];

  const teamLead = [
    {
      name: "Dr. Robert Wilson",
      role: "Faculty Advisor",
      specialty: "Robotics & Automation",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Lisa Chang",
      role: "Vice President",
      specialty: "Project Management",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    }
  ];

  const departments = [
    {
      name: "Software Development",
      description: "Responsible for programming robots, developing AI algorithms, and creating user interfaces.",
      icon: "fas fa-code",
      members: 12
    },
    {
      name: "Hardware Design",
      description: "Focuses on mechanical design, electronics integration, and prototyping of robotic systems.",
      icon: "fas fa-cogs",
      members: 10
    },
    {
      name: "Research & Development",
      description: "Explores cutting-edge technologies and develops innovative solutions for complex problems.",
      icon: "fas fa-flask",
      members: 8
    },
    {
      name: "Competition Team",
      description: "Dedicated team for preparing and participating in national and international robotics competitions.",
      icon: "fas fa-trophy",
      members: 15
    },
    {
      name: "Outreach & Education",
      description: "Organizes workshops, community events, and educational programs to promote robotics.",
      icon: "fas fa-graduation-cap",
      members: 7
    },
    {
      name: "Media & Documentation",
      description: "Handles documentation, social media, website maintenance, and project showcasing.",
      icon: "fas fa-camera",
      members: 5
    }
  ];

  const alumni = [
    {
      name: "James Park",
      currentRole: "Robotics Engineer at Boston Dynamics",
      graduationYear: "2023",
      achievement: "Led the team that won National Robotics Championship 2022"
    },
    {
      name: "Maria Gonzalez",
      currentRole: "AI Research Scientist at Tesla",
      graduationYear: "2022",
      achievement: "Developed breakthrough autonomous navigation algorithm"
    },
    {
      name: "David Kim",
      currentRole: "Startup Founder - RoboTech Solutions",
      graduationYear: "2023",
      achievement: "Founded successful robotics startup valued at $5M"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-black to-gray-900" data-testid="section-team-hero">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Our Team"
            subtitle="Meet the passionate innovators driving our robotics revolution and shaping the future of technology."
          />
        </div>
      </section>

      {/* Leadership */}
      <section className="py-6 sm:py-8 bg-black circuit-pattern" data-testid="section-leadership">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-cyber-cyan font-poppins" data-testid="text-leadership-title">
              Leadership Team
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto mb-8 sm:mb-10">
            {teamLead.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                {...member}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-6 sm:py-8 bg-gradient-to-b from-gray-900 to-black" data-testid="section-core-team">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center text-cyber-cyan font-poppins" data-testid="text-core-team-title">
              Core Team Members
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                {...member}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-black circuit-pattern" data-testid="section-departments">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Our Departments"
            subtitle="Specialized teams working together to achieve excellence in every aspect of robotics."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <AnimatedSection key={dept.name} delay={index * 0.1}>
                <motion.div
                  className="tech-card p-8 rounded-xl hover-glow text-center"
                  whileHover={{ y: -5 }}
                  data-testid={`card-department-${dept.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <i className={`${dept.icon} text-4xl text-cyber-cyan mb-6`} data-testid={`icon-department-${dept.name.toLowerCase().replace(/\s+/g, '-')}`}></i>
                  <h3 className="text-xl font-bold mb-4 font-poppins" data-testid={`text-department-name-${dept.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {dept.name}
                  </h3>
                  <p className="text-gray-300 mb-6 font-poppins" data-testid={`text-department-description-${dept.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {dept.description}
                  </p>
                  <div className="flex items-center justify-center text-electric-blue">
                    <i className="fas fa-users mr-2" data-testid={`icon-department-members-${dept.name.toLowerCase().replace(/\s+/g, '-')}`}></i>
                    <span className="font-semibold font-poppins" data-testid={`text-department-members-${dept.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {dept.members} Members
                    </span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black" data-testid="section-alumni">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Alumni Success Stories"
            subtitle="Our graduates continue to make significant impacts in the robotics industry worldwide."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {alumni.map((alum, index) => (
              <AnimatedSection key={alum.name} delay={index * 0.1}>
                <motion.div
                  className="tech-card p-8 rounded-xl hover-glow"
                  whileHover={{ y: -5 }}
                  data-testid={`card-alumni-${alum.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <h3 className="text-xl font-bold mb-2 text-cyber-cyan font-poppins" data-testid={`text-alumni-name-${alum.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {alum.name}
                  </h3>
                  <p className="text-electric-blue mb-2 font-poppins font-semibold" data-testid={`text-alumni-role-${alum.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {alum.currentRole}
                  </p>
                  <p className="text-gray-400 mb-4 font-poppins" data-testid={`text-alumni-year-${alum.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    Class of {alum.graduationYear}
                  </p>
                  <p className="text-gray-300 font-poppins" data-testid={`text-alumni-achievement-${alum.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {alum.achievement}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-black circuit-pattern" data-testid="section-join-team">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text font-poppins" data-testid="text-join-team-title">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-poppins" data-testid="text-join-team-description">
              Become part of our innovative community and help shape the future of robotics technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="bg-electric-blue hover:bg-deep-electric px-8 py-4 rounded-lg font-bold text-lg hover-glow transition-all duration-300 font-poppins"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-apply-now"
              >
                <i className="fas fa-user-plus mr-2"></i>Apply Now
              </motion.button>
              <motion.button
                className="border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-poppins"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-learn-more"
              >
                <i className="fas fa-info-circle mr-2"></i>Learn More
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Team;
