// Copyright 

const currentYear = new Date().getFullYear();
const paragraph = `<p>&copy; ${currentYear} Dierenarts Verboom</p>`;

document.getElementById('copyright').innerHTML = paragraph;
document.getElementById('copyright-mb').innerHTML = paragraph;

// Menu toggle 

const menu_btn = document.querySelector('.hamburger');
const menu_middle = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})

// Collapsible menu

const items = document.querySelectorAll('.item');

items.forEach(items => {
  items.addEventListener('click', () => {
    items.classList.toggle('active'); 
  });
});