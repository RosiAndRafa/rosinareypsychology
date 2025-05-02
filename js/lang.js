
const translations = {
  en: {
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
    sendButton: "Send Message"
  },
  es: {
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
    sendButton: "Enviar Mensaje"
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
