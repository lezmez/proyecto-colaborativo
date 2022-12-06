'use strict';

// Swiper Js
const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1900: {
            slidesPerView: 4,
            spaceBetween: 10,
            centeredSlides: true,
          }
      }
});

// Change backgroud header
const scrollHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

// nav variables
const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelectorAll('.nav__link');
const body = document.querySelector('body');

// Show or close mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    body.classList.toggle('no-scroll');
})

navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        body.classList.toggle('no-scroll');
    })
});