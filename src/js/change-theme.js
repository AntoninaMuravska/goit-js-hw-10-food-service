const themeSwitchBtn = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

console.log(themeSwitchBtn)

themeSwitchBtn.addEventListener('change', changeColorTheme);

function changeColorTheme() {
    const checked = themeSwitchBtn.checked;
    if (checked) {
        addRemoveClass(Theme.DARK, Theme.LIGHT)
        localStorage.setItem('theme', Theme.DARK);
    } else {
        addRemoveClass(Theme.LIGHT, Theme.DARK)
        localStorage.setItem('theme', Theme.LIGHT);
    }   
  }

function addRemoveClass(addClass, removeClass) {
    body.classList.add(addClass);
    body.classList.remove(removeClass);
}

const localTheme = localStorage.getItem('theme');
addClassForLocalTheme();

function addClassForLocalTheme() {

    if (localTheme === Theme.DARK) {
        body.classList.add(Theme.DARK);
        themeSwitchBtn.checked = true;
    }

}

