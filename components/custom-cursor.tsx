"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Use motion values for smooth, performant animations without re-renders
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  // Reduced spring stiffness for better performance on lower-end devices
  const springConfig = { stiffness: 300, damping: 30, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const rafRef = useRef<number | null>(null)
  const lastHoverCheckRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // Hide default cursor when custom cursor is active
    document.body.style.cursor = "none"

    // Also apply to all elements to ensure it works everywhere
    const style = document.createElement("style")
    style.textContent = `*, *::before, *::after {
      cursor: none !important;
    }
  `
    document.head.appendChild(style)

    return () => {
      document.body.style.cursor = "auto"
      document.head.removeChild(style)
    }
  }, [])

  useEffect(() => {
    // Use RAF to batch position updates and avoid excessive re-renders
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX)
        cursorY.set(e.clientY)
        if (!isVisible) {
          setIsVisible(true)
        }
      })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => {
      setIsVisible(false)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }

    // Optimized hover detection - only update state when actually needed
    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target === lastHoverCheckRef.current) return

      lastHoverCheckRef.current = target
      const isHoverElement = !!target.closest("a, button, [data-cursor-hover]")

      if (isHoverElement !== isHovering) {
        setIsHovering(isHoverElement)
      }
    }

    const handleHoverEnd = (e: MouseEvent) => {
      const relatedTarget = e.relatedTarget as HTMLElement

      if (
        !relatedTarget ||
        !relatedTarget.closest("a, button, [data-cursor-hover]")
      ) {
        lastHoverCheckRef.current = null
        if (isHovering) {
          setIsHovering(false)
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseover", handleHoverStart, { passive: true })
    document.addEventListener("mouseout", handleHoverEnd, { passive: true })

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleHoverStart)
      document.removeEventListener("mouseout", handleHoverEnd)
    }
  }, [isHovering, isVisible, cursorX, cursorY])

  return (
    <>
      {/* Outer glow layer - pulsing energy halo */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[10000]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(64, 112, 255, 0.4) 0%, rgba(102, 179, 255, 0.2) 40%, transparent 70%)",
          filter: "blur(8px)",
        }}
        animate={{
          scale: isHovering ? 1.5 : [1, 1.3, 1],
          opacity: isVisible ? (isHovering ? 0.6 : [0.4, 0.7, 0.4]) : 0,
        }}
        transition={{
          scale: isHovering
            ? { type: "tween", duration: 0.3, ease: "easeOut" }
            : {
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              },
          opacity: isHovering
            ? { type: "tween", duration: 0.2 }
            : {
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              },
        }}
      />

      {/* Middle glow layer - brighter electric blue */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[10001]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(102, 179, 255, 0.7) 0%, rgba(64, 160, 255, 0.4) 50%, transparent 70%)",
          filter: "blur(4px)",
        }}
        animate={{
          scale: isHovering ? 1.3 : [1, 1.2, 1],
          opacity: isVisible ? (isHovering ? 0.8 : [0.6, 0.85, 0.6]) : 0,
        }}
        transition={{
          scale: isHovering
            ? { type: "tween", duration: 0.3, ease: "easeOut" }
            : {
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
                delay: 0.15,
              },
          opacity: isHovering
            ? { type: "tween", duration: 0.2 }
            : {
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
                delay: 0.15,
              },
        }}
      />

      {/* Core orb - bright cyan center */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[10002]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(165, 213, 255, 0.9) 0%, rgba(102, 179, 255, 0.7) 40%, rgba(64, 160, 255, 0.4) 70%, transparent 100%)",
          boxShadow:
            "0 0 8px rgba(102, 179, 255, 0.6), 0 0 16px rgba(64, 160, 255, 0.4), inset 0 0 8px rgba(165, 213, 255, 0.8)",
        }}
        animate={{
          scale: isHovering ? 1.8 : [1, 1.1, 1],
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: isHovering
            ? { type: "tween", duration: 0.3, ease: "easeOut" }
            : {
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut",
              },
          opacity: { type: "tween", duration: 0.2 },
        }}
      />

      {/* Inner bright center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10003]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(200, 230, 255, 1) 0%, rgba(165, 213, 255, 0.9) 60%, transparent 100%)",
          boxShadow: "0 0 4px rgba(200, 230, 255, 1)",
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: "tween", duration: 0.2, ease: "easeOut" },
          opacity: { type: "tween", duration: 0.2 },
        }}
      />

      {/* Hover ring - electron orbital style */}
      <motion.div
        className="fixed top-0 left-0 w-14 h-14 rounded-full pointer-events-none z-[10000]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          border: "1px solid rgba(102, 179, 255, 0.6)",
          boxShadow:
            "0 0 8px rgba(102, 179, 255, 0.4), inset 0 0 8px rgba(102, 179, 255, 0.2)",
        }}
        animate={{
          scale: isHovering ? 1 : 0,
          opacity: isVisible ? (isHovering ? 0.8 : 0) : 0,
        }}
        transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
      />
    </>
  )
}
