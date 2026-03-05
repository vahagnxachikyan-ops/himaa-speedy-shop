import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Smartphone, Home, UtensilsCrossed, Watch, Wrench, Lightbulb } from "lucide-react";

const categories = [
  { key: "electronics", icon: Smartphone, path: "/electronics" },
  { key: "smartHome", icon: Lightbulb, path: "/smart-home" },
  { key: "home", icon: Home, path: "/home" },
  { key: "kitchen", icon: UtensilsCrossed, path: "/kitchen" },
  { key: "accessories", icon: Watch, path: "/accessories" },
  { key: "tools", icon: Wrench, path: "/tools" },
];

const CategoriesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-10 text-center">
          {t("categories.title")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={cat.path}
                className="flex flex-col items-center gap-3 p-6 rounded-xl gradient-card border border-border glow-hover transition-all duration-300 hover:-translate-y-1 group"
              >
                <cat.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">
                  {t(`categories.${cat.key}`)}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
