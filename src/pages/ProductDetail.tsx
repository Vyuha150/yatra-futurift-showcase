import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import {
  PageLoadWrapper,
  AnimatedNav,
  AnimatedBackground,
} from "@/components/AnimatedComponents";

// Import images statically
import homeElevator from "@/assets/Residential Elevators.png";
import capsuleElevator from "@/assets/Capsule Elevators (Panoramic).png";
import hospitalElevator from "@/assets/Bed Elevators.png";
import goodsElevator from "@/assets/Service Elevators.png";
import escalator from "@/assets/Commercial Escalators.png";
import dumbwaiter from "@/assets/Machine-Room Less (MRL) Elevators.png";

interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const productData: Product[] = [
  {
    id: "01",
    title: "Home Elevators",
    description:
      "Premium home elevators offering smooth, quiet and efficient vertical movement in residential buildings. Designed with comfort and style in mind.",
    features: ["Compact Design", "Energy Efficient", "Silent Operation", "Custom Interiors"],
    image: homeElevator,
  },
  {
    id: "02",
    title: "Capsule Elevators",
    description:
      "Glass elevators for commercial and luxury spaces offering panoramic views and elegant engineering.",
    features: ["360° Views", "Weather Resistant", "LED Lighting", "Premium Finish"],
    image: capsuleElevator,
  },
  {
    id: "03",
    title: "Hospital Elevators",
    description:
      "Reliable hospital elevators designed for stretchers, medical equipment, and smooth patient transportation.",
    features: ["Stretcher Compatible", "Infection Control", "Emergency Backup", "Silent Operation"],
    image: hospitalElevator,
  },
  {
    id: "04",
    title: "Goods Elevators",
    description:
      "Heavy-duty elevators for factories, warehouses, and malls to handle large loads safely and efficiently.",
    features: ["High Load Capacity", "Industrial Grade", "Safety Systems", "Multiple Entry Points"],
    image: goodsElevator,
  },
  {
    id: "05",
    title: "Escalators",
    description:
      "Modern escalator systems for airports, malls, and metros, with energy-saving and safety innovations.",
    features: ["Smart Controls", "Energy Saving", "Safety Sensors", "Weather Protection"],
    image: escalator,
  },
  {
    id: "06",
    title: "Dumbwaiters",
    description:
      "Space-efficient lifts for moving small loads like food or files in hotels, restaurants, and homes.",
    features: ["Space Efficient", "Quiet Operation", "Food Grade Materials", "Easy Maintenance"],
    image: dumbwaiter,
  },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  // Intersection Observer hook for animation trigger
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const found = productData.find((p) => p.id === id);
    setProduct(found || null);
  }, [id]);

  if (!product) {
    return (
      <PageLoadWrapper>
        <div className="min-h-screen flex flex-col">
          <CustomCursor />
          <AnimatedBackground />
          <AnimatedNav>
            <Navigation />
          </AnimatedNav>

          <main className="flex-grow container mx-auto px-6 py-20 flex flex-col items-center justify-center text-center">
            <p className="text-lg text-muted-foreground mb-6">Product not found.</p>
            <Button onClick={() => navigate("/projects")}>Back to Products</Button>
          </main>

          <Footer />
        </div>
      </PageLoadWrapper>
    );
  }

  return (
    <PageLoadWrapper>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <CustomCursor />
        <AnimatedBackground />
        <AnimatedNav>
          <Navigation />
        </AnimatedNav>

        <motion.main
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 py-20 flex-grow"
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/projects")}
            className="mb-10 flex items-center space-x-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Products</span>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <h1 className="text-4xl font-extrabold text-gradient">{product.title}</h1>
              <p className="text-muted-foreground leading-relaxed text-lg">{product.description}</p>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Features</h2>
                <ul className="space-y-3 list-disc list-inside text-muted-foreground text-base">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={() => navigate("/contact")}
                className="btn-primary px-8 py-4 text-lg mt-8"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </motion.main>

        <Footer />
      </div>
    </PageLoadWrapper>
  );
};

export default ProductDetail;
