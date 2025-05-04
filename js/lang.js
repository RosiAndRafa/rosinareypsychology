// js/lang.js
const translations = {
  es: {
    home: "Inicio",
    about: "Sobre mí",
    contact: "Contacto",
    servicesTitle: "Servicios",
    welcome_title: "Bienvenido/a. ¡Estás dando un paso importante!",
    welcome_body: "Trabajo desde un enfoque cognitivo-conductual, de forma online, adaptando el proceso terapéutico a tus tiempos y necesidades.",
    welcome_quote: "No se trata de lo que nos sucede, sino de cómo respondemos a lo que nos sucede. – Epicteto",
    welcome_cta: "Si estás listo/a para comenzar este proceso de cambio y crecimiento, no dudes en contactarme. Juntos podemos trabajar hacia un bienestar más pleno y una vida más equilibrada.",
    about_text: "Soy Rosina Rey, psicóloga especializada en terapia cognitivo-conductual. Me apasiona acompañar a las personas en sus procesos de cambio y crecimiento personal.",
    service1: "✓ Terapia Online (Cognitivo-Conductual)",
    service2: "✓ Atención a Pacientes con Adicciones",
    service3: "✓ Terapia para Padres con Hijos Adictos",
    service4: "✓ Talleres de Estimulación Cognitiva para adultos mayores",
    service5: "✓ Orientación Vocacional y Profesional",
    book_button: "Reservar una cita"
  },
  en: {
    home: "Home",
    about: "About Me",
    contact: "Contact",
    servicesTitle: "Services",
    welcome_title: "Welcome. You're taking an important step!",
    welcome_body: "I work from a cognitive-behavioral approach, online, adapting the therapeutic process to your timing and needs.",
    welcome_quote: "It’s not what happens to us, but how we respond to it. – Epictetus",
    welcome_cta: "If you're ready to begin this journey of change and growth, contact me. Together we can work toward greater well-being and a more balanced life.",
    about_text: "I'm Rosina Rey, a psychologist specializing in cognitive-behavioral therapy. I’m passionate about supporting people in their journey of change and personal growth.",
    service1: "✓ Online Therapy (Cognitive-Behavioral)",
    service2: "✓ Support for Patients with Addictions",
    service3: "✓ Therapy for Parents of Addicted Children",
    service4: "✓ Cognitive Stimulation Workshops for Seniors",
    service5: "✓ Vocational and Career Guidance",
    book_button: "Book an Appointment"
  }
};

function switchLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("language", lang);
}

window.addEventListener("DOMContentLoaded", () => {
  const stored = localStorage.getItem("language") || "es";
  switchLanguage(stored);
});
