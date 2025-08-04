import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Building2, Users, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent mb-6">
              About Yatra
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pioneering the future of vertical mobility with innovative elevator solutions that redefine how we move through spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Target className="w-8 h-8 text-neon-cyan" />
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To revolutionize vertical transportation by delivering cutting-edge elevator solutions that combine safety, efficiency, and innovation, enhancing the quality of life for millions of users across India.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-neon-blue" />
                  <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be India's most trusted and innovative elevator company, setting new standards in vertical mobility while contributing to the development of smart, sustainable buildings.
                </p>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm border border-border">
                <div className="h-full w-full bg-gradient-accent rounded-xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-surface-glass">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Innovation",
                description: "Continuously pushing boundaries with cutting-edge technology and smart solutions."
              },
              {
                icon: Users,
                title: "Safety First",
                description: "Uncompromising commitment to safety standards and user protection."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Delivering superior quality and performance in every project we undertake."
              }
            ].map((value, index) => (
              <div 
                key={value.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <value.icon className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;