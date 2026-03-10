"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function Agentic() {
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
            05 — TWO WAYS TO TRADE
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05]">
            HUMAN
            <br />
            OR
            <br />
            <span className="italic">AGENTIC</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
          {/* Human-written strategies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-[#050505] p-10 md:p-14 hover:bg-white/[0.02] transition-colors duration-300"
          >
            <div className="mb-8">
              <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3 block">
                For traders
              </span>
              <h3 className="font-sans text-2xl md:text-3xl font-light text-white mb-4">
                Write your strategy
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Define your logic in Go using Wisp&apos;s composable API.
                Backtest against historical data, validate with paper trading,
                then deploy to live markets with a single command.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                "Full control over entry and exit logic",
                "Access to 20+ built-in indicators",
                "Multi-exchange execution from one strategy",
                "Real-time monitoring via the TUI",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="text-white/30 mt-0.5">—</span>
                  <span className="text-sm text-gray-400">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Agentic / LLM-driven */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#050505] p-10 md:p-14 hover:bg-white/[0.02] transition-colors duration-300 relative"
          >
            {/* Accent glow for the agentic side */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00d4ff]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="mb-8">
              <span className="font-mono text-xs tracking-[0.2em] text-[#00d4ff]/70 uppercase mb-3 block">
                For AI agents
              </span>
              <h3 className="font-sans text-2xl md:text-3xl font-light text-white mb-4">
                Let an LLM trade
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Wisp exposes a structured agentic interface — market state,
                positions, and available actions — as context any LLM can reason
                over. The model generates signals; Wisp executes them.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                "Works with Claude, GPT-4, Gemini, and any model",
                "Structured market context fed directly to the model",
                "Full audit trail of every agent decision",
                "Human oversight controls — pause, override, stop",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="text-[#00d4ff]/40 mt-0.5">—</span>
                  <span className="text-sm text-gray-400">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
