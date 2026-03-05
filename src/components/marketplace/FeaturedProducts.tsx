import ProductCard from "@/components/marketplace/ProductCard";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { placeholderProducts } from "@/data/categories";

const FeaturedProducts = () => {
  const { t } = useLanguage();
  const featured = placeholderProducts.slice(0, 8);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-display font-bold text-foreground mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t("product.featured")}
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
