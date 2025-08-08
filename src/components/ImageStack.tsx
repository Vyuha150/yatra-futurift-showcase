import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
];

export default function ImageStack() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex items-end justify-center h-80 gap-0 relative">
      {images.map((src, idx) => (
        <motion.div
          key={src}
          className="relative cursor-pointer"
          style={{
            zIndex: hovered === idx ? 10 : idx,
            marginLeft: idx === 0 ? 0 : -40,
          }}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
          animate={{
            scale: hovered === idx ? 1.15 : 1,
            x:
              hovered !== null && hovered !== idx
                ? idx < hovered
                  ? -20
                  : 20
                : 0,
            filter:
              hovered !== null && hovered !== idx
                ? "blur(2px) grayscale(60%)"
                : "none",
            boxShadow:
              hovered === idx
                ? "0 8px 32px 0 rgba(0, 230, 255, 0.25), 0 0 0 4px hsl(var(--neon-cyan) / 0.3)"
                : "0 2px 8px 0 rgba(0,0,0,0.10)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <img
            src={src}
            alt={`Stacked ${idx}`}
            className="w-40 h-64 object-cover rounded-xl border-2 border-white shadow-lg select-none"
            draggable={false}
          />
        </motion.div>
      ))}
    </div>
  );
}
