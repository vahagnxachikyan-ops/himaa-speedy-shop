import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/marketplace/PageLayout";
import ProductCard from "@/components/marketplace/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { categoriesData, placeholderProducts } from "@/data/categories";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Star, SlidersHorizontal, X } from "lucide-react";

const CategoryPage = () => {
  const location = useLocation();
  const slug = location.pathname.replace("/", "");
  const { t } = useLanguage();
  const category = slug ? categoriesData[slug] : undefined;

  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [deliveryToday, setDeliveryToday] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("popular");
  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const products = useMemo(() => {
    if (!slug) return [];
    let filtered = placeholderProducts.filter(p => p.category === slug);
    if (selectedSub) filtered = filtered.filter(p => p.subcategory === selectedSub);
    if (deliveryToday) filtered = filtered.filter(p => p.deliveryToday);
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    filtered = filtered.filter(p => p.rating >= minRating);
    
    switch (sortBy) {
      case "priceLow": return [...filtered].sort((a, b) => a.price - b.price);
      case "priceHigh": return [...filtered].sort((a, b) => b.price - a.price);
      case "new": return [...filtered].reverse();
      default: return [...filtered].sort((a, b) => b.rating - a.rating);
    }
  }, [slug, selectedSub, deliveryToday, priceRange, minRating, sortBy]);

  if (!category) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-display font-bold text-foreground">Category not found</h1>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t(`categories.${category.key}`)}
        </motion.h1>

        {/* Subcategory chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedSub(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              !selectedSub ? "gradient-accent text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("nav.home") === "Գdelays" ? "All" : "All"}
          </button>
          {category.subcategories.map(sub => (
            <button
              key={sub.key}
              onClick={() => setSelectedSub(sub.key === selectedSub ? null : sub.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedSub === sub.key ? "gradient-accent text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {sub.nameEn}
            </button>
          ))}
        </div>

        <div className="flex gap-6">
          {/* Filters sidebar - desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-20 space-y-6 p-4 rounded-xl gradient-card border border-border">
              {/* Sort */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Sort</h3>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground"
                >
                  <option value="popular">{t("product.sort.popular")}</option>
                  <option value="priceLow">{t("product.sort.priceLow")}</option>
                  <option value="priceHigh">{t("product.sort.priceHigh")}</option>
                  <option value="new">{t("product.sort.new")}</option>
                </select>
              </div>

              {/* Delivery Today */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">{t("filter.deliveryToday")}</span>
                <Switch checked={deliveryToday} onCheckedChange={setDeliveryToday} />
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">{t("filter.priceRange")}</h3>
                <Slider
                  defaultValue={[0, 1000]}
                  max={1000}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Rating */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">{t("filter.rating")}</h3>
                <div className="space-y-1">
                  {[4, 3, 2, 1, 0].map(r => (
                    <button
                      key={r}
                      onClick={() => setMinRating(r)}
                      className={`flex items-center gap-1 w-full px-2 py-1 rounded text-sm transition-colors ${
                        minRating === r ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < r ? "fill-primary text-primary" : "text-muted"}`} />
                      ))}
                      <span className="ml-1">{r > 0 ? `${r}+` : "All"}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="lg:hidden fixed bottom-6 right-6 z-50 p-4 rounded-full gradient-accent text-primary-foreground shadow-lg glow-hover-strong"
          >
            {filtersOpen ? <X className="h-5 w-5" /> : <SlidersHorizontal className="h-5 w-5" />}
          </button>

          {/* Products grid */}
          <div className="flex-1">
            {products.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                No products found with these filters.
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {products.map(product => (
                  <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CategoryPage;
