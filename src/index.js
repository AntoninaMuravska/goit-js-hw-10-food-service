import dishes from './menu.json';
import cardTemplate from './templates/dishes-cards.hbs';
import './js/change-theme.js';

const menuRef = document.querySelector('.menu');

const markUp = cardTemplate(dishes);

menuRef.insertAdjacentHTML('beforeend', markUp);
