import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { HomeHighlights } from "@/components/home-highlights"
import { HomeCTA } from "@/components/home-cta"
import AcademicCalendar from "@/components/calendar"
import HomeAbout from "@/components/home-about"
import { AboutVision } from "@/components/about-vision"
import Offers from "@/components/offers"

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroCarousel />
      <AboutVision />
      <HomeAbout />
      <Offers />
      
      <AcademicCalendar />
      <HomeCTA />
      <Footer />
    </>
  )
}
