type TranslationKeys = 
  | 'home' 
  | 'about'
  | 'contact'
  | 'welcome'
  | 'welcomeMessage'
  | 'features'
  | 'training'
  | 'trainingDesc'
  | 'coaching'
  | 'coachingDesc'
  | 'community'
  | 'communityDesc'
  | 'aboutTitle'
  | 'aboutDesc'
  | 'philosophy'
  | 'philosophyTitle'
  | 'philosophyDesc'
  | 'contactUs'
  | 'contactDesc'
  | 'name'
  | 'email'
  | 'message'
  | 'send'
  | 'followUs'
  | 'quickLinks'
  | 'address'
  | 'welcomeBack'
  | 'language'
  | 'us'
  | 'yourName'
  | 'yourMessage'
  | 'sendMessage'
  | 'sending'
  | 'messageSent'
  | 'chatWhatsApp'
  | 'sendEmail'
  | 'location'
  | 'directions'
  | 'pageNotFound'
  | 'pageNotFoundDesc'
  | 'backToHome'
  | 'footerDesc'
  | 'connectWithUs'
  | 'emailUs'
  | 'rights'
  | 'discipline'
  | 'disciplineDesc'
  | 'technique'
  | 'techniqueDesc'
  | 'consistency'
  | 'consistencyDesc'
  | 'meetTheCoach'
  | 'headCoachFounder'
  | 'gallery'
  | 'galleryDesc'
  | 'allPhotos'
  | 'trainings'
  | 'gym'
  | 'coach'
  | 'viewImage'
  | 'readyToTrain'
  | 'joinCommunity';

type Translations = {
  [key in TranslationKeys]: string;
};

type Languages = {
  [key: string]: {
    name: string;
    translations: Translations;
  };
};

export const languages: Languages = {
  pt: {
    name: 'Português',
    translations: {
      home: 'Início',
      about: 'Sobre Nós',
      contact: 'Contato',
      welcome: 'Bem-vindo ao Nacho Diez Muay Thai/Boxe',
      welcomeMessage: 'Descubra o poder das artes marciais com treinamento personalizado e uma comunidade apaixonada.',
      features: 'Nossos Serviços',
      training: 'Treinamento Profissional',
      trainingDesc: 'Programas personalizados para todos os níveis, de iniciantes a competidores avançados.',
      coaching: 'Coaching Personalizado',
      coachingDesc: 'Treinadores dedicados que se concentram em seu desenvolvimento pessoal e técnico.',
      community: 'Comunidade Unida',
      communityDesc: 'Faça parte de uma família de artes marciais que o apoia e motiva em cada passo.',
      aboutTitle: 'Nossa História',
      aboutDesc: 'Fundado por Nacho Diez, nosso centro de treinamento se tornou uma referência na comunidade de artes marciais. Combinamos técnicas tradicionais com métodos modernos para oferecer a melhor experiência de treinamento.',
      philosophy: 'Nossa Filosofia',
      philosophyTitle: 'Disciplina, Respeito e Superação',
      philosophyDesc: 'Acreditamos que o boxe não só desenvolve a força física, mas também a mental. Ensinamos nossos alunos a superar seus limites com disciplina e determinação.',
      contactUs: 'Entre em Contato',
      contactDesc: 'Tem perguntas? Quer participar dos nossos programas? Estamos aqui para ajudar!',
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem',
      send: 'Enviar',
      followUs: 'Siga-nos',
      quickLinks: 'Links Rápidos',
      address: 'Endereço',
      welcomeBack: 'Bem-vindo de volta!',
      language: 'Idioma',
      us: 'NÓS',
      yourName: 'Seu nome',
      yourMessage: 'Sua mensagem...',
      sendMessage: 'Enviar Mensagem',
      sending: 'Enviando...',
      messageSent: 'Redirecionando para WhatsApp! Sua mensagem será enviada diretamente.',
      chatWhatsApp: 'Conversar no WhatsApp',
      sendEmail: 'Enviar email',
      location: 'LOCALIZAÇÃO',
      directions: 'Como chegar',
      pageNotFound: 'Página Não Encontrada',
      pageNotFoundDesc: 'A página que você está procurando não existe ou foi movida.',
      backToHome: 'Voltar ao Início',
      footerDesc: 'Treinamento profissional em boxe, Muay Thai e MMA. Junte-se a nós e transforme seu corpo e mente.',
      connectWithUs: 'Conecte-se Conosco',
      emailUs: 'Envie-nos um Email',
      rights: 'Todos os direitos reservados.',
      discipline: 'Disciplina',
      disciplineDesc: 'Acreditamos que a disciplina é a base do sucesso nos esportes de combate e na vida.',
      technique: 'Técnica',
      techniqueDesc: 'A técnica adequada é essencial tanto para o desempenho eficaz quanto para a prevenção de lesões.',
      consistency: 'Consistência',
      consistencyDesc: 'O treinamento regular e o esforço consistente levam à melhoria duradoura e ao sucesso.',
      meetTheCoach: 'CONHEÇA O TREINADOR',
      headCoachFounder: 'Treinador Principal e Fundador',
      gallery: 'Galeria',
      galleryDesc: 'Descubra nosso espaço, treinamentos e a paixão pelas artes marciais',
      allPhotos: 'Todas',
      trainings: 'Treinamentos',
      gym: 'Academia',
      coach: 'Coach',
      viewImage: 'Ver imagem',
      readyToTrain: 'Pronto para Treinar?',
      joinCommunity: 'Junte-se à nossa comunidade e viva a experiência de treinar com Nacho Diez'
    }
  },
  es: {
    name: 'Español',
    translations: {
      home: 'Inicio',
      about: 'Sobre Nosotros',
      contact: 'Contacto',
      welcome: 'Bienvenido a Nacho Diez - Muay Thai/Box',
      welcomeMessage: 'Descubre el poder de las artes marciales con entrenamiento personalizado y una comunidad apasionada.',
      features: 'Nuestros Servicios',
      training: 'Entrenamiento Profesional',
      trainingDesc: 'Programas personalizados para todos los niveles, desde principiantes hasta competidores avanzados.',
      coaching: 'Coaching Personalizado',
      coachingDesc: 'Entrenadores dedicados que se centran en tu desarrollo personal y técnico.',
      community: 'Comunidad Unida',
      communityDesc: 'Forma parte de una familia de artes marciales que te apoya y te motiva en cada paso.',
      aboutTitle: 'Nuestra Historia',
      aboutDesc: 'Fundado por Nacho Diez, nuestro centro de entrenamiento se ha convertido en un referente en la comunidad de las artes marciales. Combinamos técnicas tradicionales con métodos modernos para ofrecer la mejor experiencia de entrenamiento.',
      philosophy: 'Nuestra Filosofía',
      philosophyTitle: 'Disciplina, Respeto y Superación',
      philosophyDesc: 'Creemos que el boxeo no solo desarrolla la fuerza física sino también la mental. Enseñamos a nuestros alumnos a superar sus límites con disciplina y determinación.',
      contactUs: 'Contáctanos',
      contactDesc: '¿Tienes preguntas? ¿Quieres unirte a nuestros programas? ¡Estamos aquí para ayudarte!',
      name: 'Nombre',
      email: 'Correo electrónico',
      message: 'Mensaje',
      send: 'Enviar',
      followUs: 'Síguenos',
      quickLinks: 'Enlaces Rápidos',
      address: 'Dirección',
      welcomeBack: '¡Bienvenido de nuevo!',
      language: 'Idioma',
      us: 'NOSOTROS',
      yourName: 'Tu nombre',
      yourMessage: 'Tu mensaje...',
      sendMessage: 'Enviar Mensaje',
      sending: 'Enviando...',
      messageSent: '¡Redirecting to WhatsApp! Tu mensaje será enviado directamente.',
      chatWhatsApp: 'Chatea en WhatsApp',
      sendEmail: 'Enviar email',
      location: 'UBICACIÓN',
      directions: 'Cómo llegar',
      pageNotFound: 'Página No Encontrada',
      pageNotFoundDesc: 'La página que estás buscando no existe o ha sido movida.',
      backToHome: 'Volver al Inicio',
      footerDesc: 'Entrenamiento profesional en boxeo, Muay Thai y MMA. Únete a nosotros y transforma tu cuerpo y mente.',
      connectWithUs: 'Conecta Con Nosotros',
      emailUs: 'Envíanos un Email',
      rights: 'Todos los derechos reservados.',
      discipline: 'Disciplina',
      disciplineDesc: 'Creemos que la disciplina es la base del éxito en los deportes de combate y en la vida.',
      technique: 'Técnica',
      techniqueDesc: 'La técnica adecuada es esencial tanto para un rendimiento efectivo como para la prevención de lesiones.',
      consistency: 'Constancia',
      consistencyDesc: 'El entrenamiento regular y el esfuerzo constante conducen a mejoras duraderas y al éxito.',
      meetTheCoach: 'CONOCE AL ENTRENADOR',
      headCoachFounder: 'Entrenador Principal y Fundador',
      gallery: 'Galería',
      galleryDesc: 'Descubre nuestro espacio, entrenamientos y la pasión por las artes marciales',
      allPhotos: 'Todas',
      trainings: 'Entrenamientos',
      gym: 'Academia',
      coach: 'Coach',
      viewImage: 'Ver imagen',
      readyToTrain: '¿Listo para Entrenar?',
      joinCommunity: 'Únete a nuestra comunidad y vive la experiencia de entrenar con Nacho Diez'
    }
  }
};