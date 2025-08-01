import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/lib/LanguageContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: t('home'), path: "/" },
    { name: t('about'), path: "/about" },
    { name: t('gallery'), path: "/gallery" },
    { name: t('contact'), path: "/contact" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-4">
          <img 
            src="/assets/nachodiezlogo.png" 
            alt="Nacho Diez MMA Logo" 
            className="h-16 w-16 md:h-20 md:w-20 rounded-full shadow-lg transition-all duration-300 hover:scale-105 border-2 border-orange-500/20 hover:border-orange-500"
          />
          <div className="hidden sm:block">
            <h1 className="text-2xl md:text-3xl font-bold text-white font-oswald">
              NACHO <span className="text-orange-500">DIEZ</span>
            </h1>
          </div>
        </Link>

        {/* Centro - Selector de Idioma */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <LanguageSelector />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg font-medium transition-colors hover:text-orange-500 ${
                isActive(item.path) 
                  ? "text-orange-500 font-bold" 
                  : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-none text-white hover:bg-orange-500/20">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-900 text-white border-l border-zinc-800">
              <nav className="flex flex-col space-y-6 mt-10">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-xl font-medium transition-colors hover:text-orange-500 ${
                      isActive(item.path) 
                        ? "text-orange-500 font-bold" 
                        : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}