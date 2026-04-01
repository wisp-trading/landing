import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { LLMBanner } from "@/components/llm-banner"
import { Intro } from "@/components/intro"
import { Platforms } from "@/components/platforms"
import { Features } from "@/components/features"
import { Agentic } from "@/components/agentic"
import { Terminal } from "@/components/terminal"
import { CodeShowcase } from "@/components/code-showcase"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SectionBlend } from "@/components/section-blend"

export default function Home() {
  return (
    <SmoothScroll>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <Hero />
        <LLMBanner />
        <Intro />
        <Platforms />
        <Features />
        <Agentic />
        <Terminal />
        <CodeShowcase />
        <FAQ />
        <SectionBlend />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
