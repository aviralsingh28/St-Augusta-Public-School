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

        {/* Bottom Footer Bar */}
        <div className="border-t border-primary-foreground/20 pt-6">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-primary-foreground/70">
    {/* Left - Copyright */}
    <p className="md:flex-1 md:text-left text-center">
      © {currentYear} St. Augusta Public School. All rights reserved.
    </p>
    
    {/* Center - Terms & Privacy */}
    <div className="md:flex-1 flex items-center justify-center gap-4">
      <a 
        href="/terms-and-conditions" 
        className="hover:text-primary-foreground transition-colors duration-200"
      >
        Terms & Conditions
      </a>
      <span className="text-primary-foreground/40">•</span>
      <a 
        href="/privacy-policy" 
        className="hover:text-primary-foreground transition-colors duration-200"
      >
        Privacy Policy
      </a>
    </div>
    
    {/* Right - Developer */}
    <p className="md:flex-1 md:text-right text-center">
      Developed by Aviral Singh
    </p>
  </div>
</div>


      </div>
    </footer>
  )
}
