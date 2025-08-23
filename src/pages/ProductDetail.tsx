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

interface Product {
  _id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  link?: string;
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Intersection Observer hook for animation trigger
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
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
            {loading ? (
              <p className="text-lg text-muted-foreground mb-6">Loading...</p>
            ) : (
              <p className="text-lg text-muted-foreground mb-6">
                {error || "Product not found."}
              </p>
            )}
            <Button onClick={() => navigate("/projects")}>
              Back to Products
            </Button>
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
              <h1 className="text-4xl font-extrabold text-gradient">
                {product.title}
              </h1>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {product.description}
              </p>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Key Features
                </h2>
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
