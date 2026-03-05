import PageLayout from "@/components/marketplace/PageLayout";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Plus, Minus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();
  const { t } = useLanguage();

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <h1 className="text-3xl font-display font-bold text-foreground mb-8">{t("cart.title")}</h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-6">{t("cart.empty")}</p>
            <Link
              to="/"
              className="inline-flex px-6 py-3 rounded-xl gradient-accent text-primary-foreground font-semibold glow-hover transition-all"
            >
              {t("hero.cta")}
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.id} className="flex items-center gap-4 p-4 rounded-xl gradient-card border border-border">
                <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center text-xs text-muted-foreground flex-shrink-0">
                  {item.image ? <img src={item.image} alt="" className="w-full h-full object-cover rounded-lg" /> : "IMG"}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-foreground truncate">{item.name}</h3>
                  <p className="text-primary font-bold">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors">
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="text-sm font-medium text-foreground w-6 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors">
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
                <p className="text-foreground font-semibold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeItem(item.id)} className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}

            <div className="mt-8 p-6 rounded-xl gradient-card border border-border">
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">{t("cart.subtotal")}</span>
                <span className="text-foreground font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-muted-foreground">{t("cart.shipping")}</span>
                <span className="text-foreground">Free</span>
              </div>
              <div className="border-t border-border pt-4 flex justify-between">
                <span className="text-foreground font-bold text-lg">{t("cart.total")}</span>
                <span className="text-primary font-bold text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full mt-6 py-3 rounded-xl gradient-accent text-primary-foreground font-semibold glow-hover glow-hover-strong transition-all text-lg">
                {t("cart.checkout")}
              </button>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default CartPage;
