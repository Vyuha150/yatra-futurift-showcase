import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to elevate your space? Get in touch with our experts for personalized elevator solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                  <select className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground">
                    <option>Select project type</option>
                    <option>Residential Building</option>
                    <option>Commercial Complex</option>
                    <option>Hospital/Healthcare</option>
                    <option>Educational Institution</option>
                    <option>Industrial Warehouse</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea placeholder="Tell us about your project requirements..." rows={5} />
                </div>
                
                <Button size="lg" className="w-full btn-primary">
                  Send Message
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground">Reach out to us through any of the following channels.</p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Office Address",
                    content: "123 Business District, Mumbai, Maharashtra 400001, India"
                  },
                  {
                    icon: Phone,
                    title: "Phone Number",
                    content: "+91 98765 43210"
                  },
                  {
                    icon: Mail,
                    title: "Email Address",
                    content: "info@yatraelevators.com"
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: "Monday - Saturday: 9:00 AM - 6:00 PM"
                  }
                ].map((contact, index) => (
                  <div 
                    key={contact.title}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300"
                  >
                    <contact.icon className="w-6 h-6 text-neon-cyan mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{contact.title}</h3>
                      <p className="text-muted-foreground">{contact.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Map Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl backdrop-blur-sm border border-border flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-neon-cyan mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 px-6 bg-surface-glass">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">24/7 Emergency Support</h2>
            <p className="text-muted-foreground mb-8">
              For urgent elevator service or emergency situations, our support team is available round the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="destructive">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Hotline
              </Button>
              <Button size="lg" variant="outline" className="btn-outline">
                <Mail className="w-5 h-5 mr-2" />
                Emergency Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;