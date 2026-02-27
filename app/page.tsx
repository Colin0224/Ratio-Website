import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BehindScenesSection } from "@/components/behind-scenes-section"
import { PricingSection } from "@/components/pricing-section"
import { FeaturesSection } from "@/components/features-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BehindScenesSection />
      <PricingSection />
      <FeaturesSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
