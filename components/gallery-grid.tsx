"use client"

import { useState } from "react"
import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    src: "/students-in-classroom.jpg",
    alt: "Classroom Learning",
    category: "Academic",
  },
  {
    id: 2,
    src: "/science-laboratory-experiments.jpg",
    alt: "Science Lab",
    category: "Labs",
  },
  {
    id: 3,
    src: "/school-sports-field-activities.jpg",
    alt: "Sports Activities",
    category: "Sports",
  },
  {
    id: 4,
    src: "/school-library-reading.jpg",
    alt: "Library",
    category: "Facilities",
  },
  {
    id: 5,
    src: "/students-cultural-program-performance.jpg",
    alt: "Cultural Program",
    category: "Events",
  },
  {
    id: 6,
    src: "/school-assembly-students-gathering.jpg",
    alt: "School Assembly",
    category: "Events",
  },
  {
    id: 7,
    src: "/computer-lab-digital-learning.jpg",
    alt: "Computer Lab",
    category: "Labs",
  },
  {
    id: 8,
    src: "/students-group-project-teamwork.jpg",
    alt: "Group Projects",
    category: "Academic",
  },
  {
    id: 9,
    src: "/sports-tournament-competition.jpg",
    alt: "Sports Tournament",
    category: "Sports",
  },
]

const categories = ["All", "Academic", "Labs", "Sports", "Facilities", "Events"]

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-primary border border-accent/30 hover:border-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg aspect-video bg-muted cursor-pointer"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-bold text-lg">{image.alt}</h3>
                  <p className="text-sm text-white/80">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
