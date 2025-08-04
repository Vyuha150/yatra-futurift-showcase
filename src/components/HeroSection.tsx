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
import { motion } from 'framer-motion';
import { 
  SplitTextAnimation, 
  SlideInAnimation, 
  StaggeredCardsContainer,
  AnimatedCard,
  FloatingElement,
  GlowButton
} from '@/components/AnimatedComponents';

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
      {/* Animated Background Grid */}
      <motion.div 
        className="absolute inset-0 bg-grid-pattern opacity-30"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          backgroundPosition: ["0 0", "40px 40px", "0 0"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Floating Elements */}
      <FloatingElement delay={0}>
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-cyan rounded-full opacity-60"></div>
      </FloatingElement>
      <FloatingElement delay={2}>
        <div className="absolute top-40 right-20 w-3 h-3 bg-neon-blue rounded-full opacity-40"></div>
      </FloatingElement>
      <FloatingElement delay={1}>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-neon-green rounded-full opacity-80"></div>
      </FloatingElement>
      
      {/* Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-hero"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(var(--background)), hsl(var(--surface-elevated)))",
            "linear-gradient(225deg, hsl(var(--surface)), hsl(var(--background)))",
            "linear-gradient(135deg, hsl(var(--background)), hsl(var(--surface-elevated)))",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <SplitTextAnimation 
                text="Future of Vertical"
                className="text-5xl lg:text-7xl font-bold leading-tight text-gradient"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              >
                <span className="text-gradient text-5xl lg:text-7xl font-bold">Mobility</span>
              </motion.div>
              
              <SlideInAnimation direction="right" delay={1.5}>
                <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Advanced elevators and escalators for residential towers, workspaces, malls, and hospitals – powered by 24/7 service and future-ready tech.
                </p>
              </SlideInAnimation>
            </div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <GlowButton className="btn-primary group">
                Get Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </GlowButton>
              <GlowButton className="btn-outline group">
                <Calendar className="w-5 h-5 mr-2" />
                Book Service
              </GlowButton>
              <GlowButton className="btn-outline group">
                <Eye className="w-5 h-5 mr-2" />
                View Cabins
              </GlowButton>
            </motion.div>

            {/* Discover Section */}
            <SlideInAnimation direction="up" delay={2.2}>
              <div className="pt-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Discover what sets us apart in the world of vertical mobility solutions
                </p>
              </div>
            </SlideInAnimation>
          </div>

          {/* Right Cards Carousel */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
          >
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
                    <motion.div 
                      className="relative p-6 h-80 bg-surface-elevated/90 backdrop-blur-sm rounded-2xl border border-neon-cyan/20 group cursor-pointer"
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      whileHover={{ 
                        y: -8,
                        rotateY: 5,
                        borderColor: "hsl(var(--neon-cyan) / 0.5)",
                        boxShadow: "0 25px 50px -12px rgba(0, 230, 255, 0.4), 0 0 40px rgba(0, 230, 255, 0.3)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Card Content */}
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          {/* Background Image */}
                          <div className="absolute inset-0 rounded-2xl overflow-hidden">
                            <motion.img 
                              src={card.image} 
                              alt={card.title}
                              className="w-full h-full object-cover opacity-20"
                              whileHover={{ scale: 1.1, opacity: 0.3 }}
                              transition={{ duration: 0.3 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated/95 to-surface-elevated/80"></div>
                          </div>
                          
                          <div className="relative z-10">
                            <FloatingElement delay={index * 0.3}>
                              <div className="flex justify-center mb-4 text-neon-cyan">
                                {card.icon}
                              </div>
                            </FloatingElement>
                            <motion.h3 
                              className="text-xl font-semibold text-foreground mb-3 text-center"
                              whileHover={{ 
                                color: "hsl(var(--neon-cyan))",
                                textShadow: "0 0 20px hsl(var(--neon-cyan) / 0.8)"
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              {card.title}
                            </motion.h3>
                            <motion.p 
                              className="text-muted-foreground text-center leading-relaxed"
                              whileHover={{ 
                                color: "hsl(var(--foreground))",
                                textShadow: "0 0 10px hsl(var(--neon-cyan) / 0.4)"
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              {card.description}
                            </motion.p>
                          </div>
                        </div>
                        
                        {/* Additional Details on Hover */}
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ 
                            opacity: hoveredCard === index ? 1 : 0,
                            y: hoveredCard === index ? 0 : 20,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="border-t border-neon-cyan/20 pt-4 mt-4">
                            <ul className="space-y-2">
                              {card.details.map((detail, detailIndex) => (
                                <motion.li 
                                  key={detailIndex} 
                                  className="text-sm text-neon-cyan flex items-center"
                                  initial={{ x: -10, opacity: 0.7 }}
                                  animate={{ 
                                    x: hoveredCard === index ? 0 : -10,
                                    opacity: hoveredCard === index ? 1 : 0.7,
                                    textShadow: hoveredCard === index ? "0 0 10px hsl(var(--neon-cyan)), 0 0 20px hsl(var(--neon-cyan) / 0.5)" : "none",
                                  }}
                                  transition={{ delay: detailIndex * 0.1 }}
                                >
                                  <motion.div 
                                    className="w-1 h-1 bg-neon-cyan rounded-full mr-2"
                                    animate={{
                                      boxShadow: hoveredCard === index ? "0 0 8px hsl(var(--neon-cyan))" : "none",
                                    }}
                                  />
                                  {detail}
                                </motion.li>
                              ))}
                            </ul>
                            <GlowButton 
                              variant="outline" 
                              size="sm" 
                              className="w-full mt-3 border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10"
                            >
                              Know More
                            </GlowButton>
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Hover Glow Effect */}
                      <motion.div 
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-cyan/5 to-neon-blue/5 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Custom Navigation */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-surface-elevated/80 border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-surface-elevated/80 border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10" />
              </motion.div>
            </Carousel>
            
            {/* Floating Accent Elements */}
            <FloatingElement delay={0}>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-accent rounded-full animate-pulse-glow opacity-60"></div>
            </FloatingElement>
            <FloatingElement delay={1.5}>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-neon-cyan/50 rounded-full"></div>
            </FloatingElement>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;