import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, ShoppingCart, Zap, Truck, Star } from "lucide-react";
import PageLayout from "@/components/marketplace/PageLayout";
import ProductCard from "@/components/marketplace/ProductCard";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { placeholderProducts } from "@/data/categories";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const { t } = useLanguage();
  const [qty, setQty] = useState(1);
  const [delivery, setDelivery] = useState<"today" | "standard">("today");
  const [selectedImage, setSelectedImage] = useState(0);

  const product = placeholderProducts.find(p => p.id === id);
  if (!product) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-display font-bold text-foreground">Product not found</h1>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">Go back</Link>
        </div>
      </PageLayout>
    );
  }

  const related = placeholderProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const bundle = placeholderProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 2);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      addItem({ id: product.id, name: product.name, price: product.price });
    }
    setQty(1);
  };

  const handleBuyNow = () => {
    addItem({ id: product.id, name: product.name, price: product.price });
  };

  const handleBundleAdd = () => {
    addItem({ id: product.id, name: product.name, price: product.price });
    bundle.forEach(b => addItem({ id: b.id, name: b.name, price: b.price }));
  };

  // Fake gallery images
  const galleryImages = [null, null, null, null];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Gallery */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="aspect-square rounded-2xl bg-secondary border border-border flex items-center justify-center mb-4 overflow-hidden">
              <span className="text-muted-foreground text-sm">Product Image {selectedImage + 1}</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square rounded-lg bg-secondary border flex items-center justify-center text-xs text-muted-foreground transition-all ${
                    selectedImage === i ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-muted-foreground"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{product.rating}</span>
            </div>

            <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium quality product with excellent build and performance. This is a placeholder description that store owners can customize with their own product details.
            </p>

            {/* Delivery options */}
            <div className="space-y-2">
              <button
                onClick={() => setDelivery("today")}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${
                  delivery === "today" ? "border-primary bg-primary/10" : "border-border hover:border-muted-foreground"
                }`}
              >
                <Zap className={`h-5 w-5 ${delivery === "today" ? "text-primary" : "text-muted-foreground"}`} />
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">{t("product.delivery.today")}</p>
                  <p className="text-xs text-muted-foreground">Free</p>
                </div>
              </button>
              <button
                onClick={() => setDelivery("standard")}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${
                  delivery === "standard" ? "border-primary bg-primary/10" : "border-border hover:border-muted-foreground"
                }`}
              >
                <Truck className={`h-5 w-5 ${delivery === "standard" ? "text-primary" : "text-muted-foreground"}`} />
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">{t("product.delivery.standard")}</p>
                  <p className="text-xs text-muted-foreground">2-5 days</p>
                </div>
              </button>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 p-1 rounded-lg bg-secondary">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="h-10 w-10 rounded-md flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-medium text-foreground">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="h-10 w-10 rounded-md flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button onClick={handleAdd} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl gradient-accent text-primary-foreground font-semibold glow-hover glow-hover-strong transition-all">
                <ShoppingCart className="h-5 w-5" />
                {t("product.addToCart")}
              </button>
            </div>

            {/* Buy in 1 click */}
            <Link
              to="/cart"
              onClick={handleBuyNow}
              className="block w-full text-center py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all"
            >
              {t("product.buyNow")}
            </Link>
          </motion.div>
        </div>

        {/* Bundle */}
        {bundle.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl font-display font-bold text-foreground mb-6">{t("product.bundle")}</h2>
            <div className="flex flex-wrap items-center gap-4 p-6 rounded-xl gradient-card border border-border">
              {[product, ...bundle].map((item, i) => (
                <div key={item.id} className="flex items-center gap-4">
                  {i > 0 && <span className="text-2xl text-primary font-bold">+</span>}
                  <div className="w-20 h-20 rounded-lg bg-secondary border border-border flex items-center justify-center text-xs text-muted-foreground">
                    IMG
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.name}</p>
                    <p className="text-sm text-primary font-bold">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
              <button
                onClick={handleBundleAdd}
                className="ml-auto px-6 py-3 rounded-xl gradient-accent text-primary-foreground font-semibold glow-hover transition-all"
              >
                {t("product.addToCart")} (${([product, ...bundle].reduce((s, p) => s + p.price, 0)).toFixed(2)})
              </button>
            </div>
          </section>
        )}

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl font-display font-bold text-foreground mb-6">{t("product.related")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map(p => (
                <ProductCard key={p.id} id={p.id} name={p.name} price={p.price} />
              ))}
            </div>
          </section>
        )}
      </div>
    </PageLayout>
  );
};

export default ProductPage;
