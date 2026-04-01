import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Geist_Mono } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://usewisp.dev"),
  title: "Wisp: Go Trading Bot Framework | Backtesting, Paper & Live Trading",
  description:
    "Wisp is an open-source trading bot framework built in Go. Backtest strategies, paper trade risk-free, then deploy live to Hyperliquid, Binance, Polymarket, and Paradex. First-class LLM agentic interface for Claude, GPT-4, and any AI agent.",
  keywords: [
    "go trading bot",
    "trading bot framework",
    "open source trading bot framework",
    "trading bot backtesting",
    "algorithmic trading go",
    "golang trading bot",
    "production trading bot go",
    "LLM trading bot",
    "agentic trading",
    "hyperliquid bot",
    "polymarket bot",
    "binance trading bot",
    "AI trading agent",
    "crypto trading bot",
    "paper trading",
    "backtesting framework go",
    "multi-exchange trading bot",
    "automated trading",
    "go trading framework",
    "trading bot open source",
  ],
  authors: [{ name: "Wisp Team" }],
  creator: "Wisp",
  publisher: "Wisp",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Wisp: Go Trading Bot Framework | Backtesting, Paper & Live Trading",
    description:
      "Open-source trading bot framework built in Go. Backtest strategies, paper trade risk-free, then go live on Hyperliquid, Binance, Polymarket, and Paradex - with first-class LLM agentic support.",
    url: "https://usewisp.dev",
    siteName: "Wisp",
    images: [
      {
        url: "/wisp-logo.png",
        width: 1200,
        height: 630,
        alt: "Wisp - Open-Source Go Trading Bot Framework",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisp: Go Trading Bot Framework | Backtesting, Paper & Live Trading",
    description:
      "Open-source Go trading bot framework. Backtest, paper trade, then go live on Hyperliquid, Binance, Polymarket & more. Write strategies yourself or let Claude/GPT-4 trade autonomously.",
    images: ["/wisp-logo.png"],
  },
  alternates: {
    canonical: "https://usewisp.dev",
    types: {
      "application/rss+xml": "https://usewisp.dev/rss.xml",
    },
  },
  category: "technology",
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <StructuredData />
        <div className="noise-overlay" />
        {children}
        <GoogleAnalytics gaId="G-WSNWFHXWJ3" />
        <Analytics />
        <SpeedInsights />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="T+vmDADaUvAWUk/tPgj/rA"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
