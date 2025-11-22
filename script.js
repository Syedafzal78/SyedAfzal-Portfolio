// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  menuBtn.classList.toggle('open');
});

// mouse-follow spotlight
const spotlight = document.getElementById('spotlight');
document.addEventListener('mousemove', (e) => {
  // place a little behind the cursor for subtlety
  const x = e.clientX - 110;
  const y = e.clientY - 110;
  spotlight.style.transform = `translate(${x}px, ${y}px)`;
});

// reveal on scroll with stagger
const reveals = document.querySelectorAll('.reveal');
function revealAll(){
  const windowH = window.innerHeight;
  reveals.forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    if(rect.top < windowH - 80){
      // stagger by index
      setTimeout(()=> el.classList.add('visible'), i * 80);
    }
  });
}
window.addEventListener('scroll', revealAll);
window.addEventListener('resize', revealAll);
document.addEventListener('DOMContentLoaded', revealAll);
revealAll();

// small parallax on hero photo when mouse moves inside it
const photoWrap = document.querySelector('.photo-wrap');
if(photoWrap){
  photoWrap.addEventListener('mousemove', (e) => {
    const r = photoWrap.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const img = photoWrap.querySelector('img');
    if(img){
      img.style.transform = `scale(1.02) translate(${(px-0.5)*6}px, ${(py-0.5)*6}px)`;
      img.style.transition = 'transform 0.12s';
    }
  });
  photoWrap.addEventListener('mouseleave', () => {
    const img = photoWrap.querySelector('img');
    if(img){
      img.style.transform = 'scale(1) translate(0,0)';
      img.style.transition = 'transform 0.4s';
    }
  });
}
