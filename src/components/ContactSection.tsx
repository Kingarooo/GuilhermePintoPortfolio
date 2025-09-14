import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { useTranslation } from 'react-i18next'

const ContactSection = () => {
  const { t } = useTranslation()
  const handleContactClick = () => {
    window.location.href = "mailto:guipinto12@gmail.com?subject=Let's work together";
  };

  return (
    <section className="py-32 md:py-40 px-6 md:px-12 text-center">
      <div className="max-w-5xl mx-auto animate-fade-in">
        <div className="flex items-center justify-center space-x-6">
          <a href="https://www.linkedin.com/in/guilherme-pinto-292493275/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
            <Linkedin className="h-8 w-8" />
          </a>

          <Button
            variant="hero"
            size="lg"
            onClick={handleContactClick}
            className="text-display px-12 py-8 h-auto rounded-2xl hover-glow animate-glow transform hover:scale-105 transition-all duration-300"
          >
            <Mail className="mr-4 h-8 w-8" />
            {t('contact')}
          </Button>

          <a href="https://www.instagram.com/pintodasgaiolas/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
            <Instagram className="h-8 w-8" />
          </a>
        </div>
        <p className="mt-8 text-muted-foreground text-lg">
          Ready to create something amazing together?
        </p>
      </div>
    </section>
  );
};

export default ContactSection;