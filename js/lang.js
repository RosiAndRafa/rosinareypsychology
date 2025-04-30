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
    messagePlaceholder: "Escribe tu mensaje aquí...",

    "about.paragraph1": "Hola, soy Rosina. ¡Bienvenido a mi página! Soy Psicóloga con cinco años de experiencia trabajando con una amplia variedad de pacientes y situaciones.",
    "about.paragraph2": "Durante dos años formé parte del equipo de un centro psiquiátrico, lo que me permitió adquirir un sólido manejo en el abordaje de diversas problemáticas.",
    "about.paragraph3": "Tengo experiencia en el tratamiento de depresión, duelos por separación, baja autoestima, trastorno bipolar, trastornos de ansiedad, trastorno límite de la personalidad, esquizofrenia, adicciones, entre otros.",
    "about.paragraph4": "También he trabajado como profesora en la Universidad de la República (UDELAR) y en Recursos Humanos.",
    "about.paragraph5": "Actualmente me dedico a mi gran pasión: la atención clínica personalizada de pacientes con un enfoque cognitivo-conductual.",
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
    messagePlaceholder: "Write your message here...",

    "about.paragraph1": "Hi, I'm Rosina. Welcome to my page! I'm a psychologist with five years of experience working with a wide range of patients and situations.",
    "about.paragraph2": "For two years, I was part of a psychiatric center team, which allowed me to gain solid experience addressing diverse challenges.",
    "about.paragraph3": "I have experience treating depression, grief, low self-esteem, bipolar disorder, anxiety disorders, borderline personality disorder, schizophrenia, addictions, among others.",
    "about.paragraph4": "I have also worked as a professor at the University of the Republic (UDELAR) and in Human Resources.",
    "about.paragraph5": "Currently, I focus on my greatest passion: personalized clinical care with a cognitive-behavioral approach.",
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
