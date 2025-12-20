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

