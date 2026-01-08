document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  let current = 0;

  function showTestimonial(index) {
    testimonials.forEach(t => t.classList.remove("active"));
    testimonials[index].classList.add("active");
  }

  // 🔑 GLOBAL verfügbar machen
  window.nextTestimonial = function () {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  };

  window.prevTestimonial = function () {
    current = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial(current);
  };

  // erstes Testimonial anzeigen
  if (testimonials.length > 0) {
    showTestimonial(current);
  }
});





const form = document.getElementById("contactForm");
const dankeText = document.getElementById("dankeText");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      form.reset();
      dankeText.style.display = "block"; // Zeige Dankesnachricht
    } else {
      alert("Ups, etwas ist schiefgelaufen. Bitte versuche es später erneut.");
    }
  })
  .catch(() => alert("Ups, etwas ist schiefgelaufen. Bitte versuche es später erneut."));
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            // Schaltet die Sichtbarkeit des Menüs um
            mainNav.classList.toggle('active');
            // Verwandelt die drei Striche in ein X
            menuToggle.classList.toggle('open');
        });
    }
});
