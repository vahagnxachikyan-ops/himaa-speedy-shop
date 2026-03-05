import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import himaaLogo from "@/assets/himaa-logo.jpg";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={himaaLogo} alt="HIMAA" className="h-8 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">{t("hero.slogan")}</p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              {t("footer.support")}
            </h4>
            <ul className="space-y-2">
              {["footer.delivery", "footer.returns", "footer.contact"].map(key => (
                <li key={key}>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-2">
              {["footer.privacy", "footer.terms"].map(key => (
                <li key={key}>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              {t("footer.social")}
            </h4>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .54.04.79.11v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.86a8.28 8.28 0 004.76 1.5v-3.4a4.85 4.85 0 01-1-.27z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">&copy; 2026 HIMAA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
