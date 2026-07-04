let currentIdx = 1; // Startet beim zweiten (Klasse 'active' im HTML)

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    
    if (index >= testimonials.length) currentIdx = 0;
    if (index < 0) currentIdx = testimonials.length - 1;
    
    // Alle ausblenden und Punkte deaktivieren
    testimonials.forEach(t => t.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    // Aktuelles anzeigen und Punkt aktivieren
    testimonials[currentIdx].classList.add('active');
    if (dots[currentIdx]) {
        dots[currentIdx].classList.add('active');
    }
}

function nextTestimonial() {
    currentIdx++;
    showTestimonial(currentIdx);
}

function prevTestimonial() {
    currentIdx--;
    showTestimonial(currentIdx);
}

function currentTestimonial(index) {
    currentIdx = index;
    showTestimonial(currentIdx);
}




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
