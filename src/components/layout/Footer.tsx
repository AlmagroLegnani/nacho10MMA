import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-zinc-900 text-white border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4 text-center md:text-left">
            <Link to="/" className="inline-block">
              <img 
                src="/assets/images/nachodiezlogo.png" 
                alt="Nacho Diez Logo" 
                className="h-[150px] w-auto rounded-full shadow-lg transition-transform duration-300 hover:scale-105 mx-auto md:mx-0"
              />
            </Link>
            <p className="text-zinc-400 max-w-xs mx-auto md:mx-0">
              {t('footerDesc')}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-orange-500">{t('quickLinks')}</h3>
            <nav className="flex flex-col space-y-3 items-center md:items-start">
              <Link to="/" className="text-zinc-400 hover:text-orange-500 transition-colors">
                {t('home')}
              </Link>
              <Link to="/about" className="text-zinc-400 hover:text-orange-500 transition-colors">
                {t('about')}
              </Link>
              <Link to="/gallery" className="text-zinc-400 hover:text-orange-500 transition-colors">
                {t('gallery')}
              </Link>
              <Link to="/contact" className="text-zinc-400 hover:text-orange-500 transition-colors">
                {t('contact')}
              </Link>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-orange-500">{t('connectWithUs')}</h3>
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <a 
                href="https://wa.me/5521967674624" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-zinc-400 hover:text-green-500 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="https://www.instagram.com/nacho10mma" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-zinc-400 hover:text-pink-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              <a 
                href="mailto:nachodiez1990@gmail.com" 
                className="flex items-center space-x-2 text-zinc-400 hover:text-blue-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>{t('emailUs')}</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-zinc-500 text-sm">
            © {currentYear} Nacho Diez. {t('rights')}
          </p>
          <div className="flex justify-center space-x-4 mt-4 md:mt-0">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-zinc-500 hover:text-orange-500 hover:bg-transparent p-0"
              asChild
            >
              <a href="https://www.instagram.com/nacho10mma" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}