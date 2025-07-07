"use client"
import { useCallback, useEffect, useRef, useState } from "react"

const ParticleBackground = ({
  count = 50,
  colors = ["#8B5CF6", "#A855F7", "#C084FC", "#DDD6FE"],
  minSize = 2,
  maxSize = 6,
  speed = 0.5,
  connected = true,
  className = "",
}) => {
  /* -------- refs / state ------------------------------------------------- */
  const particlesRef = useRef([])
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const [dims, setDims] = useState({ width: 0, height: 0 })
  const [isVisible, setIsVisible] = useState(true)

  /* -------- helpers ------------------------------------------------------ */
  const initParticles = useCallback(
    (w, h) => {
      const arr = []
      // Adjust particle count based on screen size
      const adjustedCount = w < 768 ? Math.floor(count * 0.5) : w < 1024 ? Math.floor(count * 0.7) : count

      for (let i = 0; i < adjustedCount; i++) {
        arr.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * (maxSize - minSize) + minSize,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
      particlesRef.current = arr
    },
    [count, maxSize, minSize, colors, speed],
  )

  /* -------- visibility detection for performance ----------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (canvasRef.current) {
      observer.observe(canvasRef.current)
    }

    return () => observer.disconnect()
  }, [])

  /* -------- window resize ----------------------------------------------- */
  useEffect(() => {
    const handle = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setDims({ width, height })
    }

    handle()
    window.addEventListener("resize", handle)
    return () => window.removeEventListener("resize", handle)
  }, [])

  /* -------- (re)create particles when size changes ----------------------- */
  useEffect(() => {
    if (dims.width && dims.height) {
      initParticles(dims.width, dims.height)
    }
  }, [dims, initParticles])

  /* -------- animation loop ---------------------------------------------- */
  useEffect(() => {
    if (!canvasRef.current || !dims.width || !dims.height || !isVisible) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      return
    }

    const canvas = canvasRef.current
    canvas.width = dims.width
    canvas.height = dims.height
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const maxDist = dims.width < 768 ? 100 : 150 // Reduce connection distance on mobile

    const render = () => {
      if (!isVisible) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const ps = particlesRef.current

      // update & draw particles
      for (const p of ps) {
        p.x += p.speedX
        p.y += p.speedY

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

        // Keep particles in bounds
        p.x = Math.max(0, Math.min(canvas.width, p.x))
        p.y = Math.max(0, Math.min(canvas.height, p.y))

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle =
          p.color +
          Math.floor(p.opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()
      }

      // connections (reduce on mobile for performance)
      if (connected && dims.width >= 768) {
        ctx.lineWidth = 0.5
        for (let i = 0; i < ps.length; i++) {
          for (let j = i + 1; j < ps.length; j++) {
            const p1 = ps[i]
            const p2 = ps[j]
            const dx = p1.x - p2.x
            const dy = p1.y - p2.y
            const dist = Math.hypot(dx, dy)
            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist) * 0.3
              ctx.strokeStyle = `rgba(139,92,246,${alpha})`
              ctx.beginPath()
              ctx.moveTo(p1.x, p1.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.stroke()
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dims, connected, isVisible])

  /* -------- render ------------------------------------------------------- */
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
      className={className}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  )
}

export default ParticleBackground
