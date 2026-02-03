import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
  title: "Wisp - Algorithmic Trading Framework in Go",
  description:
    "Fast, production-ready trading framework with interactive TUI. Write strategies in Go, backtest, and deploy to live markets.",
  openGraph: {
    title: "Wisp - Algorithmic Trading Framework in Go",
    description:
      "Build trading strategies with a composable Go API. Sub-millisecond execution, multi-exchange support, beautiful terminal interface.",
    url: "https://usewisp.dev",
    siteName: "Wisp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisp - Algorithmic Trading Framework in Go",
    description:
      "Fast, production-ready trading framework with interactive TUI.",
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
        <Analytics />
      </body>
    </html>
  )
}
