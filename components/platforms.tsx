"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const exchanges = [
  { name: "Hyperliquid", tag: "Perps & Spot", href: "https://hyperliquid.xyz" },
  {
    name: "Polymarket",
    tag: "Prediction Markets",
    href: "https://polymarket.com",
  },
  { name: "Paradex", tag: "Derivatives", href: "https://paradex.trade" },
  { name: "Binance", tag: "Spot & Futures", href: "https://binance.com" },
  {
    name: "More coming",
    tag: "Open an issue",
    href: "https://github.com/wisp-trading/wisp/issues",
  },
]

export function Platforms() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-80px" })

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505] py-16 md:py-20 px-8 md:px-12 border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-8 text-center"
        >
          SUPPORTED EXCHANGES & MARKETS
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {exchanges.map((exchange, i) => (
            <motion.a
              key={exchange.name}
              href={exchange.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
            >
              <span className="font-sans text-sm font-medium text-white">
                {exchange.name}
              </span>
              <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                {exchange.tag}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
