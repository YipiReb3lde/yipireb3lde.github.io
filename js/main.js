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

/* // Abre o cierra el menú para tactil
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// tactil cierra el menú al tocar fuera
document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !navList.contains(event.target)) {
        navList.classList.remove('active');
    }
});
*/
