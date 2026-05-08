export function ContactInfo() {
  return (
    <section className="w-full bg-muted/30 py-16">
      {/* Full width wrapper */}
      <div className="w-full px-6 lg:px-16">
        {/* Heading */}


        {/* FULL WIDTH GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {/* LEFT SIDE – DETAILS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Address */}
            <div className="bg-white p-6 rounded-xl border border-accent/20 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-2">📍 Address</h3>
              <p className="text-muted-foreground leading-relaxed">
                L/74 Yadunandan Nagar, Tifra <br />
                Bilaspur, Chhattisgarh – 495001 <br />
                India
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-xl border border-accent/20 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-2">📧 Email</h3>
              <a
                href="mailto:saps.tifra@gmail.com"
                className="block text-primary hover:underline"
              >
                saps.tifra@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-xl border border-accent/20 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-2">📞 Phone</h3>
              <a
                href="tel:+917000857305"
                className="block text-primary hover:underline"
              >
                +91 70008 57305
              </a>
              <a
                href="tel:+919755152052"
                className="block text-primary hover:underline"
              >
                +91 97551 52052
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Mon–Fri: 8:00 AM – 3:30 PM
              </p>
            </div>

            {/* School Hours */}
            <div className="bg-white p-6 rounded-xl border border-accent/20 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-2">
                🕐 School Hours
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  <strong>Mon – Sat:</strong> 8:00 AM – 2:00 PM
                </li>
                <li>
                  <strong>Sunday:</strong> Closed
                </li>
              </ul>
            </div>

            {/* Quick Facts – FULL WIDTH CARD */}
            <div className="md:col-span-2 bg-accent/10 p-6 rounded-xl border border-accent/30">
              <h3 className="text-lg font-bold text-primary mb-2">
                ✨ Quick Facts
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>✓ Founded in 2019</li>
                <li>✓ 25+ Experienced Faculty</li>
                <li>✓ Smart Classrooms & Labs</li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE – MAP (FULL HEIGHT) */}
<div className="w-full bg-white rounded-xl border border-accent/20 shadow-sm p-4">
  <h3 className="text-lg font-bold text-primary mb-4">
    📌 School Location
  </h3>

  {/* MAP WRAPPER WITH FIXED HEIGHT */}
  <div className="w-full h-80 sm:h-95 md:h-105 lg:h-120 rounded-lg overflow-hidden">
    <iframe
      title="St Augusta Public School Location"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d466.85692329848587!2d82.1227972562336!3d22.06743455215168!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280dc9e9ce9c0f%3A0x99f3cb94dbd5700d!2sSt.%20Augusta%20public%20school!5e0!3m2!1sen!2sin!4v1768201598263!5m2!1sen!2sin"
      className="w-full h-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>
        </div>
      </div>
    </section>
  )
}
