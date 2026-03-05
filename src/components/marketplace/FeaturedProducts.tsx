import ProductCard from "@/components/marketplace/ProductCard";
import { motion } from "framer-motion";

// Placeholder products
const placeholderProducts = [
  { id: "1", name: "Wireless Bluetooth Headphones", price: 49.99 },
  { id: "2", name: "USB-C Fast Charger 65W", price: 29.99 },
  { id: "3", name: "Smart Watch Pro", price: 199.99 },
  { id: "4", name: "Portable Power Bank 20000mAh", price: 39.99 },
  { id: "5", name: "LED Desk Lamp", price: 34.99 },
  { id: "6", name: "Smart Home Security Camera", price: 89.99 },
  { id: "7", name: "Kitchen Knife Set", price: 59.99 },
  { id: "8", name: "Phone Case Premium", price: 19.99 },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-display font-bold text-foreground mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Featured Products
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {placeholderProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
