const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 70);
});

menuButton.addEventListener('click', () => {
  const open = !menuButton.classList.contains('open');
  menuButton.classList.toggle('open', open);
  mobileMenu.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  mobileMenu.setAttribute('aria-hidden', String(!open));
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    menuButton.classList.remove('open');
    mobileMenu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});

const cards = [...document.querySelectorAll('.review-card')];
const prev = document.querySelector('.review-prev');
const next = document.querySelector('.review-next');
let reviewIndex = 0;

function showReview(index) {
  cards.forEach((card, i) => card.classList.toggle('active', i === index));
}

prev.addEventListener('click', () => {
  reviewIndex = (reviewIndex - 1 + cards.length) % cards.length;
  showReview(reviewIndex);
});

next.addEventListener('click', () => {
  reviewIndex = (reviewIndex + 1) % cards.length;
  showReview(reviewIndex);
});
