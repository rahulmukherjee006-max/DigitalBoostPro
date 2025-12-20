// small helpers: current year and mobile menu
document.getElementById('year').textContent = new Date().getFullYear();
const btn = document.getElementById('menuBtn');
btn && btn.addEventListener('click', ()=> {
  const nav = document.querySelector('.nav');
  if(!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  if(window.innerWidth <= 800) nav.style.flexDirection = 'column';
});
// Sticky navbar animation on scroll
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// HERO IMAGE SLIDER
const slides = document.querySelectorAll(".hero-slider img");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 3500);
const testimonials = [
  "Our ROAS doubled within 45 days. Clear strategy & honest reporting.",
  "Best decision we made for paid ads. Very transparent.",
  "Leads quality improved drastically after switching to Digital Boost Pro."
];

let index = 0;
setInterval(() => {
  document.getElementById("testimonial").innerHTML =
    `"${testimonials[index]}"<br><br><strong>— Client</strong>`;
  index = (index + 1) % testimonials.length;
}, 4000);



