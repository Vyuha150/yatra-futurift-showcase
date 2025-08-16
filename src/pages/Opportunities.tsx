import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MapPin,
  Clock,
  Users,
  Briefcase,
  ChevronRight,
  Building,
  GraduationCap,
  DollarSign,
  Calendar,
} from "lucide-react";
import { PageLoadWrapper } from "@/components/AnimatedComponents";
import { useNavigate } from "react-router-dom";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  postedDate: string;
  requirements: string[];
  responsibilities: string[];
}

const Opportunities = () => {
  const navigate = useNavigate();
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const jobs: Job[] = [
    {
      id: "1",
      title: "Service Engineer",
      department: "Technical",
      location: "Hyderabad",
      type: "Full-time",
      experience: "2-5 years",
      salary: "₹3-6 LPA",
      postedDate: "03-08-2025",
      requirements: [
        "Diploma/B.Tech in Mechanical/Electrical Engineering",
        "Experience in elevator/escalator maintenance",
        "Knowledge of safety protocols",
        "Problem-solving skills",
      ],
      responsibilities: [
        "Installation and maintenance of elevators",
        "Troubleshooting technical issues",
        "Ensuring safety compliance",
        "Customer service and support",
      ],
    },
    {
      id: "2",
      title: "Service Executive",
      department: "Operations",
      location: "Hyderabad",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹2.5-4 LPA",
      postedDate: "03-08-2025",
      requirements: [
        "Graduate in any stream",
        "Excellent communication skills",
        "Customer service experience",
        "Coordination and planning skills",
      ],
      responsibilities: [
        "Coordinate service operations",
        "Client relationship management",
        "Schedule maintenance activities",
        "Ensure customer satisfaction",
      ],
    },
    {
      id: "3",
      title: "Marketing Executive",
      department: "Sales & Marketing",
      location: "Major Cities",
      type: "Full-time",
      experience: "1-4 years",
      salary: "₹3-5 LPA",
      postedDate: "03-08-2025",
      requirements: [
        "MBA/Graduate in Marketing",
        "B2B sales experience",
        "Strong presentation skills",
        "Market research abilities",
      ],
      responsibilities: [
        "Identify new business opportunities",
        "Promote products and services",
        "Maintain client relationships",
        "Market analysis and reporting",
      ],
    },
    {
      id: "4",
      title: "Installation Technician",
      department: "Technical",
      location: "Mumbai, Pune, Chennai",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹2-4 LPA",
      postedDate: "03-08-2025",
      requirements: [
        "ITI/Diploma in relevant field",
        "Hands-on technical experience",
        "Physical fitness for site work",
        "Team working ability",
      ],
      responsibilities: [
        "Elevator installation and setup",
        "Quality checks and testing",
        "Site coordination",
        "Equipment handling",
      ],
    },
  ];

  const handleApplyNow = () => {
    // Scroll to resume section on career page
    navigate('/career#resume-section');
  };

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
              Career Opportunities
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover exciting career opportunities at Yatra Elevators & Escalators. 
              Join our team and shape the future of vertical transportation.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="btn-primary" onClick={handleApplyNow}>
                Apply Now
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/career')}>
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
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
              Open Positions
            </h2>
            <p className="text-muted-foreground">
              We're looking for talented individuals to join our growing team
            </p>
          </motion.div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-glow transition-all duration-300 border-border hover:border-neon-cyan/50">
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {job.department}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <GraduationCap className="w-4 h-4" />
                            {job.experience}
                          </div>
                          <div className="flex items-center gap-1">
                            
                            {job.salary}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge variant="secondary" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          Posted {new Date(job.postedDate).toLocaleDateString()}
                        </Badge>
                        <Button 
                          className="btn-primary"
                          onClick={handleApplyNow}
                        >
                          Apply Now
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Responsibilities:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-2 flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-6">
              Don't see a position that matches your skills? We're always looking for talented individuals.
            </p>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleApplyNow}
            >
              Submit Your Resume
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </PageLoadWrapper>
  );
};

export default Opportunities;