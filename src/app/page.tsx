import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DemosSection from "@/components/DemosSection";
import ProductsSection from "@/components/ProductsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-20">
        <HeroSection />
        <DemosSection />
        <ProductsSection />
        <PricingSection />
      </main>
      <TestimonialsSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
