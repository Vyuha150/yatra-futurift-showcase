import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Career', href: '/career' },
    { label: 'Projects and Solutions', href: '/projects' },
    { label: 'Innovations and Tech', href: '/innovations' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center space-x-3 group cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="relative w-12 h-12 flex items-center justify-center overflow-hidden transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
            }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/lovable-uploads/de7ef598-547e-4ffb-afa5-85e87165cd2b.png" 
              alt="Yatra Elevators Logo" 
              className="w-full h-full object-contain filter brightness-110 group-hover:brightness-125 transition-all duration-300"
            />
            {/* Animated glow effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 rounded-lg"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="relative text-foreground hover:text-neon-cyan transition-all duration-300 font-medium group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.6 + (index * 0.1),
                ease: "easeOut"
              }}
              whileHover={{ y: -2 }}
            >
              <span className="relative z-10">{item.label}</span>
              {/* Hover underline animation */}
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-accent origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Hover glow effect */}
              <motion.div 
                className="absolute inset-0 bg-neon-cyan/10 rounded-md -z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Login Button */}
        <motion.div 
          className="hidden md:flex items-center space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" size="sm" className="btn-outline">
              <User className="w-4 h-4 mr-2" />
              Log in
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground hover:text-neon-cyan transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden border-t border-border"
      >
        <motion.div 
          className="pt-4 pb-4"
          initial={{ y: -10 }}
          animate={{ y: isMenuOpen ? 0 : -10 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-neon-cyan transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20,
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: isMenuOpen ? 0.2 + (index * 0.1) : 0,
                }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0,
                x: isMenuOpen ? 0 : -20,
              }}
              transition={{ 
                duration: 0.3, 
                delay: isMenuOpen ? 0.2 + (navItems.length * 0.1) : 0,
              }}
            >
              <Button variant="outline" size="sm" className="btn-outline w-fit">
                <User className="w-4 h-4 mr-2" />
                Log in
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navigation;