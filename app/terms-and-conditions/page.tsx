import { Footer } from "@/components/footer"
import Image from "next/image"
import { Navigation } from "@/components/navigation"    


export default function TermsAndConditions() {
  return (
        <>
        <Navigation />
            <section className="relative h-96 overflow-hidden bg-primary text-primary-foreground">
              <Image src="/school-campus-aerial-view.jpg" alt="School Campus" fill className="object-cover opacity-100" />
              <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/70" />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                <h1 className="text-5xl text-center md:text-6xl font-bold mb-4">Terms and Conditions</h1>
                <p className="text-l text-center text-primary-foreground/90 max-w-2xl mx-auto">
  Read the Terms & Conditions of St. Augusta Public School to understand the rules, guidelines, and policies for using our website and services.
</p>
              </div>
            </section>
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="prose prose-blue max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#76001F] mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions govern the use of the St. Augusta Public School website. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#76001F] mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-700 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials (information or software) on St. Augusta Public School's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              <li>Attempting to gain unauthorized access to any portion or feature of the website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#76001F] mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              The materials on St. Augusta Public School's website are provided on an 'as is' basis. St. Augusta Public School makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#76001F] mt-8 mb-4">4. Limitations</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall St. Augusta Public School or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#76001F] mt-8 mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-700 leading-relaxed">
              The materials appearing on St. Augusta Public School's website could include technical, typographical, or photographic errors. St. Augusta Public School does not warrant that any of the materials on its website are accurate, complete, or current. St. Augusta Public School may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#76001F] mt-8 mb-4">6. Links</h2>
            <p className="text-gray-700 leading-relaxed">
              St. Augusta Public School has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by St. Augusta Public School of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#76001F] mt-8 mb-4">7. Modifications</h2>
            <p className="text-gray-700 leading-relaxed">
              St. Augusta Public School may revise these Terms and Conditions for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#76001F] mt-8 mb-4">8. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in Bilaspur, Chhattisgarh.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#76001F] mt-8 mb-4">9. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at:
              <br />
              Email: <a href="mailto:saps.tifra@gmail.com" className="text-[#76001F] hover:underline">saps.tifra@gmail.com</a>
              <br />
              Phone: <a href="tel:+917000857305" className="text-[#76001F] hover:underline">+91 70008 57305</a>
            </p>
          </section>

          <p className="text-gray-600 text-sm mt-12">
            Last updated: May 2026
          </p>
        </div>
      </div>
    </div>
         <Footer />
        </>
  )
}
