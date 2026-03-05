import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, User } from "lucide-react";
import PageLayout from "@/components/marketplace/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const LoginPage = () => {
  const { t } = useLanguage();
  const [isRegister, setIsRegister] = useState(false);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md p-8 rounded-2xl gradient-card border border-border"
        >
          <h1 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
            {isRegister ? t("account.register") : t("account.login")}
          </h1>

          <div className="space-y-4">
            {isRegister && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-12 pl-10 pr-4 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-12 pl-10 pr-4 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="password"
                placeholder="Password"
                className="w-full h-12 pl-10 pr-4 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <button className="w-full py-3 rounded-xl gradient-accent text-primary-foreground font-semibold glow-hover glow-hover-strong transition-all text-lg">
              {isRegister ? t("account.register") : t("account.login")}
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
            <button onClick={() => setIsRegister(!isRegister)} className="text-primary hover:underline">
              {isRegister ? t("account.login") : t("account.register")}
            </button>
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default LoginPage;
