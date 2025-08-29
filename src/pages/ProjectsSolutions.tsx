import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { useInView } from "react-intersection-observer";
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
  Shield,
} from "lucide-react";
import {
  PageLoadWrapper,
  AnimatedNav,
  AnimatedBackground,
} from "@/components/AnimatedComponents";

// Type definitions
interface ElevatorType {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  features: string[];
  image: string;
  route: string;
}

interface Solution {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  image: string;
}

// Separate component for elevator cards to fix React Hooks rule
const ElevatorCard = ({
  elevator,
  index,
}: {
  elevator: ElevatorType;
  index: number;
}) => {
  const navigate = useNavigate();
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleExploreDetails = () => {
    navigate(elevator.route); // 👈 instead of `/elevators/${elevator.id}`
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface-elevated/80 to-surface/60 backdrop-blur-sm border border-border/50 hover:border-neon-cyan/30 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content Container */}
      <div className="relative z-10 p-8 lg:p-10">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left: Icon and Title */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              className="flex flex-col items-center lg:items-start space-y-4"
              initial={{ opacity: 0, x: -30 }}
              animate={cardInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <elevator.icon className="w-10 h-10 text-neon-cyan" />
              </motion.div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                  {elevator.title}
                </h3>
                <div className="mt-2 h-1 w-16 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full mx-auto lg:mx-0" />
              </div>
            </motion.div>

            {/* CTA Button */}

            {/* Hover Image */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
              className="hidden lg:block mt-12 relative overflow-hidden rounded-xl aspect-[4/3] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
            >
              <img
                src={elevator.image}
                alt={elevator.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-xs text-muted-foreground font-medium">
                  {elevator.title} - Professional Installation
                </p>
              </div>
            </motion.div>
            {/* CTA Button BELOW Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={cardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 1 }}
              className="hidden lg:block mt-4"
            >
              <Button
                className="btn-primary group w-full"
                onClick={handleExploreDetails}
              >
                <span>Explore Details</span>
                <Eye className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Right: Description and Features */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={cardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            >
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                {elevator.description}
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={cardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-green rounded-full" />
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {elevator.features.map((feature: string, idx: number) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-surface/50 hover:bg-surface/80 transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={cardInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + 0.5 + idx * 0.1,
                    }}
                    whileHover={{ scale: 1.02, x: 4 }}
                  >
                    <div className="w-2 h-2 bg-neon-cyan rounded-full flex-shrink-0" />
                    <span className="text-sm text-muted-foreground font-medium">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={cardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
              className="lg:hidden pt-4"
            >
              <Button
                className="btn-outline group w-full"
                onClick={handleExploreDetails}
              >
                <span>Learn More</span>
                <Eye className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-neon-cyan/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-neon-blue/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

// Separate component for solution cards to fix React Hooks rule
const SolutionCard = ({
  solution,
  index,
}: {
  solution: Solution;
  index: number;
}) => {
  const [solutionRef, solutionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (solution.id === "installation" || solution.id === "custom") {
      navigate("/clientForm");
    } else if (
      solution.id === "modernization" ||
      solution.id === "maintenance"
    ) {
      navigate("/service-request");
    } else {
      navigate("/");
    }
  };

  return (
    <motion.div
      ref={solutionRef}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-elevated to-surface border border-border/50 hover:border-neon-cyan/30 transition-all duration-500"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={solutionInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        {/* Header */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={solutionInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: index * 0.15 + 0.2,
          }}
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.2 }}
          >
            <solution.icon className="w-8 h-8 text-neon-cyan" />
          </motion.div>
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-neon-cyan transition-colors duration-300">
              {solution.title}
            </h3>
            <div className="mt-1 h-0.5 w-12 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="flex-1 mb-6"
          initial={{ opacity: 0 }}
          animate={solutionInView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: index * 0.15 + 0.4,
          }}
        >
          <p className="text-muted-foreground leading-relaxed text-sm lg:text-base line-clamp-6 group-hover:line-clamp-none transition-all duration-300">
            {solution.description}
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={solutionInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: index * 0.15 + 0.6,
          }}
        >
          <Button
            className="btn-outline group w-full"
            onClick={handleGetStarted}
          >
            <span>Get Started</span>
            <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              →
            </motion.div>
          </Button>
        </motion.div>

        {/* Hover Image */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={solutionInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.8 }}
          className="mt-6 relative overflow-hidden rounded-xl aspect-[4/3] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
        >
          <img
            src={solution.image}
            alt={solution.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-xs text-muted-foreground font-medium">
              {solution.title} - Expert Service
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-neon-cyan/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const ProjectsSolutions = () => {
  const elevatorTypes = [
    {
      id: "passenger",
      title: "Passenger Elevators",
      icon: Building2,
      image: "/src/images/Yatra website_Passenger elevators (size - 400-300) .png",
      route: "/passenger-elevators",
      description:
        "Yatra's Passenger Elevators are contemplatively designed to provide serene, calm and most significant vertical mobility in a diverse architectural environment to deliver smooth, safe, and energy efficient vertical mobility for residential and commercial buildings alike. Established with user attractive design, stylistic appeal, appearance standards and we envisioned the  long term journey carried in our minds. Our elevators integrate advanced technology, noise-optimized and cutting - edge control systems to venture every strike. From streamlined interiors to customizable and user -friendly cabin finishes, yatra aims at dynamic design  options , advanced architecture and exceptional service to people, our elevators incorporate safety protocols, innovations ,hygiene scintillating Interiors spacious to drive stellar lifestyle.",
      features: [
        "Advanced technology integration",
        "Noise-optimized systems",
        "Customizable cabin finishes",
        "Safety protocols",
        "Hygiene standards",
        "Streamlined interiors",
      ],
    },
    {
      id: "residential",
      title: "Home/Residential Elevators",
      icon: Home,
      image: "/src/images/Yatra website_Home elevators  (size - 400-300) .png",
      route: "/home-elevators",
      description:
        "Yatra's Elevators promote jubilant, elegant and enhancing incredible environments into your residence. These are fabricated with cutting-edge technology and modern stylish appearance versatility, these elevators smoothly get adjusted  into villas, duplexes and multi story residences. Yatra's offerings are capacity monitoring, high tech mobility solutions, backup system, and pathogen resistance. With customizable finishes, compact and dynamic shafts, and dazzling smooth ride quality, our residential elevators ensure the mobility and momentum for all age groups and optimisation to your residence. For the compact and flexibility that simplifies your day, the luxury that intuitively accelerates your lifestyle, or the accessibility that opens up  your entire home, Yatra's Home Elevators bring a new stylish version for your residence.",
      features: [
        "Capacity monitoring",
        "High tech mobility solutions",
        "Backup system",
        "Pathogen resistance",
        "Compact design",
        "Cutting-edge technology",
      ],
    },
    {
      id: "hospital",
      title: "Hospital/Bed Elevators",
      icon: Hospital,
      image: "/src/images/Yatra website_Hospital elevators(size - 400-300).png",
      route: "/hospital-elevators",
      description:
        "Yatra's Hospital/Bed Elevators Instituted with quiet, controlled acoustic environments, structural integrity, and advanced medical equipment and accommodations that prioritizes patient convenience and safety and security. Designed  with meticulous determination to patient needs, these elevators provide whisper-quiet operation and exceptional stability rather than insecure mobility, enabling that every journey is as cozy and assuring as possible for patients and their families. Advanced features like Emergency power bank, safety practices, healthy lifestyle and physically untouched control systems, are more likely to focus on hygiene and cleanliness and essentially critical operations will be enhanced or handled with more care and concern. Most Ideal for clinics, hospitals, infrastructure can be customisable for users, where yatra's Hospitals and Bed elevators are called by everyone as exceptional.",
      features: [
        "Whisper-quiet operation",
        "Emergency power bank",
        "Touchless control systems",
        "Medical equipment compatibility",
        "Enhanced hygiene protocols",
        "Customisable for users",
      ],
    },

    {
      id: "freight",
      title: "Freight and services",
      icon: Eye,
      image: "/src/images/Yatra website_Freight elevators (size - 400-300).png",
      route: "/freight-elevators",
      description:
        "Yatra’s Freight and Service Elevators are designed for maximum potential, solidity and firmness, and flawless performance in rigorous environments. Specifically engineered for heavy-duty commercial use, these elevators cope with substantial loads, bulky advanced equipment, and meticulously prolonged operation , significant for motels, warehouses, hotels, hospitals, astonishing  balcony residences, shopping centres, and professional architectures buildings where performance and reliability are essential.. Created  with fortified cabins, maximum capability motors, moreover customizable interiors, our service elevators enable magnanimous vertical transport of goods without compromising safety or versatility with  safety and secured functions, drives that are energy effective, and flawless technology, Yatra’s service elevators are not just only adaptable, reliable, they are founded to speed up operational productivity with spotted and long-term proactiveness.",
      features: [
        "Designed for maximum potential",
        "Advanced safety operations",
        "Energy effective capability",
        "enable magnanimous vertical transport ",
        "Fortified cabins",
        "Advanced equipment",
      ],
    },

    {
      id: "capsule",
      title: "Capsule Elevators (Panoramic)",
      icon: Eye,
      image: "/src/images/Yatra website_Capsule elevators(size - 400-300) .png",
      route: "/glass-elevators",
      description:
        "Yatra's Capsule Elevators are a meritorious blend of scintillating and elegance, constructed to elevate both momentum and across all architectural beauty. Significant for advanced residential high-towers, premiere hotels, malls, and commercial areas, these comprehensive elevators put forward a 360-degree angle bird-eye view, accelerating the visual experience for passengers  and people while appreciating the architectural beauty. Constructed exactly with using advanced safety operations and mechanisms and capability which is energy effective.",
      features: [
        "360-degree panoramic views",
        "Advanced safety operations",
        "Energy effective capability",
        "Architectural integration",
        "Visual experience enhancement",
        "Advanced equipment",
      ],
    },
    {
      id: "mrl",
      title: "MRL Elevators",
      icon: Eye,
      image: "/src/images/Yatra website_MRL elevators(size - 400-300).png",
      route: "/mrl",
      description:
        "Yatra’s Machine-Room Less (MRL) Elevators are developed with advanced, sophisticated infrastructure where the space consumption is minimized. Designed in such a way that without the necessity of a traditional mechanical room, these elevators provide strong installation, reduced consumption, and enhanced architectural flexibility, facilitating them significantly as advanced elevators especially authorised in rendering solutions for problems with unpredictable scenarios. MRL elevators are exceptionally advanced, their durability ,versatility , superior striking interiors, facilitating control systems, safety guidelines, providing an advanced technology, mobility lift and good environment. Yatra’s Elevators are profoundly designed perfectly for the sophisticated environment.",
      features: [
        "Sophisticated infrastructure ",
        "Strong installation",
        "Reduced consumption",
        "Enhanced architectural flexibility",
        "Facilitating control systems",
        "Advanced technology",
      ],
    },
    {
      id: "hydraulic",
      title: "Hydraulic Elevators",
      icon: Eye,
      image: "/src/images/Yatra website_Hydraulic elevators(size - 400-300).png",
      route: "/hydraulic",
      description:
        "Yatra’s Hydraulic Elevators are developed for positioning them as the perfect choice of residence with uncluttered and expansive optimisation. These are engineered with perfect energy optimisation and compact home space area. Safety and Impenetrable security , tamper-proof protection, uncompromisable protection which is absolutely Suitable for residential complexes, building, and business properties. Yatra’s hydraulic solutions have high versatility with convenient vertical mobility that stands as a testament  to the absolute legacy of ICONIC.",
      features: [
        "Developed for positioning",
        "Uncluttered and expansive optimisation",
        "Safety and Impenetrable security ",
        "Tamper-proof protection",
        "Uncompromisable protection ",
        "Advanced technology",
      ],
    },
    {
      id: "commercial",
      title: "Commercial Escalators",
      icon: Eye,
      image: "/src/images/Yatra website_Commer escala(size - 400-300).png",
      route: "/commercial",
      description:
        "Yatra’s Commercial Escalators designed for people and users where those deal with high Standards visuals and uncompromisable Security Systems. Developed  for  malls, office complexes, convention centres, and public spaces, our elevators and escalators. With facilities like durability and lift mobility, Advanced Sensors ,and Safety Features, Optional Customizations. Customizable  finishes, firm monitor Systems and MRL Escalators Elevates the sophisticated lifestyle . Backend Iconic’s Legacy, these escalators promise long-term value and elevated vertical movement for every commercial space.",

      features: [
        "High Standards visuals ",
        "Uncompromisable Security Systems",
        "Safety and Impenetrable security ",
        "Durability and lift mobility",
        "Advanced Sensors ",
        "Customizable  finishes",
      ],
    },
    {
      id: "public-transport-escalators",
      title: "Public Transport Escalators",
      icon: Zap,
      image: "/src/images/Yatra website_Public transport escalators 400-300.png",
      route: "/public-transport-escalators",
      description:
        "yatra’s public transport Escalators are reliable, moreover, It has high energy efficient resources to strive for innovation, with customizable speed ranges (up to 2.5 m/s), intelligent door operation, and superior leveling accuracy developed  for malls, office complexes, convention centres, and public spaces. Our elevators and escalators are equipped with facilities like durability,  lift mobility, Advanced Sensors, Safety Features and Optional Customizations. The walkways and transport system are cozy.",
      features: [
        "Heavy passenger load handling",
        "Energy-efficient drives",
        "Anti-slip steps and safety features",
        "Low-noise operation",
        "Durable construction",
        "Continuous duty design",
      ],
    },
    {
      id: "moving walk way escalators",
      title: "Moving Walk Way Escalators",
      icon: Zap,
      image: "/src/images/Yatra website_Moving walkways escalators 400-300.png",
      route: "/moving-walkways-escalators",
      description:
        "Yatra’s Travelators, which are also known as moving walkways, are created to provide perfect horizontal transportation across large spaces such as airports, malls, transit hubs, and exhibition centers. Designed with user friendly and safety in mind, these systems offer smooth and energy-efficient movement for pedestrians, luggage carts, and trolleys, reducing walking stress and improving traffic flow. With advanced safety features, surfaces that are anti-slip and tailored speed controls. Yatra’s moving walkways conglomerate strength, sleek aesthetics, and cutting-edge technology to deliver a superior travel experience. As part of our promise to innovation and accessibility, our travelators ensure that every step forward is efficient, comfortable and futuristic.",
      features: [
        "Transportation across large spaces ",
        "Designed with user friendly ",
        "Conglomerate strength",
        "Cutting-edge technology ",
        "Sleek aesthetics",
        "Comfortable and futuristic",
      ],
    },
  ];

  const solutions = [
    {
      id: "installation",
      title: "New Installations",
      icon: Settings,
      image: "/solution1.png",
      description:
        "Yatra's New Installations offers end to end installation solutions, durability with maximum safety guidelines along with configured security protocols. From Advisory Session to end enlisting, we make sure an effortless process combined with client requirements, constructional design requirements moreover safety and security norms. Although architectural apartments have immense residential necessity, Enabling new innovations in order to serve high standard lifestyle, Yatra provides vertical mobility systems that are most significant, with jubilant space and designed to last so that redefining and reshaping the momentum of life with modernisation, stability, benevolent and Substantial sustainability as its main agenda.",
    },
    {
      id: "modernization",
      title: "Modernization & Upgrades",
      icon: Zap,
      image: "/solution2.png",
      description:
        "At Yatra, Elevators turn out to be sophisticated with advanced technology that are decommissioned with technical progress . Integrating new features, always intended to be  updated, using smart  and cool materials for elevating cutting-edge robust intrications. With minimal interruption and high rate of influence, we transform legacy systems into high-performance, future-ready mobility solutions. Enabling and ensuring wide changes in people's lifestyle, yatra's aims for a  futuristic infrastructural bundle of opportunities venturing into the segment of vertical mobility.",
    },
    {
      id: "maintenance",
      title: "Maintenance & AMC Services",
      icon: Wrench,
      image: "/solution3.png",
      description:
        "Yatra's Services doesn't serve a good advanced features, but it's only the initial stage of advancements. Our elevator Care & Protection Plan  Maintenance and Annual Maintenance Contract (AMC) services are engineered to maintain that your elevators and escalators function uninterruptedly, safely, and effectively bound to system controls. With a passionate and committed to excellence team of Qualified technicians, real-time sensors and monitoring systems, and proactive, planned maintenance activities, we minimize down line time and ensure to implement technical expertise so that the life of your vertical mobility solutions are smoothly taken care off. Driven AMS services offer regular preventive maintenance,24/7 technical support, Performance checks and optimisation.",
    },
    {
      id: "custom",
      title: "Customized Lift Solutions",
      icon: Users,
      image: "/solution4.png",
      description:
        "At Yatra Elevators, we acknowledge that every area has its own comprehensive and unique character and functional requirements, especially when it comes to architectural vision, structural design, and user experience. That's why we offer Tailor Made Lift Solutions configured particularly for professionals, engineers, builders and Institutions addressing solutions and sorting out many technical problems by builders. Yatra's elevators don't overlook the minute problems, they take immediate actions to eradicate them. With brilliant development expertise, intelligent automation and design flexibility, users can be given to design their own customized Lift Solutions.",
    },
  ];

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <PageLoadWrapper>
      <div className="min-h-screen bg-background">
        <CustomCursor />
        <AnimatedBackground />
        <AnimatedNav>
          <Navigation />
        </AnimatedNav>

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
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-green bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Products & Solutions
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Comprehensive elevator solutions designed to meet every vertical
                mobility need across diverse industries and applications.
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
                  <TabsTrigger value="elevators" className="text-lg">
                    Elevators
                  </TabsTrigger>
                  <TabsTrigger value="solutions" className="text-lg">
                    Solutions
                  </TabsTrigger>
                </TabsList>
              </motion.div>

              <TabsContent value="elevators" className="space-y-8">
                <div className="space-y-8">
                  {elevatorTypes.map((elevator, index) => (
                    <ElevatorCard
                      key={elevator.id}
                      elevator={elevator}
                      index={index}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="solutions" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {solutions.map((solution, index) => (
                    <SolutionCard
                      key={solution.id}
                      solution={solution}
                      index={index}
                    />
                  ))}
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
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Industries We Serve
              </h2>
              <p className="text-muted-foreground">
                Vertical mobility solutions across diverse sectors
              </p>
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
                { title: "Airports & Transport", icon: Zap },
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
                  <h3 className="text-lg font-semibold text-foreground">
                    {industry.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageLoadWrapper>
  );
};

export default ProjectsSolutions; 