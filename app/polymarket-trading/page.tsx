import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Polymarket Trading Bot | Go Framework with Prediction Markets",
  description:
    "Build algorithmic trading bots for Polymarket prediction markets in Go. The only Go framework with native Polymarket support. Trade election outcomes, sports events, geopolitical scenarios with sub-millisecond execution.",
  keywords: [
    "Polymarket trading bot",
    "Polymarket algorithm",
    "prediction market trading Go",
    "algorithmic trading Polymarket",
    "Polymarket API Go",
    "binary outcome trading",
    "event-driven trading bot",
    "prediction market bot",
  ],
  openGraph: {
    title: "Polymarket Trading Bot | Go Framework with Prediction Markets",
    description:
      "Build algorithmic trading bots for Polymarket prediction markets in Go. The only Go framework with native Polymarket support.",
    type: "website",
    url: "https://usewisp.dev/polymarket-trading",
  },
}

export default function PolymarketPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        {/* Hero */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Algorithmic Trading on Polymarket in Go
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Wisp is the only Go framework with native Polymarket support. Build
            prediction market trading bots in minutes. Trade election outcomes,
            sports events, geopolitical scenarios—all with sub-millisecond
            execution and a unified API. No other language has this.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/docs/guides/polymarket-trading"
              className="px-8 py-3 rounded-lg font-semibold transition hover:opacity-80"
              style={{ backgroundColor: "#00d4ff", color: "#050505" }}
            >
              Start Building
            </Link>
            <Link
              href="/blog/what-is-polymarket"
              className="px-8 py-3 border border-gray-700 hover:border-gray-600 text-white rounded-lg font-semibold transition"
            >
              Learn Polymarket Basics
            </Link>
          </div>
        </section>

        {/* Why Polymarket Matters */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12">Why Polymarket Matters</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">What is Polymarket?</h3>
              <p className="text-gray-300 mb-4">
                Polymarket is a decentralized prediction market platform where
                traders buy and sell binary YES/NO contracts on real-world
                events. Markets cover:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• Election outcomes</li>
                <li>• Sports game results</li>
                <li>• Geopolitical developments</li>
                <li>• Tech industry milestones</li>
                <li>• Economic indicators</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Contracts are priced between $0–$1 based on the implied
                probability of the event occurring. If you buy YES at $0.45 and
                the event happens, you collect $1.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">
                Why Trade Prediction Markets?
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li>
                  <strong>Orthogonal to crypto:</strong> Prediction market
                  prices aren't correlated with BTC/ETH
                </li>
                <li>
                  <strong>Information-driven:</strong> Market sentiment shifts
                  before major events
                </li>
                <li>
                  <strong>Lower leverage risk:</strong> Binary outcomes mean no
                  liquidation surprises
                </li>
                <li>
                  <strong>Diverse alpha:</strong> Arbitrage vs traditional
                  prediction markets, market-making, event signals
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Wisp for Polymarket */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12">Why Wisp for Polymarket</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">
                Native Connector (Not API Wrapper)
              </h3>
              <p className="text-gray-300">
                Most trading bots treat Polymarket as a simple REST API. Wisp
                treats it as a first-class market type—alongside spot and
                perpetual futures—with the same event-driven architecture.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 mt-4 text-sm font-mono text-gray-300">
                <pre>{`// Same pattern as any other market type
strategy.On(polymarket.OrderbookUpdate, func(market Market) {
    if isPriceArbitrageOpportunity(market) {
        strategy.PlaceOrder(market.Yes, quantity)
    }
})`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                Unified API Across All Market Types
              </h3>
              <p className="text-gray-300 mb-4">
                Trade Polymarket AND Binance simultaneously without context
                switching:
              </p>
              <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300">
                <pre>{`// One strategy, multiple markets
strategy.On(binance.Price.Update, handleSpotSignal)
strategy.On(polymarket.Orderbook.Update, handlePredictionSignal)
strategy.On(deribit.Greeks.Update, handleOptionsHedge)`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                Sub-Millisecond Execution
              </h3>
              <p className="text-gray-300">
                Go's concurrency model means you process market data and place
                orders in parallel without thread-safety overhead. Binary
                outcomes mean no slippage surprises mid-execution.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                Deterministic Backtesting
              </h3>
              <p className="text-gray-300">
                Test your prediction market strategies against historical
                resolution data with the exact same code path as live trading.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Zero Python Overhead</h3>
              <p className="text-gray-300">
                Deploy as a single binary. No runtime dependencies, no GIL
                bottleneck, no waiting for Python startup.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">
                1. Connect to Polymarket
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300">
                <pre>{`pm := connectors.NewPolymarketConnector(config)
orderbook := pm.GetOrderbook("Will Biden win 2024?")`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                2. Monitor Prices & Liquidity
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300">
                <pre>{`pm.On(polymarket.OrderbookUpdate, func(event OrderbookEvent) {
    bid := event.Orderbook.BestBid  // Highest price someone will pay for YES
    ask := event.Orderbook.BestAsk  // Lowest price someone will sell YES at
    spread := ask - bid
})`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">3. Place Orders</h3>
              <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300">
                <pre>{`pm.PlaceOrder(polymarket.Order{
    Market: "Will the Fed raise rates in 2024?",
    Side:   polymarket.Buy,
    Price:  0.65,  // Buy YES at $0.65
    Size:   100,
})`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">4. Track & Settle</h3>
              <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300">
                <pre>{`pm.On(polymarket.MarketResolution, func(resolution *polymarket.Resolution) {
    if resolution.Outcome == YES {
        pnl := holdingSize * (1.00 - entryPrice)
    }
})`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Real Use Cases */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12">Real Use Cases</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-800 rounded-lg p-6 bg-gray-950">
              <h3 className="text-xl font-bold mb-2">Market-Making</h3>
              <p className="text-gray-300">
                Provide two-way liquidity on low-volume markets, capture the
                spread. Wisp's event-driven loop handles rapid order updates
                without blocking.
              </p>
            </div>

            <div className="border border-gray-800 rounded-lg p-6 bg-gray-950">
              <h3 className="text-xl font-bold mb-2">Arbitrage</h3>
              <p className="text-gray-300">
                Monitor price divergence between Polymarket and other prediction
                platforms (e.g., Manifold Markets, Kalshi). Execute hedges
                instantly.
              </p>
            </div>

            <div className="border border-gray-800 rounded-lg p-6 bg-gray-950">
              <h3 className="text-xl font-bold mb-2">Event Signals</h3>
              <p className="text-gray-300">
                Use prediction market prices as a leading indicator. When a
                market reprices sharply (e.g., Fed decision expectations),
                trigger hedges in spot or perpetual.
              </p>
            </div>

            <div className="border border-gray-800 rounded-lg p-6 bg-gray-950">
              <h3 className="text-xl font-bold mb-2">Portfolio Hedging</h3>
              <p className="text-gray-300">
                If your primary trading strategy is exposed to geopolitical
                risk, hedge with Polymarket contracts. Uncorrelated to crypto
                prices.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12">
            Comparison: Wisp vs Alternatives
          </h2>

          <div className="overflow-x-auto border border-gray-800 rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left p-4"></th>
                  <th className="text-left p-4">Wisp (Go)</th>
                  <th className="text-left p-4">Hummingbot</th>
                  <th className="text-left p-4">Manual Trading</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="p-4 font-semibold">Polymarket Support</td>
                  <td className="p-4 text-green-400">✓ Native</td>
                  <td className="p-4 text-red-400">✗ No</td>
                  <td className="p-4">Manual</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 font-semibold">Execution Speed</td>
                  <td className="p-4">Sub-millisecond</td>
                  <td className="p-4">100–500ms</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 font-semibold">Setup Time</td>
                  <td className="p-4">5 minutes</td>
                  <td className="p-4">1–2 hours</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 font-semibold">Deployment</td>
                  <td className="p-4">Single binary</td>
                  <td className="p-4">Docker + Python</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Cost</td>
                  <td className="p-4">Free (MIT)</td>
                  <td className="p-4">Free</td>
                  <td className="p-4">High fees</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12">FAQ</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Is Polymarket legal?</h3>
              <p className="text-gray-300">
                Yes, but it's restricted in the US to a whitelist of approved
                states. Check your jurisdiction before trading.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">
                Can I trade Polymarket 24/7?
              </h3>
              <p className="text-gray-300">
                Markets close after resolution (usually within a day of the
                event). New markets open continuously, so there's always
                something to trade.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">How much can I profit?</h3>
              <p className="text-gray-300">
                Returns depend on your edge. Binary outcomes eliminate
                liquidation risk but cap upside at 100% profit per trade.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">
                Do I need capital on multiple exchanges?
              </h3>
              <p className="text-gray-300">
                Only if you want to arbitrage across markets. For directional
                trading, you just need USDC on Polygon.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">
                Can I backtest Polymarket strategies?
              </h3>
              <p className="text-gray-300">
                Yes. Wisp supports deterministic backtesting against historical
                resolution data, using the exact same code path as live trading.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Build?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs/guides/polymarket-trading"
              className="px-8 py-3 rounded-lg font-semibold transition hover:opacity-80"
              style={{ backgroundColor: "#00d4ff", color: "#050505" }}
            >
              5-Minute Tutorial
            </Link>
            <Link
              href="/features"
              className="px-8 py-3 border border-gray-700 hover:border-gray-600 text-white rounded-lg font-semibold transition"
            >
              Explore All Features
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
