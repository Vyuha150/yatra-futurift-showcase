import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare } from "lucide-react";
import { 
  PageLoadWrapper, 
  AnimatedNav, 
  AnimatedBackground 
} from '@/components/AnimatedComponents';

const Contact = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contactInfoRef, contactInfoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <PageLoadWrapper>
      <div className="min-h-screen bg-background">
        <CustomCursor />
        <AnimatedBackground />
        <AnimatedNav>
          <Navigation />
        </AnimatedNav>
        
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
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Contact Us
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Ready to elevate your space? Get in touch with our experts for personalized elevator solutions.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <motion.div
                ref={formRef}
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                </motion.div>
                
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                      <Input placeholder="Enter your first name" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <Input placeholder="Enter your last name" />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input type="email" placeholder="Enter your email address" />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
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
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <Textarea placeholder="Tell us about your project requirements..." rows={5} />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button size="lg" className="w-full btn-primary">
                      Send Message
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                ref={contactInfoRef}
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                animate={contactInfoInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={contactInfoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
                  <p className="text-muted-foreground">Reach out to us through any of the following channels.</p>
                </motion.div>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Office Address",
                      content: "Plot 3-538, Sri Krishna Heights, 100 feet road , Ayyappa society, Madhapur , Hyderabad 500018, India"
                    },
                    {
                      icon: Phone,
                      title: "Phone Number",
                      content: "+91 9091844844"
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
                    <motion.div 
                      key={contact.title}
                      className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={contactInfoInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <contact.icon className="w-6 h-6 text-neon-cyan mt-1" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{contact.title}</h3>
                        <p className="text-muted-foreground">{contact.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Map Placeholder */}
                <motion.div
                  className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl backdrop-blur-sm border border-border flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={contactInfoInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <MapPin className="w-12 h-12 text-neon-cyan mx-auto mb-2" />
                    </motion.div>
                    <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 px-6 bg-surface-glass">
          <div className="container mx-auto">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">24/7 Emergency Support</h2>
              <p className="text-muted-foreground mb-8">
                For urgent elevator service or emergency situations, our support team is available round the clock.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="btn-outline">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Hotline
                </Button>
                <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@yatraelevators.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className="btn-outline flex items-center justify-center px-4 py-2 rounded-md border border-border text-neon-cyan"
  >
               <Mail className="w-5 h-5 mr-2 text-neon-cyan" />
                Emergency Email
                </a>

                <Button 
                size="lg" 
                variant="outline" 
                className="btn-outline" 
                onClick={() => window.location.href = "/FeedBack"}
>
              <MessageSquare className="w-5 h-5 mr-2" />
               Feedback
               </Button>

               
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageLoadWrapper>
  );
};

export default Contact;