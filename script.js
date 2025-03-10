document.addEventListener("DOMContentLoaded", function () {
    var typingEffect = new Typed(".typedText", {
        strings: ["Developer", "Coder", "Programmer"], // Palabras animadas
        typeSpeed: 100,  // Velocidad de escritura
        backSpeed: 80,   // Velocidad de borrado
        backDelay: 2000, // Pausa antes de borrar
        loop: true       // Repetir animación
    });
});


const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a'); // Selecciona los enlaces dentro del menú

if (menuIcon && navLinks) {
    menuIcon.onclick = () => {
        navLinks.classList.toggle('active');
    };

    navItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
} else {
    console.error("No se encontró #menu-icon o .nav-links en el DOM");
}

