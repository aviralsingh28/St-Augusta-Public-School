'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqData = [
  {
    id: 'item-1',
    question: 'What are the school hours?',
    answer: 'School hours are from 8:00 AM to 3:00 PM, Monday through Friday. Primary classes: 8:00 AM - 2:00 PM. Secondary classes: 8:30 AM - 3:00 PM.',
  },
  {
    id: 'item-2',
    question: 'What is the admission process?',
    answer: 'Admission is based on merit and our entrance examination. Interested parents can submit applications through our website or visit the admissions office. We conduct entrance tests for Classes I, VI, and IX.',
  },
  {
    id: 'item-3',
    question: 'Does the school provide transportation?',
    answer: 'Yes, we provide a comprehensive transportation service covering major areas. A monthly fee is charged for transportation. Students can opt for this facility while registering.',
  },
  {
    id: 'item-4',
    question: 'What extracurricular activities are available?',
    answer: 'We offer sports (cricket, football, badminton, tennis), music, arts, debate, clubs, and various competitions. All students are encouraged to participate in at least one activity.',
  },
  {
    id: 'item-5',
    question: 'What is the school curriculum?',
    answer: 'We follow a comprehensive curriculum combining CBSE standards with experiential learning. Students study English, Mathematics, Science, Social Studies, Hindi, and skill subjects.',
  },
  {
    id: 'item-6',
    question: 'How are parents updated about student progress?',
    answer: 'We maintain regular communication through parent-teacher conferences (quarterly), progress reports, online portal access, and WhatsApp updates for urgent matters.',
  },
  {
    id: 'item-7',
    question: 'Is there a school uniform?',
    answer: 'Yes, all students are required to wear the official school uniform. Primary: White shirt with blue shorts/skirt. Secondary: White shirt/blouse with navy blue pants/skirt.',
  },
  {
    id: 'item-8',
    question: 'What are the fee submission deadlines?',
    answer: 'Tuition fees are due by the 10th of each month. Late fee of ₹500 will be charged for payments made after the 15th. Fees can be submitted online or at the office.',
  },
]

export function FAQ() {
  return (
    <section className="w-full bg-gradient-to-br from-background via-secondary/5 to-background py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about St. Augusta Public School
          </p>
        </div>

        {/* Divider */}
        <div className="mb-10 flex items-center justify-center gap-4">
          <div className="h-1 w-12 bg-accent rounded-full"></div>
          <div className="h-2 w-2 bg-primary rounded-full"></div>
          <div className="h-1 w-12 bg-accent rounded-full"></div>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-secondary/20 rounded-lg px-4 transition-all hover:border-primary/30 hover:shadow-md data-[state=open]:border-primary data-[state=open]:bg-secondary/10"
            >
              <AccordionTrigger className="text-base font-semibold text-primary hover:text-accent no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Footer Text */}
        <div className="mt-12 rounded-lg border border-accent/30 bg-accent/5 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Didn't find your answer? Contact us at{' '}
            <a
              href="mailto:saps.tifra@gmail.com"
              className="font-semibold text-primary hover:text-accent transition-colors"
            >
              saps.tifra@gmail.com
            </a>{' '}
            or call{' '}
            <a
              href="tel:+917000857305"
              className="font-semibold text-primary hover:text-accent transition-colors"
            >
              +91 70008 57305
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
