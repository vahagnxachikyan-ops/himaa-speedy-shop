import { motion } from "framer-motion";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image?: string;
}

const ProductCard = ({ id, name, price, image }: ProductCardProps) => {
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const { t } = useLanguage();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    for (let i = 0; i < qty; i++) {
      addItem({ id, name, price, image });
    }
    setQty(1);
  };

  return (
    <Link to={`/product/${id}`}>
      <motion.div
        className="rounded-xl gradient-card border border-border overflow-hidden glow-hover transition-all duration-300 hover:-translate-y-1 group"
        whileHover={{ y: -4 }}
      >
        <div className="aspect-square bg-secondary flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="text-muted-foreground text-sm">Product Image</div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-medium text-foreground text-sm mb-1 line-clamp-2">{name}</h3>
          <p className="text-primary font-bold text-lg mb-3">${price.toFixed(2)}</p>

          <div className="flex items-center gap-2 mb-3" onClick={e => e.preventDefault()}>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setQty(Math.max(1, qty - 1)); }}
              className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="text-sm font-medium text-foreground w-8 text-center">{qty}</span>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setQty(qty + 1); }}
              className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>

          <button
            onClick={handleAdd}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg gradient-accent text-primary-foreground text-sm font-semibold glow-hover transition-all duration-300"
          >
            <ShoppingCart className="h-4 w-4" />
            {t("product.addToCart")}
          </button>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
