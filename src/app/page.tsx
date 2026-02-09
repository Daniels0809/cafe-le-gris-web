"use client";

import Hero from "@/components/Hero";
import HistorySection from "@/components/sections/HistorySection";
import GastronomySection from "@/components/sections/GastronomySection";
import AboutSection from "@/components/sections/AboutSection";
import LocationSection from "@/components/sections/LocationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <HistorySection />
      <GastronomySection />
      <AboutSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
