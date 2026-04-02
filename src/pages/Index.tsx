import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import CategoryHighlights from "@/components/CategoryHighlights";
import MatchTheMood from "@/components/MatchTheMood";
import StealsSection from "@/components/StealsSection";
import PromoBanner from "@/components/PromoBanner";
import NewAndPopular from "@/components/NewAndPopular";
import BrandValueStrip from "@/components/BrandValueStrip";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroBanner />
        <CategoryHighlights />
        <MatchTheMood />
        <StealsSection />
        <PromoBanner />
        <NewAndPopular />
        <BrandValueStrip />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
