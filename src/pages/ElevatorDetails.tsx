import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import {
  PageLoadWrapper,
  AnimatedNav,
  AnimatedBackground,
} from "../components/AnimatedComponents";

const elevatorData = {
  passenger: {
    title: "Passenger Elevators",
    icon: Building2,
    image: "/passengerelevators.png",
    description:
      "Advanced passenger elevators for commercial and residential buildings with cutting-edge technology and safety features.",
    specifications: [
      "Load capacity: 320kg to 2500kg",
      "Speed: 0.5m/s to 2.5m/s",
      "Floors: Up to 40 floors",
      "Door types: Manual/Automatic",
      "Control: Microprocessor based",
    ],
    features: [
      "Emergency backup power",
      "Smooth ride technology",
      "Energy efficient motors",
      "Advanced safety systems",
      "Custom cabin designs",
    ],
  },
  residential: {
    title: "Home/Residential Elevators",
    icon: Home,
    image: "/home elevators.png",
    description:
      "Elegant home elevators designed for residential spaces with compact design and luxury finishes.",
    specifications: [
      "Load capacity: 200kg to 630kg",
      "Speed: 0.15m/s to 0.63m/s",
      "Floors: Up to 6 floors",
      "Shaft size: Minimal space required",
      "Power: Single phase available",
    ],
    features: [
      "Compact design",
      "Luxury finishes",
      "Quiet operation",
      "Safety sensors",
      "Battery backup",
    ],
  },
  hospital: {
    title: "Hospital/Bed Elevators",
    icon: Hospital,
    image: "/hospital elevators.png",
    description:
      "Specialized hospital elevators designed for medical facilities with hygiene and patient safety priorities.",
    specifications: [
      "Load capacity: 1000kg to 2500kg",
      "Speed: 0.5m/s to 1.6m/s",
      "Bed stretcher compatible",
      "Anti-bacterial surfaces",
      "Emergency medical features",
    ],
    features: [
      "Stretcher compatibility",
      "Anti-bacterial coating",
      "Emergency communication",
      "Smooth patient transport",
      "Medical equipment power",
    ],
  },
  freight: {
    title: "Freight/Service Elevators",
    icon: Truck,
    image: "/FreightServices Elevators.png",
    description:
      "Heavy-duty freight elevators for industrial and commercial applications with maximum load capacity.",
    specifications: [
      "Load capacity: 500kg to 5000kg",
      "Speed: 0.25m/s to 1.0m/s",
      "Heavy duty construction",
      "Wide door openings",
      "Industrial grade motors",
    ],
    features: [
      "Heavy duty construction",
      "Wide door access",
      "Industrial grade",
      "Cargo protection",
      "High durability",
    ],
  },
  capsule: {
    title: "Capsule Elevators (Panoramic)",
    icon: Eye,
    image: "/capsule relevators.png",
    description:
      "Panoramic glass elevators offering 360-degree views with architectural elegance.",
    specifications: [
      "Load capacity: 320kg to 1000kg",
      "Speed: 0.5m/s to 1.6m/s",
      "360-degree glass design",
      "Weather resistant",
      "Scenic installations",
    ],
    features: [
      "360-degree views",
      "Weather protection",
      "Scenic design",
      "Architectural beauty",
      "LED lighting",
    ],
  },
  mrl: {
    title: "Machine-Room Less (MRL) Elevators",
    icon: Cog,
    image: "/Machine-Room Less(MRL) elevators.png",
    description:
      "Space-saving MRL elevators with advanced technology requiring no separate machine room.",
    specifications: [
      "Load capacity: 320kg to 1600kg",
      "Speed: 0.5m/s to 1.6m/s",
      "No machine room required",
      "Compact shaft design",
      "Energy efficient",
    ],
    features: [
      "Space saving design",
      "No machine room",
      "Energy efficient",
      "Easy maintenance",
      "Compact installation",
    ],
  },
};

const ElevatorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const elevator = elevatorData[id as keyof typeof elevatorData];

  if (!elevator) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">Elevator Not Found</h1>
          <Button onClick={() => navigate("/projects")}>
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <PageLoadWrapper>
      <div className="min-h-screen bg-background text-foreground">
        <CustomCursor />
        <AnimatedBackground />
        <AnimatedNav>
          <Navigation />
        </AnimatedNav>

        <section className="pt-28 pb-12 px-6 bg-muted/10">
          <div className="container mx-auto max-w-6xl">
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

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100">
                  <elevator.icon className="w-10 h-10 text-cyan-500" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-gradient">
                    {elevator.title}
                  </h1>
                  <p className="text-muted-foreground mt-3 max-w-2xl">
                    {elevator.description}
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={elevator.image}
                  alt={elevator.title}
                  className="w-full max-h-[400px] object-cover rounded-xl"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 md:p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Specifications
                </h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {elevator.specifications.map((spec, idx) => (
                    <li key={idx}>{spec}</li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 md:p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Key Features
                </h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {elevator.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 md:p-8 shadow-md space-y-6 sticky top-24">
                <h2 className="text-2xl font-bold">
                  Interested in this Elevator?
                </h2>
                <p className="text-muted-foreground">
                  Contact us today to discuss pricing, customization, and
                  availability.
                </p>
                <Button
                  onClick={() => navigate("/quotationform")}
                  className="w-full"
                >
                  Request a Quote
                </Button>

                <div className="pt-6 border-t border-border space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +91 9091844844
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    info@yatraelevators.com
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageLoadWrapper>
  );
};

export default ElevatorDetails;
