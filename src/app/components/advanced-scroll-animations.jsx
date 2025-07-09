"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"

// Parallax scroll animation
export const ParallaxScrollAnimation = ({ children, speed = 0.5, className = "", ...props }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

  return (
    <motion.div ref={ref} style={{ y }} className={className} {...props}>
      {children}
    </motion.div>
  )
}

// Scale on scroll animation with both directions
export const ScaleScrollAnimation = ({
  children,
  scaleRange = [0.8, 1],
  threshold = 0.1,
  triggerOnce = false, // Changed to false
  className = "",
  rootMargin = "0px 0px -10px 0px",
  ...props
}) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  const variants = {
    hidden: {
      opacity: 0,
      scale: scaleRange[0],
    },
    visible: {
      opacity: 1,
      scale: scaleRange[1],
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasAnimated || !triggerOnce) {
            controls.start("visible")
            if (triggerOnce) {
              setHasAnimated(true)
            }
          }
        } else if (!triggerOnce) {
          controls.start("hidden")
        }
      },
      { threshold, rootMargin },
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
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className} {...props}>
      {children}
    </motion.div>
  )
}

// Rotate on scroll animation with both directions
export const RotateScrollAnimation = ({
  children,
  rotation = 360,
  threshold = 0.1,
  triggerOnce = false, // Changed to false
  className = "",
  rootMargin = "0px 0px -10px 0px",
  ...props
}) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  const variants = {
    hidden: {
      opacity: 0,
      rotate: -rotation / 4,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasAnimated || !triggerOnce) {
            controls.start("visible")
            if (triggerOnce) {
              setHasAnimated(true)
            }
          }
        } else if (!triggerOnce) {
          controls.start("hidden")
        }
      },
      { threshold, rootMargin },
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
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className} {...props}>
      {children}
    </motion.div>
  )
}

// New: Fade Animation with both directions
export const FadeScrollAnimation = ({
  children,
  threshold = 0.1,
  triggerOnce = false,
  className = "",
  rootMargin = "0px 0px -10px 0px",
  duration = 0.6,
  delay = 0,
  ...props
}) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasAnimated || !triggerOnce) {
            controls.start("visible")
            if (triggerOnce) {
              setHasAnimated(true)
            }
          }
        } else if (!triggerOnce) {
          controls.start("hidden")
        }
      },
      { threshold, rootMargin },
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
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className} {...props}>
      {children}
    </motion.div>
  )
}
