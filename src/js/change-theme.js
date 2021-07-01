const themeSwitchBtn = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  themeSwitchBtn.addEventListener('change', changeColorTheme)

