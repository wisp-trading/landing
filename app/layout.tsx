import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Geist_Mono } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
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
    title: "Wisp — Trading Bot Framework | Algorithmic & Agentic",
    description:
      "Open-source trading bot framework in Go. Multi-exchange support, backtesting, paper trading, and a first-class agentic interface for LLM-driven strategies.",
    url: "https://usewisp.dev",
    siteName: "Wisp",
    images: [
      {
        url: "/wisp-logo.png",
        width: 1200,
        height: 630,
        alt: "Wisp Trading Bot Framework",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisp — Trading Bot Framework | Algorithmic & Agentic",
    description:
      "Build trading bots in Go. Connect to Polymarket, Hyperliquid, Paradex, Binance and more. Human-written or AI-driven — batteries included.",
    images: ["/wisp-logo.png"],
  },
  alternates: {
    canonical: "https://usewisp.dev",
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
      </body>
    </html>
  )
}
