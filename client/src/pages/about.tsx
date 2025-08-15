import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import AnimatedSection from "@/components/ui/animated-section";

const About = () => {
  const achievements = [
    { number: "50+", label: "Active Members", icon: "fas fa-users" },
    { number: "25+", label: "Projects Completed", icon: "fas fa-cogs" },
    { number: "15+", label: "Competitions Won", icon: "fas fa-trophy" },
    { number: "3", label: "Years of Excellence", icon: "fas fa-star" },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in robotics and automation.",
      icon: "fas fa-lightbulb"
    },
    {
      title: "Collaboration",
      description: "Our diverse team works together to create extraordinary robotic solutions.",
      icon: "fas fa-handshake"
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in every project and competition we undertake.",
      icon: "fas fa-medal"
    },
    {
      title: "Learning",
      description: "Continuous learning and skill development are at the core of our community.",
      icon: "fas fa-graduation-cap"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900" data-testid="section-about-hero">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="About SOE Robotics Club"
            subtitle="Fostering innovation and creativity in robotics and automation since 2021."
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="SOE Robotics Workshop"
                className="rounded-xl shadow-lg hover-glow"
                data-testid="img-about-workshop"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h3 className="text-3xl font-bold mb-6 text-cyber-cyan font-poppins" data-testid="text-our-story-title">
                Our Story
              </h3>
              <div className="space-y-4 text-gray-300 font-poppins">
                <p data-testid="text-story-paragraph-1">
                  Founded in 2021 by a group of passionate engineering students, SOE Robotics Club has grown into one of the most active and innovative student organizations at the School of Engineering.
                </p>
                <p data-testid="text-story-paragraph-2">
                  What started as a small group of robotics enthusiasts has evolved into a thriving community of over 50 active members, each bringing unique skills and perspectives to our collective mission of advancing robotics technology.
                </p>
                <p data-testid="text-story-paragraph-3">
                  Our club serves as a bridge between theoretical knowledge and practical application, providing students with hands-on experience in designing, building, and programming sophisticated robotic systems.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black circuit-pattern" data-testid="section-mission-vision">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="tech-card p-8 rounded-xl h-full">
                <div className="flex items-center mb-6">
                  <i className="fas fa-bullseye text-3xl text-cyber-cyan mr-4" data-testid="icon-mission"></i>
                  <h3 className="text-2xl font-bold text-cyber-cyan font-poppins" data-testid="text-mission-title">Our Mission</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed font-poppins" data-testid="text-mission-content">
                  To inspire and educate the next generation of robotics engineers by providing a collaborative environment where students can explore, experiment, and excel in the field of robotics and automation. We aim to bridge the gap between academic learning and real-world application through hands-on projects and competitions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="tech-card p-8 rounded-xl h-full">
                <div className="flex items-center mb-6">
                  <i className="fas fa-eye text-3xl text-cyber-cyan mr-4" data-testid="icon-vision"></i>
                  <h3 className="text-2xl font-bold text-cyber-cyan font-poppins" data-testid="text-vision-title">Our Vision</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed font-poppins" data-testid="text-vision-content">
                  To become a leading force in student-driven robotics innovation, creating solutions that address real-world challenges while fostering a culture of continuous learning, creativity, and technological advancement. We envision our members becoming industry leaders who will shape the future of robotics.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black" data-testid="section-achievements">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Our Achievements"
            subtitle="Numbers that reflect our commitment to excellence and innovation."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={achievement.label} delay={index * 0.1}>
                <motion.div
                  className="tech-card p-8 rounded-xl text-center hover-glow cursor-pointer"
                  whileHover={{ y: -5 }}
                  data-testid={`card-achievement-${achievement.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <i className={`${achievement.icon} text-4xl text-cyber-cyan mb-4`} data-testid={`icon-achievement-${achievement.label.toLowerCase().replace(/\s+/g, '-')}`}></i>
                  <h4 className="text-3xl font-bold text-electric-blue mb-2 font-poppins" data-testid={`text-achievement-number-${achievement.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {achievement.number}
                  </h4>
                  <p className="text-gray-300 font-poppins" data-testid={`text-achievement-label-${achievement.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {achievement.label}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-black circuit-pattern" data-testid="section-core-values">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide everything we do at SOE Robotics Club."
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  className="tech-card p-8 rounded-xl hover-glow"
                  whileHover={{ y: -5 }}
                  data-testid={`card-value-${value.title.toLowerCase()}`}
                >
                  <div className="flex items-center mb-6">
                    <i className={`${value.icon} text-3xl text-cyber-cyan mr-4`} data-testid={`icon-value-${value.title.toLowerCase()}`}></i>
                    <h3 className="text-2xl font-bold font-poppins" data-testid={`text-value-title-${value.title.toLowerCase()}`}>
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed font-poppins" data-testid={`text-value-description-${value.title.toLowerCase()}`}>
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black" data-testid="section-what-we-offer">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="What We Offer"
            subtitle="Comprehensive resources and opportunities for robotics enthusiasts at every level."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="tech-card p-8 rounded-xl text-center hover-glow" data-testid="card-offer-workshops">
                <i className="fas fa-tools text-4xl text-cyber-cyan mb-6" data-testid="icon-offer-workshops"></i>
                <h3 className="text-xl font-bold mb-4 font-poppins" data-testid="text-offer-workshops-title">
                  Hands-on Workshops
                </h3>
                <p className="text-gray-300 font-poppins" data-testid="text-offer-workshops-description">
                  Regular workshops covering everything from basic electronics to advanced AI programming.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="tech-card p-8 rounded-xl text-center hover-glow" data-testid="card-offer-competitions">
                <i className="fas fa-trophy text-4xl text-cyber-cyan mb-6" data-testid="icon-offer-competitions"></i>
                <h3 className="text-xl font-bold mb-4 font-poppins" data-testid="text-offer-competitions-title">
                  Competition Training
                </h3>
                <p className="text-gray-300 font-poppins" data-testid="text-offer-competitions-description">
                  Preparation and participation in national and international robotics competitions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="tech-card p-8 rounded-xl text-center hover-glow" data-testid="card-offer-mentorship">
                <i className="fas fa-users text-4xl text-cyber-cyan mb-6" data-testid="icon-offer-mentorship"></i>
                <h3 className="text-xl font-bold mb-4 font-poppins" data-testid="text-offer-mentorship-title">
                  Peer Mentorship
                </h3>
                <p className="text-gray-300 font-poppins" data-testid="text-offer-mentorship-description">
                  Experienced members guide newcomers through their robotics learning journey.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
