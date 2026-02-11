"use client";

import HeroSection from "../components/HeroSection";
import DestinationGallery from "../components/DestinationGallery";
import TimeQuiz from "../components/TimeQuiz";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";

export default function Home() {
  const handleBookingClick = (destinationId: string) => {
    // Exemple : scroll vers une éventuelle section "booking"
    const section = document.getElementById("booking");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback : log dans la console
      console.log("Réservation pour la destination :", destinationId);
    }
  };

  return (
    <main className="min-h-screen bg-dark">
      <HeroSection />
      <DestinationGallery onBookingClick={handleBookingClick} />
      <TimeQuiz />
      <FAQ />
      <Footer />
      <ChatWidget />
    </main>
  );
}
