const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const ncLinks = document.querySelector('.nc-links');

menuIcon.addEventListener('click', () => {
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    ncLinks.style.right = 0;
});

closeIcon.addEventListener('click', () => {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    ncLinks.style.right = '-100%';
});