import type React from "react"
import type { Metadata } from "next"
import { Lora, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import WhatsAppButton from "@/components/ui/WhatsAppButton"
import AnnouncementMarquee from '@/components/ui/AnnouncementMarquee'

const _lora = Lora({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'St. Augusta Public School',
  description: 'St. Augusta Public School – English Medium School',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AnnouncementMarquee />
        {children}
        <WhatsAppButton />
      </body>
    </html>

  )
}
