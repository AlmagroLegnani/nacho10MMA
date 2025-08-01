import { Check, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useLanguage } from "@/lib/LanguageContext";
import { languages } from "@/lib/translations";

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1 animate-punch">
          {languages[language]?.name || 'Language'}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.keys(languages).map((lang) => (
          <DropdownMenuItem 
            key={lang} 
            onClick={() => setLanguage(lang)}
            className="flex items-center gap-2"
          >
            {language === lang && <Check className="h-4 w-4" />}
            <span className={language === lang ? "font-medium" : ""}>
              {languages[lang].name}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}