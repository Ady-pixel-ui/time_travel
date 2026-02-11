import HeroSection from "../components/HeroSection";
import DestinationGallery from "../components/DestinationGallery";
import TimeQuiz from "../components/TimeQuiz";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <HeroSection />
      <DestinationGallery />
      <TimeQuiz />
      <FAQ />
      <Footer />
      <ChatWidget />
    </main>
  );
}
