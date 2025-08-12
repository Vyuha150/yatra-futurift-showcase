import React, { useState } from "react";
import { motion } from "framer-motion";

const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];
const elevatorNames = [
  "Passenger Elevator",
  "Freight Elevator",
  "Hospital Elevator",
  "Glass Elevator",
  "Home Elevator",
];

export default function ImageStack() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex items-center justify-center h-64 sm:h-72 md:h-80 lg:h-96 gap-0 relative">
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
            scale: hovered === idx ? 1.5 : 1, // Increased from 1.3 to 1.5 (50% larger)
            x:
              hovered !== null && hovered !== idx
                ? idx < hovered
                  ? -30 // Increased movement to accommodate larger scale
                  : 30
                : 0,
            filter: "none", // Remove blur effect
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
          {/* Elevator Name Overlay */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 flex items-end justify-center p-2 rounded-b-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: hovered === idx ? 1 : 0,
              y: hovered === idx ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: "none" }}
          >
            <motion.span
              className="text-blue-300 font-bold text-sm md:text-base lg:text-lg text-center px-3 py-2 bg-blue-900/80 backdrop-blur-sm rounded-lg border border-blue-400/50 shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{
                scale: hovered === idx ? 1 : 0.8,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {elevatorNames[idx]}
            </motion.span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
