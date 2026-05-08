"use client"

import { useEffect, useRef, useState } from "react"

const academicCalendar = [
  { month: "April", events: ["New Academic Session Begins", "Orientation Program for Parents & Students", "Classroom Allocation & Timetable Distribution"] },
  { month: "May", events: ["Unit Test – I", "Summer Activities & Projects", "Parent-Teacher Interaction"] },
  { month: "June", events: ["Summer Vacation", "Teacher Training & Curriculum Planning"] },
  { month: "July", events: ["School Reopens After Summer Break", "Co-Curricular Activities Begin", "Inter-House Competitions"] },
  { month: "August", events: ["Independence Day Celebration", "Unit Test – II", "Cultural & Literary Events"] },
  { month: "September", events: ["Half-Yearly Examinations", "Teachers’ Review Meeting", "Student Skill Development Workshops"] },
  { month: "October", events: ["Dussehra & Diwali Holidays", "Art, Craft & Activity Week", "Educational Trips / Excursions"] },
  { month: "November", events: ["School Reopens After Diwali", "Annual Sports Week", "Health & Wellness Programs"] },
  { month: "December", events: ["Annual Day Celebration", "Unit Test – III", "Winter Vacation Begins"] },
  { month: "January", events: ["School Reopens After Winter Break", "Republic Day Celebration", "Pre-Board Examinations (Senior Classes)"] },
  { month: "February", events: ["Final Examinations", "Assessment & Result Preparation", "Career Guidance Sessions"] },
  { month: "March", events: ["Declaration of Results", "Annual Report Distribution", "Session Closing & Planning for New Session"] },
]

export default function AcademicCalendar() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-12 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3">
            Academic Calendar
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured overview of the academic year and important school events
          </p>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {(showAll ? academicCalendar : academicCalendar.slice(0, 3)).map((item, index) => (
            <div
              key={index}
              className={`
                bg-white border border-accent/20 rounded-xl p-5 sm:p-6
                transition-all duration-700 ease-out
                hover:shadow-xl hover:-translate-y-2
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary mb-3">
                {item.month}
              </h2>

              <ul className="space-y-2 text-sm sm:text-base">
                {item.events.map((event, idx) => (
                  <li
                    key={idx}
                    className="text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary font-bold leading-none">•</span>
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Read More / Less */}
        <div className="mt-8 sm:mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            {showAll ? "Read Less" : "Read More"}
            <span className="text-lg">{showAll ? "↑" : "↓"}</span>
          </button>
        </div>

        {/* Footer Note */}
        <div
          className={`mt-10 sm:mt-12 text-center text-xs sm:text-sm text-muted-foreground transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p>* Dates and events are subject to change as per school administration.</p>
        </div>
      </div>
    </section>
  )
}
