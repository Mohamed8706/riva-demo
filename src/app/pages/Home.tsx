// ============================================
// HOME PAGE - Main landing page
// ============================================
import Navbar from "../../app/components/Navbar";
import Footer from "../../app/components/Footer";
import HeroSection from "../../app/components/home/HeroSection";
import HowItWorksSection from "../../app/components/home/HowItWorksSection";
import FeaturesSection from "../../app/components/home/FeaturesSection";
import DoctorsSection from "../../app/components/home/DoctorsSection";
import SeniorPatientsSection from "../../app/components/home/SeniorPatientsSection";
import CTASection from "../../app/components/home/CTASection";
import { DiseaseCareSection } from "../components/home/DiseaseCareSection";
import { BookConsultationCTA } from "../components/home/BookConsultationSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-100 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <DiseaseCareSection />
      <FeaturesSection />
      <DoctorsSection />
      <SeniorPatientsSection />
      <BookConsultationCTA />
      <CTASection />
      <Footer />
    </div>
  );
}
