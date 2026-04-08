import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Wisp Features | Multi-Market Trading Framework",
  description:
    "Trade spot, perpetual futures, options, and prediction markets from a single Go framework. Event-driven architecture with sub-millisecond execution.",
  keywords: [
    "Go trading framework features",
    "algorithmic trading Go",
    "multi-exchange trading",
    "prediction markets",
    "polymarket support",
  ],
  openGraph: {
    title: "Wisp Features | Multi-Market Trading Framework",
    description:
      "Trade spot, perpetual futures, options, and prediction markets from a single Go framework.",
    type: "website",
    url: "https://usewisp.dev/features",
  },
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        {/* Hero */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trading Across Every Market Type in Go
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Wisp is the only Go trading framework that supports spot, perpetual
            futures, options, AND prediction markets from a single unified API.
            Build, backtest, and deploy algorithmic strategies across all major
            crypto venues with sub-millisecond execution.
          </p>
        </section>

        {/* Market Types */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12">Market Types Supported</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Spot Trading */}
            <div className="border border-gray-800 rounded-lg p-8 bg-gray-950">
              <h3 className="text-2xl font-bold mb-3">Spot Trading</h3>
              <p className="text-gray-400 mb-4">Supported: Gate.io</p>
              <p className="text-gray-300 mb-4">
                Buy and hold strategies, arbitrage, rebalancing
              </p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>✓ Real-time order book data</li>
                <li>✓ Instant market/limit order execution</li>
                <li>✓ Position tracking and P&L</li>
              </ul>
            </div>

            {/* Perpetual Futures */}
            <div className="border border-gray-800 rounded-lg p-8 bg-gray-950">
              <h3 className="text-2xl font-bold mb-3">Perpetual Futures</h3>
              <p className="text-gray-400 mb-4">
                Supported: Hyperliquid, Paradex, Bybit
              </p>
              <p className="text-gray-300 mb-4">
                Leverage trading, directional bets, hedging
              </p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>✓ Up to 125x leverage</li>
                <li>✓ Funding rate optimization</li>
                <li>✓ Multi-position management</li>
              </ul>
            </div>

            {/* Options */}
            <div className="border border-gray-800 rounded-lg p-8 bg-gray-950">
              <h3 className="text-2xl font-bold mb-3">Options Trading</h3>
              <p className="text-gray-400 mb-4">Supported: Deribit</p>
              <p className="text-gray-300 mb-4">
                Volatility strategies, spreads, directional protection
              </p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>✓ Greeks-aware position sizing</li>
                <li>✓ Implied volatility analysis</li>
                <li>✓ Complex spread execution</li>
              </ul>
            </div>

            {/* Prediction Markets */}
            <div className="border border-[#ff6b35] rounded-lg p-8 bg-gray-950">
              <h3 className="text-2xl font-bold mb-3">
                Prediction Markets{" "}
                <span className="text-[#ff6b35] text-sm font-normal">
                  (Wisp Exclusive)
                </span>
              </h3>
              <p className="text-gray-400 mb-4">Supported: Polymarket</p>
              <p className="text-gray-300 mb-4">
                Binary outcome trading, event-driven strategies, portfolio
                hedging
              </p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>✓ Native Polymarket connector</li>
                <li>✓ Order book and price feeds</li>
                <li>✓ USDC settlement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12">Technical Advantages</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">
                Event-Driven Architecture
              </h3>
              <p className="text-gray-300">
                Your strategy owns its execution loop. No callbacks, no
                framework overhead. Write Go code that controls when it runs and
                how it responds to market events.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                Sub-Millisecond Execution
              </h3>
              <p className="text-gray-300">
                Go's concurrency model gives you true parallel data ingestion
                and order placement. Handle multiple exchanges and market data
                streams without thread-safety complexity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                Deterministic Backtesting
              </h3>
              <p className="text-gray-300">
                Replay historical data through your strategy with the exact same
                code path as live trading. No surprises when you deploy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                Beautiful Terminal Interface
              </h3>
              <p className="text-gray-300">
                Monitor positions, signals, and P&L in real-time via an
                interactive TUI. No browser, no dashboards—just your strategy
                and the market.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                Multi-Exchange Orchestration
              </h3>
              <p className="text-gray-300">
                Place orders, manage positions, and hedge across multiple
                exchanges simultaneously. All from one strategy instance.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12">Why Wisp?</h2>

          <div className="overflow-x-auto border border-gray-800 rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left p-4">Feature</th>
                  <th className="text-left p-4">Wisp (Go)</th>
                  <th className="text-left p-4">Hummingbot (Python)</th>
                  <th className="text-left p-4">gocryptotrader</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="p-4 font-semibold">Polymarket Support</td>
                  <td className="p-4 text-green-400">✓ Native</td>
                  <td className="p-4 text-red-400">✗ No</td>
                  <td className="p-4 text-red-400">✗ No</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 font-semibold">Execution Speed</td>
                  <td className="p-4">Sub-millisecond</td>
                  <td className="p-4">100-500ms</td>
                  <td className="p-4">Standard</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 font-semibold">Deployment</td>
                  <td className="p-4">Single binary</td>
                  <td className="p-4">Docker + Python</td>
                  <td className="p-4">Complex</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Cost</td>
                  <td className="p-4">Free (MIT)</td>
                  <td className="p-4">Free</td>
                  <td className="p-4">Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Build?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://usewisp.dev/docs"
              className="px-8 py-3 rounded-lg font-semibold transition hover:opacity-80"
              style={{ backgroundColor: "#00d4ff", color: "#050505" }}
            >
              Explore the Docs
            </Link>
            <Link
              href="/polymarket-trading"
              className="px-8 py-3 border border-gray-700 hover:border-gray-600 text-white rounded-lg font-semibold transition"
            >
              Polymarket Trading Guide
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
