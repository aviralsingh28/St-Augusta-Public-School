import Link from "next/link"

export function HomeCTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
        <p className="text-lg mb-8 text-primary-foreground/90">
          Learn more about St. Augusta Public School and discover how we can help your child thrive academically and
          personally.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/about"
            className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-accent transition-colors"
          >
            Learn More About Us
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
