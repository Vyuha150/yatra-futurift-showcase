import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Clock, 
  FileText, 
  Monitor, 
  Wrench, 
  HelpCircle,
  Phone,
  Calendar,
  BarChart3,
  Shield,
  Zap,
  Settings,
  CheckCircle
} from 'lucide-react';

const SupportServices = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Clock,
      title: "24 x 7 Customer Support",
      description: "Our well trained professional customer support team is available around the clock to take service requests, emergencies, and all technical issues with jet speed and proficiency. Whether it's a general query or an urgent breakdown, we deliver accurate assistance to reduce downtime and keep your systems running smoothly."
    },
    {
      icon: FileText,
      title: "Annual Maintenance Contracts (AMCs)",
      description: "Promising long lasting performance, safety, and credibility with our extensive AMCs. Our contracts provide planned, scheduled maintenance that cuts down time, prevents unexpected breakdowns, and increases the lifespan of your elevators and escalators with trained technicians and genuine spare parts."
    },
    {
      icon: Monitor,
      title: "Remote Monitoring Dashboard",
      description: "Connect to your elevator and escalator performance in real time with Yatra's innovative Remote Monitoring Dashboard. This advanced system gives live status updates, performance analysis, fault identification alerts, and maintenance logs accessible from a secure online platform."
    },
    {
      icon: Wrench,
      title: "Spare Parts & Repairs",
      description: "We offer a wide range of genuine spare parts suitable with all major elevator and escalator models, ensuring quick replacements and less downtime. Our skilled technicians are trained to identify and solve issues efficiently, whether it's a minor failure or a major mechanical repair."
    }
  ];

  const faqs = [
    {
      question: "What kind of elevators and escalators do you offer?",
      answer: "We offer a wide range including passenger elevators, freight elevators, home lifts, and commercial escalators, designed for residential, commercial, and industrial needs."
    },
    {
      question: "Do you assist with installation services?",
      answer: "Yes, we provide complete installation services including site assessment, design, and commissioning."
    },
    {
      question: "Can I customize your products?",
      answer: "Absolutely. We design customized solutions depending on your building type, space constraints, usage, and design specifications."
    },
    {
      question: "What safety features are included?",
      answer: "Our units include advanced safety features like emergency alarms, auto-rescue devices, overload protection, speed governors, and fire-rated components."
    },
    {
      question: "Do you offer AMC services?",
      answer: "Yes, we offer workable AMC packages to ensure continuous maintenance, smooth functioning, and increased lifespan of your systems."
    },
    {
      question: "How quick are you with service or repairs?",
      answer: "We provide 24x7 customer support and focus to respond to service requests within a few hours, depending on your location and the nature of the problem."
    },
    {
      question: "Can you redesign or modify old or outdated elevators/escalators?",
      answer: "Yes, we are specialized in futuristic services that upgrade the performance, visually pleaseable, and safety standards of old systems."
    },
    {
      question: "Is remote monitoring available for your systems?",
      answer: "Yes, our smart Remote Monitoring Dashboard allows real-time tracking, Error detection, and performance analytics to improve operational efficiency."
    }
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
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Support & Services
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive support solutions ensuring your vertical mobility systems operate at peak performance 24/7.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid gap-12">
            {services.map((service, index) => {
              const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.1 });
              
              return (
                <motion.div 
                  key={service.title}
                  ref={cardRef}
                  className="grid md:grid-cols-2 gap-8 items-center p-8 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-500"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 }}
                  animate={cardInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-center gap-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <service.icon className="w-12 h-12 text-neon-cyan" />
                      <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                    </motion.div>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                  >
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl backdrop-blur-sm border border-border flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-neon-cyan/50" />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-surface-glass">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportServices;