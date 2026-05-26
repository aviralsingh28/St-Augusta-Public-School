import Image from "next/image"
import Link from "next/link"

export default function HomeAbout() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/classrooms/WhatsApp Image 2026-05-11 at 11.56.34.jpeg"
          alt="St. Augusta Public School"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0b1c2d]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex justify-center items-center">
        <div className="max-w-3xl w-full px-8 lg:px-12 py-16">
          <p className="text-accent font-semibold uppercase tracking-wide mb-4 text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            St. Augusta Public School
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            About Our School
          </h2>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              RTE Verified School
            </span>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors animate-fade-in-up" style={{animationDelay: '0.7s'}}>
              CBSE Curriculum
            </span>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              Inclusive Education
            </span>
          </div>

          <p className="text-lg text-white/85 mb-8 leading-relaxed text-center animate-fade-in-up" style={{animationDelay: '1s'}}>
            St. Augusta Public School is a <strong>RTE-verified institution</strong>,
            actively enrolling <strong>RTE students</strong> and promoting inclusive,
            equal, and accessible education for all. The school follows a student-centric
            approach that nurtures academic excellence, moral values, and holistic
            development.
          </p>

          <p className="text-lg text-white/85 mb-10 leading-relaxed text-center animate-fade-in-up" style={{animationDelay: '1.2s'}}>
            Our academic framework is <strong>fully aligned with CBSE guidelines</strong>,
            and all teaching–learning processes strictly follow the
            <strong> CBSE-recommended curriculum and textbooks</strong>. Under strong
            leadership and a dedicated faculty, education at St. Augusta Public School
            goes beyond textbooks, encouraging critical thinking, creativity, and
            lifelong learning.
          </p>

          <div className="flex justify-center animate-fade-in-up" style={{animationDelay: '1.4s'}}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all hover:text-accent"
            >
              Read More
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
