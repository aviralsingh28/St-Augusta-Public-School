"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function AboutVision() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.25,
      }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-20">

        {/* ===== Director Section ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image (LEFT on desktop) */}
          <div
            className={`
              relative w-full h-80 rounded-xl overflow-hidden shadow-md
              transition-all duration-1000 ease-out
              ${
                isVisible
                  ? "opacity-100 translate-y-0 md:translate-x-0"
                  : "opacity-0 translate-y-8 md:-translate-x-20"
              }
            `}
          >
            <Image
              src="/Screenshot 2026-01-16 at 12.36.10 PM.png"
              alt="Dr. Rita Singh - Director"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Content (RIGHT on desktop) */}
          <div
            className={`
              transition-all duration-1000 ease-out delay-150
              ${
                isVisible
                  ? "opacity-100 translate-y-0 md:translate-x-0"
                  : "opacity-0 translate-y-8 md:translate-x-20"
              }
            `}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Dr. Rita Singh
            </h2>
            <p className="text-lg font-semibold text-accent mb-4">
              Founder & Director
            </p>

            <p className="text-lg text-muted-foreground mb-4">
              <strong>Dr. Rita Singh</strong> is a highly qualified educationist,
              holding a <strong>Ph.D.</strong> along with professional degrees in
              <strong> B.Ed.</strong> and <strong>M.Ed.</strong>.
            </p>

            <p className="text-lg text-muted-foreground mb-4">
              She left advocacy in <strong>2001</strong> to pursue education,
              completed <strong>B.Ed.</strong>, <strong>M.Ed.</strong>, and later
              earned a <strong>Ph.D.</strong>, reflecting her commitment to
              academic excellence.
            </p>

            <p className="text-lg text-muted-foreground">
              Under her leadership, St. Augusta Public School nurtures students
              through value-based education and holistic development.
            </p>
          </div>
        </div>

        {/* ===== Vision & Mission Section ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Vision (LEFT) */}
          <div
            className={`
              transition-all duration-1000 ease-out
              ${
                isVisible
                  ? "opacity-100 translate-y-0 md:translate-x-0"
                  : "opacity-0 translate-y-8 md:-translate-x-20"
              }
            `}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              To be a premier educational institution that nurtures intellectual
              curiosity, moral values, and leadership qualities.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We envision a learning environment that prepares students for the
              challenges of tomorrow, fostering innovation and excellence.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our vision extends beyond academics to cultivate responsible global citizens who contribute positively to society and embrace lifelong learning.
            </p>
            <p className="text-lg text-muted-foreground">
              We strive to create an inclusive community where every student can discover their potential and achieve their aspirations.
            </p>
          </div>

          {/* Mission (RIGHT) */}
          <div
            className={`
              bg-accent/10 p-8 rounded-lg border-l-4 border-accent
              transition-all duration-1000 ease-out delay-150
              ${
                isVisible
                  ? "opacity-100 translate-y-0 md:translate-x-0"
                  : "opacity-0 translate-y-8 md:translate-x-20"
              }
            `}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              Our Mission
            </h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Provide quality education rooted in excellence and academic rigor</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Develop strong moral values, character, and discipline in students</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Encourage critical thinking, creativity, and innovation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Support holistic student development across academic and co-curricular areas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Promote digital literacy and adapt to modern educational practices</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Foster inclusivity and respect for diversity among all students</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Build a supportive community where every student can thrive</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
