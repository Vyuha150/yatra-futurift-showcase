import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home Elevators', href: '#' },
    { label: 'Commercial Lifts', href: '#' },
    { label: 'Hospital Elevators', href: '#' },
    { label: 'Freight Elevators', href: '#' },
    { label: 'Escalators', href: '#' },
    { label: 'Maintenance', href: '#' },
    { label: 'clientRequirementForm', href: '/clientForm' }
    

    
];

  const services = [
    { label: 'Installation', href: '#' },
    { label: 'AMC Services', href: '#' },
    { label: 'Modernization', href: '#' },
    { label: 'Emergency Repair', href: '#' },
    { label: 'IoT Monitoring', href: '#' },
    { label: 'Consultation', href: '#' },
    { label: 'partnership', href: '/partner-application' }
  ];

  const company = [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Contact', href: '#contact' },
    { label: 'FeedBack', href: '/FeedBack' }



  ];

  return (
    <footer className="bg-surface-elevated border-t border-border relative">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">Y</span>
              </div>
              <span className="text-2xl font-bold text-gradient">YATRA</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              India's most responsive and tech-integrated elevator partner. 
              Built on trust, safety, and customer-first service with future-ready technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-neon-cyan" />
                <span className="text-foreground">+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-neon-cyan" />
                <span className="text-foreground">info@yatraelevators.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-neon-cyan" />
                <span className="text-foreground">Mumbai, Delhi, Bangalore & 15+ Cities</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-neon-cyan cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-neon-cyan cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-neon-cyan cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-neon-cyan cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Products</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-neon-cyan transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="block text-muted-foreground hover:text-neon-cyan transition-colors"
                >
                  {service.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Company</h3>
            <div className="space-y-3">
              {company.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-muted-foreground hover:text-neon-cyan transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Stay Updated</h3>
              <p className="text-muted-foreground">
                Get the latest updates on elevator technology, maintenance tips, and industry insights.
              </p>
            </div>
            
            <div className="flex space-x-2">
              <Input
                placeholder="Enter your email"
                className="bg-surface border-border focus:border-neon-cyan"
              />
              <Button className="btn-accent">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-background">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Yatra Elevators. All rights reserved. | ISO 9001:2015 Certified
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                Warranty
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="btn-accent rounded-full w-14 h-14 shadow-glow animate-pulse-glow">
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;