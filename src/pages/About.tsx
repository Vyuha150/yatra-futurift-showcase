import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Users,
  Award,
  Target,
  Zap,
  Shield,
  Heart,
  Globe,
  Lightbulb,
  Handshake,
  CheckCircle,
  Leaf,
  Factory,
  Microscope,
  Recycle,
  Building,
  Clock,
  TrendingUp,
} from "lucide-react";
import { 
  PageLoadWrapper, 
  AnimatedNav, 
  AnimatedBackground 
} from '@/components/AnimatedComponents';

const About = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Uncompromising commitment to safety in every project",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge technology and forward-thinking solutions",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Dedicated to exceeding customer expectations",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Environmentally responsible practices and solutions",
    },
  ];

  const stats = [
    { icon: Building, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "50+", label: "Expert Team Members" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: Award, value: "15+", label: "Years Experience" },
  ];

  return (
    <PageLoadWrapper>
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
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-green bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              About Yatra
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Pioneering the future of vertical transportation with innovative
              elevator and escalator solutions across India.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 px-6 bg-surface-glass">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a vision to revolutionize vertical transportation
                in India, Yatra Elevators & Escalators has been at the forefront
                of innovation for over a decade. We combine cutting-edge
                technology with traditional craftsmanship to deliver solutions
                that move people safely and efficiently.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our journey began with a simple belief: that every building
                deserves the best in vertical mobility. Today, we're proud to
                serve clients across the nation with our comprehensive range of
                elevator and escalator solutions.
              </p>
            </motion.div>
            

            <motion.div
  className="relative"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
    <img 
      src="/src/assets/Yatra website_Our story.png"   
      alt="Our Story"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Our Achievements
            </h2>
            <p className="text-muted-foreground">
              Numbers that reflect our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center bg-gradient-to-br from-surface/50 to-surface-elevated/50 border-border hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-glow">
                  <CardContent className="space-y-4">
                    <stat.icon className="w-12 h-12 text-neon-cyan mx-auto" />
                    <div className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company
              culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-surface/50 to-surface-elevated/50 border-border hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-glow">
                  <CardContent className="space-y-4">
                    <value.icon className="w-12 h-12 text-neon-cyan" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-primary/10 to-secondary/10 border-border">
                <CardContent className="space-y-4">
                  <Target className="w-16 h-16 text-neon-cyan" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To promote day to day living by designing innovative, forward thinking spaces and solutions that encourage trust, 
                    innovation, and sustainability. With each and every project, from magnificent homes to 
                    contemporary infrastructure, we always aim to deliver incomparable quality and dedicated design that inspires communities and enhances lives. 
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-secondary/10 to-primary/10 border-border">
                <CardContent className="space-y-4">
                  <TrendingUp className="w-16 h-16 text-neon-blue" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become a life changing force in each and every vertical we enter,
                     preparing  a well planned future where architecture, motive, and liability 
                     synchronize consensually. We see a planet where every structure, every business, 
                     and every transformation by ICONIC Group helps to human well-being and sustainable progress. Through Yatra and our comprehensive initiatives, we imagine becoming a universal benchmark for vertical brilliance and holistic living.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Verticals Section */}
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
              Our Verticals
            </h2>
            <p className="text-muted-foreground">
              Diverse industries, unified excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Hotels & Resorts", icon: Building2 },
              { title: "Ready Mix Concrete", icon: Factory },
              { title: "Enterprises & Global Infrastructure", icon: Globe },
              { title: "Elevators & Escalators", icon: Zap },
             
              { title: "Highway Food Courts", icon: Users },
              { title: "Women Empowerment Initiatives", icon: Handshake },
              { title: "Education & IT Solutions", icon: Lightbulb },
              { title: "Mining Division", icon: CheckCircle },
            ].map((vertical, index) => (
              <motion.div
                key={vertical.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <vertical.icon className="w-10 h-10 text-neon-cyan mx-auto mb-4" />
                </motion.div>
                <h3 className="text-sm font-semibold text-foreground">
                  {vertical.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Elevators Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Elevators & Escalators?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  At ICONIC Group, our growth has always originated from
                  listening to the advancing needs of the globe around us. As
                  contemporary infrastructure scales upward, the want for
                  structured vertical mobility becomes more pivotal than ever.
                  Our journey into Elevators & Escalators is not just a
                  supplement of our engineering potentiality, but a tactical
                  move positioned with our mission to form forward-thinking
                  surroundings. With urbanization and sustainable cities rising
                  rapidly, we recognize an accelerating gap in authentic,
                  energy-efficient, and brilliantly designed mobility solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This new vertical,{" "}
                  <span className="text-neon-cyan font-semibold">Yatra</span>,
                  represents an influential joining of innovation, safety, and
                  sustainability. Our aim is to impart outstanding vertical
                  transportation systems customized to residential complexes,
                  commercial towers, hospitals, malls, and more. Genuinely in
                  the ICONIC way, we are combining cutting-edge technology with
                  accommodating design to increase user experience and
                  operational dependability. More than a product, Yatra is a
                  commitment to promote lives by simplifying day to day movement
                  and certifying accessibility for all age groups and abilities.
                </p>
              </div>

             <motion.div
  className="relative"
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.3 }}
>
  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
    <img
      src="/src/assets/Yatra website_Why elevators.png"
      alt="Why Elevators & Escalators"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 px-6 bg-surface-glass">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Sustainability & Green Practices
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At ICONIC Group, sustainability is not considered as secondary in
              fact it stands as our primary and it is our focal point of our
              innovation and purpose. With fast growing urbanization and an
              urgent need for conscious oriented climate development, we are
              committed to build a greener tomorrow through each and every
              purpose, product, process, and partnership.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground leading-relaxed">
                Our vertical mobility solutions under the Yatra brand are
                directed towards a strong emphasis on designs that are
                eco-friendly, energy efficient, and environment friendly. From
                drives that are regenerative oriented that bring power to the
                grid, to less machine occupancy procedures that reduce space and
                resource consumption, each and every solution is crafted to
                reduce carbon footprint while maximizing performance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Yatra elevators and escalators are not just technologically
                advanced but they are also built to sync with green building
                standards like LEED and IGBC. We collaborate with architects,
                developers, and government bodies to assure that our vertical
                mobility solutions contribute purposefully & meaningfully to
                infrastructure goals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Moreover, our Research & Development team actively shows
                interest in using biodegradable components, low-emission
                manufacturing processes, and AI-driven optimization systems that
                literally reduce operational energy use. Yatra elevators and
                escalators are not just technologically advanced but they are
                also built to sync with green building standards like LEED and
                IGBC. We collaborate with architects, developers, and government
                bodies to assure that our vertical mobility solutions contribute
                purposefully & meaningfully to infrastructure goals that are
                sustainable. .
              </p>
            </motion.div>

            <motion.div
  className="relative"
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.02 }}
>
  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
    <img
      src="/src/assets/Yatra website_Internships and training.png"  
      alt="Sustainability Practices"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>

          </div>

          <motion.div
            className="grid md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: Zap,
                title: "Energy Efficient Machinery",
                desc: "Usage of energy efficient machinery",
              },
              {
                icon: Recycle,
                title: "Zero-Waste Protocols",
                desc: "Mandatory Implementation of zero-waste protocols",
              },
              {
                icon: Globe,
                title: "Water Conservation",
                desc: "water consumption in a more reducible way",
              },
              {
                icon: Leaf,
                title: "Sustainable Materials",
                desc: "Procurement of sustainable raw materials whenever possible",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center p-4 rounded-xl bg-card border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Manufacturing & R&D */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <Factory className="w-8 h-8 text-neon-cyan" />
                Manufacturing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At ICONIC Group, our manufacturing process is the foundation for
                our dedication to quality, capability, and innovation. With the
                latest facilities and a meticulous quality assurance framework,
                we guarantee that every elevator and escalator produced under
                the Yatra brand reaches the highest industry standards. Our
                production units are furnished with leading-edge machinery and
                follow environmentally conscious methodologies to reduce waste
                and energy use. From raw material selection to final assembly,
                every step indicates our dedication to resilience, safety, and
                performance. Through precision engineering and well planned
                workflows, our manufacturing division delivers well grounded
                mobility solutions that stand the test of time.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <Microscope className="w-8 h-8 text-neon-blue" />
                Research & Development
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Innovation is at the heart of our journey, and our R&D division
                is where ideas change into impressive solutions. At ICONIC
                Group, we invest in research and development to stay ahead of
                industry trends and review user experiences in vertical
                mobility. Our engineers and designers constantly prospect new
                technologies, sustainable systems, smart automation, and
                improving safety features. With a customer-oriented mindset, our
                R&D team promises that each product is not only technologically
                advanced but also customized to the emerging needs of modern
                infrastructure. Whether it’s adjustable control systems or
                eco-friendly materials, our R&D efforts will entitle us to
                create smarter, safer, and more sustainable mobility experiences
                that truly matches the ICONIC way
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-16 px-6 bg-surface-glass">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Corporate Social Responsibility (CSR)
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At yatra, elevators transform many lives in an impeccable way
              through skill development programs, performing new challenging
              activities, accelerating education for the youth, supporting women
              empowerment and championing sustainable practices across all our
              operations. We firmly believe that real progress is not just
              quantified by technological innovation, but by the positive
              influence and enhancement we create in the communities we serve.
              Our attempts are strongly rooted in empathy, bringing out the
              potential of empowering leadership. We are dedicated to lighting
              and raising up the deprived and needy communities through our
              programs. As we create and rise in the vertical mobility sector,
              we are more focused on enhancing lifestyles and venturing on a new
              journey of chanceful opportunities exclusively in the world where
              we are building for our future generations.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Projects Teaser Section */}
<section className="py-16 px-6">
  <div className="container mx-auto text-center max-w-3xl">
    <h2 className="text-4xl font-bold text-foreground mb-4">
      Projects & Case Studies
    </h2>
    <p className="text-muted-foreground mb-6">
      Discover how Yatra Elevators & Escalators is transforming
      infrastructure with innovative solutions across India.
    </p>
    <motion.a
  href="/casestudies"
  className="inline-block px-6 py-3 rounded-full 
             bg-surface-glass/60 backdrop-blur-md 
             border border-neon-cyan/50 
             text-neon-cyan font-semibold 
             hover:bg-neon-cyan hover:text-black 
             transition-all duration-300"
  whileHover={{ scale: 1.08 }}
>
  Learn More
</motion.a>

  </div>
</section>


      <Footer />
    </PageLoadWrapper>
  );
};

export default About;