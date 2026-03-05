import Header from "@/components/marketplace/Header";
import HeroSection from "@/components/marketplace/HeroSection";
import CategoriesSection from "@/components/marketplace/CategoriesSection";
import FeaturedProducts from "@/components/marketplace/FeaturedProducts";
import Footer from "@/components/marketplace/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
