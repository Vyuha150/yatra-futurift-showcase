import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, Briefcase } from 'lucide-react';

const Career = () => {
  const jobOpenings = [
    {
      title: "Senior Elevator Technician",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      description: "Lead installation and maintenance of advanced elevator systems with focus on IoT integration."
    },
    {
      title: "Sales Manager - Commercial",
      department: "Sales",
      location: "Delhi, India", 
      type: "Full-time",
      description: "Drive business growth in commercial elevator solutions across North India region."
    },
    {
      title: "R&D Engineer - AI Systems",
      department: "Research & Development",
      location: "Bangalore, India",
      type: "Full-time",
      description: "Develop next-generation AI-powered elevator control systems and smart building integration."
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Chennai, India",
      type: "Full-time",
      description: "Oversee large-scale elevator installation projects from conception to completion."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Be part of the future of vertical mobility. Build your career with India's most innovative elevator company.
            </p>
            <Button size="lg" className="btn-primary">
              View All Openings
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Yatra */}
      <section className="py-16 px-6 bg-surface-glass">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Yatra?</h2>
            <p className="text-muted-foreground">Discover what makes Yatra an exceptional place to grow your career</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Collaborative Culture",
                description: "Work with passionate professionals in an inclusive environment"
              },
              {
                icon: Briefcase,
                title: "Growth Opportunities",
                description: "Continuous learning and career advancement programs"
              },
              {
                icon: MapPin,
                title: "Pan-India Presence",
                description: "Multiple locations across major Indian cities"
              },
              {
                icon: Clock,
                title: "Work-Life Balance",
                description: "Flexible working arrangements and employee wellness programs"
              }
            ].map((benefit, index) => (
              <div 
                key={benefit.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <benefit.icon className="w-10 h-10 text-neon-cyan mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Current Openings</h2>
            <p className="text-muted-foreground">Explore exciting career opportunities with us</p>
          </div>
          
          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <div 
                key={job.title}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                  <Button variant="outline" className="btn-outline whitespace-nowrap">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;