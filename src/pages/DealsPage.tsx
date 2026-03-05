import PageLayout from "@/components/marketplace/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { placeholderProducts } from "@/data/categories";
import ProductCard from "@/components/marketplace/ProductCard";
import { motion } from "framer-motion";
import { Tag } from "lucide-react";

const DealsPage = () => {
  const { t } = useLanguage();
  // Show products with "deals" - use first 8 as deals
  const deals = placeholderProducts.filter(p => p.deliveryToday).slice(0, 8);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-8">
          <Tag className="h-8 w-8 text-primary" />
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">{t("nav.deals")}</h1>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {deals.map(p => (
            <ProductCard key={p.id} id={p.id} name={p.name} price={p.price} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default DealsPage;
