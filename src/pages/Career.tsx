import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MapPin,
  Clock,
  Users,
  Briefcase,
  Upload,
  Heart,
  Target,
  Lightbulb,
  GraduationCap,
  Wrench,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import { useState, useRef } from "react";

// Type definitions
interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface Program {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

// Separate component for benefit cards to fix React Hooks rule
const BenefitCard = ({
  benefit,
  index,
}: {
  benefit: Benefit;
  index: number;
}) => {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={cardRef}
      className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <benefit.icon className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-foreground mb-2">
        {benefit.title}
      </h3>
      <p className="text-sm text-muted-foreground">{benefit.description}</p>
    </motion.div>
  );
};

// Separate component for program cards to fix React Hooks rule
const ProgramCard = ({
  program,
  index,
}: {
  program: Program;
  index: number;
}) => {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={cardRef}
      className="p-6 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <program.icon className="w-12 h-12 text-neon-blue mb-4" />
      <h3 className="text-lg font-semibold text-foreground mb-2">
        {program.title}
      </h3>
      <p className="text-sm text-muted-foreground">{program.description}</p>
    </motion.div>
  );
};

const Career = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      // Simulate upload process
      setTimeout(() => {
        setIsUploading(false);
        toast({
          title: "Thank you for showing interest in Yatra!",
          description:
            "Our experts will evaluate your expertise and very shortly we will get back to you. Thank You",
          duration: 5000,
        });
        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }, 2000);
    }
  };

  const benefits = [
    {
      icon: Heart,
      title: "Collaborative Culture",
      description:
        "Work with passionate professionals in an inclusive environment where ideas flourish",
    },
    {
      icon: Target,
      title: "Growth Opportunities",
      description:
        "Continuous learning and career advancement programs designed for your success",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description:
        "Be part of cutting-edge technology development in vertical transportation",
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      description:
        "Flexible working arrangements and comprehensive employee wellness programs",
    },
  ];

  const programs = [
    {
      icon: GraduationCap,
      title: "Engineering Internships",
      description:
        "Hands-on experience with elevator and escalator technology under expert guidance",
    },
    {
      icon: Wrench,
      title: "Technical Training",
      description:
        "Comprehensive training on safety standards, installation, and maintenance procedures",
    },
    {
      icon: BookOpen,
      title: "Professional Development",
      description:
        "Structured learning programs to develop both technical and soft skills",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navigation />

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
              Join Our Team
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Be part of the future of vertical mobility. Build your career with
              India's most innovative elevator company.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="btn-primary">
                Explore Opportunities
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Life at Yatra Section */}
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
              Life at Yatra Elevators
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              At Yatra Elevators & Escalators, we strongly believe more than
              moving people it's improving their lives that matters the most.
              Our workplace flourish on creation, collaboration, and a promise
              to exhibit professionalism in everything we do. Whether it's
              crafting contemporary elevators or installing reliable escalator
              systems, our team is driven by purpose and passion. Life at Yatra
              means working in an environment where ideas are given immense
              importance, growth is encouraged, and every individual plays a
              vital role in shaping the future of vertical transportation. Join
              us on this exciting journey, where every step falls towards
              future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground leading-relaxed">
                Our workplace flourish on creation, collaboration, and a promise
                to exhibit professionalism in everything we do. Whether it's
                crafting contemporary elevators or installing reliable escalator
                systems, our team is driven by purpose and passion.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Life at Yatra means working in an environment where ideas are
                given immense importance, growth is encouraged, and every
                individual plays a vital role in shaping the future of vertical
                transportation. Join us on this exciting journey, where every
                step falls towards future.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl backdrop-blur-sm border border-border flex items-center justify-center">
                <Users className="w-32 h-32 text-neon-cyan/50" />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.title}
                benefit={benefit}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Current Openings
            </h2>
            <p className="text-muted-foreground">
              In future we need to update this based on the number of openings
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-border">
              <CardContent className="space-y-4">
                <Briefcase className="w-16 h-16 text-neon-cyan mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">
                  Exciting Opportunities Coming Soon!
                </h3>
                <p className="text-muted-foreground">
                  We are constantly growing and will be updating this section
                  with new openings. In the meantime, feel free to submit your
                  resume for future opportunities.
                </p>
                <Button
                  className="btn-primary mt-4"
                  onClick={() =>
                    document
                      .getElementById("resume-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Submit Your Resume
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Internships & Training Programs */}
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
              Internships & Training Programs
            </h2>
            <p className="text-muted-foreground max-w-4xl mx-auto">
              At Yatra Elevators & Escalators, we are dedicated to shaping the
              next generation of talent through our planned Internships and
              Training Programs. These are perfectly designed for students and
              young professionals, these programs offer full fledged experience
              in the field of elevator and escalator technology, guided by
              industry top experts. Interns gain hands full of knowledge by
              doing real field projects on safety standards, and innovations
              while developing technical and professional skills. Our goal is to
              shape future engineers and technicians with the knowledge,
              confidence, and experience needed to survive & succeed in the
              vertical transportation industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground leading-relaxed">
                These are perfectly designed for students and young
                professionals, these programs offer full fledged experience in
                the field of elevator and escalator technology, guided by
                industry top experts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Interns gain hands full of knowledge by doing real field
                projects on safety standards, and innovations while developing
                technical and professional skills. Our goal is to shape future
                engineers and technicians with the knowledge, confidence, and
                experience needed to survive & succeed in the vertical
                transportation industry.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl backdrop-blur-sm border border-border flex items-center justify-center">
                <GraduationCap className="w-32 h-32 text-neon-blue/50" />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <ProgramCard
                key={program.title}
                program={program}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Submit Resume Section */}
      <section id="resume-section" className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Submit Your Resume
            </h2>
            <p className="text-muted-foreground">
              GIve an option, Upload Resume and after the resume is uploaded, a
              message should pop up saying Thanks for showing interest in
              Yatra….Our Experts will evaluate your expertise and very shortly
              we will get back to you. Thank You
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 text-center">
              <CardContent className="space-y-6">
                <div className="relative">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={isUploading}
                  />
                  <div className="border-2 border-dashed border-border rounded-xl p-8 hover:border-neon-cyan/50 transition-colors duration-300">
                    <Upload className="w-16 h-16 text-neon-cyan mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {isUploading ? "Uploading..." : "Upload Your Resume"}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Drag and drop your resume here, or click to browse
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Supports PDF, DOC, and DOCX files
                    </p>
                  </div>
                </div>

                <Button
                  className="btn-primary"
                  disabled={isUploading}
                  onClick={() => fileInputRef.current?.click()}
                >
                  {isUploading ? (
                    <>
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4 mr-2" />
                      Choose File
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
