import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User } from 'lucide-react';

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-glass backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105">
              <img 
                src="/lovable-uploads/de7ef598-547e-4ffb-afa5-85e87165cd2b.png" 
                alt="Yatra Elevators Logo" 
                className="w-full h-full object-contain filter brightness-110 group-hover:brightness-125 transition-all duration-300"
              />
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-foreground hover:text-neon-cyan transition-all duration-300 font-medium group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                {/* Hover underline animation */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-neon-cyan/10 rounded-md scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 -z-10"></div>
              </a>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="btn-outline">
              <User className="w-4 h-4 mr-2" />
              Log in
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-neon-cyan transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-neon-cyan transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="outline" size="sm" className="btn-outline w-fit">
                <User className="w-4 h-4 mr-2" />
                Log in
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;