import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "nav-blur border-b border-gray-800" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      data-testid="header-main"
    >
      <nav className="container mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo and Title */}
        <Link href="/" data-testid="link-home">
          <motion.div
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="https://i.postimg.cc/brHtmN9M/Picsart-25-08-13-12-40-35-146-1.png"
              alt="SOE Robotics Club Logo"
              className="h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 animate-pulse-slow logo-circular"
              data-testid="img-logo"
            />
            <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold glow-text font-poppins" data-testid="text-title">
              SOE Robotics Club
            </h1>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} data-testid={`link-${item.name.toLowerCase()}`}>
              <motion.span
                className={`relative cursor-pointer transition-colors duration-300 font-poppins font-semibold ${
                  location === item.path
                    ? "text-cyber-cyan"
                    : "text-white hover:text-cyber-cyan"
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
                {location === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyber-cyan"
                    layoutId="nav-indicator"
                    initial={false}
                  />
                )}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyber-cyan p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-black bg-opacity-95 border-b border-gray-800 md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              data-testid="menu-mobile"
            >
              <div className="container mx-auto px-3 sm:px-4 md:px-6 py-4 space-y-3 sm:space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-mobile-${item.name.toLowerCase()}`}
                  >
                    <motion.div
                      className={`block py-2 font-poppins font-semibold ${
                        location === item.path
                          ? "text-cyber-cyan"
                          : "text-white hover:text-cyber-cyan"
                      }`}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
