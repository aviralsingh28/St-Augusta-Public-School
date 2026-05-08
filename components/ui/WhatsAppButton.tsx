'use client'

import Link from 'next/link'

export default function WhatsAppButton() {
  const phoneNumber = '919981399991'

  const message = encodeURIComponent(
    'Hello, I would like to get more information regarding admissions and school facilities. Please guide me.'
  )

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7"
      >
        <path d="M16 0C7.164 0 0 6.94 0 15.49c0 2.73.75 5.27 2.04 7.49L0 32l9.32-2.48c2.09 1.15 4.49 1.8 6.68 1.8 8.84 0 16-6.94 16-15.49S24.84 0 16 0zm0 28.21c-2.03 0-4.14-.62-5.96-1.77l-.43-.26-5.52 1.47 1.47-5.37-.28-.45C4.07 20.04 3.4 17.79 3.4 15.49 3.4 8.74 9.16 3.4 16 3.4s12.6 5.34 12.6 12.09-5.76 12.72-12.6 12.72z" />
        <path d="M23.47 18.43c-.41-.21-2.43-1.19-2.8-1.32-.38-.14-.66-.21-.93.21-.27.41-1.07 1.32-1.32 1.59-.24.28-.49.31-.9.1-.41-.21-1.72-.62-3.27-1.97-1.2-1.05-2.01-2.35-2.24-2.76-.24-.41-.03-.63.18-.83.19-.19.41-.49.62-.73.21-.24.28-.41.41-.69.14-.27.07-.52-.03-.73-.1-.21-.93-2.21-1.28-3.03-.34-.82-.69-.69-.93-.69h-.8c-.27 0-.73.1-1.11.52-.38.41-1.45 1.42-1.45 3.45s1.49 3.99 1.69 4.26c.21.27 2.94 4.52 7.12 6.34 1 .45 1.77.73 2.38.93 1 .31 1.9.27 2.62.17.8-.1 2.43-.97 2.77-1.9.34-.93.34-1.73.24-1.9-.1-.17-.38-.28-.8-.49z" />
      </svg>
    </Link>
  )
}
