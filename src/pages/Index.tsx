import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ChevronRight, Award, UserCheck, Users as Community } from "lucide-react";
import { storage } from "@/lib/localStorage";
import { useLanguage } from "@/lib/LanguageContext";

export default function HomePage() {
  const [hasVisited, setHasVisited] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check if user has visited before
    const visited = storage.get('hasVisited', false);
    setHasVisited(visited);
    
    // If not, set the flag
    if (!visited) {
      storage.set('hasVisited', true);
    }
  }, []);

  const features = [
    {
      icon: <Award className="h-10 w-10 text-orange-500" />,
      title: t('training'),
      description: t('trainingDesc')
    },
    {
      icon: <UserCheck className="h-10 w-10 text-orange-500" />,
      title: t('coaching'),
      description: t('coachingDesc')
    },
    {
      icon: <Community className="h-10 w-10 text-orange-500" />,
      title: t('community'),
      description: t('communityDesc')
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('img/pair-gloves-boxing-sport.jpg')"
          }}
        ></div>
        
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-20 pt-20 md:pt-0">
          <div className="max-w-3xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 font-oswald">
                {t('welcome')}
              </h1>
              <p className="text-lg md:text-xl text-zinc-200 mb-8 max-w-xl mx-auto md:mx-0">
                {t('welcomeMessage')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  asChild
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-md text-lg"
                >
                  <Link to="/contact">
                    {t('contact')}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg" 
                  className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-md text-lg"
                >
                  <Link to="/about">
                    {t('about')}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-oswald">{t('features')}</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-zinc-800 p-8 rounded-lg hover:shadow-orange-500/20 hover:shadow-lg transition-all duration-300 text-center md:text-left"
              >
                <div className="mb-4 flex justify-center md:justify-start">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-oswald">
            {t('philosophyTitle')}
          </h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            {t('philosophyDesc')}
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-black hover:bg-zinc-800 text-white px-8 py-6 rounded-md text-lg"
          >
            <Link to="/contact">
              {t('contactUs')}
            </Link>
          </Button>
        </div>
      </section>

      {/* Welcome Back Toast (if returning visitor) */}
      {hasVisited && (
        <div className="fixed bottom-4 right-4 bg-zinc-800 p-4 rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-bottom-5 duration-500">
          <p className="text-white font-medium">{t('welcomeBack')}</p>
        </div>
      )}
    </Layout>
  );
}