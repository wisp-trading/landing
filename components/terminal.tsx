"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

interface MenuItem {
  icon: string
  label: string
  badge?: string
}

const menuItems: MenuItem[] = [
  { icon: "📁", label: "Strategies" },
  { icon: "📊", label: "Monitor" },
  { icon: "⚙️", label: "Settings" },
  { icon: "ℹ️", label: "Help" },
  { icon: "🆕", label: "Create New Project", badge: "NEW" },
]

export function Terminal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [view, setView] = useState<"menu" | "monitor">("menu")
  const [typedText, setTypedText] = useState("")
  const [showTUI, setShowTUI] = useState(false)

  useEffect(() => {
    if (!isInView) return

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)

    // Typing animation: type "wisp" character by character
    const typingText = "wisp"
    let currentIndex = 0

    const typeChar = () => {
      if (currentIndex < typingText.length) {
        setTypedText(typingText.slice(0, currentIndex + 1))
        currentIndex++
        setTimeout(typeChar, 150) // Type each character with 150ms delay
      } else {
        // After typing is complete, wait 1 second, then show TUI
        setTimeout(() => {
          setShowTUI(true)
        }, 1000)
      }
    }

    // Start typing after a brief delay
    const typingTimeout = setTimeout(typeChar, 400)

    return () => {
      clearInterval(cursorInterval)
      clearTimeout(typingTimeout)
    }
  }, [isInView])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#050505] flex items-center py-20 px-8 md:px-12"
    >
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Heading */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:col-span-4"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            02 — INTUITIVE
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05]">
            MADE
            <br />
            FOR
            <br />
            <span className="italic">TRADERS</span>
          </h2>
        </motion.div>

        {/* Right: Terminal TUI Window */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="lg:col-span-8"
        >
          <div
            className="relative rounded-xl overflow-hidden shadow-2xl"
            style={{
              boxShadow:
                "0 20px 60px rgba(0, 0, 0, 0.6), 0 0 80px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* Terminal Title Bar */}
            <div className="bg-[#1a1a1a] border-b border-white/5 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 text-center">
                <span className="font-mono text-xs text-white/40">
                  wisp — terminal
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="bg-[#1a2332] p-8 md:p-12 min-h-[500px] md:min-h-[600px] font-mono text-base flex flex-col">
              {!showTUI ? (
                // Typing Animation: Simulate user typing "wisp"
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-green-400">$</span>
                  <span className="text-white">{typedText}</span>
                  {!showTUI && cursorVisible && (
                    <span className="inline-block w-2 h-5 bg-white/80" />
                  )}
                </motion.div>
              ) : view === "menu" ? (
                <>
                  {/* Header */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={showTUI ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                  >
                    <h3 className="text-[#d4af37] text-2xl font-bold mb-8">
                      WISP CLI v0.1.0
                    </h3>
                    <p className="text-gray-400 italic text-base mb-2">
                      What would you like to do?
                    </p>
                  </motion.div>

                  {/* Menu Items */}
                  <div className="flex-1 space-y-1">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={showTUI ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className={`flex items-center gap-3 py-2 px-2 rounded transition-colors cursor-pointer ${
                          selectedIndex === index
                            ? "text-[#d4af37]"
                            : "text-white hover:text-gray-300"
                        }`}
                        onMouseEnter={() => setSelectedIndex(index)}
                        onClick={() => {
                          if (index === 1) {
                            // Monitor selected
                            setView("monitor")
                          }
                        }}
                      >
                        {/* Selection Arrow */}
                        <span className="text-[#d4af37] w-4">
                          {selectedIndex === index && cursorVisible ? "▶" : " "}
                        </span>

                        {/* Icon */}
                        <span className="text-xl">{item.icon}</span>

                        {/* Label */}
                        <span className="text-lg">{item.label}</span>

                        {/* Badge */}
                        {item.badge && (
                          <span className="ml-2 px-2 py-0.5 bg-[#d4af37] text-[#1a2332] text-xs font-bold rounded">
                            {item.badge}
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={showTUI ? { opacity: 1 } : {}}
                    transition={{ delay: 1.0 }}
                    className="mt-8 pt-6 border-t border-gray-600 text-gray-500 text-sm"
                  >
                    <span className="mr-6">↑↓/jk Navigate</span>
                    <span className="mr-6">→ Select</span>
                    <span>q Quit</span>
                  </motion.div>
                </>
              ) : (
                // Monitor View
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col h-full"
                >
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="text-[#d4af37] text-2xl font-bold mb-4">
                      📊 Live Monitor
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">●</span>
                      <span className="text-gray-400">Connected to feed</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-600 rounded p-4">
                      <div className="text-gray-400 text-xs mb-1">
                        P&L Today
                      </div>
                      <div className="text-green-400 text-xl">+$2,347.50</div>
                    </div>
                    <div className="border border-gray-600 rounded p-4">
                      <div className="text-gray-400 text-xs mb-1">Win Rate</div>
                      <div className="text-white text-xl">68.3%</div>
                    </div>
                    <div className="border border-gray-600 rounded p-4">
                      <div className="text-gray-400 text-xs mb-1">
                        Active Positions
                      </div>
                      <div className="text-[#d4af37] text-xl">3</div>
                    </div>
                    <div className="border border-gray-600 rounded p-4">
                      <div className="text-gray-400 text-xs mb-1">Signals</div>
                      <div className="text-blue-400 text-xl">12</div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-6 border-t border-gray-600 text-gray-500 text-sm">
                    <button
                      onClick={() => setView("menu")}
                      className="text-[#d4af37] hover:underline"
                    >
                      ← Back to menu
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
