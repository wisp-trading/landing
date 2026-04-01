export function Intro() {
  return (
    <section
      className="max-w-3xl mx-auto px-6 py-16 md:py-24"
      aria-label="About Wisp"
    >
      {/* Primary description */}
      <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-10">
        Wisp is a batteries-included trading bot framework written in pure Go.
        Build algorithmic trading strategies yourself, or let AI agents trade
        autonomously with Claude, GPT-4, or any LLM. Backtest against historical
        data, paper trade with zero capital at risk, then deploy live to
        Hyperliquid, Binance, Polymarket, Paradex, and more - all from a single
        codebase.
      </p>

      <div className="grid md:grid-cols-3 gap-8 border-t border-white/5 pt-10">
        {/* Why Go */}
        <div>
          <h2 className="font-mono text-xs tracking-widest uppercase text-[#00d4ff] mb-3">
            Why Go?
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Go delivers sub-millisecond execution, a tiny memory footprint, and
            rock-solid concurrency - exactly what a production trading bot
            demands. Unlike Python-based frameworks, Wisp runs 24/7 without GC
            pauses, unexpected latency spikes, or runtime surprises.
          </p>
        </div>

        {/* Who it's for */}
        <div>
          <h2 className="font-mono text-xs tracking-widest uppercase text-[#00d4ff] mb-3">
            Who It&apos;s For
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Wisp is built for developers, quant traders, and AI engineers who
            need a reliable, open-source foundation for automated trading.
            Whether you&apos;re writing deterministic strategies or wiring up an
            LLM agent, Wisp stays out of your way.
          </p>
        </div>

        {/* Open source */}
        <div>
          <h2 className="font-mono text-xs tracking-widest uppercase text-[#00d4ff] mb-3">
            Open Source
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Wisp is MIT-licensed and free forever. No vendor lock-in, no closed
            strategy vaults, no hidden fees. Inspect every line, fork the repo,
            and run your own instance - full ownership from day one.
          </p>
        </div>
      </div>
    </section>
  )
}
