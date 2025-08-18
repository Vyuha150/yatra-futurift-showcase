import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Users, Shield, Zap, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import passengerElevatorImg from "@/assets/passenger-elevator.jpg";

const PassengerElevators = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="container mx-auto px-4 py-6 flex items-center gap-4">
          <Link to="/">
            <Button variant="glass" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gradient-primary">Passenger Elevators</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Premium <span className="text-gradient-primary">Passenger</span> Solutions
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the future of vertical transportation with our state-of-the-art passenger elevators, 
                designed for comfort, safety, and efficiency in commercial and residential buildings.
              </p>
              <div className="flex gap-4">
                <Button variant="hero" size="xl">Request Quote</Button>
                <Button variant="neon" size="xl">Download Specs</Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={passengerElevatorImg} 
                alt="Premium Passenger Elevator"
                className="rounded-2xl shadow-elegant hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-16">Key Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "High Capacity",
                description: "Accommodate 8-21 passengers with spacious cabin design"
              },
              {
                icon: Shield,
                title: "Advanced Safety",
                description: "Multi-layer safety systems with emergency protocols"
              },
              {
                icon: Zap,
                title: "Energy Efficient",
                description: "Regenerative drive technology reduces power consumption"
              },
              {
                icon: Settings,
                title: "Smart Controls",
                description: "IoT-enabled monitoring and predictive maintenance"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-card neon-border hover-lift">
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-16">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-semibold mb-6 text-gradient-secondary">Performance</h4>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border/30 pb-2">
                    <span>Speed Range</span>
                    <span className="text-primary">1.0 - 4.0 m/s</span>
                  </div>
                  <div className="flex justify-between border-b border-border/30 pb-2">
                    <span>Load Capacity</span>
                    <span className="text-primary">630 - 1600 kg</span>
                  </div>
                  <div className="flex justify-between border-b border-border/30 pb-2">
                    <span>Travel Height</span>
                    <span className="text-primary">Up to 250m</span>
                  </div>
                  <div className="flex justify-between border-b border-border/30 pb-2">
                    <span>Door Opening</span>
                    <span className="text-primary">700-1200mm</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-6 text-gradient-secondary">Features</h4>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border/30 pb-2">
                    <span>Drive System</span>
                    <span className="text-primary">Gearless Traction</span>
                  </div>
                  <div className="flex justify-between border-b border-border/30 pb-2">
                    <span>Control System</span>
                    <span className="text-primary">VVVF Drive</span>
                  </div>
                  <div className="flex justify-between border-b border-border/30 pb-2">
                    <span>Safety Features</span>
                    <span className="text-primary">Emergency Brake</span>
                  </div>
                  <div className="flex justify-between border-b border-border/30 pb-2">
                    <span>Certification</span>
                    <span className="text-primary">EN 81-20/50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Elevate Your Building?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our experts today for a customized solution that meets your specific requirements.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="gradient" size="xl">Get Started</Button>
            <Link to="/cabin-showcase">
              <Button variant="neon" size="xl">View Cabins</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PassengerElevators;