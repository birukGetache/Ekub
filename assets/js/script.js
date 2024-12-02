'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});


  // Set default language to Amharic
  document.addEventListener('DOMContentLoaded', function() {
    // Initially show Amharic text and hide English text
    document.querySelectorAll('.lang-en').forEach(function(el) {
      el.classList.add('hidden');
    });
    document.querySelectorAll('.lang-am').forEach(function(el) {
      el.classList.remove('hidden');
    });
  });

  // Language toggle functionality
  document.getElementById('toggle-language').addEventListener('click', function() {
    // Toggle between Amharic and English
    document.querySelectorAll('.lang-en').forEach(function(el) {
      el.classList.toggle('hidden');
    });
    document.querySelectorAll('.lang-am').forEach(function(el) {
      el.classList.toggle('hidden');
    });

    // Update the toggle button text
    const amharicButton = document.querySelector('.lang-am');
    const englishButton = document.querySelector('.lang-en');

    if (amharicButton.classList.contains('hidden')) {
      // If Amharic is hidden, show English and update the button
      document.querySelector('.lang-en').textContent = 'EN';
      document.querySelector('.lang-am').textContent = 'አማርኛ';
    } else {
      // If Amharic is visible, show Amharic and update the button
      document.querySelector('.lang-en').textContent = 'አማርኛ';
      document.querySelector('.lang-am').textContent = 'EN';
    }
  });
