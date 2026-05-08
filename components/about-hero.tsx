import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative h-96 overflow-hidden bg-primary text-primary-foreground">
      <Image src="/school-campus-aerial-view.jpg" alt="School Campus" fill className="object-cover opacity-100" />
      <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-primary-foreground/90 max-w-2xl">
          Learn about St. Augusta Public School's journey, vision, and commitment to excellence
        </p>
      </div>
    </section>
  )
}
