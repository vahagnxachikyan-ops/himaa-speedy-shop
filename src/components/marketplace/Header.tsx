import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { languageFlags, Language } from "@/i18n/translations";
import himaaLogo from "@/assets/himaa-logo.jpg";

const navItems = [
  { key: "nav.home", path: "/" },
  { key: "nav.electronics", path: "/category/electronics" },
  { key: "nav.smartHome", path: "/category/smart-home" },
  { key: "nav.homeCategory", path: "/category/home" },
  { key: "nav.kitchen", path: "/category/kitchen" },
  { key: "nav.accessories", path: "/category/accessories" },
  { key: "nav.deals", path: "/deals" },
];

const Header = () => {
  const { t, language, setLanguage } = useLanguage();
  const { totalItems, cartBounce } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const languages: Language[] = ["en", "ru", "am"];

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={himaaLogo} alt="HIMAA" className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.key}
                to={item.path}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={t("search.placeholder")}
                className="w-full h-10 pl-10 pr-4 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-2">
            {/* Language */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-2 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary"
              >
                <span className="text-lg">{languageFlags[language]}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 mt-1 w-36 rounded-lg bg-card border border-border shadow-xl overflow-hidden"
                  >
                    {languages.map(lang => (
                      <button
                        key={lang}
                        onClick={() => { setLanguage(lang); setLangOpen(false); }}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                          language === lang ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        <span>{languageFlags[lang]}</span>
                        <span>{lang === "en" ? "English" : lang === "ru" ? "Русский" : "Հայերեն"}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Account */}
            <Link to="/login" className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary">
              <User className="h-5 w-5" />
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary">
              <ShoppingCart className={`h-5 w-5 ${cartBounce ? "animate-cart-bounce" : ""}`} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <div className="py-3 space-y-1">
                {/* Mobile search */}
                <div className="px-2 pb-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder={t("search.placeholder")}
                      className="w-full h-10 pl-10 pr-4 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                {navItems.map(item => (
                  <Link
                    key={item.key}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary"
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
