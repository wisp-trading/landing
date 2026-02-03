"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function CodeShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#050505] flex items-center py-20 px-8 md:px-12"
    >
      <div className="max-w-350 mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Heading & Copy (35%) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:col-span-4"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            03 — COMPOSABLE
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] mb-6">
            WRITTEN
            <br />
            IN PURE
            <br />
            <span className="italic text-[1.15em] font-medium">GO</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-6">
            Build trading logic with simple, chainable functions.
          </p>
          <motion.a
            href="#"
            data-cursor-hover
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-[#2563eb] hover:text-[#3b82f6] transition-colors text-sm font-medium"
          >
            View Docs
            <span>→</span>
          </motion.a>
        </motion.div>

        {/* Right: Code Block (65%) */}
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
            className="relative rounded-xl overflow-hidden"
            style={{
              boxShadow:
                "0 20px 60px rgba(0, 0, 0, 0.6), 0 0 80px rgba(37, 99, 235, 0.15)",
            }}
          >
            {/* Blue glow border */}
            <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#2563eb]/20 via-transparent to-[#2563eb]/10 pointer-events-none" />

            {/* Code block */}
            <div className="relative bg-[#0a0f1a] p-10 md:p-12 lg:p-14 rounded-xl border border-[#2563eb]/20">
              <pre className="font-mono text-sm md:text-base leading-[1.8] overflow-x-auto">
                <code>
                  <span className="text-[#c678dd]">func</span>{" "}
                  <span className="text-white">(s *Strategy) </span>
                  <span className="text-[#61afef]">GetSignals</span>
                  <span className="text-white">() ([]</span>
                  <span className="text-white">*strategy.Signal, </span>
                  <span className="text-[#c678dd]">error</span>
                  <span className="text-white">) {"{"}</span>
                  {"\n"}
                  {"    "}
                  <span className="text-white">btc </span>
                  <span className="text-[#c678dd]">:=</span>
                  <span className="text-white"> s.k.</span>
                  <span className="text-[#61afef]">Asset</span>
                  <span className="text-white">(</span>
                  <span className="text-[#98c379]">"BTC"</span>
                  <span className="text-white">)</span>
                  {"\n"}
                  {"    "}
                  <span className="text-white">rsi </span>
                  <span className="text-[#c678dd]">:=</span>
                  <span className="text-white"> s.k.</span>
                  <span className="text-[#61afef]">Indicators</span>
                  <span className="text-white">().</span>
                  <span className="text-[#61afef]">RSI</span>
                  <span className="text-white">(btc, </span>
                  <span className="text-[#d19a66]">14</span>
                  <span className="text-white">)</span>
                  {"\n"}
                  {"    "}
                  {"\n"}
                  {"    "}
                  <span className="text-[#c678dd]">if</span>
                  <span className="text-white"> rsi.</span>
                  <span className="text-[#61afef]">LessThan</span>
                  <span className="text-white">(decimal.</span>
                  <span className="text-[#61afef]">NewFromInt</span>
                  <span className="text-white">(</span>
                  <span className="text-[#d19a66]">30</span>
                  <span className="text-white">)) {"{"}</span>
                  {"\n"}
                  {"        "}
                  <span className="text-[#c678dd]">return</span>
                  <span className="text-white"> []</span>
                  <span className="text-white">*strategy.Signal{"{"}</span>
                  {"\n"}
                  {"            "}
                  <span className="text-white">s.k.</span>
                  <span className="text-[#61afef]">Signal</span>
                  <span className="text-white">(s.</span>
                  <span className="text-[#61afef]">GetName</span>
                  <span className="text-white">()).</span>
                  {"\n"}
                  {"                "}
                  <span className="text-[#61afef]">Buy</span>
                  <span className="text-white">(btc, connector.Binance, </span>
                  <span className="text-[#d19a66]">0.1</span>
                  <span className="text-white">).</span>
                  {"\n"}
                  {"                "}
                  <span className="text-[#61afef]">Build</span>
                  <span className="text-white">(),</span>
                  {"\n"}
                  {"        "}
                  <span className="text-white">{"}"}, </span>
                  <span className="text-[#c678dd]">nil</span>
                  {"\n"}
                  {"    "}
                  <span className="text-white">{"}"}</span>
                  {"\n"}
                  {"    "}
                  {"\n"}
                  {"    "}
                  <span className="text-[#c678dd]">return</span>
                  <span className="text-white"> </span>
                  <span className="text-[#c678dd]">nil</span>
                  <span className="text-white">, </span>
                  <span className="text-[#c678dd]">nil</span>
                  {"\n"}
                  <span className="text-white">{"}"}</span>
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
