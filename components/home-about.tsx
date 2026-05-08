import Image from "next/image"
import Link from "next/link"

export default function HomeAbout() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/classroom-students-learning.jpg"
          alt="St. Augusta Public School"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0b1c2d]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-accent font-semibold uppercase tracking-wide mb-3">
            St. Augusta Public School
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            About Our School
          </h2>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-1 text-sm font-semibold rounded-full bg-white/10 text-white border border-white/20">
              RTE Verified School
            </span>
            <span className="px-4 py-1 text-sm font-semibold rounded-full bg-white/10 text-white border border-white/20">
              CBSE Curriculum
            </span>
            <span className="px-4 py-1 text-sm font-semibold rounded-full bg-white/10 text-white border border-white/20">
              Inclusive Education
            </span>
          </div>

          <p className="text-lg text-white/85 mb-6 leading-relaxed">
            St. Augusta Public School is a <strong>RTE-verified institution</strong>,
            actively enrolling <strong>RTE students</strong> and promoting inclusive,
            equal, and accessible education for all. The school follows a student-centric
            approach that nurtures academic excellence, moral values, and holistic
            development.
          </p>

          <p className="text-lg text-white/85 mb-8 leading-relaxed">
            Our academic framework is <strong>fully aligned with CBSE guidelines</strong>,
            and all teaching–learning processes strictly follow the
            <strong> CBSE-recommended curriculum and textbooks</strong>. Under strong
            leadership and a dedicated faculty, education at St. Augusta Public School
            goes beyond textbooks, encouraging critical thinking, creativity, and
            lifelong learning.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all"
          >
            Read More
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
