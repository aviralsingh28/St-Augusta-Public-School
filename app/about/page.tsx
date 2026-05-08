import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutVision } from "@/components/about-vision"
import { AboutValues } from "@/components/about-values"
import { AboutHistory } from "@/components/about-history"

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <AboutHero />
      <AboutVision />
      <AboutHistory />
      <AboutValues />
      <Footer />
    </>
  )
}
