import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { PageLoadWrapper } from "@/components/AnimatedComponents";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  Users,
  Heart,
  Target,
  Lightbulb,
  Building,
  Hotel,
  Home,
  ShoppingCart,
} from "lucide-react";

// ----------------------
// Types
// ----------------------
interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

// ----------------------
// Feature Card Component
// ----------------------
const FeatureCard = ({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) => {
  const [cardRef] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={cardRef}
      className="relative z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="h-full p-6 bg-gradient-to-br from-surface/50 to-surface-elevated/50 border-border hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-glow">
        <CardContent className="space-y-4">
          <feature.icon className="w-12 h-12 text-neon-cyan" />
          <h3 className="text-xl font-semibold text-foreground">
            {feature.title}
          </h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// ----------------------
// Page Component
// ----------------------
const MovingWalkWays = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Features
  const features: Feature[] = [
    {
      icon: Heart,
      title: "Safe & Reliable",
      description:
        "Equipped with advanced braking systems, sensors, and emergency features for maximum passenger safety.",
    },
    {
      icon: Target,
      title: "Energy Efficient",
      description:
        "Designed with smart power management to reduce energy usage during low traffic hours.",
    },
    {
      icon: Lightbulb,
      title: "Modern Aesthetics",
      description:
        "Sleek designs with customizable finishes that complement malls, airports, and commercial spaces.",
    },
    {
      icon: Users,
      title: "High Capacity",
      description:
        "Engineered to handle heavy foot traffic with smooth and continuous movement.",
    },
  ];

  return (
    <PageLoadWrapper>
      <CustomCursor />
      <Navigation />

      {/* ----------------------
          Hero Section
      ---------------------- */}
      <section ref={heroRef} className="relative z-10 px-6 pt-24 pb-16">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            className="mb-6 text-5xl font-bold text-transparent md:text-7xl bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-green bg-clip-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
          >
            Moving Walkways & Escalators
          </motion.h1>

          <motion.p
            className="mb-8 text-xl leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ensuring seamless movement of people in airports, malls, and
            commercial hubs with world-class escalators and walkways.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="btn-primary"
              onClick={() => (window.location.href = "/contact")}
            >
              Enquire Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ----------------------
          About Section
      ---------------------- */}
      <section className="px-6 py-16 bg-surface-glass">
        <div className="container mx-auto grid items-center gap-10 md:grid-cols-2">
          <motion.img
            src="/src/images/Yatra website400x600_Moving walk ways escalators.png"
            alt="Home Elevator"
            className="mx-auto rounded-2xl shadow-lg border border-gray-700 
             w-full max-w-[680px] sm:max-w-[720px] md:max-w-[750px] 
             h-[420px] object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          <div>
            <h2 className="mb-4 text-4xl font-bold">
              Effortless Mobility Solutions
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Yatra’s Travelators, which are also known as moving walkways, are created to provide perfect horizontal transportation across large spaces such as airports, malls, transit hubs, and exhibition centers. 
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Transportation across large spaces </li>
              <li>✔ Designed with user friendly</li>
              <li>✔ Comfortable and futuristic</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ----------------------
          Features Section
      ---------------------- */}
      <section className="bg-white/5 px-6 py-16">
        <div className="container mx-auto">
          <motion.div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Why Choose Our Solutions
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              From heavy-duty reliability to modern designs, our escalators and
              walkways are built for today’s urban spaces.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------
          Use Cases Section
      ---------------------- */}
      <section className="px-6 py-16 bg-surface-glass">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Where Are They Used?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Trusted by leading businesses and public spaces for efficient
              crowd movement.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6 text-center space-y-3">
                <ShoppingCart className="mx-auto h-10 w-10 text-neon-cyan" />
                <h3 className="font-semibold">Shopping Malls</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-3">
                <Building className="mx-auto h-10 w-10 text-neon-cyan" />
                <h3 className="font-semibold">Airports & Stations</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-3">
                <Hotel className="mx-auto h-10 w-10 text-neon-cyan" />
                <h3 className="font-semibold">Hotels & Convention Centers</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-3">
                <Home className="mx-auto h-10 w-10 text-neon-cyan" />
                <h3 className="font-semibold">Public & Corporate Buildings</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ----------------------
          Final Call To Action
      ---------------------- */}
      <section className="py-20 text-center bg-surface">
        <h2 className="mb-6 text-4xl font-bold text-white">
          Ready to Move with Ease?
        </h2>
        <Button
          size="lg"
          className="bg-neon-cyan text-black hover:bg-neon-blue transition-all duration-300"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us Today
        </Button>
      </section>

      <Footer />
    </PageLoadWrapper>
  );
};

export default MovingWalkWays;
