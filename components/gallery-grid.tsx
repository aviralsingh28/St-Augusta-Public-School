"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const galleryImages = [
  {
    id: 1,
    src: "/classrooms/WhatsApp Image 2026-05-11 at 11.58.49.jpeg",
    alt: "Classroom 1",
    category: "Classrooms",
  },
  {
    id: 2,
    src: "/classrooms/WhatsApp Image 2026-05-11 at 11.58.16.jpeg",
    alt: "Classroom 2",
    category: "Classrooms",
  },
  {
    id: 3,
     src: "/classrooms/WhatsApp Image 2026-05-11 at 11.56.34.jpeg",
    alt: "Classroom 3",
    category: "Classrooms",
  },
  {
    id: 4,
    src: "/classrooms/classroom4.png",
    alt: "Classroom 4",
    category: "Classrooms",
  },
  {
    id: 5,
    src: "/classrooms/a5deb5ab-4776-40f1-a0c3-a7009bd7f55e.png",
    alt: "Classroom Space",
    category: "Classrooms",
  },
  {
    id: 6,
    src: "/classrooms/b89aa4a9-abf4-469d-a206-4321f98367ef.jpg",
    alt: "Classroom Setup",
    category: "Classrooms",
  },
  {
    id: 7,
    src: "/classrooms/classroom3.png",
    alt: "Classroom Activity 1",
    category: "Classrooms",
  },
  {
    id: 8,
   src: "/classrooms/classroom2.png",
    alt: "Classroom Activity 2",
    category: "Classrooms",
  },
  {
    id: 9,
    src: "/classrooms/classroom1.jpg",
    alt: "Classroom Activity 3",
    category: "Classrooms",
  },
    {
    id: 10,
    src: "/events/IMG_7998.jpg",
    alt: "Rakhi Competition",
    category: "Events",
  },
]

const categories = ["All", "Classrooms", "Labs", "Sports", "Facilities", "Events"]

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

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
              onClick={() => setSelectedImage(image)}
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

        {/* Image Preview Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl max-h-[80vh] flex flex-col p-6 my-8">
            {selectedImage && (
              <div className="relative w-full h-[55vh]">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {selectedImage && (
              <div className="p-4 border-t">
                <h2 className="font-bold text-xl">{selectedImage.alt}</h2>
                <p className="text-sm text-muted-foreground">{selectedImage.category}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
