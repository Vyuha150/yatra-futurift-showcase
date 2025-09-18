import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageLoadWrapper } from "@/components/AnimatedComponents";


const cabins = [
  { img: "/cabin3.jpeg", title: "Passsenger Elevator" },
  { img: "/cabin5.jpeg", title: "Home Elevators" },
  { img: "/WhatsApp Image 2025-08-19 at 11.00.21 AM.jpeg", title: "Hydraulic Elevators" },
  { img: "/cabin4.jpeg", title: "Capsule Elevators" },
  { img: "/src/images/Yatra website_Hospital elevators(size - 400-300).png", title: "Hospital Elevators" },
  { img: "/src/images/Yatra website_MRL elevators(size - 400-300).png", title: "MRL Elevators" }
];




const CabinCard = ({ cabin, index }: { cabin: (typeof cabins)[0]; index: number }) => {
  const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500"
      tabIndex={0}
    >
      {/* Image */}
      <motion.img
        src={cabin.img}
        alt={cabin.title}
        className="w-full h-[350px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
      />

      {/* Hover / Focus overlay */}
      <div className="
        pointer-events-none absolute inset-0 
        bg-gradient-to-t from-black/70 via-black/20 to-transparent 
        opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 
        transition-opacity duration-300
      " />

      {/* Title at bottom (reveals on hover) */}
      <div className="
        absolute bottom-0 left-0 right-0 
        translate-y-6 opacity-0 
        group-hover:translate-y-0 group-hover:opacity-100 
        group-focus-within:translate-y-0 group-focus-within:opacity-100
        transition-all duration-300 px-4 pb-4
      ">
        <h3 className="text-white text-lg font-semibold drop-shadow">
          {cabin.title}
        </h3>
      </div>
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
