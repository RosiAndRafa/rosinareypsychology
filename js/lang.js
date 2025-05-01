const translations = {
  en: {
    home: "Home",
    about: "About Me",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    accessibility: "Accessibility",
    donotsell: "Do not sell or share my information",
    rights: "All rights reserved.",
    welcome: "Welcome to Rosina Rey Psychology",
    intro: "I accompany you on your path to emotional well-being. I offer a safe and welcoming space for your personal growth.",
    book: "Book an Appointment",
    servicesTitle: "Services",
    service1: "✓ Individual therapy for adults",
    service2: "✓ Support with anxiety and depression",
    service3: "✓ Self-esteem and emotional management therapy",
    service4: "✓ Support during life transitions"
  },
  es: {
    home: "Inicio",
    about: "Sobre mí",
    contact: "Contacto",
    privacy: "Privacidad",
    terms: "Términos",
    accessibility: "Accesibilidad",
    donotsell: "No vender ni compartir mi información",
    rights: "Todos los derechos reservados.",
    welcome: "Bienvenido a Psicología Rosina Rey",
    intro: "Te acompaño en tu camino hacia el bienestar emocional. Ofrezco un espacio seguro y acogedor para tu crecimiento personal.",
    book: "Agendar una Cita",
    servicesTitle: "Servicios",
    service1: "✓ Terapia individual para adultos",
    service2: "✓ Apoyo en ansiedad y depresión",
    service3: "✓ Terapia de autoestima y manejo emocional",
    service4: "✓ Acompañamiento en momentos de cambio vital"
  }
};

function switchLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("language") || "es";
  switchLanguage(lang);
});
