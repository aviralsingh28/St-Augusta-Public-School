import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <ContactHero />
      
        
        <ContactInfo />
     
      <Footer />
    </>
  )
}
