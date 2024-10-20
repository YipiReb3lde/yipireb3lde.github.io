const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

// Abre o cierra el menú al hacer clic en el botón
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});
