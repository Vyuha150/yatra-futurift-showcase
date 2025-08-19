import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const images = ["src/assets/Passenger Elevators.png", 
   "public/hospital elevators.png",
    "public/cabin4.jpeg", 
    "public/cabin5.jpeg",
    "src/assets/Public Transport Escalators.png"];
const elevatorNames = [
  "Passenger Elevator",
  "Hospital Elevator",
  "Capsule Elevator",
  "Home Elevator",
  "Escalators",
  
];

// Add the routes corresponding to each elevator
const elevatorRoutes = [
  "/passenger-elevator",
  "/hospital-elevator",
  "/glass-elevator",
  "/home-elevator",
  "/public-transport-escalators",
];

export default function ImageStack() {
  const [hovered, setHovered] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-64 sm:h-72 md:h-80 lg:h-96 gap-0 relative">
      {images.map((src, idx) => (
        <motion.div
          key={src}
          className="relative cursor-pointer"
          style={{
            zIndex: hovered === idx ? 10 : idx,
            marginLeft: idx === 0 ? 0 : -24,
          }}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => navigate(elevatorRoutes[idx])} // Redirect on click
          animate={{
            scale: hovered === idx ? 1.5 : 1,
            x:
              hovered !== null && hovered !== idx
                ? idx < hovered
                  ? -30
                  : 30
                : 0,
            filter: "none",
            boxShadow:
              hovered === idx
                ? "0 12px 48px 0 rgba(0, 230, 255, 0.35), 0 0 0 6px hsl(var(--neon-cyan) / 0.4)"
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
              className="text-[hsl(var(--neon-cyan))] font-bold text-[10px] text-center px-2 py-1 bg-blue-900/80 backdrop-blur-sm rounded-lg border border-blue-400/50 shadow-lg"
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
