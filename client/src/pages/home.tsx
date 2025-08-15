import { motion } from "framer-motion";
import { Link } from "wouter";
import SectionHeader from "@/components/ui/section-header";
import EnhancedAnimatedSection from "@/components/ui/enhanced-animated-section";
import ProjectCard from "@/components/ui/project-card";
import ShutterCard from "@/components/ui/shutter-card";
import AnimatedCounter from "@/components/ui/animated-counter";

const Home = () => {
  const featuredProjects = [
    {
      title: "Obstacle Detection Robot",
      description: "Advanced autonomous navigation system using ultrasonic sensors and AI pathfinding algorithms.",
      image: "https://i.postimg.cc/Fs4zT4qb/Obstacle-detection-robot.jpg",
      technologies: ["Arduino", "Sensors", "AI"]
    },
    {
      title: "Line Following Robot",
      description: "Precision-guided robot that follows predetermined paths using infrared sensors and PID control.",
      image: "https://i.postimg.cc/jd45910p/download.jpg",
      technologies: ["IR Sensors", "PID Control", "Motors"]
    },
    {
      title: "6-DOF Robotic Arm",
      description: "Industrial-grade robotic arm with precise movement control and computer vision integration.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Servo Motors", "Computer Vision", "ROS"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden" data-testid="section-hero">
        {/* Background with enhanced visual effects */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-[20s] ease-in-out"
            style={{ backgroundImage: "url('https://i.postimg.cc/DwCzfbz5/Ai-power.jpg')" }}
            data-testid="div-hero-background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          <div className="absolute inset-0 circuit-pattern opacity-20" />
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyber-cyan rounded-full opacity-30"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-3 sm:px-4 md:px-6">


          <motion.h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 glow-text font-poppins leading-tight mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            data-testid="text-hero-title"
          >
            Innovating the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyber-cyan">
              Future
            </span>
          </motion.h1>
          
          <motion.h2
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-gray-300 font-poppins"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            data-testid="text-hero-subtitle"
          >
            One Bot at a Time
          </motion.h2>
          
          <motion.p
            className="text-sm xs:text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 text-gray-400 max-w-4xl mx-auto font-poppins leading-relaxed px-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            data-testid="text-hero-description"
          >
            Join our community of tech enthusiasts passionate about designing, building, and programming robots. 
            From beginner-friendly projects to advanced AI-powered systems, we explore creativity and innovation in every build.
          </motion.p>
          
          <motion.div
            className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 md:mb-20 px-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link href="/contact">
              <motion.button
                className="bg-electric-blue hover:bg-deep-electric px-4 xs:px-6 sm:px-8 py-3 xs:py-4 rounded-lg font-bold text-sm xs:text-base sm:text-lg hover-glow transition-all duration-300 font-poppins w-full xs:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-join-club"
              >
                <i className="fas fa-rocket mr-2"></i>Join Our Club
              </motion.button>
            </Link>
            
            <Link href="/projects">
              <motion.button
                className="border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black px-4 xs:px-6 sm:px-8 py-3 xs:py-4 rounded-lg font-bold text-sm xs:text-base sm:text-lg transition-all duration-300 font-poppins w-full xs:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-view-projects"
              >
                <i className="fas fa-play mr-2"></i>View Projects
              </motion.button>
            </Link>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="text-center glass-card p-2 xs:p-3 sm:p-4 rounded-xl">
              <AnimatedCounter
                end={50}
                suffix="+"
                className="block text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-electric-blue font-poppins"
              />
              <p className="text-gray-400 text-xs sm:text-sm font-poppins mt-1">Members</p>
            </div>
            <div className="text-center glass-card p-2 xs:p-3 sm:p-4 rounded-xl">
              <AnimatedCounter
                end={25}
                suffix="+"
                className="block text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-electric-blue font-poppins"
              />
              <p className="text-gray-400 text-xs sm:text-sm font-poppins mt-1">Projects</p>
            </div>
            <div className="text-center glass-card p-2 xs:p-3 sm:p-4 rounded-xl">
              <AnimatedCounter
                end={15}
                suffix="+"
                className="block text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-electric-blue font-poppins"
              />
              <p className="text-gray-400 text-xs sm:text-sm font-poppins mt-1">Awards</p>
            </div>
            <div className="text-center glass-card p-2 xs:p-3 sm:p-4 rounded-xl">
              <AnimatedCounter
                end={3}
                className="block text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-electric-blue font-poppins"
              />
              <p className="text-gray-400 text-xs sm:text-sm font-poppins mt-1">Years</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          data-testid="div-scroll-indicator"
        >
          <div className="bg-electric-blue/20 backdrop-blur-sm border border-electric-blue/30 rounded-full p-3">
            <i className="fas fa-chevron-down text-cyber-cyan text-xl"></i>
          </div>
        </motion.div>
      </section>

      {/* Quick About Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black to-gray-900" data-testid="section-quick-about">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            title="About Our Club"
            subtitle="We are dedicated to fostering innovation and creativity in robotics and automation."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <EnhancedAnimatedSection>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Robotics Workshop"
                className="rounded-xl shadow-lg hover-glow w-full"
                data-testid="img-workshop"
              />
            </EnhancedAnimatedSection>
            
            <EnhancedAnimatedSection delay={0.2}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-cyber-cyan font-poppins" data-testid="text-mission-title">
                Our Mission
              </h3>
              <p className="text-base sm:text-lg mb-6 text-gray-300 font-poppins leading-relaxed" data-testid="text-mission-description">
                We provide a collaborative environment where students can learn, experiment, and build cutting-edge robotic solutions that shape the future of technology.
              </p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <motion.div 
                  className="tech-card p-2 sm:p-3 rounded-lg text-center h-16 sm:h-20 flex flex-col justify-center" 
                  data-testid="card-stat-members"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <AnimatedCounter
                    end={50}
                    suffix="+"
                    className="font-bold text-electric-blue text-lg sm:text-xl lg:text-2xl font-poppins"
                    testId="counter-members"
                  />
                  <p className="text-gray-300 font-poppins text-xs sm:text-sm mt-1">Active Members</p>
                </motion.div>
                
                <motion.div 
                  className="tech-card p-2 sm:p-3 rounded-lg text-center h-16 sm:h-20 flex flex-col justify-center" 
                  data-testid="card-stat-projects"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <AnimatedCounter
                    end={25}
                    suffix="+"
                    className="font-bold text-electric-blue text-lg sm:text-xl lg:text-2xl font-poppins"
                    testId="counter-projects"
                  />
                  <p className="text-gray-300 font-poppins text-xs sm:text-sm mt-1">Projects Completed</p>
                </motion.div>
                
                <motion.div 
                  className="tech-card p-2 sm:p-3 rounded-lg text-center h-16 sm:h-20 flex flex-col justify-center" 
                  data-testid="card-stat-competitions"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <AnimatedCounter
                    end={15}
                    suffix="+"
                    className="font-bold text-electric-blue text-lg sm:text-xl lg:text-2xl font-poppins"
                    testId="counter-competitions"
                  />
                  <p className="text-gray-300 font-poppins text-xs sm:text-sm mt-1">Competitions Won</p>
                </motion.div>
                
                <motion.div 
                  className="tech-card p-2 sm:p-3 rounded-lg text-center h-16 sm:h-20 flex flex-col justify-center" 
                  data-testid="card-stat-years"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <AnimatedCounter
                    end={3}
                    className="font-bold text-electric-blue text-lg sm:text-xl lg:text-2xl font-poppins"
                    testId="counter-years"
                  />
                  <p className="text-gray-300 font-poppins text-xs sm:text-sm mt-1">Years of Excellence</p>
                </motion.div>
              </div>
              
              <Link href="/about">
                <motion.button
                  className="bg-electric-blue hover:bg-deep-electric px-6 py-3 rounded-lg font-bold hover-glow transition-all duration-300 font-poppins"
                  whileHover={{ scale: 1.05 }}
                  data-testid="button-learn-more"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </EnhancedAnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-8 bg-black circuit-pattern" data-testid="section-featured-projects">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Featured Projects"
            subtitle="Explore our innovative robotics projects that push the boundaries of technology."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/projects">
              <motion.button
                className="bg-electric-blue hover:bg-deep-electric px-8 py-4 rounded-lg font-bold text-lg hover-glow transition-all duration-300 font-poppins"
                whileHover={{ scale: 1.05 }}
                data-testid="button-view-all-projects"
              >
                <i className="fas fa-folder-open mr-2"></i>View All Projects
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black" data-testid="section-cta">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text font-poppins" data-testid="text-cta-title">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-poppins" data-testid="text-cta-description">
              Join our community of innovators and start your robotics journey today.
            </p>
            <Link href="/contact">
              <motion.button
                className="bg-electric-blue hover:bg-deep-electric px-10 py-5 rounded-lg font-bold text-xl hover-glow transition-all duration-300 font-poppins"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-join-now"
              >
                <i className="fas fa-rocket mr-3"></i>Join Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
