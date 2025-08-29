import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  link: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
  currentProduct: number;
}

const ProductCard = ({ product, index, currentProduct }: ProductCardProps) => {
  const totalProducts = 6; // Total number of products

  return (
    <div className="card-glow p-8 transition-all duration-500 h-auto flex flex-col">
      {/* Progress Indicator */}
      <div className="flex space-x-1 mb-6">
        {[...Array(totalProducts)].map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === index ? "bg-neon-cyan" : "bg-border"
            }`}
            style={{ width: i === index ? "24px" : "8px" }}
          />
        ))}
        <span className="text-xs text-muted-foreground ml-2">{product.id}</span>
      </div>

      {/* Product Image */}
      <div className="mb-6 relative overflow-hidden rounded-lg">
        <img
  src={product.image}
  alt={product.title}
  className="w-full aspect-[3/2] object-cover rounded-xl hover:scale-105 transition-transform"
/>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
  <Button asChild className="btn-outline group w-full mt-4">
    <Link to={product.link}>
      Learn more
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </Link>
  </Button>
</div>

      </div>
    </div>
  );
};

const ProductsSection = () => {
  const [currentProduct, setCurrentProduct] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    fetch(`${apiUrl}/api/products`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  
  const featured = [
  {
    image: "/src/images/Yatra website400x600_Passenger Elevators.png",
    title: "Passenger Elevator",
    description: "Yatra's Passenger Elevators are contemplatively designed to provide serene, calm and most significant vertical mobility ",
    features: [
      "Advanced technology integration",
      "Noise-optimized systems",
      "Customizable cabin finishes",
      "Safety protocols",
    ],
    link: "/passenger-elevators", 
  },
  {
    image: "/src/images/Yatra website400x600_Home Elevators.png",
    title: "Home Elevators",
    description: "Yatra’s Elevators promote jubilant, elegant and enhancing incredible environments into your residence.",
    features: [
      "Capacity monitoring",
      "High tech mobility solutions",
      "Backup system",
      "Pathogen resistance",
    ],
    link: "/home-elevators",
  },
  {
    image: "/src/images/Yatra website_Hydraulic elevators(size - 400-300).png",
    title: "Hydraulic Elevators",
    description: "Yatra’s Hydraulic Elevators are developed for positioning them as the perfect choice of residence with uncluttered and expansive optimisation.",
    features: [
      "Developed for positioning",
      "Uncluttered and expansive optimisation",
      "Safety and Impenetrable security",
      "Tamper-proof protection",
    ],
    link: "/hydraulic",
  },
  {
    image: "/src/images/Yatra website400x600_Commercial escalators.png",
    title: "Commercial Escalators",
    description: "Yatra’s Commercial Escalators designed for people and users...",
    features: [
      "High Standards visuals",
      "Uncompromisable Security Systems",
      "Safety and Impenetrable security",
      "Durability and lift mobility",
    ],
    link: "/commercial", 
  },
  {
    image: "/src/images/Yatra website400x600_Moving walk ways escalators.png",
    title: "Moving WalkWay Escalators",
    description: "Yatra’s Travelators provide perfect horizontal transportation across large spaces.",
    features: [
      "Transportation across large spaces",
      "Designed with user friendly",
      "Conglomerate strength",
      "Cutting-edge technology",
    ],
    link: "/moving-walkways-escalators", 
  },
  {
    image: "/src/images/Yatra website400x600_Public transport escalators.png",
    title: "Public Transport Escalators",
    description: "Yatra’s public transport Escalators are reliable and energy-efficient...",
    features: [
      "Heavy passenger load handling",
      "Energy-efficient drives",
      "Anti-slip steps and safety features",
      "Low-noise operation",
    ],
    link: "/public-transport-escalators", 
  },
];

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

        {/* ⭐ Showcase Grid (6 Images with description & features) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
         {featured.map((item, i) => (
  <div
    key={i}
    className="card-glow bg-surface p-6 rounded-2xl shadow-lg hover:shadow-neon-cyan/40 transition"
  >
    <div className="mb-4 overflow-hidden rounded-xl">
      <img
        src={item.image}
        alt={item.title}
        className="w-full aspect-[3/2] object-cover rounded-xl hover:scale-105 transition-transform"
      />
    </div>
    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
    <ul className="space-y-1">
      {item.features.map((f, idx) => (
        <li
          key={idx}
          className="flex items-center text-sm text-muted-foreground"
        >
          <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-2"></span>
          {f}
        </li>
      ))}
    </ul>

    {/* ✅ Learn More Button */}
    <Button asChild className="btn-outline group w-full mt-4">
      <Link to={item.link}>
        Learn more
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </Button>
  </div>
))}

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

        {/* Explore More Button */}
        <div className="text-center pb-10">
          <Button
            className="btn-primary group px-8 py-4 text-lg"
            onClick={() => (window.location.href = "/projects")}
          >
            <span>Explore More Products & Solutions</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Virtual Demo Section */}
        <div className="card-glow p-8 lg:p-12 bg-gradient-to-r from-brand-slate to-brand-slate-light relative overflow-hidden mb-16">
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
