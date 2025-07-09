"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"

const StaggeredScrollAnimation = ({
  children,
  direction = "up",
  distance = 50,
  duration = 0.6,
  staggerDelay = 0.1,
  threshold = 0.1,
  triggerOnce = false, // Changed to false for repeat animations
  className = "",
  rootMargin = "0px 0px -10px 0px",
  ...props
}) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  const getVariants = () => {
    const directions = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
    }

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
    }
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element is visible - animate in
          if (!hasAnimated || !triggerOnce) {
            controls.start("visible")
            if (triggerOnce) {
              setHasAnimated(true)
            }
          }
        } else {
          // Element is not visible - animate out
          if (!triggerOnce) {
            controls.start("hidden")
          }
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls, threshold, triggerOnce, hasAnimated, rootMargin])

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
  )
}

export default StaggeredScrollAnimation
