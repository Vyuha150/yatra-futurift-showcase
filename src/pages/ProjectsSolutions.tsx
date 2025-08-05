import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building2, 
  Home, 
  Hospital, 
  Truck, 
  Eye, 
  Cog, 
  Wrench, 
  Settings, 
  Zap,
  Users,
  FileText,
  Shield
} from 'lucide-react';

const ProjectsSolutions = () => {
  const elevatorTypes = [
    {
      id: "passenger",
      title: "Passenger Elevators",
      icon: Building2,
      description: "Yatra's Passenger Elevators are contemplatively designed to provide serene, calm and most significant vertical mobility in a diverse architectural environment to deliver smooth, safe, and energy efficient vertical mobility for residential and commercial buildings alike.",
      features: ["Advanced technology integration", "Noise-optimized systems", "Customizable cabin finishes", "Safety protocols", "Hygiene standards"]
    },
    {
      id: "residential",
      title: "Home/Residential Elevators", 
      icon: Home,
      description: "Yatra's Elevators promote jubilant, elegant and enhancing incredible environments into your residence. These are fabricated with cutting-edge technology and modern stylish appearance versatility.",
      features: ["Capacity monitoring", "High tech mobility solutions", "Backup system", "Pathogen resistance", "Compact design"]
    },
    {
      id: "hospital",
      title: "Hospital/Bed Elevators",
      icon: Hospital,
      description: "Yatra's Hospital/Bed Elevators instituted with quiet, controlled acoustic environments, structural integrity, and advanced medical equipment accommodations that prioritize patient convenience and safety.",
      features: ["Whisper-quiet operation", "Emergency power bank", "Touchless control systems", "Medical equipment compatibility", "Enhanced hygiene protocols"]
    },
    {
      id: "freight",
      title: "Freight/Service Elevators",
      icon: Truck,
      description: "Yatra's Freight and Service Elevators are designed for maximum potential, solidity and firmness, and flawless performance in rigorous environments.",
      features: ["Heavy-duty commercial use", "Substantial load capacity", "Fortified cabins", "Energy effective drives", "Long-term reliability"]
    },
    {
      id: "capsule",
      title: "Capsule Elevators (Panoramic)",
      icon: Eye,
      description: "Yatra's Capsule Elevators are a meritorious blend of scintillating and elegance, constructed to elevate both momentum and architectural beauty with 360-degree views.",
      features: ["360-degree panoramic views", "Advanced safety operations", "Energy effective capability", "Architectural integration", "Visual experience enhancement"]
    },
    {
      id: "mrl",
      title: "Machine-Room Less (MRL) Elevators",
      icon: Cog,
      description: "Yatra's Machine-Room Less (MRL) Elevators are developed with advanced, sophisticated infrastructure where space consumption is minimized without traditional mechanical room necessity.",
      features: ["Space optimization", "Reduced consumption", "Architectural flexibility", "Advanced technology", "Superior control systems"]
    }
  ];

  const solutions = [
    {
      id: "installation",
      title: "New Installations",
      icon: Settings,
      description: "Yatra's New Installations offers end to end installation solutions, durability with maximum safety guidelines along with configured security protocols."
    },
    {
      id: "modernization", 
      title: "Modernization & Upgrades",
      icon: Zap,
      description: "At Yatra, Elevators turn out to be sophisticated with advanced technology that are decommissioned with technical progress."
    },
    {
      id: "maintenance",
      title: "Maintenance & AMC Services", 
      icon: Wrench,
      description: "Yatra's Maintenance and Annual Maintenance Contract (AMC) services are engineered to maintain that your elevators function uninterruptedly, safely, and effectively."
    },
    {
      id: "custom",
      title: "Customized Lift Solutions",
      icon: Users,
      description: "At Yatra Elevators, we offer Tailor Made Lift Solutions configured particularly for professionals, engineers, builders and Institutions."
    }
  ];

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6" ref={heroRef}>
        <div className="container mx-auto">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Projects & Solutions
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive elevator solutions designed to meet every vertical mobility need across diverse industries and applications.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <Tabs defaultValue="elevators" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TabsList className="grid w-full grid-cols-2 mb-12">
                <TabsTrigger value="elevators" className="text-lg">Elevators</TabsTrigger>
                <TabsTrigger value="solutions" className="text-lg">Solutions</TabsTrigger>
              </TabsList>
            </motion.div>
            
            <TabsContent value="elevators" className="space-y-12">
              <div className="grid gap-8">
                {elevatorTypes.map((elevator, index) => {
                  const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.1 });
                  
                  return (
                    <motion.div 
                      key={elevator.id}
                      ref={cardRef}
                      className="grid md:grid-cols-2 gap-8 items-center p-8 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-500"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 }}
                      animate={cardInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                      <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={cardInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      >
                        <motion.div 
                          className="flex items-center gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={cardInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <elevator.icon className="w-12 h-12 text-neon-cyan" />
                          </motion.div>
                          <h3 className="text-2xl font-bold text-foreground">{elevator.title}</h3>
                        </motion.div>
                        <p className="text-muted-foreground leading-relaxed">{elevator.description}</p>
                        <div className="space-y-2">
                          <h4 className="text-lg font-semibold text-foreground">Key Features:</h4>
                          <ul className="grid grid-cols-1 gap-2">
                            {elevator.features.map((feature, idx) => (
                              <motion.li 
                                key={idx} 
                                className="flex items-center gap-2 text-muted-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                animate={cardInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.4, delay: index * 0.1 + 0.4 + idx * 0.1 }}
                              >
                                <motion.div 
                                  className="w-2 h-2 bg-neon-cyan rounded-full"
                                  whileHover={{ scale: 1.5 }}
                                  transition={{ duration: 0.2 }}
                                ></motion.div>
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button variant="outline" className="btn-outline">
                            Learn More
                          </Button>
                        </motion.div>
                      </motion.div>
                      <motion.div 
                        className="relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={cardInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                      >
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl backdrop-blur-sm border border-border"></div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="solutions" className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                {solutions.map((solution, index) => {
                  const [solutionRef, solutionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
                  
                  return (
                    <motion.div 
                      key={solution.id}
                      ref={solutionRef}
                      className="p-8 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-500"
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={solutionInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                    >
                      <div className="space-y-6">
                        <motion.div 
                          className="flex items-center gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={solutionInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <solution.icon className="w-12 h-12 text-neon-cyan" />
                          </motion.div>
                          <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                        </motion.div>
                        <motion.p 
                          className="text-muted-foreground leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={solutionInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                        >
                          {solution.description}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={solutionInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button variant="outline" className="btn-outline">
                            Get Started
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-6 bg-surface-glass">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground">Vertical mobility solutions across diverse sectors</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Residential Buildings", icon: Home },
              { title: "Commercial Complexes", icon: Building2 },
              { title: "Hospitals & Healthcare", icon: Hospital },
              { title: "Educational Institutions", icon: FileText },
              { title: "Government Infrastructure", icon: Shield },
              { title: "Malls & Retail", icon: Users },
              { title: "Industrial Warehouses", icon: Truck },
              { title: "Airports & Transport", icon: Zap }
            ].map((industry, index) => (
              <motion.div 
                key={industry.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <industry.icon className="w-10 h-10 text-neon-cyan mx-auto mb-4" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground">{industry.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsSolutions;