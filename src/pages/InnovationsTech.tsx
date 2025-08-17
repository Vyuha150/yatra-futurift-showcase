import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  Waves,
} from "lucide-react";
import {
  PageLoadWrapper,
  AnimatedNav,
  AnimatedBackground,
} from "@/components/AnimatedComponents";

// Type definitions
interface Innovation {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  features: string[];
  image: string;
}

// Separate component for innovation cards to fix React Hooks rule
const InnovationCard = ({
  innovation,
  index,
}: {
  innovation: Innovation;
  index: number;
}) => {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={cardRef}
      className={`grid md:grid-cols-2 gap-8 items-center p-8 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-500 ${
        index % 2 === 1 ? "md:grid-flow-col-dense" : ""
      }`}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        scale: 0.9,
      }}
      animate={cardInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <motion.div
        className={`space-y-6 ${index % 2 === 1 ? "md:col-start-2" : ""}`}
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
            <innovation.icon className="w-12 h-12 text-neon-cyan" />
          </motion.div>
          <h3 className="text-2xl font-bold text-foreground">
            {innovation.title}
          </h3>
        </motion.div>
        <p className="text-muted-foreground leading-relaxed">
          {innovation.description}
        </p>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-foreground">
            Key Features:
          </h4>
          <ul className="grid grid-cols-1 gap-2">
            {innovation.features.map((feature: string, idx: number) => (
              <motion.li
                key={idx}
                className="flex items-center gap-2 text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                animate={cardInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + 0.4 + idx * 0.1,
                }}
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
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
         
        </motion.div>
      </motion.div>
      <motion.div
        className={`relative ${index % 2 === 1 ? "md:col-start-1" : ""}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={cardInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
        whileHover={{ scale: 1.05, rotate: 1 }}
      >
        <div className="relative overflow-hidden rounded-2xl aspect-square">
          <img
            src={innovation.image}
            alt={innovation.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 mix-blend-overlay" />
          <motion.div
            className="absolute top-4 right-4 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-xl flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <innovation.icon className="w-6 h-6 text-neon-cyan" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const InnovationsTech = () => {
  const innovations = [
    {
      id: "smart-elevators",
      title: "Smart Elevators (AI + IoT)",
      icon: Brain,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop&auto=format&q=80",
      description:
        "At Yatra, we are reshaping the future of vertical mobility through smart elevators  propelled by Artificial Intelligent and IoT. Yatra elevators offer more advanced and elevating technological functionality where the Intelligent System goes beyond traditional functionality by learning passenger adaptability, optimizing data through real-time data Analysis, predicting & performing Systematic approach enabling voice prediction System. Every consultation is featured for comfort, hygiene, and user-friendly experience with AI–driven algorithms and IoT–enabled connectivity.",
      features: [
        "AI-driven algorithms",
        "IoT connectivity",
        "Real-time data analysis",
        "Voice prediction systems",
        "Passenger behavior learning",
      ],
    },
    {
      id: "energy-efficiency",
      title: "Energy Efficiency & Regenerative Drives",
      icon: Zap,
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=600&fit=crop&auto=format&q=80",
      description:
        "At Yatra Elevators, energy is not just a source, it is the most crucial thing for every home. This not only talks about electricity and power but it is standard for building infrastructure. By integrating LED power, specifically engineered for heavy-duty commercial use, these elevators cope with substantial electrical bills  and energy, and meticulously prolonged operation, significant for hotels. Created  with protected cabins, maximum capability motors, moreover tailor made interiors, our service elevators enable magnanimous vertical transport of goods without compromising safety or adaptability.",
      features: [
        "LED integration",
        "Regenerative drives",
        "Energy optimization",
        "Reduced electrical consumption",
        "Sustainable operations",
      ],
    },
    {
      id: "noise-control",
      title: "Noise & Vibration Control",
      icon: Volume,
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=600&fit=crop&auto=format&q=80",
      description:
        "At Yatra Elevators, Yatra's Passenger Elevators are comprehensively designed to serve serene, calm and most significant vertical mobility in diverse architectural environments to provide smooth, safe, and energy-effective vertical mobility for residential and commercial buildings. Established with user eye-catching design, stylistic appeal, appearance standards and we envisioned the  long term journey that carry in mind, our elevators integrate sophisticated technology, noise-optimized and cutting - edge control systems to embark every strike By integrating motor and precision, sensors and noise detection system, control systems, monitoring devices, yatra provides exclusively vibrational sensors to detect sensors.",
      features: [
        "Noise-optimized systems",
        "Vibration sensors",
        "Acoustic control",
        "Precision monitoring",
        "Serene operation",
      ],
    },
    {
      id: "antimicrobial",
      title: "Anti-Microbial Features for Safety",
      icon: Shield,
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=600&fit=crop&auto=format&q=80",
      description:
        "At Yatra Elevators, safety is first and foremost essential to maintain hygiene, Anti- microbial Features for safety ,eradicating microbial creatures through biodegradable chemicals. Our Elevators not only provide elegant and good feel, but also deliver safety by enhancing the ability to handle any problem regarding safety issues, Anti – Microbial features. Going beyond the safety measures..  However we focus on healthy and powerful life to lead, uplift and engross many good lifestyles.",
      features: [
        "Biodegradable chemicals",
        "Hygiene protocols",
        "Safety enhancement",
        "Microbial protection",
        "Health-focused design",
      ],
    },
    {
      id: "emergency-response",
      title: "Emergency Response Systems",
      icon: AlertTriangle,
      image:
        "https://images.unsplash.com/photo-1534498842129-34d4d7e56210?w=600&h=600&fit=crop&auto=format&q=80",
      description:
        "Yatra elevators offer incredible and highly advanced response systems, though it is not just for the purpose of safety but also for security and incorporating accountability by yatra's  intelligent sensor–based effortless alerts and connectivity  for emergency Response Systems. These response Systems protect precious lives. Our Intelligent response System coordinates the control system and acts as an emergency System also equipped with water alert regulatory System.",
      features: [
        "Intelligent sensors",
        "Emergency alerts",
        "Water alert systems",
        "Response coordination",
        "Life protection systems",
      ],
    },
    {
      id: "mobile-integration",
      title: "Mobile App Integration for Users",
      icon: Smartphone,
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=600&fit=crop&auto=format&q=80",
      description:
        "At Yatra Elevators, we understand people to give convenience and comfortness by integrating Mobile app technology for users. Technology has evolved drastically in this developing era where everything has digitalized, that's why convenience mobile and charging points and energy saving Systems . Whether you are a resident or builder, everyone should have to utilize technology in day to day life professionally. This System Mobile App Integration for Users from Yatra transforms lives from underprivileged communities to Sophisticated Communities where every futuristic goal can be accomplished.",
      features: [
        "Mobile app control",
        "Digital convenience",
        "Charging points",
        "Energy saving",
        "User-friendly interface",
      ],
    },
    {
      id: "fire-resistant",
      title: "Fire-Resistant Design Options",
      icon: Flame,
      image:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&h=600&fit=crop&auto=format&q=80",
      description:
        "We at Yatra Elevators, light up many lives through our programs, deliverability, and systematic approach. These facilities are ideal for safety and moreover diminishes life threat in any place. These fire-resistant design Options aim at clearing out the fear of uncertainty and provide peace of mind through protection.",
      features: [
        "Fire-resistant materials",
        "Emergency evacuation",
        "Safety protocols",
        "Protection systems",
        "Life-saving design",
      ],
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
                Innovation & Technology
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Pioneering the future of vertical mobility with cutting-edge
                technology, AI integration, and smart solutions that redefine
                elevator experiences.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Technology Showcase */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid gap-12">
              {innovations.map((innovation, index) => (
                <InnovationCard
                  key={innovation.id}
                  innovation={innovation}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stats */}
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
                Technology at a Glance
              </h2>
              <p className="text-muted-foreground">
                Numbers that showcase our innovation leadership
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Cpu, value: "50+", label: "AI Algorithms" },
                { icon: Battery, value: "40%", label: "Energy Savings" },
                { icon: Waves, value: "90%", label: "Noise Reduction" },
                { icon: Shield, value: "99.9%", label: "Safety Reliability" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
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
                    <stat.icon className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
                  </motion.div>
                  <motion.div
                    className="text-3xl font-bold text-foreground mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-4xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                The Future is Now
              </motion.h2>
              <motion.p
                className="text-xl text-muted-foreground leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                At Yatra, we're not just building elevators – we're crafting the
                future of vertical mobility. Our commitment to innovation drives
                us to continuously push boundaries and set new standards in the
                industry.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" 
                className="btn-primary"
                 onClick={() => window.location.href = "/projects"}>
                  Explore Our Solutions
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageLoadWrapper>
  );
};

export default InnovationsTech;
