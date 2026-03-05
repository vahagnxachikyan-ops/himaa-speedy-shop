import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import himaaLogo from "@/assets/himaa-logo.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center justify-center"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Speed lines */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute h-[2px] animate-speed-line"
          style={{
            top: `${15 + i * 14}%`,
            left: "-10%",
            width: `${80 + i * 20}px`,
            background: `linear-gradient(90deg, transparent, hsl(199 89% 48% / ${0.15 + i * 0.05}), transparent)`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${2.5 + i * 0.3}s`,
          }}
        />
      ))}

      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(199 89% 48% / 0.3) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 text-center px-4">
        <motion.img
          src={himaaLogo}
          alt="HIMAA"
          className="mx-auto h-20 md:h-28 w-auto mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.p
          className="text-xl md:text-3xl lg:text-4xl font-display font-semibold text-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t("hero.slogan")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            to="/category/electronics"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-primary-foreground gradient-accent glow-hover glow-hover-strong transition-all duration-300 text-lg"
          >
            {t("hero.cta")}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
