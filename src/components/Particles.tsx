import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  type: 'circle' | 'square' | 'triangle';
}

const Particles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const colors = [
        "rgba(0, 255, 255, 0.8)", // bright neon-cyan
        "rgba(0, 150, 255, 0.7)", // bright neon-blue
        "rgba(0, 255, 150, 0.6)", // bright neon-green
        "rgba(255, 100, 255, 0.5)", // bright purple
        "rgba(255, 255, 255, 0.4)", // bright white
        "rgba(255, 200, 0, 0.6)", // golden
      ];

      const types: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];

      // Create more particles with better distribution
      for (let i = 0; i < 80; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 2, // Larger particles (2-8px)
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 15 + 8, // Slower movement
          delay: Math.random() * 3,
          type: types[Math.floor(Math.random() * types.length)],
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const renderParticle = (particle: Particle) => {
    const baseClasses = "absolute";
    const style = {
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      filter: 'blur(0.5px)',
    };

    switch (particle.type) {
      case 'circle':
        return (
          <div
            className={`${baseClasses} rounded-full`}
            style={{
              ...style,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
          />
        );
      case 'square':
        return (
          <div
            className={`${baseClasses} rotate-45`}
            style={{
              ...style,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 1.5}px ${particle.color}`,
            }}
          />
        );
      case 'triangle':
        return (
          <div
            className={`${baseClasses}`}
            style={{
              ...style,
              width: 0,
              height: 0,
              borderLeft: `${particle.size / 2}px solid transparent`,
              borderRight: `${particle.size / 2}px solid transparent`,
              borderBottom: `${particle.size}px solid ${particle.color}`,
              filter: `drop-shadow(0 0 ${particle.size}px ${particle.color})`,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
            rotate: [0, 360],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {renderParticle(particle)}
        </motion.div>
      ))}

      {/* Floating geometric shapes with glow */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
            y: [0, -80, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.5, 0.8],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {i % 4 === 0 ? (
            <div 
              className="w-4 h-4 border-2 border-neon-cyan rotate-45" 
              style={{
                boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)',
                backgroundColor: 'rgba(0, 255, 255, 0.1)',
              }}
            />
          ) : i % 4 === 1 ? (
            <div 
              className="w-5 h-5 rounded-full border-2 border-neon-blue" 
              style={{
                boxShadow: '0 0 12px rgba(0, 150, 255, 0.6)',
                backgroundColor: 'rgba(0, 150, 255, 0.1)',
              }}
            />
          ) : i % 4 === 2 ? (
            <div 
              className="w-3 h-3 rotate-45"
              style={{
                backgroundColor: 'rgba(0, 255, 150, 0.7)',
                boxShadow: '0 0 8px rgba(0, 255, 150, 0.8)',
              }}
            />
          ) : (
            <div 
              className="w-6 h-1 rotate-45"
              style={{
                backgroundColor: 'rgba(255, 100, 255, 0.6)',
                boxShadow: '0 0 6px rgba(255, 100, 255, 0.8)',
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Connecting lines effect */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute"
          style={{
            left: `${10 + i * 15}%`,
            top: `${Math.random() * 100}%`,
            width: '2px',
            height: '60px',
            background: 'linear-gradient(to bottom, transparent, rgba(0, 255, 255, 0.4), transparent)',
          }}
          animate={{
            y: [0, -200],
            opacity: [0, 1, 0],
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glowing orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '20px',
            height: '20px',
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.6) 0%, transparent 70%)',
            filter: 'blur(1px)',
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 25 + Math.random() * 10,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Particles;