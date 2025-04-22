// Alternar modo de alto contraste
const contrastButton = document.getElementById('toggle-contrast');
contrastButton.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// Controle de zoom (font-size)
const increaseFontButton = document.getElementById('increase-font');
const decreaseFontButton = document.getElementById('decrease-font');

let currentFontSize = 100;

increaseFontButton.addEventListener('click', () => {
    if (currentFontSize < 150) {
        currentFontSize += 10;
        document.body.style.fontSize = currentFontSize + '%';
    }
});

decreaseFontButton.addEventListener('click', () => {
    if (currentFontSize > 70) {
        currentFontSize -= 10;
        document.body.style.fontSize = currentFontSize + '%';
    }
});
