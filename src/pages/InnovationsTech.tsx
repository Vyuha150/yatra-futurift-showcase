import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Zap, 
  Volume, 
  Shield, 
  AlertTriangle, 
  Smartphone, 
  Flame,
  Cpu,
  Battery,
  Waves
} from 'lucide-react';

const InnovationsTech = () => {
  const innovations = [
    {
      id: "smart-elevators",
      title: "Smart Elevators (AI + IoT)",
      icon: Brain,
      description: "At Yatra, we are reshaping the future of vertical mobility through smart elevators propelled by Artificial Intelligence and IoT. Yatra elevators offer more advanced and elevating technological functionality where the Intelligent System goes beyond traditional functionality by learning passenger adaptability, optimizing data through real-time data Analysis, predicting & performing systematic approach enabling voice prediction System.",
      features: ["AI-driven algorithms", "IoT connectivity", "Real-time data analysis", "Voice prediction systems", "Passenger behavior learning"]
    },
    {
      id: "energy-efficiency",
      title: "Energy Efficiency & Regenerative Drives", 
      icon: Zap,
      description: "At Yatra Elevators, energy is not just a source, it is the most crucial thing for every home. By integrating LED power, specifically engineered for heavy-duty commercial use, these elevators cope with substantial electrical bills and energy, and meticulously prolonged operation.",
      features: ["LED integration", "Regenerative drives", "Energy optimization", "Reduced electrical consumption", "Sustainable operations"]
    },
    {
      id: "noise-control",
      title: "Noise & Vibration Control",
      icon: Volume,
      description: "Yatra's Passenger Elevators are comprehensively designed to serve serene, calm and most significant vertical mobility in diverse architectural environments. Our elevators integrate sophisticated technology, noise-optimized and cutting-edge control systems.",
      features: ["Noise-optimized systems", "Vibration sensors", "Acoustic control", "Precision monitoring", "Serene operation"]
    },
    {
      id: "antimicrobial",
      title: "Anti-Microbial Features for Safety",
      icon: Shield,
      description: "At Yatra Elevators, safety is first and foremost essential to maintain hygiene, Anti-microbial Features for safety, eradicating microbial creatures through biodegradable chemicals. Our Elevators not only provide elegant and good feel, but also deliver safety by enhancing the ability to handle any problem regarding safety issues.",
      features: ["Biodegradable chemicals", "Hygiene protocols", "Safety enhancement", "Microbial protection", "Health-focused design"]
    },
    {
      id: "emergency-response",
      title: "Emergency Response Systems",
      icon: AlertTriangle,
      description: "Yatra elevators offer incredible and highly advanced response systems, though it is not just for the purpose of safety but also for security and incorporating accountability by yatra's intelligent sensor–based effortless alerts and connectivity for emergency Response Systems.",
      features: ["Intelligent sensors", "Emergency alerts", "Water alert systems", "Response coordination", "Life protection systems"]
    },
    {
      id: "mobile-integration",
      title: "Mobile App Integration for Users",
      icon: Smartphone,
      description: "At Yatra Elevators, we understand people to give convenience and comfortness by integrating Mobile app technology for users. Technology has evolved drastically in this developing era where everything has digitalized, that's why convenience mobile and charging points and energy saving Systems.",
      features: ["Mobile app control", "Digital convenience", "Charging points", "Energy saving", "User-friendly interface"]
    },
    {
      id: "fire-resistant",
      title: "Fire-Resistant Design Options",
      icon: Flame,
      description: "We at Yatra Elevators, light up many lives through our programs, deliverability, and systematic approach. These facilities are ideal for safety and moreover diminishes life threat in any place. These fire-resistant design Options aim at clearing out the fear of uncertainty and provide peace of mind through protection.",
      features: ["Fire-resistant materials", "Emergency evacuation", "Safety protocols", "Protection systems", "Life-saving design"]
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
              Innovation & Technology
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pioneering the future of vertical mobility with cutting-edge technology, AI integration, and smart solutions that redefine elevator experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid gap-12">
            {innovations.map((innovation, index) => (
              <div 
                key={innovation.id}
                className={`grid md:grid-cols-2 gap-8 items-center p-8 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300 animate-fade-in ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <innovation.icon className="w-12 h-12 text-neon-cyan" />
                    <h3 className="text-2xl font-bold text-foreground">{innovation.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{innovation.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-foreground">Key Features:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {innovation.features.map((feature, idx) => (
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
                <div className={`relative ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl backdrop-blur-sm border border-border flex items-center justify-center">
                    <innovation.icon className="w-24 h-24 text-neon-cyan/50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stats */}
      <section className="py-16 px-6 bg-surface-glass">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Technology at a Glance</h2>
            <p className="text-muted-foreground">Numbers that showcase our innovation leadership</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Cpu, value: "50+", label: "AI Algorithms" },
              { icon: Battery, value: "40%", label: "Energy Savings" },
              { icon: Waves, value: "90%", label: "Noise Reduction" },
              { icon: Shield, value: "99.9%", label: "Safety Reliability" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">The Future is Now</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              At Yatra, we're not just building elevators – we're crafting the future of vertical mobility. Our commitment to innovation drives us to continuously push boundaries and set new standards in the industry.
            </p>
            <Button size="lg" className="btn-primary">
              Explore Our Solutions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InnovationsTech;