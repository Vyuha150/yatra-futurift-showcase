import {
  Calendar,
  Search,
  Pencil,
  Wrench,
  CheckCircle,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProcessStep {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  duration: string;
  details: string[];
}

interface StepCardProps {
  step: ProcessStep;
  index: number;
}

const StepCard = ({ step, index }: StepCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="card-glow p-6 h-full transition-all duration-300 hover:shadow-glow">
        {/* Step Number Badge */}
        <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center z-10">
          <span className="text-sm font-bold text-accent-foreground">
            {step.number}
          </span>
        </div>

        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <step.icon className="w-8 h-8 text-neon-cyan" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="mb-4 flex justify-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface-elevated rounded-full">
            <Clock className="w-3 h-3 text-neon-cyan" />
            <span className="text-xs font-medium text-neon-cyan">
              {step.duration}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-neon-cyan transition-colors">
            {step.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {step.description}
          </p>
        </div>

        {/* Details */}
        <div className="mt-6 space-y-2">
          {step.details.map((detail, detailIndex) => (
            <div
              key={detailIndex}
              className="flex items-center justify-center space-x-2"
            >
              <div className="w-1 h-1 bg-neon-cyan rounded-full flex-shrink-0"></div>
              <span className="text-xs text-muted-foreground text-center">
                {detail}
              </span>
            </div>
          ))}
        </div>

        {/* Connecting Arrow */}
        {index < 4 && (
          <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
            <div className="w-12 h-px bg-gradient-to-r from-neon-cyan to-neon-blue"></div>
            <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-neon-cyan" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const steps: ProcessStep[] = [
    {
      number: "01",
      icon: Calendar,
      title: "Book Consultation",
      description:
        "Schedule a free consultation call with our elevator experts to discuss your needs",
      duration: "Same Day",
      details: [
        "Free consultation",
        "Requirement analysis",
        "Budget discussion",
      ],
    },
    {
      number: "02",
      icon: Search,
      title: "Site Survey",
      description:
        "Our technical team visits your site for detailed assessment and measurements",
      duration: "24-48 Hours",
      details: [
        "Detailed measurements",
        "Structural assessment",
        "Customization options",
      ],
    },
    {
      number: "03",
      icon: Pencil,
      title: "Design & Planning",
      description:
        "Custom design and engineering solutions tailored to your requirements",
      duration: "3-5 Days",
      details: ["3D visualization", "Technical drawings", "Material selection"],
    },
    {
      number: "04",
      icon: Wrench,
      title: "Professional Installation",
      description:
        "Expert installation by certified technicians with minimal disruption",
      duration: "1-2 Weeks",
      details: ["Minimal disruption", "Safety protocols", "Quality checks"],
    },
    {
      number: "05",
      icon: CheckCircle,
      title: "Handover & Support",
      description:
        "Complete handover with IoT app setup, training, and ongoing support",
      duration: "1 Day",
      details: ["App configuration", "User training", "Warranty activation"],
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From Quote to Lift in
            <span className="text-gradient block lg:inline lg:ml-3">
              5 Simple Steps
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our streamlined process ensures quick, efficient, and hassle-free
            elevator installation with complete transparency
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="relative mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="card-glow p-8 lg:p-10 max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-left lg:text-left">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                    Ready to Get Started?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Join hundreds of satisfied customers who chose Yatra for
                    their elevator needs. Get your project started in just 24
                    hours with our expert team.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="btn-primary group">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button className="btn-outline">Schedule Consultation</Button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Why Choose Our Process?
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Free Consultation & Quote",
                    "No Hidden Costs or Surprises",
                    "24/7 Support During Installation",
                    "1-Year Warranty Included",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-neon-green rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
