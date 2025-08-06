import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode, ButtonHTMLAttributes } from "react";

// Type definitions for component props
interface PageLoadWrapperProps {
  children: ReactNode;
}

interface AnimatedNavProps {
  children: ReactNode;
}

interface SplitTextAnimationProps {
  text: string;
  className?: string;
}

interface SlideInAnimationProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
}

interface StaggeredCardsContainerProps {
  children: ReactNode;
}

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
}

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
}

interface SectionScaleAnimationProps {
  children: ReactNode;
}

interface FooterSlideUpProps {
  children: ReactNode;
}

// Page Load Animation Wrapper
export const PageLoadWrapper = ({ children }: PageLoadWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="min-h-screen bg-background"
    >
      {children}
    </motion.div>
  );
};

// Animated Navigation
export const AnimatedNav = ({ children }: AnimatedNavProps) => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-surface-glass backdrop-blur-lg border-b border-border"
    >
      {children}
    </motion.nav>
  );
};

// Split Text Animation
export const SplitTextAnimation = ({
  text,
  className = "",
}: SplitTextAnimationProps) => {
  const words = text.split(" ");

  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: i * 0.1 + 0.5,
            ease: "easeOut",
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

// Slide In Animation
export const SlideInAnimation = ({
  children,
  direction = "right",
  delay = 0,
}: SlideInAnimationProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? -50 : direction === "down" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Staggered Card Animation
export const StaggeredCardsContainer = ({
  children,
}: StaggeredCardsContainerProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Individual Card Animation
export const AnimatedCard = ({
  children,
  className = "",
}: AnimatedCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { y: 50, opacity: 0, scale: 0.95 },
        visible: { y: 0, opacity: 1, scale: 1 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.3)",
        transition: { duration: 0.2 },
      }}
      className={`${className} transition-all duration-300`}
    >
      {children}
    </motion.div>
  );
};

// Floating Animation
export const FloatingElement = ({
  children,
  delay = 0,
}: FloatingElementProps) => {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

// Section Scale Animation
export const SectionScaleAnimation = ({
  children,
}: SectionScaleAnimationProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Glow Button Animation
interface GlowButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: string;
  variant?: string;
}

export const GlowButton = ({
  children,
  className = "",
  ...props
}: GlowButtonProps) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 30px rgba(0, 255, 255, 0.6)",
      }}
      whileTap={{
        scale: 0.95,
        boxShadow: "0 0 50px rgba(0, 255, 255, 0.8)",
      }}
      transition={{ duration: 0.2 }}
      className={`${className} relative overflow-hidden`}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.button>
  );
};

// Background Gradient Animation
export const AnimatedBackground = () => {
  return (
    <motion.div
      className="absolute inset-0 -z-10"
      animate={{
        background: [
          "linear-gradient(45deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 0, 255, 0.1) 100%)",
          "linear-gradient(225deg, rgba(255, 0, 255, 0.1) 0%, rgba(0, 255, 255, 0.1) 100%)",
          "linear-gradient(45deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 0, 255, 0.1) 100%)",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

// Footer Slide Up Animation
export const FooterSlideUp = ({ children }: FooterSlideUpProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.footer
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.footer>
  );
};
