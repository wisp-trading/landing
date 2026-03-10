import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LLMBanner } from "@/components/llm-banner"
import { Intro } from "@/components/intro"
import { Platforms } from "@/components/platforms"
import { Features } from "@/components/features"
import { Agentic } from "@/components/agentic"
import { Terminal } from "@/components/terminal"
import { CodeShowcase } from "@/components/code-showcase"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SectionBlend } from "@/components/section-blend"

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <LLMBanner />
        <Intro />
        <Platforms />
        <Features />
        <Agentic />
        <Terminal />
        <CodeShowcase />
        <SectionBlend />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
