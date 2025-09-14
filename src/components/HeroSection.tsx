import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-50 flex items-center justify-center px-6 md:px-12 text-center">
      <div className="max-w-7xl mx-auto animate-fade-in">
        <h1 className="text-hero text-foreground leading-tight">
          {t("hero.line1", "I don't need to say much,")}
          <br />
          <span className="text-primary">
            {t("hero.line2", "my work does the talking.")}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
