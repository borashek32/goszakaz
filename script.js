const menuItems = document.querySelectorAll('.menu__item');
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.menu');
const wrapper = document.querySelector('.wrapper');

document.addEventListener('DOMContentLoaded', () => {
  menuItems[0].classList.add('active');
});

const handleMenuClick = (event) => {
  menuItems.forEach(item => item.classList.remove('active'));
  event.currentTarget.classList.add('active');
}

menuItems.forEach(item => {
  item.addEventListener('click', handleMenuClick);
});

burger.addEventListener('click', (event) => {
  event.stopPropagation();
  if (burger.classList.contains('active')) {
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.classList.remove('hidden');
  } else {
    burger.classList.add('active');
    mobileMenu.classList.add('active');
    document.body.classList.add('hidden');
  }
});

document.addEventListener('click', (event) => {
  if (burger.classList.contains('active')) {
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
  }
});

