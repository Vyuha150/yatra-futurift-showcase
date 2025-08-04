import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroElevator from '@/assets/hero-elevator.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 bg-grid-pattern animate-grid-move opacity-30"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Elevating India's</span>
                <br />
                <span className="text-gradient">Smart Buildings</span>
                <br />
                <span className="text-foreground">– One Floor at a Time.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Advanced elevators and escalators for residential towers, workspaces, malls, and hospitals – powered by 24/7 service and future-ready tech.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary group">
                Request Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-outline group">
                <Play className="w-5 h-5 mr-2" />
                See Our Range
              </Button>
            </div>

            {/* Partner Logos */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Trusted by India's leading builders</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs font-semibold">
                  BUILDER 1
                </div>
                <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs font-semibold">
                  BUILDER 2
                </div>
                <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs font-semibold">
                  BUILDER 3
                </div>
                <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs font-semibold">
                  BUILDER 4
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative animate-float">
              <img
                src={heroElevator}
                alt="Futuristic Elevator System"
                className="w-full h-auto rounded-2xl shadow-elevated"
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-glow rounded-2xl animate-pulse-glow"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full animate-pulse-glow"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-neon-cyan rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;