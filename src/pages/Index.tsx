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
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <TestimonialsSection />
      <ProcessSection />
      <ComparisonSection />
      <Footer />
    </div>
  );
};

export default Index;
