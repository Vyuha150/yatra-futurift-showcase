import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from "react";
import { Send } from 'lucide-react';


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
    { label: 'Maintenance', href: '/service-request' },
    
    

    
];

  const services = [
    { label: 'Installation', href: '#' },
    { label: 'AMC Services', href: '/support' },
    { label: 'Modernization', href: '#' },
    { label: 'Emergency Repair', href: '/service-request' },
    { label: 'IoT Monitoring', href: '#' },
    { label: 'Consultation', href: '/contact' },
    { label: 'partnership', href: '/partner-application' }
  ];

  const company = [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/career' },
    { label: 'Case Studies', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Contact', href: '/contact' },
    { label: 'FeedBack', href: '/FeedBack' }



  ];
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
  { text: "Hi! 👋 How can we help you today?", from: "bot" }
]);
const [inputValue, setInputValue] = useState("");

const handleSend = () => {
  if (!inputValue.trim()) return;

  // Add user message
  setMessages((prev) => [...prev, { text: inputValue, from: "user" }]);

  const userText = inputValue; // store before clearing
  setInputValue("");

  // Simulate bot reply
  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      {
        text: ` Our team will get back to you soon! 🚀`,
        from: "bot",
      },
    ]);
  }, 800);
};



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
  <Button
    onClick={() => setIsChatOpen(!isChatOpen)}
    className="btn-accent rounded-full w-14 h-14 shadow-glow animate-pulse-glow"
  >
    <MessageCircle className="w-6 h-6" />
  </Button>
</div>

{/* Chatbox */}
{isChatOpen && (
  <div className="fixed bottom-24 right-6 w-80 bg-black text-white rounded-xl shadow-2xl border border-gray-800 overflow-hidden animate-fadeIn z-50">

    {/* Header */}
    <div className="flex justify-between items-center bg-neon-cyan p-3">
      <span className="font-semibold text-black">Yatra Assistant</span>
      <button
        onClick={() => setIsChatOpen(false)}
        className="text-black hover:text-gray-700 text-lg"
      >
        ✕
      </button>
    </div>

    {/* Messages Area */}
    <div className="p-4 h-64 overflow-y-auto bg-black">

      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`px-3 py-2 rounded-lg mb-2 max-w-[80%] ${
  msg.from === "bot"
    ? "bg-neon-cyan/30 text-white"
    : "bg-neon-cyan text-white ml-auto"
}`}

        >
          {msg.text}
        </div>
      ))}
    </div>

    {/* Input Area */}
    <div className="p-3 border-t border-gray-800 flex space-x-2 bg-black">
  <Input
    placeholder="Type your message..."
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    className="flex-1 border border-neon-cyan bg-black text-white rounded-lg focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
  />
  <Button
    size="icon"
    onClick={handleSend}
    className="bg-neon-cyan hover:bg-neon-cyan/80 text-black rounded-full p-2"
  >
    <Send className="w-4 h-4" />
  </Button>
</div>

  </div>
)}


    </footer>
  );
};

export default Footer;