import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Dumbbell } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  
  const philosophy = [
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: "discipline",
      description: "disciplineDesc"
    },
    {
      icon: <Dumbbell className="h-8 w-8 text-orange-500" />,
      title: "technique",
      description: "techniqueDesc"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "community",
      description: "communityDesc"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-zinc-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/img/Imagen de WhatsApp 2025-08-01 a las 15.23.55_f38ca0a4.jpg" 
            alt="Nacho Diez MMA Training - Banner Principal" 
            className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-700 hover:scale-110"
            style={{ 
              filter: 'brightness(1.1) contrast(1.2) saturate(1.1)',
              imageRendering: 'crisp-edges'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/70 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent"></div>
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
              {t('about')} <span className="text-orange-500">NACHO DIEZ</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              {t('aboutDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-oswald">{t('aboutTitle')}</h2>
              <div className="w-20 h-1 bg-orange-500 mb-8"></div>
              
              <div className="space-y-6 text-zinc-300">
                <p>
                  Professor Uruguaio residente no RJ há 8 anos e há mais de 10 anos no mercado.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Atleta de MMA reconhecido internacionalmente</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Especialista em artes marciais, emagrecimento e condicionamento físico</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Níveis iniciante e avançado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Aulas dinâmicas, adaptadas à sua necessidade e de alta intensidade</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Estrutura completa em academia, aulas ao ar livre ou no conforto de sua casa</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Aulas individuais ou coletivas com preços especiais para pequenos grupos</span>
                  </div>
                </div>
                <div className="border-l-4 border-orange-500 pl-4 mt-8">
                  <p className="text-orange-400 font-semibold text-lg">
                    Instagram: @nacho10mma | WhatsApp: +55 21 96767-4624
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-lg overflow-hidden"
            >
              <img 
                src="/img/IMG-20241106-WA0001.jpg" 
                alt="Nacho Diez MMA Training - Nossa Historia" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-oswald">{t('philosophy')}</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              {t('philosophyDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-800 border-zinc-700 h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{t(item.title as any)}</h3>
                    <p className="text-zinc-400">{t(item.description as any)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coach Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-oswald">{t('meetTheCoach')}</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-lg overflow-hidden"
            >
              <img 
                src="/img/Imagen de WhatsApp 2025-08-01 a las 15.09.18_7df7b610.jpg" 
                alt="Nacho Diez - Coach Principal MMA" 
                className="object-cover w-full h-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4 text-white">Nacho Diez</h3>
              <p className="text-orange-500 text-lg mb-6">{t('headCoachFounder')}</p>
              
              <div className="space-y-6 text-zinc-300">
                <p>
                  Nacho Diez traz consigo uma bagagem única de experiências que transcendem os octógonos. Sua jornada no mundo das artes marciais mistas começou no Uruguai, onde desenvolveu as bases técnicas que o levariam ao reconhecimento internacional.
                </p>
                <p>
                  Após estabelecer-se no Rio de Janeiro, Nacho dedicou-se não apenas a aperfeiçoar suas próprias habilidades, mas também a formar uma nova geração de lutadores e entusiastas do fitness. Sua metodologia de ensino combina técnicas tradicionais com abordagens modernas de condicionamento físico.
                </p>
                <p>
                  O que distingue Nacho é sua capacidade de adaptar o treinamento às necessidades específicas de cada aluno, seja você um iniciante buscando melhorar sua forma física ou um atleta experiente preparando-se para competições. Sua paixão pelo ensino é evidente em cada sessão de treino.
                </p>
                <div className="bg-zinc-800 p-6 rounded-lg border-l-4 border-orange-500">
                  <p className="text-white font-semibold text-lg mb-2">
                    "Meu objetivo é não apenas ensinar técnicas de luta, mas transformar vidas através da disciplina e dedicação que as artes marciais proporcionam."
                  </p>
                  <p className="text-orange-400">- Nacho Diez</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Specialties Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-oswald text-white">ESPECIALIDADES DE TREINO</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Descubra nossa ampla gama de modalidades e serviços personalizados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-zinc-800 p-6 rounded-lg border border-zinc-700"
            >
              <div className="text-orange-500 text-3xl mb-4">🥊</div>
              <h3 className="text-xl font-bold text-white mb-3">Muay Thai & Boxe</h3>
              <p className="text-zinc-400">Aulas de Muay Thai e Boxe focadas em técnicas de golpes, condicionamento físico e defesa pessoal para todos os níveis.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-800 p-6 rounded-lg border border-zinc-700"
            >
              <div className="text-orange-500 text-3xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-white mb-3">Condicionamento Físico</h3>
              <p className="text-zinc-400">Programas intensivos de condicionamento que combinam força, resistência e agilidade para máximos resultados.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-800 p-6 rounded-lg border border-zinc-700"
            >
              <div className="text-orange-500 text-3xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-white mb-3">Emagrecimento</h3>
              <p className="text-zinc-400">Protocolos específicos de treino e orientação nutricional para perda de peso eficaz e sustentável.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-zinc-800 p-6 rounded-lg border border-zinc-700"
            >
              <div className="text-orange-500 text-3xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-white mb-3">Personal Training</h3>
              <p className="text-zinc-400">Treinamento personalizado em academia, ao ar livre ou no conforto da sua casa, adaptado às suas necessidades.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-zinc-800 p-6 rounded-lg border border-zinc-700"
            >
              <div className="text-orange-500 text-3xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-white mb-3">Treinos em Grupo</h3>
              <p className="text-zinc-400">Sessões coletivas dinâmicas com preços especiais para pequenos grupos, criando um ambiente motivador.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-zinc-800 p-6 rounded-lg border border-zinc-700"
            >
              <div className="text-orange-500 text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Preparação para Competições</h3>
              <p className="text-zinc-400">Programa especializado para atletas que desejam competir, focando em técnica avançada e condicionamento específico.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-oswald text-white">POR QUE ESCOLHER NACHO DIEZ?</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Experiência Internacional</h3>
                  <p className="text-zinc-400">Mais de 10 anos de experiência no mercado com reconhecimento internacional no mundo do MMA.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Metodologia Personalizada</h3>
                  <p className="text-zinc-400">Cada treino é adaptado às suas necessidades específicas, respeitando seu ritmo e objetivos.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Flexibilidade Total</h3>
                  <p className="text-zinc-400">Oferecemos máxima flexibilidade com treinos em academia, ao ar livre ou na sua casa.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Resultados Comprovados</h3>
                  <p className="text-zinc-400">Histórico de sucesso com alunos de todos os níveis, desde iniciantes até competidores avançados.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Acompanhamento Contínuo</h3>
                  <p className="text-zinc-400">Suporte constante e acompanhamento da sua evolução para garantir o alcance dos seus objetivos.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Preços Acessíveis</h3>
                  <p className="text-zinc-400">Ofertas especiais para treinos em grupo e planos flexíveis que cabem no seu orçamento.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-oswald">
            {t('philosophyTitle')}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t('welcomeMessage')}
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
    </Layout>
  );
}