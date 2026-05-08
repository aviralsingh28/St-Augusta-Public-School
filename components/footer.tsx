export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">St. Augusta Public School</h3>
            <p className="text-primary-foreground/80 text-sm">
              Building Future Leaders through quality education with values and discipline.
            </p>
            <br />
            <p className="text-primary-foreground/80 text-sm">
              Udise Code: 22070307353
            </p>
          </div> 

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="/" className="hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-primary-foreground transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

{/* Contact Info */}
<div>
  <h4 className="font-bold mb-4">Contact</h4>

  <ul className="space-y-4 text-sm text-primary-foreground/80">
    <li>
      <a
        href="mailto:saps.tifra@gmail.com"
        className="hover:text-primary-foreground transition"
      >
        saps.tifra@gmail.com
      </a>
    </li>

    <li>
      <a
        href="tel:+917000857305"
        className="hover:text-primary-foreground transition"
      >
        +91 70008 57305
      </a>
      <span className="mx-2">|</span>
      <a
        href="tel:+919755152052"
        className="hover:text-primary-foreground transition"
      >
        +91 97551 52052
      </a>
    </li>

    <li className="leading-relaxed">
      L/74 Yadunandan Nagar, Tifra <br />
      Bilaspur, Chhattisgarh – 495001 <br />
      India
    </li>
  </ul>
</div>


          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4">School Hours</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Monday - Friday: 8:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

<div className="border-t border-primary-foreground/20 pt-6">
  <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
    {/* Left */}
    <p className="text-center md:text-left">
      © {currentYear} St. Augusta Public School. All rights reserved.
      <span className="mx-2 hidden sm:inline">•</span>
      <span className="block sm:inline">
        Made with <span className="text-red-400">❤️</span> by Aviral Singh
      </span>
    </p>

    {/* Right – Instagram */}
    <a
      href="https://www.instagram.com/st_augusta_public_school/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary-foreground transition"
      aria-label="Instagram"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 hover:scale-110 transition-transform"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
      </svg>
    </a>
  </div>
</div>


      </div>
    </footer>
  )
}
