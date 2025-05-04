const translations = {
  en: {
    aboutParagraph1: "Hi, I'm Rosina. Welcome to my page! I'm a psychologist with five years of experience working with a wide variety of patients and situations.",
    aboutParagraph2: "For two years I was part of a psychiatric center team, which gave me solid skills in handling diverse mental health issues.",
    aboutParagraph3: "I have experience treating depression, separation grief, low self-esteem, bipolar disorder, anxiety disorders, borderline personality disorder, schizophrenia, addictions, among others.",
    aboutParagraph4: "I've also worked as a professor at the University of the Republic (UDELAR) and in Human Resources.",
    aboutParagraph5: "Currently, I devote myself to my true passion: personalized clinical care using a cognitive-behavioral approach.",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Write your message here...",
    sendButton: "Send Message"
,
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
    aboutParagraph1: "Hola, soy Rosina. ¡Bienvenido a mi página! Soy Psicóloga con cinco años de experiencia trabajando con una amplia variedad de pacientes y situaciones.",
    aboutParagraph2: "Durante dos años formé parte del equipo de un centro psiquiátrico, lo que me permitió adquirir un sólido manejo en el abordaje de diversas problemáticas.",
    aboutParagraph3: "Tengo experiencia en el tratamiento de depresión, duelos por separación, baja autoestima, trastorno bipolar, trastornos de ansiedad, trastorno límite de la personalidad, esquizofrenia, adicciones, entre otros.",
    aboutParagraph4: "También he trabajado como profesora en la Universidad de la República (UDELAR) y en Recursos Humanos.",
    aboutParagraph5: "Actualmente me dedico a mi gran pasión: la atención clínica personalizada de pacientes con un enfoque cognitivo-conductual.",
    namePlaceholder: "Nombre",
    emailPlaceholder: "Correo electrónico",
    subjectPlaceholder: "Asunto",
    messagePlaceholder: "Escribe tu mensaje aquí...",
    sendButton: "Enviar Mensaje"
,
    home: "Inicio",
    about: "Sobre mí",
    contact: "Contacto",
    privacy: "Privacidad",
    terms: "Términos",
    accessibility: "Accesibilidad",
    donotsell: "No vender ni compartir mi información",
    rights: "Todos los derechos reservados.",
    welcome: "Bienvenido/a a tu espacio de terapia online",
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
