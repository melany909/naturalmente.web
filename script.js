/* ---------- ANIMACIONES ---------- */

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));

/* ---------- LOGIN Y REGISTRO ---------- */

const loginBtn = document.querySelector('.login-btn');
const loginScreen = document.querySelector('.login-screen');
const mainSite = document.querySelector('.main-site');

const registerLink = document.querySelector('.register-text a');
const loginBox = document.querySelector('.login-box');
const registerBox = document.querySelector('.register-box');
const registerBtn = document.querySelector('.register-btn');

let savedUser = localStorage.getItem('user') || "";
let savedPassword = localStorage.getItem('password') || "";

registerLink.addEventListener('click', (e) => {

    e.preventDefault();

    loginBox.style.display = 'none';
    registerBox.style.display = 'block';

});

registerBtn.addEventListener('click', () => {

    savedUser = document.getElementById('new-user').value;
    savedPassword = document.getElementById('new-password').value;

    if (savedUser === "" || savedPassword === "") {

        alert('Completa todos los campos');
        return;

    }

    localStorage.setItem('user', savedUser);
    localStorage.setItem('password', savedPassword);

    alert('Cuenta creada correctamente 😎');

    registerBox.style.display = 'none';
    loginBox.style.display = 'block';

});

loginBtn.addEventListener('click', () => {

    const userInput = document.querySelector('.login-box input[type="text"]').value;
    const passInput = document.getElementById('password').value;

    if (userInput === savedUser && passInput === savedPassword) {

        loginScreen.style.display = 'none';
        mainSite.style.display = 'block';

    } else {

        document.getElementById('error-login').textContent =
            'Usuario o contraseña incorrectos';

    }

});

/* ---------- MOSTRAR CONTRASEÑA ---------- */

const showPassword = document.getElementById('showPassword');
const password = document.getElementById('password');

showPassword.addEventListener('click', () => {

    if (password.type === 'password') {

        password.type = 'text';
        showPassword.textContent = '🙈 Ocultar contraseña';

    } else {

        password.type = 'password';
        showPassword.textContent = '👁 Ver contraseña';

    }

});

/* ---------- NAVEGACIÓN ---------- */

const inicioLink = document.getElementById('inicio-link');
const productsLink = document.getElementById('products-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');

const hero = document.getElementById('inicio');
const productsSection = document.querySelector('.products-section');
const aboutSection = document.getElementById('about');
const contactSection = document.getElementById('contact');

productsSection.style.display = 'none';
aboutSection.style.display = 'none';
contactSection.style.display = 'none';

/* INICIO */

if(inicioLink){

    inicioLink.addEventListener('click', (e) => {

        e.preventDefault();

        hero.style.display = 'flex';

        productsSection.style.display = 'none';
        aboutSection.style.display = 'none';
        contactSection.style.display = 'none';

    });

}

/* PRODUCTOS */

productsLink.addEventListener('click', (e) => {

    e.preventDefault();

    hero.style.display = 'none';

    productsSection.style.display = 'block';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';

});

/* BOTÓN VER PRODUCTOS */

const heroProducts = document.getElementById('hero-products');

if(heroProducts){

    heroProducts.addEventListener('click', (e) => {

        e.preventDefault();

        hero.style.display = 'none';

        productsSection.style.display = 'block';
        aboutSection.style.display = 'none';
        contactSection.style.display = 'none';

    });

}

/* NOSOTROS */

aboutLink.addEventListener('click', (e) => {

    e.preventDefault();

    hero.style.display = 'none';

    productsSection.style.display = 'none';
    aboutSection.style.display = 'block';
    contactSection.style.display = 'none';

});

/* CONTACTO */

contactLink.addEventListener('click', (e) => {

    e.preventDefault();

    hero.style.display = 'none';

    productsSection.style.display = 'none';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'block';

});