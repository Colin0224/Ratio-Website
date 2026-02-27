import { Navbar } from "@/components/navbar"
import { HomeHeroSection } from "@/components/home-hero-section"
import { HeroSection } from "@/components/hero-section"
import { PricingSection } from "@/components/pricing-section"
import { FeaturesSection } from "@/components/features-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HomeHeroSection />
      <HeroSection />
      <PricingSection />
      <FeaturesSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
