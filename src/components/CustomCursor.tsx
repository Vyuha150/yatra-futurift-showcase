import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isOverInput, setIsOverInput] = useState(false);
  const [isAuthPage, setIsAuthPage] = useState(false);

  useEffect(() => {
    // Check if we're on an auth page
    const checkAuthPage = () => {
      const path = window.location.pathname;
      setIsAuthPage(
        path.includes("/login") ||
          path.includes("/signup") ||
          path.includes("/otp") ||
          path.includes("/auth")
      );
    };

    checkAuthPage();
    window.addEventListener("popstate", checkAuthPage);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const handleInputMouseEnter = () => setIsOverInput(true);
    const handleInputMouseLeave = () => setIsOverInput(false);

    // Add event listeners for mouse movement
    window.addEventListener("mousemove", updateMousePosition);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, [role="button"]'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Add event listeners for input elements
    const inputElements = document.querySelectorAll(
      "input, textarea, [contenteditable]"
    );
    inputElements.forEach((el) => {
      el.addEventListener("mouseenter", handleInputMouseEnter);
      el.addEventListener("mouseleave", handleInputMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("popstate", checkAuthPage);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      inputElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleInputMouseEnter);
        el.removeEventListener("mouseleave", handleInputMouseLeave);
      });
    };
  }, []);

  // Don't show custom cursor on auth pages or when over input fields
  if (isAuthPage || isOverInput) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-neon-cyan rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Trailing glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998]"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%)",
        }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
        }}
      />
    </>
  );
};

export default CustomCursor;
