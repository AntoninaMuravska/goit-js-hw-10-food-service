const refs = {
    body: document.querySelector('body'),
    switch: document.querySelector('.theme-switch__toggle'),
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

console.log(localStorage);
console.dir(refs.switch);
refs.switch.addEventListener('change', changeColorTheme);
refs.switch.addEventListener('change', setLocalTheme);

// console.dir(refs.switch);

function changeColorTheme() {
    const checked = refs.switch.checked;
    if (checked) {
        refs.body.classList.add(Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);
    } else {
         refs.body.classList.add(Theme.LIGHT);
         refs.body.classList.remove(Theme.DARK);
    }   
}

// сохраняем тему в localStorage
function setLocalTheme() {
    const checked = refs.switch.checked;
        // console.dir(localTheme);

    if (checked) {
        localStorage.setItem('theme', Theme.DARK);
    } else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT);
    }
    
}

// Добавляем класс на боди и перемещаем переключатель, если в localStorage была темная тема
const localTheme = localStorage.getItem('theme');
addClassForLocalTheme();

function addClassForLocalTheme() {

    if (localTheme === Theme.DARK) {
        refs.body.classList.add(Theme.DARK);
        refs.switch.checked = true;
    }

}
