import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent mb-6">
              Projects & Solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive elevator solutions designed to meet every vertical mobility need across diverse industries and applications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <Tabs defaultValue="elevators" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="elevators" className="text-lg">Elevators</TabsTrigger>
              <TabsTrigger value="solutions" className="text-lg">Solutions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="elevators" className="space-y-12">
              <div className="grid gap-8">
                {elevatorTypes.map((elevator, index) => (
                  <div 
                    key={elevator.id}
                    className="grid md:grid-cols-2 gap-8 items-center p-8 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <elevator.icon className="w-12 h-12 text-neon-cyan" />
                        <h3 className="text-2xl font-bold text-foreground">{elevator.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{elevator.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-foreground">Key Features:</h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {elevator.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                              <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button variant="outline" className="btn-outline">
                        Learn More
                      </Button>
                    </div>
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl backdrop-blur-sm border border-border"></div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="solutions" className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                {solutions.map((solution, index) => (
                  <div 
                    key={solution.id}
                    className="p-8 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <solution.icon className="w-12 h-12 text-neon-cyan" />
                        <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                      <Button variant="outline" className="btn-outline">
                        Get Started
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-6 bg-surface-glass">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground">Vertical mobility solutions across diverse sectors</p>
          </div>
          
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
              <div 
                key={industry.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <industry.icon className="w-10 h-10 text-neon-cyan mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground">{industry.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsSolutions;