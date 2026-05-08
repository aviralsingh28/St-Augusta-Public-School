import Image from "next/image"

export function ContactHero() {
  return (
    <section className="relative h-80 overflow-hidden bg-primary text-primary-foreground">
      <Image src="/contact-communication.jpg" alt="Contact Us" fill className="object-cover opacity-60" />
      <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-primary-foreground/90">
          We'd love to hear from you. Reach out for admissions, inquiries,
          or general information.
        </p>
      </div>
    </section>
  )
}
 