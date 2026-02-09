"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface GitHubRelease {
  tag_name: string
  html_url: string
  published_at: string
}

export function AlphaBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [latestRelease, setLatestRelease] = useState<GitHubRelease | null>(null)

  useEffect(() => {
    // Fetch latest release from GitHub
    fetch("https://api.github.com/repos/wisp-trading/sdk/releases/latest")
      .then((res) => res.json())
      .then((data) => setLatestRelease(data))
      .catch((err) => console.error("Failed to fetch release:", err))
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] border-b"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(12px)",
        borderColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2.5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
            {/* Status Indicator */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: "#00d4ff" }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: "#00d4ff" }}
                />
              </span>
              <span
                className="font-mono text-[10px] tracking-widest font-semibold uppercase"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#00d4ff",
                }}
              >
                Alpha
              </span>
            </div>

            {/* Divider */}
            <div
              className="hidden sm:block h-3 w-px"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            />

            {/* Message */}
            <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
              <p
                className="text-xs md:text-sm truncate md:block"
                style={{ color: "#e5e5e5" }}
              >
                <span className="hidden sm:inline">
                  Wisp is in active development.{" "}
                </span>
                <span className="sm:hidden">In development. </span>
                APIs may change.
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded flex-shrink-0 transition-colors"
            style={{
              color: "#a1a1aa",
              transition: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.05)"
              e.currentTarget.style.color = "#ffffff"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.color = "#a1a1aa"
            }}
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
