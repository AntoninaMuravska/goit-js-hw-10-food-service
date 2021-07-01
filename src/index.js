import dishes from './menu.json';
import cardTemplate from './templates/dishes-cards.hbs';

const menuRef = document.querySelector('.menu');

const markUp = cardTemplate(dishes);

menuRef.insertAdjacentHTML('beforeend', markUp);
