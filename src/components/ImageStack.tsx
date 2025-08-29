import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const images = [
  "/src/images/Yatra website_Passenger.png",
  "/src/images/Yatra website_Hospital  .png",
  "/src/images/Yatra website_capsule.png",
  "/src/images/Yatra website_Home.png",
  "/src/images/Yatra website_Commercial Escalators.png",
];
const elevatorNames = [
  "Passenger Elevator",
  "Hospital Elevator",
  "Capsule Elevator",
  "Home Elevator",
  "Escalators",
];
const elevatorRoutes = [
  "/passenger-elevators",
  "/hospital-elevators",
  "/glass-elevators",
  "/home-elevators",
  "/public-transport-escalators",
];

export default function ImageStack() {
  const [center, setCenter] = useState(2);
  const navigate = useNavigate();

  // Infinite loop effect (auto-play)
  useEffect(() => {
    const interval = setInterval(() => {
      setCenter((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Get indices for left2, left, center, right, right2
  const getIndices = () => {
    const left2 = (center - 2 + images.length) % images.length;
    const left = (center - 1 + images.length) % images.length;
    const right = (center + 1) % images.length;
    const right2 = (center + 2) % images.length;
    return [left2, left, center, right, right2];
  };
  const [left2Idx, leftIdx, centerIdx, rightIdx, right2Idx] = getIndices();

  // Manual navigation
  const goLeft = () => {
    setCenter((prev) => (prev - 1 + images.length) % images.length);
  };
  const goRight = () => {
    setCenter((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="flex items-center justify-center h-64 sm:h-72 md:h-80 lg:h-96 gap-0 relative">
      {/* Left Button */}
      <button
        className="absolute left-0 z-20 bg-transparent rounded-full p-2 shadow-lg border border-neon-cyan"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        onClick={goLeft}
        aria-label="Previous"
      >
        <span className="text-2xl text-neon-cyan">&#8592;</span>
      </button>

      {/* Image Stack */}
      {[left2Idx, leftIdx, centerIdx, rightIdx, right2Idx].map((idx, pos) => (
        <motion.div
          key={images[idx]}
          className="relative cursor-pointer"
          style={{
            zIndex: pos === 2 ? 10 : pos,
            marginLeft: pos === 0 ? 0 : -24,
          }}
          onClick={() => navigate(elevatorRoutes[idx])}
          animate={{
            scale: pos === 2 ? 1.5 : pos === 0 || pos === 4 ? 0.75 : 1,
            x:
              pos === 0
                ? -60
                : pos === 1
                ? -30
                : pos === 3
                ? 30
                : pos === 4
                ? 60
                : 0,
            boxShadow:
              pos === 2
                ? "0 12px 48px 0 rgba(0, 230, 255, 0.35)"
                : "0 2px 8px 0 rgba(0,0,0,0.10)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <img
            src={images[idx]}
            alt={`Stacked ${idx}`}
            className={`w-28 h-44 sm:w-32 sm:h-48 md:w-36 md:h-56 lg:w-40 lg:h-64 object-cover rounded-xl border-2 border-white shadow-lg select-none transition-transform duration-300 ${
              pos === 0 || pos === 4 ? "blur-sm brightness-20" : ""
            } ${pos === 2 ? "hover:scale-110" : ""}`}
            draggable={false}
          />
          {/* Elevator Name Overlay */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 flex items-end justify-center p-2 rounded-b-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: pos === 2 ? 1 : 0,
              y: pos === 2 ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: "none" }}
          >
            <motion.span
              className="text-[hsl(var(--neon-cyan))] font-bold text-[10px] text-center px-2 py-1 bg-blue-900/80 backdrop-blur-sm rounded-lg border border-blue-400/50 shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{
                scale: pos === 2 ? 1 : 0.8,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {elevatorNames[idx]}
            </motion.span>
          </motion.div>
        </motion.div>
      ))}

      {/* Right Button */}
      <button
        className="absolute right-0 z-20 bg-transparent rounded-full p-2 shadow-lg border border-neon-cyan"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        onClick={goRight}
        aria-label="Next"
      >
        <span className="text-2xl text-neon-cyan">&#8594;</span>
      </button>
    </div>
  );
}
