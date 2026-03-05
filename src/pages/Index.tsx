import PageLayout from "@/components/marketplace/PageLayout";
import HeroSection from "@/components/marketplace/HeroSection";
import CategoriesSection from "@/components/marketplace/CategoriesSection";
import FeaturedProducts from "@/components/marketplace/FeaturedProducts";

const Index = () => (
  <PageLayout>
    <HeroSection />
    <CategoriesSection />
    <FeaturedProducts />
  </PageLayout>
);

export default Index;
