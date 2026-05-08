"use client"

import { useEffect, useRef, useState } from "react"
import {
  BookOpen,
  Bus,
  GraduationCap,
  Shirt,
  BadgeCheck,
  ShieldCheck,
  MonitorPlay,
  Users,
} from "lucide-react"

export default function Offers() {
  const sectionRef = useRef<HTMLDivElement | null>(null) 
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const offers = [
    {
      title: "Free Registration",
      description:
        "Admission registration is completely free, making quality education accessible to all families.",
      icon: GraduationCap,
    },
    {
      title: "Books Available on Campus",
      description:
        "All CBSE-recommended textbooks and study materials are available within the school campus.",
      icon: BookOpen,
    },
    {
      title: "School Uniform Provided",
      description:
        "School dress and uniforms are available on campus for student convenience and consistency.",
      icon: Shirt,
    },
    {
      title: "Transport (Van) Facility",
      description:
        "Safe and reliable school van facility is available for students across nearby locations.",
      icon: Bus,
    },
    {
      title: "CBSE Curriculum",
      description:
        "Teaching and learning strictly follow CBSE guidelines with structured academic planning.",
      icon: BadgeCheck,
    },
    {
      title: "Safe & Disciplined Campus",
      description:
        "A secure, disciplined, and student-friendly campus environment for overall growth.",
      icon: ShieldCheck,
    },
    {
      title: "Smart Learning",
      description:
        "Digital learning tools and smart classroom methods to enhance understanding and engagement.",
      icon: MonitorPlay,
    },
    {
      title: "Co-Curricular Activities",
      description:
        "Sports, cultural activities, and personality development programs for holistic education.",
      icon: Users,
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-accent font-semibold uppercase tracking-wide mb-3">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Facilities & Special Offers
          </h2>
          <p className="text-lg text-muted-foreground">
            At St. Augusta Public School, we ensure that students receive quality
            education along with essential facilities that support learning,
            safety, and overall development.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`
                group bg-white border border-accent/20 rounded-xl p-6 shadow-sm
                transition-all duration-700 ease-out
                hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }
              `}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary group-hover:rotate-3">
                <offer.icon className="w-7 h-7 text-primary transition-all duration-500 group-hover:text-white group-hover:scale-110" />
              </div>

              <h3 className="text-xl font-semibold text-primary mb-2">
                {offer.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
