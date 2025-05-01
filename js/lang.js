const translations = {
  es: {
    home: "Inicio",
    about: "Sobre mí",
    contact: "Contacto",
    welcome: "Bienvenido a Psicología Rosina Rey",
    intro: "Te acompaño en tu camino hacia el bienestar emocional. Ofrezco un espacio seguro y acogedor para tu crecimiento personal.",
    servicesTitle: "Servicios",
    service1: "✓ Terapia individual para adultos",
    service2: "✓ Apoyo en ansiedad y depresión",
    service3: "✓ Terapia de autoestima y manejo emocional",
    service4: "✓ Acompañamiento en momentos de cambio vital",
    book: "Agendar una Cita",
    send: "Enviar Mensaje",
    namePlaceholder: "Nombre",
    emailPlaceholder: "Correo electrónico",
    messagePlaceholder: "Escribe tu mensaje aquí..."
  },
  en: {
    home: "Home",
    about: "About Me",
    contact: "Contact",
    welcome: "Welcome to Rosina Rey Psychology",
    intro: "I accompany you on your path to emotional well-being. I offer a safe and welcoming space for your personal growth.",
    servicesTitle: "Services",
    service1: "✓ Individual therapy for adults",
    service2: "✓ Support with anxiety and depression",
    service3: "✓ Self-esteem and emotional management therapy",
    service4: "✓ Support during life transitions",
    book: "Book an Appointment",
    send: "Send Message",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Write your message here..."
  }
};

function switchLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const text = translations[lang][key];

    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = text;
    } else {
      el.innerText = text;
    }
  });
}

window.onload = () => {
  const savedLang = localStorage.getItem('lang') || 'es';
  switchLanguage(savedLang);
};
