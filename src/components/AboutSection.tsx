import {
  Shield,
  Smartphone,
  HandIcon,
  Clock,
  Wrench,
  Building2,
  Home,
  Truck,
  ChevronRight,
} from "lucide-react";
import roboticHand from "@/assets/robotic-hand.jpg";

const AboutSection = () => {
  const services = [
    {
      icon: Shield,
      title: "24/7 Emergency Support",
      description: "Round-the-clock service with <30min response time",
    },
    {
      icon: Smartphone,
      title: "IoT-Enabled Monitoring",
      description: "Smart monitoring with predictive maintenance",
    },
    {
      icon: HandIcon,
      title: "Touchless Controls",
      description: "Hygienic operation with voice & app controls",
    },
    {
      icon: Clock,
      title: "Fast Installation",
      description: "Professional setup in under 2 weeks",
    },
    {
      icon: Wrench,
      title: "Retrofit Solutions",
      description: "Upgrade existing buildings seamlessly",
    },
    {
      icon: Building2,
      title: "AMC & Maintenance",
      description: "Comprehensive service packages available",
    },
    {
      icon: Home,
      title: "Residential Elevators",
      description: "Custom home lift solutions",
    },
    {
      icon: Truck,
      title: "Commercial Systems",
      description: "Hospital, freight & passenger elevators",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">We are </span>
            <span className="text-brand">Yatra</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-glow p-6 group hover:scale-102 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                  <service.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Robotic Hand Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={roboticHand}
                alt="Advanced Automation Technology"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>

            {/* Floating Tech Elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-neon-cyan/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-8 h-8 border-2 border-neon-blue rounded-full animate-float"></div>
          </div>

          {/* Right - Description */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gradient">
                Products that reshape the vertical transportation industry
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Yatra Elevators is India's most responsive and tech-integrated
                elevator partner – built on trust, safety, and customer-first
                service. We embrace our social responsibility and strive to make
                a positive impact on society through the creation of
                technologically advanced solutions that drive global progress.
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-neon-cyan rounded-full"
                  ></div>
                ))}
              </div>
              <span className="text-xs text-muted-foreground font-mono">
                PRECISION | SAFETY | INNOVATION
              </span>
            </div>

            <button className="group flex items-center space-x-2 text-neon-cyan hover:text-neon-cyan-glow transition-colors">
              <span className="font-semibold">
                Learn more about our technology
              </span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
