// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const htmlElement = document.documentElement;

// Check saved preference
function initDarkMode() {
  const isDark = localStorage.getItem('darkMode') === 'true';
  if (isDark) {
    document.body.classList.add('dark-mode');
  }
}

darkModeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav');

hamburger?.addEventListener('click', () => {
  navMenu?.classList.toggle('mobile-open');
});

// Close menu when link clicked
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu?.classList.remove('mobile-open');
  });
});

// Shopping Cart
let cart = [];

function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  console.log(`${productName} added to cart!`);
  console.log(`Cart items: ${cart.length}`);
}

function displayCart() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  console.log('=== Shopping Cart ===');
  cart.forEach(item => console.log(`${item.name} - Rs. ${item.price}`));
  console.log(`Total: Rs. ${total}`);
}

// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initDarkMode);

// Export for use in HTML
window.cartFunctions = { addToCart, displayCart };
