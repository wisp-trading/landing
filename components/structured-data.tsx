import React from "react"

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wisp",
    url: "https://usewisp.dev",
    logo: {
      "@type": "ImageObject",
      url: "https://usewisp.dev/wisp-logo.png",
      width: 512,
      height: 512,
      caption: "Wisp — Open-Source Go Trading Bot Framework",
    },
    image: "https://usewisp.dev/wisp-logo.png",
    description:
      "Open-source trading bot framework built in Go. Backtesting, paper trading, and live trading on Hyperliquid, Binance, Polymarket, and Paradex.",
    email: "hello@usewisp.dev",
    foundingDate: "2025",
    knowsAbout: [
      "Algorithmic trading",
      "Automated trading systems",
      "Go programming language",
      "Cryptocurrency trading",
      "Backtesting trading strategies",
      "Paper trading",
      "LLM agentic systems",
      "High-frequency trading",
      "Decentralised exchanges",
    ],
    sameAs: ["https://github.com/wisp-trading/wisp"],
  }

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Wisp Trading Bot Framework",
    alternateName: ["Wisp", "wisp-trading", "Wisp Go trading bot"],
    applicationCategory: "FinanceApplication",
    applicationSubCategory: "Trading Software",
    operatingSystem: "Linux, macOS, Windows",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    description:
      "Open-source trading bot framework built in Go with native Polymarket prediction market support. Backtest strategies against historical data, paper trade with zero capital risk, then deploy live to Hyperliquid, Binance, Polymarket, and Paradex. First-class agentic interface for Claude, GPT-4, and any LLM.",
    featureList: [
      "Multi-market support: spot, perpetual futures, options, and prediction markets",
      "Prediction market trading: Native Polymarket connector — only Go framework with this support",
      "Crypto exchange support: Hyperliquid, Binance, Paradex, Gate.io, Deribit, Bybit",
      "Backtesting engine — replay strategies against historical data",
      "Paper trading mode — live market data, zero capital at risk",
      "LLM agentic interface — let Claude, GPT-4, or any AI model trade autonomously",
      "MCP server support for Claude Desktop integration",
      "20+ built-in technical indicators: RSI, MACD, EMA, Bollinger Bands",
      "CLI and terminal UI (TUI) for monitoring positions and signals",
      "Sub-millisecond execution via Go runtime",
      "Single binary deployment — no runtime dependencies",
      "MIT-licensed — free for commercial and personal use",
    ],
    programmingLanguage: "Go",
    softwareVersion: "0.0.8-alpha",
    url: "https://usewisp.dev",
    downloadUrl: "https://github.com/wisp-trading/wisp/releases",
    codeRepository: "https://github.com/wisp-trading/wisp",
    releaseNotes: "https://github.com/wisp-trading/wisp/releases",
    license: "https://opensource.org/licenses/MIT",
    softwareHelp: {
      "@type": "CreativeWork",
      url: "https://usewisp.dev/docs",
      name: "Wisp Documentation",
    },
    screenshot: {
      "@type": "ImageObject",
      url: "https://usewisp.dev/wisp-logo.png",
      caption: "Wisp trading bot framework interface",
    },
    keywords:
      "go trading bot, trading bot framework, open source trading bot, golang trading bot, backtesting, paper trading, algorithmic trading, agentic trading, LLM trading bot, crypto trading, hyperliquid bot, binance bot, polymarket bot, production trading bot",
    author: {
      "@type": "Organization",
      name: "Wisp",
      url: "https://usewisp.dev",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wisp",
    url: "https://usewisp.dev",
    description:
      "Open-source trading bot framework built in Go for algorithmic and agentic trading",
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: "Wisp",
      url: "https://usewisp.dev",
    },
    about: {
      "@type": "SoftwareApplication",
      name: "Wisp Trading Bot Framework",
      url: "https://usewisp.dev",
    },
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://usewisp.dev/#webpage",
    url: "https://usewisp.dev",
    name: "Wisp: Go Trading Bot Framework | Backtesting, Paper & Live Trading",
    description:
      "Open-source trading bot framework built in Go. Backtest strategies, paper trade risk-free, then deploy live to Hyperliquid, Binance, Polymarket, and Paradex.",
    inLanguage: "en-US",
    isPartOf: { "@type": "WebSite", url: "https://usewisp.dev" },
    about: {
      "@type": "SoftwareApplication",
      name: "Wisp Trading Bot Framework",
    },
    dateModified: "2026-03-20",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[aria-label='About Wisp'] p", "#faq-heading"],
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://usewisp.dev/wisp-logo.png",
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://usewisp.dev",
      },
    ],
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "Wisp: Go Trading Bot Framework | Backtesting, Paper & Live Trading",
    description:
      "Open-source trading bot framework built in Go. Backtest strategies, paper trade risk-free, then deploy live to Hyperliquid, Binance, Polymarket, and Paradex. First-class LLM agentic interface.",
    image: {
      "@type": "ImageObject",
      url: "https://usewisp.dev/wisp-logo.png",
      width: 1200,
      height: 630,
    },
    datePublished: "2025-06-01",
    dateModified: "2026-03-20",
    author: {
      "@type": "Organization",
      name: "Wisp",
      url: "https://usewisp.dev",
    },
    publisher: {
      "@type": "Organization",
      name: "Wisp",
      logo: {
        "@type": "ImageObject",
        url: "https://usewisp.dev/wisp-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://usewisp.dev",
    },
    about: [
      { "@type": "Thing", name: "Algorithmic trading" },
      { "@type": "Thing", name: "Trading bot development" },
      { "@type": "Thing", name: "Go programming language" },
      { "@type": "Thing", name: "Backtesting" },
      { "@type": "Thing", name: "Paper trading" },
      { "@type": "Thing", name: "LLM agentic trading" },
      { "@type": "Thing", name: "Cryptocurrency trading automation" },
    ],
    mentions: [
      { "@type": "SoftwareApplication", name: "Hyperliquid" },
      { "@type": "SoftwareApplication", name: "Binance" },
      { "@type": "SoftwareApplication", name: "Polymarket" },
      { "@type": "SoftwareApplication", name: "Paradex" },
      { "@type": "SoftwareApplication", name: "Claude" },
      { "@type": "SoftwareApplication", name: "GPT-4" },
      { "@type": "ComputerLanguage", name: "Go" },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is Go better for trading bots?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Go provides sub-millisecond execution latency, true concurrency via goroutines, and a tiny memory footprint — all critical for production trading systems. Unlike Python, there are no GIL bottlenecks, no runtime interpreter overhead, and no surprise GC pauses mid-execution. Go's static typing catches bugs at compile time, and binaries compile to a single self-contained executable. For a system that needs to be on 24/7 and react to market events in microseconds, Go is the right tool.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between backtesting and paper trading?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Backtesting replays your strategy against historical market data to measure how it would have performed in the past. Paper trading runs your live strategy against real-time market data with simulated order fills — no real capital at risk. It validates that your bot handles live market conditions before you risk real money. Wisp supports both modes from the same strategy code — just change a single flag.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use Wisp with ChatGPT, Claude, or other AI models?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Wisp has a first-class agentic interface designed for LLMs. Market state, positions, and portfolio data are exposed as structured context that any LLM can consume. Claude, GPT-4, Gemini, or any model with tool-calling support can analyse conditions and emit trading signals that Wisp executes. You can also run Wisp as an MCP server so AI assistants like Claude Desktop can control your bot directly.",
        },
      },
      {
        "@type": "Question",
        name: "Which exchanges does Wisp support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wisp currently supports Hyperliquid, Binance, Polymarket, and Paradex, with more connectors in active development. All exchanges share the same unified connector interface, so strategies are portable across venues with zero code changes.",
        },
      },
      {
        "@type": "Question",
        name: "How do I backtest a trading strategy with Wisp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Write your strategy using Wisp's Strategy interface, then run: wisp backtest --from 2024-01-01 --to 2024-12-31 --exchange hyperliquid --pair BTC-USD. Wisp replays historical candle data through your strategy, simulates fills at realistic prices, and produces a full performance report: P&L, max drawdown, Sharpe ratio, win rate, and a trade log.",
        },
      },
      {
        "@type": "Question",
        name: "Is Wisp free and open source?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Wisp is MIT-licensed and completely free — no paid tiers, no subscription fees. The full source is on GitHub. You can use it commercially, fork it, modify it, and self-host it.",
        },
      },
      {
        "@type": "Question",
        name: "How does Wisp compare to Python trading bot frameworks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Python frameworks like Backtrader or Freqtrade have large communities but trade performance for convenience. Wisp's Go runtime is typically 10–50× faster for strategy execution, uses a fraction of the memory, and handles concurrent streams from multiple exchanges without thread-safety complexity. If you need a low-latency strategy or a single binary deployable anywhere without a Python environment, Wisp is the better choice.",
        },
      },
      {
        "@type": "Question",
        name: "Can Wisp trade multiple exchanges simultaneously?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Wisp's architecture is built around concurrent exchange connectors — each exchange runs in its own goroutine, feeding a unified event stream. A single strategy instance can receive data from and place orders on multiple exchanges simultaneously, making cross-exchange arbitrage and multi-market signal aggregation straightforward.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
