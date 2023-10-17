// JavaScript for theme switching
const themeToggle = document.getElementById('theme-buttons');
const themeStylesheet = document.getElementById('theme-stylesheet');

const lightThemeButton = document.getElementById('light-theme-button');
const darkThemeButton = document.getElementById('dark-theme-button');
const blueThemeButton = document.getElementById('blue-theme-button');

lightThemeButton.addEventListener('click', () => {
    themeStylesheet.setAttribute('href', 'styles/light-theme.css');
});

darkThemeButton.addEventListener('click', () => {
    themeStylesheet.setAttribute('href', 'styles/dark-theme.css');
});

blueThemeButton.addEventListener('click', () => {
    themeStylesheet.setAttribute('href', 'styles/blue-theme.css');
});
