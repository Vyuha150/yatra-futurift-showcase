import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { PageLoadWrapper } from "@/components/AnimatedComponents";
import { motion } from "framer-motion";
import { Building2, Users, RefreshCcw, Video, Play } from "lucide-react"; // 👈 added Play
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button"; // 👈 added Button

const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <motion.div
    className="text-center mb-12"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>
    <p className="text-muted-foreground max-w-3xl mx-auto whitespace-pre-line">
      {description}
    </p>
  </motion.div>
);

const ProjectsAndCasestudies = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <PageLoadWrapper>
      <CustomCursor />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative z-10" ref={heroRef}>
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-green bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
          >
            Projects & Case Studies
          </motion.h1>
        </div>
      </section>

      {/* A. Flagship Installations */}
      <section className="py-16 px-6 bg-surface-glass">
        <div className="container mx-auto">
          <SectionHeader
            title="Flagship Installations"
            description={`At Yatra Escalators and Elevators, our flagship installations remain as a proof to our engineering brilliance, safety concerned approach, and dedicated for long-term reliability. From sky rise commercial towers and metro stations to primary residential complexes and retail hubs, our advanced vertical mobility solutions have been trusted by industry experts and public infrastructure developers. Each project portrays our dedication to accuracy, innovation, and unlined integration for certifying smooth, efficient, and visually pleasing movement for all.`}
          />

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {["/flagship1.png", "/flagship2.png", "/flagship3.png"].map(
              (img, i) => (
                <motion.div
                  key={i}
                  className="overflow-hidden rounded-2xl border border-border shadow-md hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <motion.img
                    src={img}
                    alt={`Flagship Installation ${i + 1}`}
                    className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* B. Client Spotlights */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <SectionHeader
            title="Client Spotlights"
            description={`At Yatra Escalators and Elevators, our clients are the focal point of everything we do. Through our Client Spotlights, we proudly project the organizations and partners placing their trust in our vertical transportation solutions. From famous construction firms and government agencies to private developers and retail chains, each and every collaboration reflects our ability to deliver tailor made, high performance escalators and elevators that tune with project needs. All these highlight not only the installations, but the strong relationships that laid a path through our commitment to quality, safety, and time to time delivery.`}
          />
          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              "Construction Firms",
              "Government Agencies",
              "Private Developers",
            ].map((client) => (
              <div
                key={client}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300"
              >
                <Users className="w-12 h-12 text-neon-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">{client}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* C. Before & After Modernizations */}
      <section className="py-16 px-6 bg-surface-glass">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              title="Before & After Modernizations"
              description={`At Yatra Escalators and Elevators, we completely gave an out of box thinking by modifying ages back vertical transport systems into futuristic and visually pleasing advanced solutions. Our Before & After Modernizations projects the artistic improvements we bring to elevators and escalators by improving performance, energy efficiency, safety, and visual appeal. Whether it's a decades back residential lift or a heavy commercial escalator, our expert team gives new life into existing systems, promising that they meet today’s standards while helping their operational lifespan.`}
            />
          </motion.div>

          {/* Side-by-side images */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-xl border border-border">
              <img
                src="/Before.png"
                alt="Before Modernization"
                className="w-full h-96 object-cover"
              />
              <p className="text-center text-sm mt-2 text-muted-foreground">
                Before Modernization
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-border">
              <img
                src="/After.png"
                alt="After Modernization"
                className="w-full h-96 object-cover"
              />
              <p className="text-center text-sm mt-2 text-muted-foreground">
                After Modernization
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* D. Video Walkthroughs */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="card-glow p-8 lg:p-12 bg-gradient-to-r from-brand-slate to-brand-slate-light relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Content */}
              <div className="space-y-6">
                <div>
                  <p className="text-neon-cyan text-sm font-semibold mb-2">
                    YATRA ELEVATORS
                  </p>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Video Walkthroughs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Get a closer look at our flagship projects, modernizations,
                    and installations through immersive video walkthroughs.
                    Experience how our elevators and escalators bring
                    innovation, safety, and elegance to real-world spaces.
                  </p>
                </div>

                <Button className="btn-accent group">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Now
                </Button>
              </div>

              {/* Right Side - Video Preview */}
              <div className="relative">
                <div className="aspect-video bg-surface-elevated rounded-xl border border-border flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto animate-pulse-glow">
                      <Play className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <p className="text-muted-foreground">
                      Video Preview Coming Soon
                    </p>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-green/30 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 border border-neon-cyan rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>
        </div>
      </section>

      <Footer />
    </PageLoadWrapper>
  );
};

export default ProjectsAndCasestudies;
