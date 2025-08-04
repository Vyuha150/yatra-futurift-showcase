import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProcessSection from '@/components/ProcessSection';
import ComparisonSection from '@/components/ComparisonSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { 
  PageLoadWrapper, 
  AnimatedNav, 
  SlideInAnimation, 
  SectionScaleAnimation,
  FooterSlideUp,
  AnimatedBackground
} from '@/components/AnimatedComponents';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a minimum loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <PageLoadWrapper>
      <CustomCursor />
      <AnimatedBackground />
      <AnimatedNav>
        <Navigation />
      </AnimatedNav>
      <HeroSection />
      <SlideInAnimation direction="up" delay={0.2}>
        <AboutSection />
      </SlideInAnimation>
      <SectionScaleAnimation>
        <ProductsSection />
      </SectionScaleAnimation>
      <SlideInAnimation direction="left" delay={0.1}>
        <TestimonialsSection />
      </SlideInAnimation>
      <SlideInAnimation direction="right" delay={0.1}>
        <ProcessSection />
      </SlideInAnimation>
      <SectionScaleAnimation>
        <ComparisonSection />
      </SectionScaleAnimation>
      <FooterSlideUp>
        <Footer />
      </FooterSlideUp>
    </PageLoadWrapper>
  );
};

export default Index;
