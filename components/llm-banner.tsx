"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const WISP_PROMPT = encodeURIComponent(
  `Here is everything you need to know about Wisp to help me use it:

Wisp is an open-source trading bot framework built in Go. It is batteries-included, low config, and highly adaptable.

Supported exchanges and markets:
- Hyperliquid (perpetuals and spot)
- Polymarket (prediction markets)
- Paradex (derivatives)
- Binance (spot and futures)
All connected through a single unified connector interface.

Core features:
- Backtesting: replay any strategy against historical market data before risking capital
- Paper trading: run against live market data with zero capital at risk
- Live trading: deploy to one or multiple exchanges simultaneously from a single codebase
- Built-in indicators: RSI, MACD, EMA, Bollinger Bands, and more - all composable and chainable
- CLI and TUI: a first-class terminal interface for monitoring positions, reviewing signals, and controlling bots
- Low config: sensible defaults out of the box, override only what you need

Two ways to use Wisp:
1. Write your own strategy - define entry/exit logic in Go using Wisp's composable API, backtest, paper trade, then deploy live
2. Agentic mode - Wisp exposes a structured interface (market state, positions, available actions) that any LLM can reason over. The model generates signals and Wisp executes them. Supports Claude, GPT-4, Gemini, and any model.

Why Go: sub-millisecond execution, statically typed, designed to run 24/7 without issues. Go is a feature, not just an implementation detail.

Docs: https://usewisp.dev/docs
GitHub: https://github.com/wisp-trading/wisp

I'm ready to get started - what would you like to build or learn about first?`
)

const llms = [
  {
    name: "Claude",
    label: "Ask Claude",
    href: `https://claude.ai/new?q=${WISP_PROMPT}`,
    color: "#DA7756",
    textColor: "#DA7756",
    dot: "#DA7756",
  },
  {
    name: "ChatGPT",
    label: "Ask ChatGPT",
    href: `https://chatgpt.com/?q=${WISP_PROMPT}`,
    color: "#10a37f",
    textColor: "#10a37f",
    dot: "#10a37f",
  },
  {
    name: "Perplexity",
    label: "Ask Perplexity",
    href: `https://www.perplexity.ai/?q=${WISP_PROMPT}`,
    color: "#20b2d4",
    textColor: "#20b2d4",
    dot: "#20b2d4",
  },
  {
    name: "Gemini",
    label: "Ask Gemini",
    href: `https://gemini.google.com/app?q=${WISP_PROMPT}`,
    color: "#8ab4f8",
    textColor: "#8ab4f8",
    dot: "#8ab4f8",
  },
]

export function LLMBanner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-40px" })

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505] border-t border-white/5 py-8 px-8 md:px-12"
    >
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,212,255,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: "#00d4ff" }}
              />
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ backgroundColor: "#00d4ff" }}
              />
            </span>
            <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase text-center sm:text-left">
              Already using AI?{" "}
              <span className="hidden sm:inline">
                Let it help you get started
              </span>
            </p>
          </motion.div>

          {/* LLM buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 flex-wrap justify-center sm:justify-end"
          >
            {llms.map((llm, i) => (
              <motion.a
                key={llm.name}
                href={llm.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200"
              >
                {/* Colored dot as brand indicator */}
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: llm.dot }}
                />
                <span
                  className="font-mono text-xs tracking-wider transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {llm.label}
                </span>
                <span className="text-white/20 group-hover:text-white/40 transition-colors text-xs">
                  →
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
