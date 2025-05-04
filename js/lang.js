
// js/lang.js

const translations = {
  es: {
    home: "Inicio",
    servicesTitle: "Servicios",
    contact: "Contacto",

    welcome_title: "Bienvenido/a. ¡Estás dando un paso importante!",
    welcome_body: "Trabajo desde un enfoque cognitivo-conductual, de forma online, adaptando el proceso terapéutico a tus tiempos y necesidades.",
    welcome_quote: "No se trata de lo que nos sucede, sino de cómo respondemos a lo que nos sucede. – Epicteto",
    welcome_cta: "Si estás listo/a para comenzar este proceso de cambio y crecimiento, no dudes en contactarme. Juntos podemos trabajar hacia un bienestar más pleno y una vida más equilibrada.",

    service1: "✓ Terapia Online (Cognitivo-Conductual)",
    service2: "✓ Atención a Pacientes con Adicciones",
    service3: "✓ Terapia para Padres con Hijos Adictos",
    service4: "✓ Talleres de Estimulación Cognitiva para adultos mayores",
    service5: "✓ Orientación Vocacional y Profesional",

    book_button: "Reservar una cita"
  },
  en: {
    home: "Home",
    servicesTitle: "Services",
    contact: "Contact",

    welcome_title: "Welcome. You're taking an important step!",
    welcome_body: "I work from a cognitive-behavioral approach, online, adapting the therapeutic process to your timing and needs.",
    welcome_quote: "It’s not what happens to us, but how we respond to it. – Epictetus",
    welcome_cta: "If you're ready to begin this journey of change and growth, contact me. Together we can work toward greater well-being and a more balanced life.",

    service1: "✓ Online Therapy (Cognitive-Behavioral)",
    service2: "✓ Support for Patients with Addictions",
    service3: "✓ Therapy for Parents of Addicted Children",
    service4: "✓ Cognitive Stimulation Workshops for Seniors",
    service5: "✓ Vocational and Career Guidance",

    book_button: "Book an Appointment"
  }
};

function switchLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem('language', lang);
}

window.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('language') || 'es';
  switchLanguage(lang);
});
