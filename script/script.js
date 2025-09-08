const btn = document.getElementById('hamburguerBtn');
const nav = document.getElementById('primaryNav');

btn.addEventListener('click', () => {
    nav.classList.toggle('show');
});
