import { Navigation } from "../components/utils/Navigation";
import { HeroSection } from "../components/sections/HeroSection";
import HealthConditionsSection from "../components/sections/HealthConditionsSection";
import FAQSection from "../components/sections/FaqSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CTASection from "../components/sections/CtaSection";
import Footer from "../components/sections/Footer";
import AboutUsSection from "../components/sections/AboutSection";


export default function Home() {
  return (
    <div className="relative size-full overflow-y-auto bg-white/80 backdrop-blur-3xl">
      <Navigation />
      <HeroSection />
      <AboutUsSection />
      <HealthConditionsSection />
      <FAQSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
