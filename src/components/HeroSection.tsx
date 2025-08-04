import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, Eye } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from 'react';

// Import generated images
import touchlessElevator from '@/assets/touchless-elevator.jpg';
import iotMonitoring from '@/assets/iot-monitoring.jpg';
import energyEfficient from '@/assets/energy-efficient.jpg';
import emergencyResponse from '@/assets/emergency-response.jpg';
import customInterior from '@/assets/custom-interior.jpg';
import rapidInstallation from '@/assets/rapid-installation.jpg';

const HeroSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const elevatorCards = [
    {
      title: "Touchless Elevators",
      description: "Voice commands and gesture controls for a hygienic experience",
      image: touchlessElevator,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4C16 4 12 8 8 12C8 16 12 20 16 20C20 20 24 16 24 12C20 8 16 4 16 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M16 12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 24L20 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 28L22 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      details: ["Voice Recognition", "Gesture Controls", "UV Sanitization"]
    },
    {
      title: "IoT Smart Monitoring",
      description: "Real-time diagnostics and predictive maintenance alerts",
      image: iotMonitoring,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 12L8 8M20 12L24 8M12 20L8 24M20 20L24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="8" cy="8" r="2" fill="currentColor"/>
          <circle cx="24" cy="8" r="2" fill="currentColor"/>
          <circle cx="8" cy="24" r="2" fill="currentColor"/>
          <circle cx="24" cy="24" r="2" fill="currentColor"/>
        </svg>
      ),
      details: ["24/7 Monitoring", "Predictive Analytics", "Remote Diagnostics"]
    },
    {
      title: "Energy Efficient",
      description: "LED lighting and regenerative drives reduce power consumption",
      image: energyEfficient,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L20 10H24L18 16L20 24L16 20L12 24L14 16L8 10H12L16 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="6" cy="6" r="1" fill="currentColor"/>
          <circle cx="26" cy="6" r="1" fill="currentColor"/>
          <circle cx="6" cy="26" r="1" fill="currentColor"/>
          <circle cx="26" cy="26" r="1" fill="currentColor"/>
        </svg>
      ),
      details: ["LED Lighting", "Regenerative Drives", "Power Saving Mode"]
    },
    {
      title: "Emergency Response",
      description: "Instant connectivity to emergency services and support",
      image: emergencyResponse,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 8V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="16" cy="16" r="2" fill="currentColor"/>
          <path d="M8 4L12 8M24 4L20 8M8 28L12 24M24 28L20 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      details: ["Auto Emergency Call", "Two-way Communication", "Battery Backup"]
    },
    {
      title: "Custom Interiors",
      description: "Premium finishes and personalized cabin designs",
      image: customInterior,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 12L26 12" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V26" stroke="currentColor" strokeWidth="2"/>
          <circle cx="9" cy="9" r="1" fill="currentColor"/>
          <circle cx="15" cy="9" r="1" fill="currentColor"/>
          <circle cx="21" cy="9" r="1" fill="currentColor"/>
        </svg>
      ),
      details: ["Premium Materials", "LED Ambient Lighting", "Custom Panels"]
    },
    {
      title: "Rapid Installation",
      description: "Professional setup completed within 2 weeks",
      image: rapidInstallation,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 6V16H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 8L12 12M20 12L24 8M8 24L12 20M20 20L24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      details: ["Quick Setup", "Minimal Disruption", "Expert Installation"]
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 bg-grid-pattern animate-grid-move opacity-30"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient">Future of Vertical</span>
                <br />
                <span className="text-gradient">Mobility</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Advanced elevators and escalators for residential towers, workspaces, malls, and hospitals – powered by 24/7 service and future-ready tech.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary group">
                Get Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-outline group">
                <Calendar className="w-5 h-5 mr-2" />
                Book Service
              </Button>
              <Button className="btn-outline group">
                <Eye className="w-5 h-5 mr-2" />
                View Cabins
              </Button>
            </div>

            {/* Discover Section */}
            <div className="pt-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover what sets us apart in the world of vertical mobility solutions
              </p>
            </div>
          </div>

          {/* Right Cards Carousel */}
          <div className="relative">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
              className="w-full max-w-md mx-auto"
            >
              <CarouselContent>
                {elevatorCards.map((card, index) => (
                  <CarouselItem key={index}>
                    <div 
                      className="relative p-6 h-80 bg-surface-elevated/90 backdrop-blur-sm rounded-2xl border border-neon-cyan/20 transition-all duration-300 hover:border-neon-cyan/50 group cursor-pointer"
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{
                        transform: hoveredCard === index ? 'translateY(-5px)' : 'translateY(0)',
                        boxShadow: hoveredCard === index 
                          ? '0 20px 40px -10px rgba(0, 230, 255, 0.3), 0 0 30px rgba(0, 230, 255, 0.2)' 
                          : '0 10px 20px -5px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      {/* Card Content */}
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          {/* Background Image */}
                          <div className="absolute inset-0 rounded-2xl overflow-hidden">
                            <img 
                              src={card.image} 
                              alt={card.title}
                              className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated/95 to-surface-elevated/80"></div>
                          </div>
                          
                          <div className="relative z-10">
                            <div className="flex justify-center mb-4 text-neon-cyan">
                              {card.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                              {card.title}
                            </h3>
                            <p className="text-muted-foreground text-center leading-relaxed">
                              {card.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Additional Details on Hover */}
                        <div className={`transition-all duration-300 ${
                          hoveredCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                          <div className="border-t border-neon-cyan/20 pt-4 mt-4">
                            <ul className="space-y-2">
                              {card.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="text-sm text-neon-cyan flex items-center">
                                  <div className="w-1 h-1 bg-neon-cyan rounded-full mr-2"></div>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full mt-3 border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10"
                            >
                              Know More
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Hover Glow Effect */}
                      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
                        hoveredCard === index ? 'opacity-100' : 'opacity-0'
                      } bg-gradient-to-r from-neon-cyan/5 to-neon-blue/5 pointer-events-none`}></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Custom Navigation */}
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-surface-elevated/80 border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-surface-elevated/80 border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10" />
            </Carousel>
            
            {/* Floating Accent Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-accent rounded-full animate-pulse-glow opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-neon-cyan/50 rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;