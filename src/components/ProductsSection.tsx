import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight, Play } from "lucide-react";

interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
}

interface ProductCardProps {
  product: Product;
  index: number;
  currentProduct: number;
}

const ProductCard = ({ product, index, currentProduct }: ProductCardProps) => {
  return (
    <div className="card-glow p-8 transition-all duration-500 h-[480px] flex flex-col">
      {/* Progress Indicator */}
      <div className="flex space-x-1 mb-6">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="h-1 rounded-full transition-all duration-300 bg-border"
            style={{ width: i === 0 ? "24px" : "8px" }}
          />
        ))}
        <span className="text-xs text-muted-foreground ml-2">{product.id}</span>
      </div>

      <div className="space-y-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            {product.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {product.description}
          </p>
        </div>

        <div className="space-y-2 min-h-[120px]">
          {product.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full flex-shrink-0"></div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <Button className="btn-outline group w-full">
            Learn more
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const [currentProduct, setCurrentProduct] = useState<number>(0);

  const products: Product[] = [
    {
      id: "01",
      title: "Home Elevators",
      description:
        "Whether it's for receiving guests or day-to-day accessibility, our premium home elevators allow you to move between floors within your residence with ease and comfort.",
      features: [
        "Compact Design",
        "Energy Efficient",
        "Silent Operation",
        "Custom Interiors",
      ],
    },
    {
      id: "02",
      title: "Capsule Elevators",
      description:
        "Transparent glass elevators that offer scenic views while ensuring safety and reliability. Perfect for hotels, malls, and premium residential buildings.",
      features: [
        "360° Views",
        "Weather Resistant",
        "LED Lighting",
        "Premium Finish",
      ],
    },
    {
      id: "03",
      title: "Hospital Elevators",
      description:
        "Specially designed for medical facilities with stretcher compatibility, smooth operation, and infection control features for patient safety.",
      features: [
        "Stretcher Compatible",
        "Infection Control",
        "Emergency Backup",
        "Silent Operation",
      ],
    },
    {
      id: "04",
      title: "Goods Elevators",
      description:
        "Heavy-duty freight elevators designed for industrial and commercial use with superior load capacity and durability.",
      features: [
        "High Load Capacity",
        "Industrial Grade",
        "Safety Systems",
        "Multiple Entry Points",
      ],
    },
    {
      id: "05",
      title: "Escalators",
      description:
        "Modern escalator systems for shopping malls, airports, and commercial complexes with advanced safety features.",
      features: [
        "Smart Controls",
        "Energy Saving",
        "Safety Sensors",
        "Weather Protection",
      ],
    },
    {
      id: "06",
      title: "Dumbwaiters",
      description:
        "Small freight elevators perfect for restaurants, hotels, and homes for efficient material transport between floors.",
      features: [
        "Space Efficient",
        "Quiet Operation",
        "Food Grade Materials",
        "Easy Maintenance",
      ],
    },
  ];

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Products
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={prevProduct}
              className="w-12 h-12 rounded-full bg-surface border border-border hover:border-neon-cyan transition-colors flex items-center justify-center group"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
            </button>
            <button
              onClick={nextProduct}
              className="w-12 h-12 rounded-full bg-surface border border-border hover:border-neon-cyan transition-colors flex items-center justify-center group"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
            </button>
          </div>
        </div>

        {/* Product Cards Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              currentProduct={currentProduct}
            />
          ))}
        </div>

        {/* Virtual Demo Section */}
        <div className="card-glow p-8 lg:p-12 bg-gradient-to-r from-brand-slate to-brand-slate-light relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-neon-cyan text-sm font-semibold mb-2">
                  YATRA ELEVATORS
                </p>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Feel free to try demo
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We will demonstrate how our products work and explain all the
                  features. Experience our IoT-enabled monitoring system and
                  smart controls.
                </p>
              </div>

              <Button className="btn-accent group">
                <Play className="w-5 h-5 mr-2" />
                Try now
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-video bg-surface-elevated rounded-xl border border-border flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto animate-pulse-glow">
                    <Play className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <p className="text-muted-foreground">
                    Interactive Demo Preview
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-green/30 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border border-neon-cyan rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
