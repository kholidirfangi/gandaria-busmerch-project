// Humberger Menu
const humberger = document.querySelector('#humberger-menu');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function () {
 humberger.classList.toggle('humberger-active');
 navMenu.classList.toggle('hidden');
});

// Navbar Click Event
const beranda = document.querySelector('#beranda');
const tentang = document.querySelector('#about');
const promo   = document.querySelector('#special-promo');
const katalogDesign = document.querySelector('#design');
const katalogKaos   = document.querySelector('#t-shirt');
const testimonial   = document.querySelector('#testi');

 beranda.addEventListener('click', function () {
  beranda.classList.add('navbar-click');
  tentang.classList.remove('navbar-click');
  promo.classList.remove('navbar-click');
  katalogDesign.classList.remove('navbar-click');
  katalogKaos.classList.remove('navbar-click');
  testimonial.classList.remove('navbar-click');
 });

  tentang.addEventListener('click', function () {
  tentang.classList.add('navbar-click');
  beranda.classList.remove('navbar-click');
  promo.classList.remove('navbar-click');
  katalogDesign.classList.remove('navbar-click');
  katalogKaos.classList.remove('navbar-click');
  testimonial.classList.remove('navbar-click');
 });

  promo.addEventListener('click', function () {
  promo.classList.add('navbar-click');
  tentang.classList.remove('navbar-click');
  beranda.classList.remove('navbar-click');
  katalogDesign.classList.remove('navbar-click');
  katalogKaos.classList.remove('navbar-click');
  testimonial.classList.remove('navbar-click');
 });

  katalogDesign.addEventListener('click', function () {
  katalogDesign.classList.add('navbar-click');
  tentang.classList.remove('navbar-click');
  promo.classList.remove('navbar-click');
  beranda.classList.remove('navbar-click');
  katalogKaos.classList.remove('navbar-click');
  testimonial.classList.remove('navbar-click');
 });

  katalogKaos.addEventListener('click', function () {
  katalogKaos.classList.add('navbar-click');
  tentang.classList.remove('navbar-click');
  promo.classList.remove('navbar-click');
  katalogDesign.classList.remove('navbar-click');
  beranda.classList.remove('navbar-click');
  testimonial.classList.remove('navbar-click');
 });

  testimonial.addEventListener('click', function () {
  testimonial.classList.add('navbar-click');
  tentang.classList.remove('navbar-click');
  promo.classList.remove('navbar-click');
  katalogDesign.classList.remove('navbar-click');
  beranda.classList.remove('navbar-click');
  katalogKaos.classList.remove('navbar-click');
 });
// Navbar Fixed
  window.onscroll = function () {
    const header = document.querySelector('header');
    const FixedNavbar = header.offsetTop;
    const toTop = document.querySelector('#to-top'); 

    if (window.pageYOffset > FixedNavbar) {
       header.classList.add('navbar-fixed');
       // To top button start
       toTop.classList.add('flex');
       toTop.classList.remove('hidden');
       // To top button end
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
  }

//  Klik diluar Navbar
window.addEventListener('click', function (event) {
  if (event.target != humberger && event.target != navMenu) {
      humberger.classList.remove('humberger-active');
      navMenu.classList.add('hidden');
  }
});

// Toggle Dark Mode
const toggle = document.querySelector('#toggle');
const html = document.querySelector('html');

toggle.addEventListener('click', function () {
  if (toggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// toggle switch based mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  toggle.checked = true;
} else {
  toggle.checked = false;
}

