import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=480&h=768&q=85",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=480&h=768&q=85",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=480&h=768&q=85",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=480&h=768&q=85",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=480&h=768&q=85",
];

export default function ImageStack() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex items-end justify-center h-64 sm:h-72 md:h-80 lg:h-96 gap-0 relative">
      {images.map((src, idx) => (
        <motion.div
          key={src}
          className="relative cursor-pointer"
          style={{
            zIndex: hovered === idx ? 10 : idx,
            marginLeft: idx === 0 ? 0 : -24, // Reduced overlap for mobile
          }}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
          animate={{
            scale: hovered === idx ? 1.3 : 1, // Increased from 1.15 to 1.3 (30% larger)
            x:
              hovered !== null && hovered !== idx
                ? idx < hovered
                  ? -20 // Increased movement to accommodate larger scale
                  : 20
                : 0,
            filter:
              hovered !== null && hovered !== idx
                ? "blur(2px) grayscale(60%)"
                : "none",
            boxShadow:
              hovered === idx
                ? "0 12px 48px 0 rgba(0, 230, 255, 0.35), 0 0 0 6px hsl(var(--neon-cyan) / 0.4)" // Enhanced glow effect
                : "0 2px 8px 0 rgba(0,0,0,0.10)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <img
            src={src}
            alt={`Stacked ${idx}`}
            className="w-28 h-44 sm:w-32 sm:h-48 md:w-36 md:h-56 lg:w-40 lg:h-64 object-cover rounded-xl border-2 border-white shadow-lg select-none"
            draggable={false}
          />
        </motion.div>
      ))}
    </div>
  );
}
