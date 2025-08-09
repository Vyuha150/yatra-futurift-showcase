import { ArrowRight, Calendar, Eye } from "lucide-react";
import { motion } from "framer-motion";
import {
  SplitTextAnimation,
  SlideInAnimation,
  FloatingElement,
  GlowButton,
} from "@/components/AnimatedComponents";
import ImageStack from "./ImageStack";

const HeroSection = () => {
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
              <SplitTextAnimation
                text="Yatra Elevators"
                className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold leading-tight text-gradient"
              />

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
              >
                <span>Get Quote</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform shrink-0" />
              </GlowButton>
              <GlowButton
                className="btn-outline group min-w-[140px] h-10 px-4"
                size="sm"
              >
                <Calendar className="w-4 h-4 mr-2 shrink-0" />
                <span>Book Service</span>
              </GlowButton>
              <GlowButton
                className="btn-outline group min-w-[130px] h-10 px-4"
                size="sm"
              >
                <Eye className="w-4 h-4 mr-2 shrink-0" />
                <span>View Cabins</span>
              </GlowButton>
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
            className="relative w-full max-w-lg mx-auto lg:max-w-none flex items-center justify-center"
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
