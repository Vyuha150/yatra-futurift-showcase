import { 
  Calendar, 
  Search, 
  Pencil, 
  Wrench, 
  CheckCircle,
  ArrowRight,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Calendar,
      title: "Book Consultation",
      description: "Schedule a free consultation call with our elevator experts",
      duration: "Same Day",
      details: ["Free consultation", "Requirement analysis", "Budget discussion"]
    },
    {
      number: "02", 
      icon: Search,
      title: "Site Survey",
      description: "Our technical team visits your site for detailed assessment",
      duration: "24-48 Hours",
      details: ["Detailed measurements", "Structural assessment", "Customization options"]
    },
    {
      number: "03",
      icon: Pencil,
      title: "Elevator Design",
      description: "Custom design and engineering based on your requirements",
      duration: "3-5 Days",
      details: ["3D visualization", "Technical drawings", "Material selection"]
    },
    {
      number: "04",
      icon: Wrench,
      title: "Installation",
      description: "Professional installation by certified technicians",
      duration: "1-2 Weeks", 
      details: ["Minimal disruption", "Safety protocols", "Quality checks"]
    },
    {
      number: "05",
      icon: CheckCircle,
      title: "Handover & App",
      description: "Complete handover with IoT app setup and training",
      duration: "1 Day",
      details: ["App configuration", "User training", "Warranty activation"]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From Quote to Lift in 5 Steps
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures quick, efficient, and hassle-free elevator installation
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-blue to-neon-cyan transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-mono text-neon-cyan">{step.number}</span>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{step.duration}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`flex justify-center ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                  <div className="relative">
                    <div className="w-32 h-32 card-glow rounded-full flex items-center justify-center group hover:scale-110 transition-all duration-300">
                      <step.icon className="w-12 h-12 text-neon-cyan group-hover:animate-pulse-glow" />
                    </div>
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-accent-foreground">{index + 1}</span>
                    </div>

                    {/* Connecting Dot for Mobile */}
                    <div className="lg:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gradient-to-b from-neon-cyan to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="card-glow p-8 lg:p-12 max-w-2xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Ready to Get Started?</h3>
              <p className="text-muted-foreground">
                Join hundreds of satisfied customers who chose Yatra for their elevator needs
              </p>
              
              <Button className="btn-primary group">
                Get Started in 24 Hours
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center justify-center space-x-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                  <span>No Hidden Costs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                  <span>Quick Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;