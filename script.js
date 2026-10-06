/* =========================================
   MENU HAMBÚRGUER
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* =========================================
   FECHAR MENU AO CLICAR EM UM LINK
========================================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   DARK MODE / LIGHT MODE
========================================= */

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");


// Verifica se existe tema salvo
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");

}


// Botão de alterar tema
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const isLightMode =
        document.body.classList.contains("light-mode");

    if (isLightMode) {

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    } else {

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    }

});


/* =========================================
   FORMULÁRIO
========================================= */

const form = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

const formSuccess = document.getElementById("form-success");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Limpa mensagens anteriores
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";

    let valid = true;


    /* VALIDAÇÃO DO NOME */

    if (nameInput.value.trim() === "") {

        nameError.textContent =
            "Por favor, informe seu nome.";

        valid = false;
    }


    /* VALIDAÇÃO DO EMAIL */

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Por favor, informe seu e-mail.";

        valid = false;

    } else if (!emailRegex.test(emailInput.value)) {

        emailError.textContent =
            "Digite um e-mail válido.";

        valid = false;
    }


    /* VALIDAÇÃO DA MENSAGEM */

    if (messageInput.value.trim() === "") {

        messageError.textContent =
            "Por favor, escreva uma mensagem.";

        valid = false;
    }


    /* SE ESTIVER TUDO CERTO */

    if (valid) {

        formSuccess.textContent =
            "Mensagem validada com sucesso! Obrigado pelo contato.";

        form.reset();

    }

});


/* =========================================
   ROLAGEM SUAVE
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
