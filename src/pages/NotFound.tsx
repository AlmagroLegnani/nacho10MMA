import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/lib/LanguageContext";

export default function NotFoundPage() {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-6xl md:text-8xl font-bold text-orange-500 mb-6 font-oswald">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">{t('pageNotFound')}</h2>
        <p className="text-xl text-zinc-400 mb-8 max-w-md">
          {t('pageNotFoundDesc')}
        </p>
        <Button 
          asChild
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-md text-lg"
        >
          <Link to="/">
            {t('backToHome')}
          </Link>
        </Button>
      </div>
    </Layout>
  );
}