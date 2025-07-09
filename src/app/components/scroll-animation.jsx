"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollAnimation = ({
  children,
  direction = "up", // up, down, left, right
  distance = 50,
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
  triggerOnce = false,
  className = "",
  rootMargin = "0px 0px -10px 0px",
  ...props
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Define animation variants based on direction
  const getVariants = () => {
    const directions = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
    };

    return {
      hidden: {
        opacity: 0,
        ...directions[direction],
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    };
  };

  useEffect(() => {
    // Skip if ref is not available
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Wrap animation trigger in try-catch for safety
        try {
          if (entry.isIntersecting) {
            if (!hasAnimated || !triggerOnce) {
              controls.start("visible").catch((err) => {
                console.error("Animation start failed:", err);
              });
              if (triggerOnce) {
                setHasAnimated(true);
              }
            }
          } else if (!triggerOnce) {
            controls.start("hidden").catch((err) => {
              console.error("Animation reset failed:", err);
            });
          }
        } catch (err) {
          console.error("IntersectionObserver error:", err);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Store ref.current in a variable to avoid stale closure issues
    const currentRef = ref.current;
    observer.observe(currentRef);

    // Cleanup observer on unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls, threshold, triggerOnce, hasAnimated, rootMargin, direction, distance, duration, delay]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;