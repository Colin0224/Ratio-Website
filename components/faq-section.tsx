"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is there a free plan?",
    answer:
      "Unfortunately not :( Due to the high development costs and server infrastructure, a free plan is not sustainable. However, all new accounts come with a free 3-day trial so you can try everything out before committing.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "When you download Ratio, you automatically get a 3-day free trial with access to all premium features. No credit card required. If you love it, you can subscribe at any time. If not, the app will revert to the basic features.",
  },
  {
    question: "Do you sell my data?",
    answer:
      "Absolutely not. Your data is yours and yours alone. We don't sell, share, or monetize your personal data in any way. Ratio is funded entirely through subscriptions, not advertising or data sales.",
  },
  {
    question: "Do you offer a student discount?",
    answer:
      "Yes! We offer a 30% student discount. Just reach out to our support team with a valid student email and we'll get you set up with the discounted rate.",
  },
]

export function FaqSection() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
          Frequently asked questions
        </h2>
        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-base font-bold text-foreground py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
