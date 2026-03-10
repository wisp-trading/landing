"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const features = [
  {
    icon: "⚡",
    title: "Multi-exchange",
    description:
      "Polymarket, Hyperliquid, Paradex, Binance and more — one connector interface for all of them.",
  },
  {
    icon: "🤖",
    title: "Agentic interface",
    description:
      "First-class support for LLM-driven trading. Expose market state as context, receive signals, execute autonomously.",
  },
  {
    icon: "📈",
    title: "Backtesting",
    description:
      "Replay any strategy against historical data before risking capital. Validate your edge.",
  },
  {
    icon: "📋",
    title: "Paper trading",
    description:
      "Run live with real market data, zero capital at risk. The fastest path from idea to confidence.",
  },
  {
    icon: "🔢",
    title: "Built-in indicators",
    description:
      "RSI, MACD, EMA, Bollinger Bands and more — composable, chainable, and ready to use.",
  },
  {
    icon: "🖥",
    title: "CLI + TUI",
    description:
      "A beautiful terminal interface for monitoring positions, reviewing signals, and controlling your bots.",
  },
  {
    icon: "🔋",
    title: "Batteries included",
    description:
      "Sensible defaults out of the box. No boilerplate, no config sprawl — override only what you need.",
  },
  {
    icon: "🦾",
    title: "Production-grade Go",
    description:
      "Statically typed, sub-millisecond execution, designed to run 24/7 without babysitting.",
  },
]

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505] py-20 md:py-28 px-8 md:px-12 border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            02 — BATTERIES INCLUDED
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05]">
            EVERYTHING
            <br />
            YOU NEED
            <br />
            <span className="italic">OUT OF THE BOX</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-[#050505] p-8 hover:bg-white/[0.03] transition-colors duration-300 group"
            >
              <span className="text-2xl mb-4 block">{feature.icon}</span>
              <h3 className="font-sans text-base font-semibold text-white mb-2 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
