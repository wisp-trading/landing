import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Geist_Mono } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
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
  title: "Wisp — Trading Bot Framework | Algorithmic & Agentic",
  description:
    "Open-source trading bot framework built in Go. Connect to Polymarket, Hyperliquid, Paradex, Binance, and more. Write strategies yourself or let an AI agent trade autonomously. Batteries included.",
  keywords: [
    "trading bot framework",
    "algorithmic trading",
    "agentic trading",
    "trading automation",
    "crypto trading bot",
    "go trading framework",
    "golang trading bot",
    "polymarket bot",
    "hyperliquid bot",
    "AI trading bot",
    "LLM trading agent",
    "automated trading",
  ],
  openGraph: {
    title: "Wisp — Trading Bot Framework | Algorithmic & Agentic",
    description:
      "Open-source trading bot framework in Go. Multi-exchange support, backtesting, paper trading, and a first-class agentic interface for LLM-driven strategies.",
    url: "https://usewisp.dev",
    siteName: "Wisp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisp — Trading Bot Framework | Algorithmic & Agentic",
    description:
      "Build trading bots in Go. Connect to Polymarket, Hyperliquid, Paradex, Binance and more. Human-written or AI-driven — batteries included.",
  },
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
        <div className="noise-overlay" />
        {children}
        <GoogleAnalytics gaId="G-WSNWFHXWJ3" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
