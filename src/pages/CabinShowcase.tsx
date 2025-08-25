import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageLoadWrapper } from "@/components/AnimatedComponents";

// Showcase only 5 cabins
const cabins = [
  { img: "public/cabin3.jpeg" },
  { img: "/cabin5.jpeg" },
  { img: "/WhatsApp Image 2025-08-19 at 11.00.21 AM.jpeg" },
  { img: "/cabin4.jpeg" },
  { img: "/WhatsApp Image 2025-08-19 at 10.59.55 AM.jpeg" },
  { img: "src/assets/Residential Elevators.png"}
];

// Card Component (image only, pro look)
const CabinCard = ({ cabin, index }: { cabin: (typeof cabins)[0]; index: number }) => {
  const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.05 }}
      className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <motion.img
        src={cabin.img}
        alt="Cabin Design"
        className="w-full h-[350px] object-cover rounded-2xl hover:scale-110 transition-transform duration-700"
      />
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
            <p className="text-lg text-muted-foreground">
              A selection of our premium cabin designs, blending style with innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cabin Grid */}
      <section className="py-16 px-6 bg-surface-glass relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cabins.map((cabin, index) => (
              <CabinCard key={index} cabin={cabin} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </PageLoadWrapper>
  );
};

export default CabinShowcase;
