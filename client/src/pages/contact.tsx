import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import AnimatedSection from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    interests: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.experience || !formData.interests) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      experience: "",
      interests: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "soerobotics@engineering.edu",
      href: "mailto:soerobotics@engineering.edu"
    },
    {
      icon: "fas fa-phone",
      label: "Phone",
      value: "+917007864516",
      href: "tel:+917007864516"
    },
    {
      icon: "fas fa-map-marker-alt",
      label: "Location",
      value: "Engineering Building, Room 301\nSchool of Engineering Campus",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook", href: "#", name: "Facebook" },
    { icon: "fab fa-instagram", href: "#", name: "Instagram" },
    { icon: "fab fa-github", href: "#", name: "GitHub" },
    { icon: "fab fa-linkedin", href: "#", name: "LinkedIn" },
  ];

  const faqs = [
    {
      question: "Do I need prior robotics experience to join?",
      answer: "Not at all! We welcome members of all skill levels, from complete beginners to advanced practitioners. Our workshops and mentorship programs are designed to help everyone learn and grow."
    },
    {
      question: "What are the membership fees?",
      answer: "We have a nominal annual membership fee of $25 to cover basic club expenses. This includes access to all workshops, events, and club resources."
    },
    {
      question: "How often do you meet?",
      answer: "We have weekly general meetings every Wednesday at 6 PM, plus various workshops and project sessions throughout the week. All schedules are flexible to accommodate academic commitments."
    },
    {
      question: "Can I work on my own robotics projects?",
      answer: "Absolutely! We encourage personal projects and provide resources, workspace, and mentorship to help you succeed. Many of our best innovations come from individual member initiatives."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900" data-testid="section-contact-hero">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Join Our Club"
            subtitle="Ready to innovate with us? Join our community of robotics enthusiasts and shape the future."
          />
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-black circuit-pattern" data-testid="section-contact-form">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimatedSection>
              <h3 className="text-2xl font-bold mb-6 text-cyber-cyan font-poppins" data-testid="text-contact-info-title">
                Get in Touch
              </h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    data-testid={`div-contact-${info.label.toLowerCase()}`}
                  >
                    <i className={`${info.icon} text-electric-blue text-xl mr-4 mt-1`} data-testid={`icon-contact-${info.label.toLowerCase()}`}></i>
                    <div>
                      <div className="font-semibold text-gray-300 font-poppins">{info.label}</div>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-cyber-cyan transition-colors duration-300 font-poppins"
                          data-testid={`link-contact-${info.label.toLowerCase()}`}
                        >
                          {info.value.split('\n').map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </a>
                      ) : (
                        <div className="text-white font-poppins" data-testid={`text-contact-${info.label.toLowerCase()}`}>
                          {info.value.split('\n').map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="text-electric-blue hover:text-cyber-cyan text-2xl transition-colors duration-300"
                    whileHover={{ scale: 1.2, y: -2 }}
                    transition={{ duration: 0.2 }}
                    data-testid={`link-social-${social.name.toLowerCase()}`}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>

            {/* Membership Form */}
            <AnimatedSection delay={0.2}>
              <div className="tech-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-cyber-cyan font-poppins" data-testid="text-membership-form-title">
                  Membership Application
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-membership">
                  <div>
                    <label className="block text-gray-300 mb-2 font-poppins">Full Name</label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white focus:border-cyber-cyan font-poppins"
                      data-testid="input-name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-poppins">Email Address</label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white focus:border-cyber-cyan font-poppins"
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-poppins">Experience Level</label>
                    <Select onValueChange={(value) => handleChange("experience", value)} data-testid="select-experience">
                      <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:border-cyber-cyan font-poppins">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-poppins">Areas of Interest</label>
                    <Textarea
                      placeholder="Tell us about your interests in robotics..."
                      value={formData.interests}
                      onChange={(e) => handleChange("interests", e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white focus:border-cyber-cyan h-24 font-poppins"
                      data-testid="textarea-interests"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-electric-blue hover:bg-deep-electric text-white font-bold py-3 hover-glow transition-all duration-300 font-poppins"
                    data-testid="button-submit-application"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>Submit Application
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black" data-testid="section-faq">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about joining and participating in our robotics club."
          />
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 0.1}>
                <motion.div
                  className="tech-card p-6 rounded-xl"
                  whileHover={{ y: -2 }}
                  data-testid={`card-faq-${index}`}
                >
                  <h4 className="text-lg font-bold mb-3 text-cyber-cyan font-poppins" data-testid={`text-faq-question-${index}`}>
                    {faq.question}
                  </h4>
                  <p className="text-gray-300 leading-relaxed font-poppins" data-testid={`text-faq-answer-${index}`}>
                    {faq.answer}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 bg-black circuit-pattern" data-testid="section-visit-us">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Visit Our Lab"
            subtitle="Come see our workspace and meet the team in person."
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="tech-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-cyber-cyan font-poppins" data-testid="text-lab-hours-title">
                  Lab Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center" data-testid="div-hours-weekdays">
                    <span className="font-semibold font-poppins">Monday - Friday</span>
                    <span className="text-gray-300 font-poppins">2:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center" data-testid="div-hours-saturday">
                    <span className="font-semibold font-poppins">Saturday</span>
                    <span className="text-gray-300 font-poppins">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center" data-testid="div-hours-sunday">
                    <span className="font-semibold font-poppins">Sunday</span>
                    <span className="text-gray-300 font-poppins">Closed</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-bold mb-4 text-electric-blue font-poppins" data-testid="text-meeting-times-title">
                    Regular Meetings
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center" data-testid="div-meeting-general">
                      <i className="fas fa-users text-cyber-cyan mr-3"></i>
                      <span className="font-poppins">General Meeting: Wednesdays 6:00 PM</span>
                    </div>
                    <div className="flex items-center" data-testid="div-meeting-workshops">
                      <i className="fas fa-tools text-cyber-cyan mr-3"></i>
                      <span className="font-poppins">Workshops: Saturdays 2:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="SOE Robotics Lab"
                className="rounded-xl shadow-lg hover-glow"
                data-testid="img-robotics-lab"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
