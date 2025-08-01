import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { X, Play } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function GalleryPage() {
  const { t } = useLanguage();
  const [selectedMedia, setSelectedMedia] = useState<any | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Gallery media with photos and videos
  const galleryMedia = [
    // Fotos reales
    {
      id: 1,
      src: "/img/Imagen de WhatsApp 2025-08-01 a las 15.23.27_7b1326a5.jpg",
      alt: "Entrenamiento Real - Nacho Diez MMA",
      type: "image"
    },
    {
      id: 2,
      src: "/img/Imagen de WhatsApp 2025-08-01 a las 15.23.28_d64482fe.jpg",
      alt: "Sesión de Entrenamiento - Academia",
      type: "image"
    },
    // Videos de entrenamientos
    {
      id: 3,
      src: "/video/VID-20241106-WA0001.mp4",
      thumbnail: "/img/pair-gloves-boxing-sport.jpg",
      alt: "Entrenamiento de MMA - Sesión 1",
      type: "video"
    },
    {
      id: 4,
      src: "/video/VID-20241106-WA0002.mp4",
      thumbnail: "/img/pair-gloves-boxing-sport.jpg",
      alt: "Técnicas de Boxeo - Entrenamiento",
      type: "video"
    },
    {
      id: 5,
      src: "/video/VID-20241106-WA0003.mp4",
      thumbnail: "/img/pair-gloves-boxing-sport.jpg",
      alt: "Condicionamiento Físico - Rutina",
      type: "video"
    },
    {
      id: 6,
      src: "/video/VID-20241106-WA0004.mp4",
      thumbnail: "/img/pair-gloves-boxing-sport.jpg",
      alt: "Nacho Diez - Demostración de Técnicas",
      type: "video"
    },
    {
      id: 7,
      src: "/video/VID-20241106-WA0005.mp4",
      thumbnail: "/img/pair-gloves-boxing-sport.jpg",
      alt: "Entrenamiento Grupal - Sparring",
      type: "video"
    },
    {
      id: 8,
      src: "/video/VID-20241106-WA0006.mp4",
      thumbnail: "/img/pair-gloves-boxing-sport.jpg",
      alt: "Entrenamiento con Equipos - Academia",
      type: "video"
    },
    {
      id: 9,
      src: "/video/VID-20241106-WA0008.mp4",
      thumbnail: "/img/pair-gloves-boxing-sport.jpg",
      alt: "Preparación para Competencia",
      type: "video"
    },
    {
      id: 10,
      src: "/video/VID-20241106-WA0009.mp4",
      thumbnail: "/img/pair-gloves-boxing-sport.jpg",
      alt: "Entrenamiento en el Ring",
      type: "video"
    },
    {
      id: 11,
      src: "/video/VID-20241106-WA0010.mp4",
      thumbnail: "/img/pair-gloves-boxing-sport.jpg",
      alt: "Sesión de Muay Thai Intensiva",
      type: "video"
    },
    {
      id: 12,
      src: "/video/VID-20241106-WA0011.mp4",
      thumbnail: "/img/pair-gloves-boxing-sport.jpg",
      alt: "Técnicas Avanzadas de MMA",
      type: "video"
    },
    {
      id: 13,
      src: "/video/VID-20241107-WA0002.mp4",
      thumbnail: "/img/pair-gloves-boxing-sport.jpg",
      alt: "Entrenamiento Juvenil - Formación",
      type: "video"
    },
    {
      id: 14,
      src: "/video/VID-20241107-WA0003.mp4",
      thumbnail: "/img/pair-gloves-boxing-sport.jpg",
      alt: "Nacho Diez - Masterclass",
      type: "video"
    }
  ];

  const categories = [
    { id: "all", name: "Todas" },
    { id: "photos", name: "Fotos" },
    { id: "videos", name: "Videos" }
  ];

  const filteredMedia = selectedCategory === "all" 
    ? galleryMedia 
    : selectedCategory === "photos"
    ? galleryMedia.filter(media => media.type === "image")
    : galleryMedia.filter(media => media.type === "video");

  const openModal = (media: any) => {
    setSelectedMedia(media);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-40 pb-20 md:pb-32 bg-zinc-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/img/front-view-man-training-boxing-ring.jpg" 
            alt="Front View Man Training Boxing Ring - Nacho Diez MMA Gallery" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-oswald">
              <span className="text-orange-500">{t('gallery').toUpperCase()}</span> DE FOTOS Y VIDEOS
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
              {t('galleryDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-transparent border-zinc-600 text-zinc-300 hover:border-orange-500 hover:text-orange-500"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((media, index) => (
              <motion.div
                key={media.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => openModal(media)}
              >
                <div className="aspect-square relative">
                  <img
                    src={media.type === 'video' ? media.thumbnail : media.src}
                    alt={media.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                  
                  {/* Video Play Button */}
                  {media.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-orange-500/80 hover:bg-orange-500 rounded-full p-4 transition-all duration-300 group-hover:scale-110">
                        <Play className="h-8 w-8 text-white fill-white" />
                      </div>
                    </div>
                  )}
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">
                      {media.type === 'video' ? 'Ver Video' : t('viewImage')}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center mt-1">
                    {media.type === 'video' && (
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">VIDEO</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for full-size media */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </Button>
            
            {selectedMedia.type === 'video' ? (
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  style={{ maxHeight: '80vh' }}
                >
                  Tu navegador no soporta el elemento video.
                </video>
              </div>
            ) : (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            )}
            
            {/* Media info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 p-4 rounded-lg">
              <p className="text-white font-semibold">{selectedMedia.alt}</p>
              <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                selectedMedia.type === 'video' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-blue-500 text-white'
              }`}>
                {selectedMedia.type === 'video' ? 'VIDEO' : 'IMAGEN'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-oswald">
            {t('readyToTrain')}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t('joinCommunity')}
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-black hover:bg-zinc-800 text-white px-8 py-6 rounded-md text-lg"
          >
            <a 
              href="https://wa.me/5521967674624" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Contactar por WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
