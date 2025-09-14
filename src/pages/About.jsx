import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Linkedin, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WHAT_I_DO from "@/constants/whatIDo";
import WhatIDo from "@/components/WhatIDo";
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '@/components/LanguageSwitcher'
const About = () => {
  const { t } = useTranslation()
  // Use image from public/ (served at root). No import needed.
  // public contains `profile_photo.jpg` (underscore), use that exact path.
  const photo = "/profile_photo.jpg";
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="fixed top-0 left-0 z-50 p-6 md:p-8 flex items-center space-x-3">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="bg-background/80 backdrop-blur-md border-border/50 hover:bg-muted/80"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('nav.home', 'Back')}
        </Button>
  <ThemeToggle />
  <LanguageSwitcher />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="animate-fade-in">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-display text-foreground about-heading mr-4">
              {t('about.title', 'About')} <span className="text-primary">{t('about.me', 'Me')}</span>
            </h1>
            <div className="flex items-center space-x-3">
              <a href="https://www.linkedin.com/in/guilherme-pinto-292493275/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/pintodasgaiolas/" aria-label="Instagram" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-3 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.paragraph1', "My approach is simple: let the work speak for itself. All projects tell a story. Focused on transmitting the most important message in the most elegant way possible.")}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.paragraph2', 'I like exquisite and a bit weird.')}

                </p>
                
                
                <WhatIDo items={WHAT_I_DO} />
              </div>
              
              <div className="space-y-6 md:col-span-2">
                <div className="split-card mx-auto">
                  <div className="split-card__left flex flex-col items-center justify-center w-full">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-primary/20 flex items-center justify-center mb-4">
                      <img src={photo} alt="Me" className="w-28 h-28 object-cover" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">{t('about.card.leftTitle', 'Detailed Perfectionist')}</h4>
                    <p className="text-muted-foreground text-sm mb-0">
                      {t('about.card.leftDesc', 'I focus on precision and polish — small details make big experiences.')}
                    </p>
                  </div>
                  <div className="split-card__right flex flex-col items-end justify-center w-full">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-primary/20 mb-4">
                      <img src={photo} alt="Me mirror" className="w-28 h-28 object-cover scale-x-[-1]" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-foreground text-right">{t('about.card.rightTitle', 'Flowing Monkey')}</h4>
                    <p className="text-muted-foreground text-sm text-right">{t('about.card.rightDesc', 'Playful and adaptable — I find flow in constraints and push creative paths forward.')}</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button
                    onClick={() => (window.location.href = "mailto:guipinto12@gmail.com")}
                    className="w-full bg-background hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 text-foreground hover:text-white border border-border hover:border-transparent shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                  >
                    <span>{t('contact', 'Get In Touch')}</span>
                  </Button>
                </div>
                <div className="mt-6 text-center text-sm text-muted-foreground/80">
                  <em>{t('about.quote', 'Be like water. Some things need balance, others need to be broken.')}</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;