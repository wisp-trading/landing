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
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
      />
      {/* Hover ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1 : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
      />
    </>
  )
}
