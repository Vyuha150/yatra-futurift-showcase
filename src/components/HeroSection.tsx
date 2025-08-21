import { ArrowRight, Calendar, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  SplitTextAnimation,
  SlideInAnimation,
  FloatingElement,
  GlowButton,
} from "@/components/AnimatedComponents";
import ImageStack from "./ImageStack";


const searchIndex: { path: string; aliases: string[] }[] = [
  { path: "/", aliases: ["index", "yatra", "yatra futurift"] }, 
  { path: "/about", aliases: ["about", "about us", "company"] },
  { path: "/career", aliases: ["career", "careers", "jobs"] },
  { path: "/opportunities", aliases: ["opportunities", "openings", "vacancies"] },
  { path: "/projects", aliases: ["projects", "products", "solutions", "products & solutions"] },
  { path: "/innovations", aliases: ["innovations", "tech", "technology", "r&d"] },
  { path: "/support", aliases: ["support", "support & services", "services", "service"] },
  { path: "/contact", aliases: ["contact", "contact us", "reach us", "help", "support team"] },

  // Forms
  { path: "/partner-application", aliases: ["partner", "partner application"] },
  { path: "/FeedBack", aliases: ["feedback", "suggestion", "complaint"] },
  { path: "/service-request", aliases: ["service request", "raise ticket", "ticket"] },
  { path: "/clientForm", aliases: ["client form", "client"] },
  { path: "/quotationform", aliases: ["quotation", "quote", "price quotation"] },

  // Elevators & Escalators
  { path: "/passenger-elevators", aliases: ["passenger", "passenger elevators", "elevators", "lifts"] },
  { path: "/freight-elevators", aliases: ["freight", "freight elevators", "cargo", "goods lift"] },
  { path: "/hospital-elevators", aliases: ["hospital", "hospital elevators", "stretcher lift"] },
  { path: "/glass-elevators", aliases: ["glass", "glass elevators", "panoramic elevators"] },
  { path: "/home-elevators", aliases: ["home elevators", "villa lift"] },
  { path: "/cabins", aliases: ["cabins", "cabin showcase", "car interiors"] },
  { path: "/moving-walkways-escalators", aliases: ["moving walkways", "walkways", "travelator"] },
  { path: "/public-transport-escalators", aliases: ["public escalators", "escalators", "metro escalators"] },
];



const HeroSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

const handleSearch = () => {
  if (!searchQuery.trim()) return;

  const query = searchQuery.toLowerCase();

  const match = searchIndex.find(entry =>
    entry.aliases.some(alias => alias.toLowerCase().includes(query))
  );

  if (match) {
    navigate(match.path);
  } else {
    alert("No results found!");
  }
};


  return (
    <section className="h-auto min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <motion.div
        className="absolute inset-0 bg-grid-pattern opacity-30"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          backgroundPosition: ["0 0", "40px 40px", "0 0"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Elements - Positioned within safe boundaries */}
      <FloatingElement delay={0}>
        <div className="absolute top-20 left-4 sm:left-10 w-2 h-2 bg-neon-cyan rounded-full opacity-60"></div>
      </FloatingElement>
      <FloatingElement delay={2}>
        <div className="absolute top-40 right-4 sm:right-20 w-3 h-3 bg-neon-blue rounded-full opacity-40"></div>
      </FloatingElement>
      <FloatingElement delay={1}>
        <div className="absolute bottom-40 left-4 sm:left-20 w-1 h-1 bg-neon-green rounded-full opacity-80"></div>
      </FloatingElement>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-transparent"
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-6">
           
             <div className="flex flex-col items-start gap-3">
            <img
            src="/Yata white .svg"  
            alt="Yatra Logo"
           className="w-28 sm:w-32 lg:w-36 h-auto"  
            />


            <h2 className="text-1xl sm:text-2xl lg:text-3xl font-bold tracking-wide text-gradient">
            ELEVATORS & ESCALATORS
            </h2>
            </div>



              <SlideInAnimation direction="right" delay={1.5}>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Advanced elevators and escalators for residential towers,
                  workspaces, malls, and hospitals – powered by 24/7 service and
                  future-ready tech.
                </p>
              </SlideInAnimation>
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-start sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <GlowButton
                className="btn-primary group min-w-[120px] h-10 px-4"
                size="sm"
                onClick={() => navigate("/quotationform")}
              >
                <span>Get Quote</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform shrink-0" />
              </GlowButton>

              <GlowButton
                className="btn-outline group min-w-[140px] h-10 px-4"
                size="sm"
                onClick={() => navigate("/service-request")}
              >
                <Calendar className="w-4 h-4 mr-2 shrink-0" />
                <span>Book Service</span>
              </GlowButton>

              <GlowButton
                className="btn-outline group min-w-[130px] h-10 px-4"
                size="sm"
                onClick={() => navigate("/cabins")} // 👈 Add this
              >
                {" "}
                <Eye className="w-4 h-4 mr-2 shrink-0" />
                <span>View Cabins</span>
              </GlowButton>
            </motion.div>
            {/* 🔍 Search Bar */}
          <motion.div
  className="mt-6 w-full sm:w-[70%] md:w-[60%] lg:w-[50%]"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 2.3 }}
>
  <div className="relative">
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      placeholder="Search"
      className="w-full rounded-2xl border border-cyan-400/40 bg-black/30 px-4 py-3 pr-12 text-base text-white placeholder:text-gray-400 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
    />
    <button
      onClick={handleSearch}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-300 hover:text-cyan-200 transition"
    >
      <ArrowRight className="w-5 h-5" />
    </button>
  </div>
</motion.div>

            {/* Discover Section */}
            <SlideInAnimation direction="up" delay={2.2}>
              <div className="pt-6 lg:pt-8">
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Discover what sets us apart in the world of vertical mobility
                  solutions
                </p>
              </div>
            </SlideInAnimation>
          </div>

          {/* Right Side: Image Stack */}
          <motion.div
            className="relative w-full sm:w-full mx-auto flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
          >
            <ImageStack />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
