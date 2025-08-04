import { Star, Building, MapPin, TrendingUp } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      project: "Skyline Apartments",
      subtitle: "5 Elevators in 3 Weeks",
      location: "Mumbai",
      testimonial: "Yatra delivered exactly what they promised. The installation was smooth, and the IoT monitoring gives us complete peace of mind.",
      client: "Rajesh Sharma",
      designation: "Project Manager",
      stats: {
        label: "Saved on AMC",
        value: "20%",
        metric: "0 breakdowns in 6 months"
      },
      rating: 5
    },
    {
      project: "TechHub Commercial",
      subtitle: "8 High-Speed Elevators",
      location: "Bangalore",
      testimonial: "The touchless controls and smart monitoring system have been game-changers for our office building. Excellent service quality.",
      client: "Priya Menon",
      designation: "Facility Head",
      stats: {
        label: "Uptime Achieved",
        value: "99.9%",
        metric: "24/7 monitoring active"
      },
      rating: 5
    },
    {
      project: "Golden Heights Residency",
      subtitle: "12 Residential Units",
      location: "Delhi",
      testimonial: "From quote to installation, everything was handled professionally. The residents love the silent operation and modern design.",
      client: "Amit Kumar",
      designation: "Society Chairman",
      stats: {
        label: "Installation Time",
        value: "12 Days",
        metric: "50% faster than expected"
      },
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by India's Leading Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've transformed vertical transportation across residential, commercial, and industrial spaces
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-glow p-8 space-y-6 group hover:scale-105 transition-all duration-300">
              {/* Project Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Building className="w-5 h-5 text-neon-cyan" />
                    <span className="text-sm text-neon-cyan font-semibold">{testimonial.project}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{testimonial.location}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground">{testimonial.subtitle}</h3>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-neon-cyan text-neon-cyan" />
                ))}
              </div>

              {/* Testimonial */}
              <blockquote className="text-muted-foreground leading-relaxed italic">
                "{testimonial.testimonial}"
              </blockquote>

              {/* Client Info */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.client}</p>
                <p className="text-sm text-muted-foreground">{testimonial.designation}</p>
              </div>

              {/* Stats */}
              <div className="card-glass p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{testimonial.stats.label}</span>
                  <TrendingUp className="w-4 h-4 text-neon-green" />
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-bold text-gradient">{testimonial.stats.value}</span>
                </div>
                <p className="text-xs text-muted-foreground">{testimonial.stats.metric}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 fill-neon-cyan text-neon-cyan" />
              <span className="font-semibold text-foreground">4.9/5 Rating</span>
            </div>
            <div className="w-1 h-1 bg-border rounded-full"></div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-neon-green rounded-full flex items-center justify-center">
                <span className="text-xs text-background font-bold">✓</span>
              </div>
              <span className="font-semibold text-foreground">ISO Certified</span>
            </div>
            <div className="w-1 h-1 bg-border rounded-full"></div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-gradient-accent rounded"></div>
              <span className="font-semibold text-foreground">Make in India</span>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-12 opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-cyan">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-cyan">99.8%</div>
              <div className="text-sm text-muted-foreground">Uptime Average</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-cyan">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;