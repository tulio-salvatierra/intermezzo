
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Pricing from "@/components/Pricing/Pricing";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTA from "@/components/CTA/CTA";
import Proccess from "@/components/Process/Proccess";
import Footer from "@/components/Footer/Footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
    <Header/>
      <main className="flex-1">
        {/* Hero Section */}
        <Hero/>
        {/* About Section */}
        <About />
        {/* Services Section */}
        <Services />
        {/* Process Section */}
        <Proccess />
        {/* Pricing Section */}
       <Pricing />
        {/* Testimonials Section */}
        <Testimonials />
        {/* Final CTA Section */}
       <CTA />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
