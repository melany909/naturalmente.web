const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));

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

    savedUser = document.querySelector('#new-user').value;

    savedPassword = document.querySelector('#new-password').value;

    localStorage.setItem('user', savedUser);

    localStorage.setItem('password', savedPassword);

    alert('Cuenta creada correctamente 😎');

    registerBox.style.display = 'none';

    loginBox.style.display = 'block';

});

loginBtn.addEventListener('click', () => {

    const userInput = document.querySelector('.login-box input[type="text"]').value;

    const passInput = document.querySelector('.login-box input[type="password"]').value;

    if(userInput === savedUser && passInput === savedPassword){

        loginScreen.style.display = 'none';

        mainSite.style.display = 'block';

    }else{

        document.getElementById('error-login').textContent = 'Usuario o contraseña incorrectos 😭';

    }

});

const productsLink = document.querySelector('#products-link');

const productsSection = document.querySelector('.products-section');

productsSection.style.display = 'none';

productsLink.addEventListener('click', (e) => {

    e.preventDefault();

    if(productsSection.style.display === 'none'){

        productsSection.style.display = 'block';

        productsSection.scrollIntoView({
            behavior: 'smooth'
        });

    }else{

        productsSection.style.display = 'none';

    }

});

const showPassword = document.getElementById('showPassword');
const password = document.getElementById('password');

showPassword.addEventListener('click', () => {

    if(password.type === 'password'){
        password.type = 'text';
    }else{
        password.type = 'password';
    }

});