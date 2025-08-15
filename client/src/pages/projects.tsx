import SectionHeader from "@/components/ui/section-header";
import ProjectCard from "@/components/ui/project-card";
import AnimatedSection from "@/components/ui/animated-section";

const Projects = () => {
  const ongoingProjects = [
    {
      title: "Obstacle Detection Robot",
      description: "Advanced autonomous navigation system using ultrasonic sensors and AI pathfinding algorithms for real-time obstacle avoidance.",
      image: "https://i.postimg.cc/Fs4zT4qb/Obstacle-detection-robot.jpg",
      technologies: ["Arduino", "Ultrasonic Sensors", "AI Pathfinding", "C++"]
    },
    {
      title: "Line Following Robot",
      description: "Precision-guided robot that follows predetermined paths using infrared sensors and advanced PID control algorithms.",
      image: "https://i.postimg.cc/jd45910p/download.jpg",
      technologies: ["IR Sensors", "PID Control", "DC Motors", "Python"]
    },
    {
      title: "6-DOF Robotic Arm",
      description: "Industrial-grade robotic arm with precise movement control, computer vision integration, and ROS compatibility.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Servo Motors", "Computer Vision", "ROS", "OpenCV"]
    }
  ];

  const completedProjects = [
    {
      title: "Smart Home Automation Bot",
      description: "IoT-enabled robot for home automation with voice control and mobile app integration.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["ESP32", "IoT", "Voice Recognition", "Mobile App"]
    },
    {
      title: "Warehouse Logistics Robot",
      description: "Autonomous robot designed for warehouse inventory management and package sorting.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["LIDAR", "SLAM", "Machine Learning", "ROS"]
    },
    {
      title: "Educational Robot Kit",
      description: "Beginner-friendly robot kit designed for teaching robotics fundamentals to students.",
      image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Arduino", "Sensors", "Educational Software", "3D Printing"]
    }
  ];

  const futurePlans = [
    {
      title: "AI-Powered Drone Swarm",
      description: "Coordinated drone swarm for search and rescue operations using advanced AI algorithms.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Drones", "Swarm Intelligence", "AI", "Communication Protocols"]
    },
    {
      title: "Humanoid Assistant Robot",
      description: "Human-like robot assistant for elderly care and medical support applications.",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Humanoid Design", "AI Assistant", "Healthcare", "Human-Robot Interaction"]
    },
    {
      title: "Autonomous Delivery System",
      description: "Campus-wide autonomous delivery network for efficient package and food delivery.",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Autonomous Navigation", "GPS", "Delivery Optimization", "Fleet Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-black to-gray-900" data-testid="section-projects-hero">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Our Projects"
            subtitle="Explore our innovative robotics projects that push the boundaries of technology and creativity."
          />
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-6 sm:py-8 bg-black circuit-pattern" data-testid="section-ongoing-projects">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-cyber-cyan font-poppins" data-testid="text-ongoing-title">
              Ongoing Projects
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {ongoingProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-6 sm:py-8 bg-gradient-to-b from-gray-900 to-black" data-testid="section-completed-projects">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-cyber-cyan font-poppins" data-testid="text-completed-title">
              Completed Projects
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {completedProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-6 sm:py-8 bg-black circuit-pattern" data-testid="section-future-projects">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-cyber-cyan font-poppins" data-testid="text-future-title">
              Future Plans
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center mb-6 sm:mb-8 max-w-3xl mx-auto font-poppins px-4" data-testid="text-future-subtitle">
              Ambitious projects we're planning to tackle in the coming months and years.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {futurePlans.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-6 sm:py-8 bg-gradient-to-b from-gray-900 to-black" data-testid="section-technologies">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-cyber-cyan font-poppins" data-testid="text-technologies-title">
              Technologies We Use
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { name: "Arduino", icon: "fas fa-microchip", description: "Microcontroller programming" },
              { name: "Raspberry Pi", icon: "fas fa-cpu", description: "Single-board computers" },
              { name: "ROS", icon: "fas fa-robot", description: "Robot Operating System" },
              { name: "OpenCV", icon: "fas fa-eye", description: "Computer vision library" },
              { name: "TensorFlow", icon: "fas fa-brain", description: "Machine learning framework" },
              { name: "3D Printing", icon: "fas fa-cube", description: "Rapid prototyping" },
              { name: "CAD Design", icon: "fas fa-drafting-compass", description: "3D modeling and design" },
              { name: "IoT", icon: "fas fa-wifi", description: "Internet of Things" }
            ].map((tech, index) => (
              <AnimatedSection key={tech.name} delay={index * 0.05}>
                <div className="tech-card p-6 rounded-xl text-center hover-glow" data-testid={`card-tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <i className={`${tech.icon} text-3xl text-cyber-cyan mb-4`} data-testid={`icon-tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}></i>
                  <h3 className="text-lg font-bold mb-2 font-poppins" data-testid={`text-tech-name-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {tech.name}
                  </h3>
                  <p className="text-gray-300 text-sm font-poppins" data-testid={`text-tech-description-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {tech.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
