"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Why is Go better for trading bots?",
    answer:
      "Go provides sub-millisecond execution latency, true concurrency via goroutines, and a tiny memory footprint - all critical for production trading systems. Unlike Python, there are no GIL bottlenecks, no runtime interpreter overhead, and no surprise GC pauses mid-execution. Go's static typing catches bugs at compile time rather than at 3am when a trade goes wrong, and binaries compile to a single self-contained executable that runs anywhere. For a system that needs to be on 24/7 and react to market events in microseconds, Go is the right tool.",
  },
  {
    question: "What's the difference between backtesting and paper trading?",
    answer:
      "Backtesting replays your strategy against historical market data to measure how it would have performed in the past. It's fast (you can test years of data in seconds), but is subject to look-ahead bias and overfitting if you're not careful. Paper trading runs your live strategy against real-time market data, but with simulated order fills - no real capital at risk. It validates that your bot handles live market conditions, connectivity, and edge cases before you risk real money. Wisp supports both modes from the same strategy code - just change a single flag.",
  },
  {
    question: "Can I use Wisp with ChatGPT, Claude, or other AI models?",
    answer:
      "Yes. Wisp has a first-class agentic interface designed specifically for LLMs. Market state, positions, and portfolio data are exposed as structured context that any LLM can consume. Claude, GPT-4, Gemini, or any model with tool-calling support can analyse conditions and emit trading signals that Wisp executes. You can also run Wisp as an MCP (Model Context Protocol) server so AI assistants like Claude Desktop can control your bot directly from a chat interface.",
  },
  {
    question: "Which exchanges does Wisp support?",
    answer:
      "Wisp currently supports Hyperliquid, Binance, Polymarket, and Paradex, with more connectors in active development. All exchanges share the same unified connector interface, so strategies are portable across venues with zero code changes. If your exchange isn't listed yet, the connector interface is simple to implement - contributions are welcome on GitHub.",
  },
  {
    question: "How do I backtest a trading strategy with Wisp?",
    answer:
      "Write your strategy using Wisp's Strategy interface - implement the OnCandle or OnTick handler with your logic. Then run `wisp backtest --from 2024-01-01 --to 2024-12-31 --exchange hyperliquid --pair BTC-USD`. Wisp will replay historical candle data through your strategy, simulate fills at realistic prices, and produce a full performance report: P&L, max drawdown, Sharpe ratio, win rate, and a trade log. No separate backtesting library needed - it's built in.",
  },
  {
    question: "Is Wisp free and open source?",
    answer:
      "Yes. Wisp is MIT-licensed and completely free - no paid tiers, no strategy marketplaces, no subscription fees. The full source is on GitHub. You can use it commercially, fork it, modify it, and self-host it. The project is community-driven; contributions, bug reports, and exchange connector PRs are all welcome.",
  },
  {
    question: "How does Wisp compare to Python trading bot frameworks?",
    answer:
      "Python frameworks like Backtrader or Freqtrade have large communities and rich ecosystems, but they trade performance for convenience. Wisp's Go runtime is typically 10–50× faster for strategy execution, uses a fraction of the memory, and handles concurrent streams from multiple exchanges without thread-safety complexity. If you're building a low-latency or high-frequency strategy, or need a single binary you can deploy anywhere without managing a Python environment, Wisp is the better choice.",
  },
  {
    question: "Can Wisp trade multiple exchanges simultaneously?",
    answer:
      "Yes. Wisp's architecture is built around concurrent exchange connectors - each exchange runs in its own goroutine, feeding a unified event stream. A single strategy instance can receive data from and place orders on multiple exchanges simultaneously. This makes cross-exchange arbitrage, portfolio rebalancing across venues, and multi-market signal aggregation straightforward to implement.",
  },
]

export function FAQ() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505] py-20 md:py-28 px-8 md:px-12 border-t border-white/5"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            05 - COMMON QUESTIONS
          </p>
          <h2
            id="faq-heading"
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05]"
          >
            FREQUENTLY
            <br />
            ASKED
            <br />
            <span className="italic">QUESTIONS</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full"
        >
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-white/5 last:border-b-0"
              >
                <AccordionTrigger className="py-6 text-left font-sans text-base md:text-lg font-normal text-white/90 hover:text-white hover:no-underline [&[data-state=open]]:text-white transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 font-sans text-sm md:text-base text-gray-500 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
