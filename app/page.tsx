import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Terminal } from "@/components/terminal"
import { CodeShowcase } from "@/components/code-showcase"
import { About } from "@/components/about"
import { Works } from "@/components/works"
import { TechMarquee } from "@/components/tech-marquee"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SectionBlend } from "@/components/section-blend"

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Terminal />
        <CodeShowcase />
        <SectionBlend />

        {/*<About />*/}
        {/*<Works />*/}
        {/*<TechMarquee />*/}
        <Footer />
      </main>
    </SmoothScroll>
  )
}
