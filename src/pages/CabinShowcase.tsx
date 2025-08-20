import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageLoadWrapper } from "@/components/AnimatedComponents";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Data for cabins with custom links
const cabins = [
  {
    title: "Passenger Elevator",
    img: "src/assets/Passenger Elevators.png",
    link: "/passenger-elevators",
  },
  {
    title: "Moving Walkway Escalators",
    img: "src/assets/Moving Walkways.png",
    link: "/moving-walkway-escalators"
  },
  {
    title: "Hospital Elevator",
    img: "/hospital elevators.png",
    link: "/hospital-elevators",
  },
  {
    title: "Capsule Elevator",
    img: "/cabin4.jpeg",
    link: "/glass-elevators",
  },
  {
    title: "Home Elevator",
    img: "/cabin5.jpeg",
    link: "/home-elevators",
  },
  {
    title: "Public Transport Escalators",
    img: "src/assets/Public Transport Escalators.png",
    link: "/public-transport-escalators",
  },
];

// Card Component
const CabinCard = ({
  cabin,
  index,
}: {
  cabin: (typeof cabins)[0];
  index: number;
}) => {
  const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const navigate = useNavigate();

  return (
    <motion.div
      ref={cardRef}
      className="group"
      initial={{ opacity: 0, y: 30 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.03 }}
    >
      <Card className="overflow-hidden rounded-2xl border border-border hover:shadow-lg transition-all duration-300">
        <div className="relative h-80 overflow-hidden">
          <motion.img
            src={cabin.img}
            alt={cabin.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-5 space-y-3 text-center">
          {/* Neon Cyan Blue Title */}
          <h3 className="text-lg font-bold text-[#00fff7]">{cabin.title}</h3>

          <Button
            size="sm"
            variant="outline"
            className="group-hover:bg-primary group-hover:text-white transition-all"
            onClick={() => navigate(cabin.link)} // 👈 Uses custom link now
          >
            View Details
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CabinShowcase = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <PageLoadWrapper>
      <CustomCursor />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative z-10" ref={heroRef}>
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
              Explore Our Cabins
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Cabin Grid */}
      <section className="py-16 px-6 bg-surface-glass relative z-10">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Cabin Showcase
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cabins.map((cabin, index) => (
              <CabinCard key={cabin.title} cabin={cabin} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </PageLoadWrapper>
  );
};

export default CabinShowcase;
