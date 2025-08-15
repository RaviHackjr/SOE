import { Link } from "wouter";
import { motion } from "framer-motion";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
  ];

  const resources = [
    { name: "Tutorials", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Code Repository", href: "#" },
    { name: "Blog", href: "#" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: "fab fa-instagram", href: "https://www.instagram.com/robosquad_bbdu/" },
    { name: "LinkedIn", icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/robotics-club-soe-460987376/" },
    { name: "GitHub", icon: "fab fa-github", href: "#" },
    { name: "Facebook", icon: "fab fa-facebook", href: "#" },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-12" data-testid="footer-main">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://i.postimg.cc/brHtmN9M/Picsart-25-08-13-12-40-35-146-1.png"
                alt="SOE Robotics Club Logo"
                className="h-8 w-8"
                data-testid="img-footer-logo"
              />
              <h3 className="text-xl font-bold text-cyber-cyan font-poppins" data-testid="text-footer-title">
                SOE Robotics
              </h3>
            </div>
            <p className="text-gray-400 font-poppins" data-testid="text-footer-description">
              Innovating the future through robotics and automation.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 text-cyber-cyan font-poppins" data-testid="text-quick-links-title">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} data-testid={`link-footer-${link.name.toLowerCase().replace(' ', '-')}`}>
                    <motion.span
                      className="hover:text-white transition-colors duration-300 cursor-pointer font-poppins"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 text-cyber-cyan font-poppins" data-testid="text-resources-title">
              Resources
            </h4>
            <ul className="space-y-2 text-gray-400">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <motion.a
                    href={resource.href}
                    className="hover:text-white transition-colors duration-300 font-poppins"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    data-testid={`link-resource-${resource.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {resource.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 text-cyber-cyan font-poppins" data-testid="text-connect-title">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ duration: 0.2 }}
                  data-testid={`link-social-${social.name.toLowerCase()}`}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="font-poppins" data-testid="text-copyright">
            &copy; 2024 SOE Robotics Club. All rights reserved. | Designed with ❤️ by the SOE Tech Team
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
