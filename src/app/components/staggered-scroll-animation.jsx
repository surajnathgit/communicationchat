"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const StaggeredScrollAnimation = ({
  children,
  direction = "up",
  distance = 50,
  duration = 0.6,
  staggerDelay = 0.1,
  threshold = 0.1,
  triggerOnce = false,
  className = "",
  rootMargin = "0px 0px -10px 0px",
  ...props
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

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
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    };
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (inView && (!hasAnimated || !triggerOnce)) {
      controls.start("visible");
      if (triggerOnce) setHasAnimated(true);
    } else if (!inView && !triggerOnce) {
      controls.start("hidden");
    }
  }, [inView, controls, triggerOnce, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={getVariants()}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
};

export default StaggeredScrollAnimation;
