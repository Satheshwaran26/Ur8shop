import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import CategoryHighlights from "@/components/CategoryHighlights";
import ProductGrid from "@/components/ProductGrid";
import PromoBanner from "@/components/PromoBanner";
import BrandValueStrip from "@/components/BrandValueStrip";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroBanner />
        <CategoryHighlights />
        <ProductGrid
          title="New Arrivals"
          subtitle="Fresh styles just dropped"
          items={products.slice(0, 4)}
        />
        <ProductGrid
          title="Trending Now"
          subtitle="Best sellers this season"
          items={products.slice(4, 8)}
        />
        <PromoBanner />
        <BrandValueStrip />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
