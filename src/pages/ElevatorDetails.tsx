import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { 
  PageLoadWrapper,
  AnimatedNav,
  AnimatedBackground,
} from "@/components/AnimatedComponents";
import {
  Building2,
  Home,
  Hospital,
  Truck,
  Eye,
  Cog,
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const elevatorData = {
  passenger: {
    title: "Passenger Elevators",
    icon: Building2,
    image: "/passengerelevators.png",
    description: "Advanced passenger elevators for commercial and residential buildings with cutting-edge technology and safety features.",
    specifications: [
      "Load capacity: 320kg to 2500kg",
      "Speed: 0.5m/s to 2.5m/s", 
      "Floors: Up to 40 floors",
      "Door types: Manual/Automatic",
      "Control: Microprocessor based"
    ],
    features: [
      "Emergency backup power",
      "Smooth ride technology",
      "Energy efficient motors",
      "Advanced safety systems",
      "Custom cabin designs"
    ]
  },
  residential: {
    title: "Home/Residential Elevators",
    icon: Home,
    image: "/home elevators.png", 
    description: "Elegant home elevators designed for residential spaces with compact design and luxury finishes.",
    specifications: [
      "Load capacity: 200kg to 630kg",
      "Speed: 0.15m/s to 0.63m/s",
      "Floors: Up to 6 floors", 
      "Shaft size: Minimal space required",
      "Power: Single phase available"
    ],
    features: [
      "Compact design",
      "Luxury finishes",
      "Quiet operation",
      "Safety sensors",
      "Battery backup"
    ]
  },
  hospital: {
    title: "Hospital/Bed Elevators",
    icon: Hospital,
    image: "/hospital elevators.png",
    description: "Specialized hospital elevators designed for medical facilities with hygiene and patient safety priorities.",
    specifications: [
      "Load capacity: 1000kg to 2500kg",
      "Speed: 0.5m/s to 1.6m/s",
      "Bed stretcher compatible",
      "Anti-bacterial surfaces",
      "Emergency medical features"
    ],
    features: [
      "Stretcher compatibility",
      "Anti-bacterial coating",
      "Emergency communication",
      "Smooth patient transport",
      "Medical equipment power"
    ]
  },
  freight: {
    title: "Freight/Service Elevators", 
    icon: Truck,
    image: "/FreightServices Elevators.png",
    description: "Heavy-duty freight elevators for industrial and commercial applications with maximum load capacity.",
    specifications: [
      "Load capacity: 500kg to 5000kg",
      "Speed: 0.25m/s to 1.0m/s",
      "Heavy duty construction",
      "Wide door openings",
      "Industrial grade motors"
    ],
    features: [
      "Heavy duty construction",
      "Wide door access",
      "Industrial grade",
      "Cargo protection",
      "High durability"
    ]
  },
  capsule: {
    title: "Capsule Elevators (Panoramic)",
    icon: Eye,
    image: "/capsule relevators.png",
    description: "Panoramic glass elevators offering 360-degree views with architectural elegance.",
    specifications: [
      "Load capacity: 320kg to 1000kg",
      "Speed: 0.5m/s to 1.6m/s",
      "360-degree glass design",
      "Weather resistant",
      "Scenic installations"
    ],
    features: [
      "360-degree views",
      "Weather protection",
      "Scenic design",
      "Architectural beauty",
      "LED lighting"
    ]
  },
  mrl: {
    title: "Machine-Room Less (MRL) Elevators",
    icon: Cog,
    image: "/Machine-Room Less(MRL) elevators.png",
    description: "Space-saving MRL elevators with advanced technology requiring no separate machine room.",
    specifications: [
      "Load capacity: 320kg to 1600kg",
      "Speed: 0.5m/s to 1.6m/s",
      "No machine room required",
      "Compact shaft design",
      "Energy efficient"
    ],
    features: [
      "Space saving design",
      "No machine room",
      "Energy efficient",
      "Easy maintenance",
      "Compact installation"
    ]
  }
};

const ElevatorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    floors: "",
    capacity: "",
    usage: "",
    timeline: "",
    budget: "",
    requirements: "",
    features: [] as string[]
  });

  const elevator = elevatorData[id as keyof typeof elevatorData];

  if (!elevator) {
    return <div>Elevator type not found</div>;
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "Our team will contact you within 24 hours for consultation.",
    });
    console.log("Form submitted:", formData);
  };

  return (
    <PageLoadWrapper>
      <div className="min-h-screen bg-background">
        <CustomCursor />
        <AnimatedBackground />
        <AnimatedNav>
          <Navigation />
        </AnimatedNav>

        {/* Header */}
        <section className="pt-24 pb-8 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button
                variant="ghost"
                onClick={() => navigate("/projects")}
                className="mb-6 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 rounded-xl flex items-center justify-center">
                  <elevator.icon className="w-8 h-8 text-neon-cyan" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
                    {elevator.title}
                  </h1>
                  <p className="text-muted-foreground mt-2">{elevator.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Left: Specifications & Features */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-neon-green" />
                    Specifications
                  </h2>
                  <div className="space-y-4">
                    {elevator.specifications.map((spec, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg bg-surface/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{spec}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-neon-green" />
                    Key Features
                  </h2>
                  <div className="space-y-4">
                    {elevator.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg bg-surface/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                <motion.div
                  className="relative overflow-hidden rounded-xl aspect-[4/3]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <img
                    src={elevator.image}
                    alt={elevator.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </motion.div>
              </motion.div>

              {/* Right: Quote Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="p-8 sticky top-24">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Get a Quote
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location *</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="floors">Number of Floors *</Label>
                        <Select onValueChange={(value) => handleInputChange("floors", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select floors" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2-5">2-5 Floors</SelectItem>
                            <SelectItem value="6-10">6-10 Floors</SelectItem>
                            <SelectItem value="11-20">11-20 Floors</SelectItem>
                            <SelectItem value="20+">20+ Floors</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="capacity">Load Capacity *</Label>
                        <Select onValueChange={(value) => handleInputChange("capacity", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select capacity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="320kg">320kg (4-5 persons)</SelectItem>
                            <SelectItem value="630kg">630kg (8-10 persons)</SelectItem>
                            <SelectItem value="1000kg">1000kg (13-15 persons)</SelectItem>
                            <SelectItem value="1600kg">1600kg (21-25 persons)</SelectItem>
                            <SelectItem value="custom">Custom Capacity</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="usage">Primary Usage</Label>
                        <Select onValueChange={(value) => handleInputChange("usage", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select usage" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="industrial">Industrial</SelectItem>
                            <SelectItem value="medical">Medical/Hospital</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Project Timeline</Label>
                        <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate (1-2 months)</SelectItem>
                            <SelectItem value="short">Short term (3-6 months)</SelectItem>
                            <SelectItem value="medium">Medium term (6-12 months)</SelectItem>
                            <SelectItem value="long">Long term (1+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5-10L">₹5-10 Lakhs</SelectItem>
                          <SelectItem value="10-20L">₹10-20 Lakhs</SelectItem>
                          <SelectItem value="20-50L">₹20-50 Lakhs</SelectItem>
                          <SelectItem value="50L+">₹50+ Lakhs</SelectItem>
                          <SelectItem value="discuss">Prefer to Discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label>Additional Features</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {elevator.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <Checkbox
                              id={feature}
                              checked={formData.features.includes(feature)}
                              onCheckedChange={() => handleFeatureToggle(feature)}
                            />
                            <Label htmlFor={feature} className="text-sm">
                              {feature}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requirements">Special Requirements</Label>
                      <Textarea
                        id="requirements"
                        placeholder="Any specific requirements or questions..."
                        value={formData.requirements}
                        onChange={(e) => handleInputChange("requirements", e.target.value)}
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="btn-primary w-full">
                      Submit Request
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>+91 9091844844</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>info@yatraelevators.com</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageLoadWrapper>
  );
};

export default ElevatorDetails;