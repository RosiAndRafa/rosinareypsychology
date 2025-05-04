const translations = {
  en: {
    
    welcome_title: "Welcome. You're taking an important step!",
    welcome_body: "I work from a cognitive-behavioral approach, online, adapting to your timing and needs.",
    welcome_quote: "It’s not what happens to us, but how we respond to it. – Epictetus",
    welcome_cta: "If you're ready to begin this journey of change and growth, contact me. Together we can work toward greater well-being and a more balanced life.",
    book_button: "Book an Appointment",
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
    
    
    
    service4: "✓ Support during life transitions"
  },
  es: {
    
    welcome_title: "Bienvenido/a. ¡Estás dando un paso importante!",
    welcome_body: "Trabajo desde un enfoque cognitivo-conductual, de forma online, adaptando el proceso terapéutico a tus tiempos y necesidades.",
    welcome_quote: "No se trata de lo que nos sucede, sino de cómo respondemos a lo que nos sucede.– Epicteto",
    welcome_cta: "Si estás listo/a para comenzar este proceso de cambio y crecimiento, no dudes en contactarme. Juntos podemos trabajar hacia un bienestar más pleno y una vida más equilibrada.",
    book_button: "Reservar una cita",
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
    welcome: "Bienvenido a Psicología Rosina Rey",
    intro: "Te acompaño en tu camino hacia el bienestar emocional. Ofrezco un espacio seguro y acogedor para tu crecimiento personal.",
    book: "Agendar una Cita",
    servicesTitle: "Servicios",
    
    
    
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
