
const translations = {
  en: {
    heroTitle: "Welcome to Rosina Rey Psychology",
    heroSubtitle: "I accompany you on your path to emotional well-being. I offer a safe and welcoming space for your personal growth.",
    bookAppointment: "Book an Appointment",
    aboutTitle: "About Me",
    aboutParagraph1: "I am a psychologist based in Uruguay, passionate about helping people navigate their emotional well-being.",
    aboutParagraph2: "My approach is integrative, tailoring each session to your unique needs.",
    aboutParagraph3: "I offer a space of trust, empathy, and confidentiality where you can grow and heal.",
    contactTitle: "Contact",
    contactSubheading: "Get in Touch",
    contactIntro: "Feel free to send me a message using the form below.",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Message",
    sendButton: "Send Message",
    welcome: "Welcome to Rosina Rey Psychology",
    intro: "I accompany you on your path to emotional well-being. I offer a safe and welcoming space for your personal growth.",
    book: "Book an Appointment",
    home: "Home",
    about: "About Me",
    contact: "Contact",
    servicesTitle: "Services",
    service1: "Individual therapy for adults",
    service2: "Help with anxiety and depression",
    service3: "Self-esteem and emotional management therapy",
    service4: "Support during life transitions",
    privacy: "Privacy",
    terms: "Terms",
    accessibility: "Accessibility",
    donotsell: "Do not sell or share my info",
    rights: "All rights reserved."
  },
  es: {
    heroTitle: "Bienvenida a la Psicología de Rosina Rey",
    heroSubtitle: "Te acompaño en tu camino hacia el bienestar emocional. Ofrezco un espacio seguro y acogedor para tu crecimiento personal.",
    bookAppointment: "Reservar una Cita",
    aboutTitle: "Sobre Mí",
    aboutParagraph1: "Soy una psicóloga con base en Uruguay, apasionada por ayudar a las personas a gestionar su bienestar emocional.",
    aboutParagraph2: "Mi enfoque es integrador, adaptando cada sesión a tus necesidades únicas.",
    aboutParagraph3: "Ofrezco un espacio de confianza, empatía y confidencialidad donde puedes crecer y sanar.",
    contactTitle: "Contacto",
    contactSubheading: "Ponte en Contacto",
    contactIntro: "No dudes en enviarme un mensaje usando el formulario a continuación.",
    namePlaceholder: "Tu Nombre",
    emailPlaceholder: "Tu Correo Electrónico",
    subjectPlaceholder: "Asunto",
    messagePlaceholder: "Mensaje",
    sendButton: "Enviar Mensaje",
    welcome: "Bienvenida a la Psicología de Rosina Rey",
    intro: "Te acompaño en tu camino hacia el bienestar emocional. Ofrezco un espacio seguro y acogedor para tu crecimiento personal.",
    book: "Reservar una Cita",
    home: "Inicio",
    about: "Sobre Mí",
    contact: "Contacto",
    servicesTitle: "Servicios",
    service1: "Terapia individual para adultos",
    service2: "Ayuda con la ansiedad y la depresión",
    service3: "Terapia de autoestima y manejo emocional",
    service4: "Apoyo durante transiciones de vida",
    privacy: "Privacidad",
    terms: "Términos",
    accessibility: "Accesibilidad",
    donotsell: "No vender ni compartir mi información",
    rights: "Todos los derechos reservados."
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = translations[lang][key];
    } else {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("language") || "en";
  setLanguage(lang);
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });
});
