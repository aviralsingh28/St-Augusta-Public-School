"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    image: "/ChatGPT Image Jan 12, 2026, 12_59_34 PM.png",
    text: "St. Augusta Public School",
    subtext: "Excellence in Education",
  },
  {
    image: "/ChatGPT Image Jan 12, 2026, 12_59_34 PM.png",
    text: "Building Future Leaders",
    subtext: "Quality Education",
  },
  {
    image: "/ChatGPT Image Jan 12, 2026, 12_59_34 PM.png",
    text: "Education with Values",
    subtext: "Discipline & Growth",
  },
  {
    image: "/ChatGPT Image Jan 12, 2026, 12_59_34 PM.png",
    text: "Where Learning Meets Excellence",
    subtext: "Holistic Development",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length)
        setIsTransitioning(false)
      }, 600)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with zoom animation */}
      <Image
        src={slide.image}
        alt={slide.text}
        fill
        priority
        className={`object-cover transition-all duration-2000 ease-out
          ${isMounted ? "scale-100 opacity-100" : "scale-110 opacity-0"}
          ${isTransitioning ? "opacity-60" : "opacity-100"}
        `}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white px-4 pb-24 md:pb-32">
        <div className="max-w-3xl">

          {/* Heading */}
          <h1
            className={`
              text-5xl md:text-7xl font-bold mb-4
              transition-all duration-1000 ease-out
              ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}
            `}
          >
            {slide.text}
          </h1>

          {/* Subtext */}
          <p
            className={`
              text-xl md:text-2xl text-white/90 font-light
              transition-all duration-1000 delay-150 ease-out
              ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              ${isTransitioning ? "opacity-0" : "opacity-100"}
            `}
          >
            {slide.subtext}
          </p>
        </div>
      </div>

      {/* Navigation Dots */}
      <div
        className={`
          absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3
          transition-opacity duration-1000 delay-300
          ${isMounted ? "opacity-100" : "opacity-0"}
        `}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true)
              setTimeout(() => {
                setCurrent(index)
                setIsTransitioning(false)
              }, 600)
            }}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white w-8"
                : "bg-white/50 w-3 hover:bg-white/80"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={() => {
          setIsTransitioning(true)
          setTimeout(() => {
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
            setIsTransitioning(false)
          }, 600)
        }}
        className={`
          absolute left-4 top-1/2 -translate-y-1/2
          bg-white/20 hover:bg-white/40 text-white p-3 rounded-full
          transition-all duration-500
          ${isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}
        `}
        aria-label="Previous slide"
      >
        ←
      </button>

      {/* Next Button */}
      <button
        onClick={() => {
          setIsTransitioning(true)
          setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
            setIsTransitioning(false)
          }, 600)
        }}
        className={`
          absolute right-4 top-1/2 -translate-y-1/2
          bg-white/20 hover:bg-white/40 text-white p-3 rounded-full
          transition-all duration-500
          ${isMounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
        `}
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  )
}
