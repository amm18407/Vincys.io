import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { PainPointsSection } from '@/components/pain-points-section'
import { FeaturesSection } from '@/components/features-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { TrustSection } from '@/components/trust-section'
import { CTABanner } from '@/components/cta-banner'
import { PricingSection } from '@/components/pricing-section'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <TrustSection />
      <CTABanner variant="mid" />
      <PricingSection />
      <ContactForm />
      <CTABanner variant="bottom" />
      <Footer />
    </main>
  )
}


