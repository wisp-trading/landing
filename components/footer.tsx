"use client"

import { GithubIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-20 border-t border-white/10 bg-black">
      <div className="px-8 md:px-12 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#888888]">
          {/* Left - Copyright */}
          <div className="flex items-center gap-3">
            <p className="font-mono text-xs tracking-wider">© 2026 Wisp</p>
            <a
              href="https://github.com/wisp-trading/wisp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Center - Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://usewisp.dev/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-wider hover:text-white transition-colors duration-300"
            >
              Docs
            </a>
            <a
              href="https://usewisp.dev/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-wider hover:text-white transition-colors duration-300"
            >
              Blog
            </a>
            <a
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-wider hover:text-white transition-colors duration-300"
            >
              MIT License
            </a>
          </div>

          {/* Right - Built in Go */}
          <a
            href="https://go.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 px-3"
          >
            <span className="text-xs font-normal text-[#999999]">Built in</span>
            <span className="font-mono text-sm font-bold text-[#00ADD8] tracking-tight">
              GO
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
