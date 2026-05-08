"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-8.75 z-40 bg-white border-b border-accent/20 shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-16 h-16 relative">
              <Image
                src="/logo.png"
                alt="St. Augusta Public School"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
            {/* SAPS – Always visible */}
            <h1 className="text-lg font-bold text-primary">
               SAPS
           </h1>

            {/* Full Name – Desktop only */}
           <p className="hidden sm:block text-s text-muted-foreground">
               St. Augusta Public School
           </p>
            </div>

          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Instagram Icon (Always Visible) */}
            <a
              href="https://www.instagram.com/st_augusta_public_school/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-foreground hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 hover:scale-110 transition-transform"
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
              </svg>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-foreground hover:text-primary font-medium">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary font-medium">
                About Us
              </Link>
              <Link href="/gallery" className="text-foreground hover:text-primary font-medium">
                Gallery
              </Link>
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 font-medium"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-accent/20 space-y-1">
            <Link href="/" className="block px-4 py-3 hover:bg-accent/10 rounded-lg">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-3 hover:bg-accent/10 rounded-lg">
              About Us
            </Link>
            <Link href="/gallery" className="block px-4 py-3 hover:bg-accent/10 rounded-lg">
              Gallery
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 bg-primary text-primary-foreground rounded-lg text-center font-medium"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
