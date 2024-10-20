const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

// Abre el menú pc
mobileMenu.addEventListener('mouseenter', () => {
    navList.classList.add('active');
});

// Cierra el menú al salir pc
mobileMenu.addEventListener('mouseleave', () => {
    navList.classList.remove('active');
});

// Cierra el menú al salir pc
navList.addEventListener('mouseleave', () => {
    navList.classList.remove('active');
});

const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

// Abre o cierra el menú al hacer clic en el botón
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

