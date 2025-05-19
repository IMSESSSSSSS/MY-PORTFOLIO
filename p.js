// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    navLinks.classList.remove('active');
  });
});

// Form Submission
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  form.reset();
});
let lastScrollTop = 0;
const nav = document.querySelector('nav');
const scrollThreshold = 10; // Minimum scroll amount before triggering hide/show

window.addEventListener('scroll', () => {
  // Get current scroll position
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  // Determine scroll direction
  if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
    // Scrolling down
    nav.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    nav.style.transform = 'translateY(0)';
    
    // Add the scrolled class for background effect if needed
    if (currentScroll > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
// Add this to your script.js file
document.addEventListener('DOMContentLoaded', function() {
  // Logo text animation
  const logoText = document.querySelectorAll('.logo-text');
  
  // Add staggered animation delay to each letter
  logoText.forEach((letter, index) => {
    letter.style.animationDelay = `${index * 0.1}s`;
  });
  
  // Add hover effect on the entire logo
  const logo = document.querySelector('.logo');
  
  logo.addEventListener('mouseenter', () => {
    logoText.forEach((letter, index) => {
      letter.style.animationPlayState = 'running';
    });
  });
  
  logo.addEventListener('mouseleave', () => {
    setTimeout(() => {
      logoText.forEach(letter => {
        letter.style.animationPlayState = 'paused';
      });
    }, 1500); // Let the animation complete one cycle before pausing
  });
});