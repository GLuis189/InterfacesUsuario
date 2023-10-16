function validarFormulario() {
    var dni = document.getElementById('dni').value;
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;

    // Validar DNI
    var dniRegex = /^[0-9]{8}[A-Za-z]$/;
    if (!dniRegex.test(dni)) {
        alert('Formato de DNI inválido');
        return false;
    }

    // Validar nombre y apellido
    if (nombre == '' || apellido == '') {
        alert('Por favor, ingrese su nombre y apellido');
        return false;
    }

    // Validar teléfono
    var telRegex = /^[0-9]{9}$/;
    if (!telRegex.test(telefono)) {
        alert('Formato de teléfono inválido');
        return false;
    }

    // Validar correo electrónico
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Formato de correo electrónico inválido');
        return false;
    }

    alert('Formulario enviado correctamente');
    window.location.href = 'index.html';
    document.cookie = 'dni=' + dni + '; max-age=3600 path=/';
    document.cookie = 'nombre=' + nombre + '; max-age=3600 path=/';
    document.cookie = 'apellido=' + apellido + '; max-age=3600 path=/';
    document.cookie = 'telefono=' + telefono + '; max-age=3600 path=/';
    document.cookie = 'email=' + email + '; max-age=3600 path=/';

}
const slider_historia = document.querySelector("#slider_historia");
let slider_historia_img = document.querySelectorAll(".slider_historia_img");
let slider_historia_img_last = slider_historia_img[slider_historia_img.length - 1];

const btn_left = document.querySelector("#btn_l_h");
const btn_right = document.querySelector("#btn_r_h");

slider_historia.insertAdjacentElement('afterbegin', slider_historia_img_last);

function nexth() {
    let slider_historia_img_first = document.querySelectorAll(".slider_historia_img")[0];
    slider_historia.style.marginLeft = "-200%";
    slider_historia.style.transition = "all 0.5s";
    setTimeout(function () {
        slider_historia.style.transition = "none";
        slider_historia.insertAdjacentElement('beforeend', slider_historia_img_first);
        slider_historia.style.marginLeft = "-100%";
    }, 500);
}
function prevh() {
    let slider_historia_img = document.querySelectorAll(".slider_historia_img");
    let slider_historia_img_last = slider_historia_img[slider_historia_img.length - 1];
    slider_historia.style.marginLeft = "0";
    slider_historia.style.transition = "all 0.5s";
    setTimeout(function () {
        slider_historia.style.transition = "none";
        slider_historia.insertAdjacentElement('afterbegin', slider_historia_img_last);
        slider_historia.style.marginLeft = "-100%";
    }, 500);
}
btn_right.addEventListener('click', function () {
    nexth();
});
btn_left.addEventListener('click', function () {
    prevh();
});

setInterval(function () {
    nexth();
}, 5000);

const slider_menu = document.querySelector("#slider_menu");
let slider_menu_img = document.querySelectorAll(".slider_menu_img");
let slider_menu_img_last = slider_menu_img[slider_menu_img.length - 1];

const btn_left_m = document.querySelector("#btn_l_m");
const btn_right_m = document.querySelector("#btn_r_m");

slider_menu.insertAdjacentElement('afterbegin', slider_menu_img_last);

function nextm() {
    let slider_menu_img_first = document.querySelectorAll(".slider_menu_img")[0];
    slider_menu.style.marginLeft = "-200%";
    slider_menu.style.transition = "all 0.5s";
    setTimeout(function () {
        slider_menu.style.transition = "none";
        slider_menu.insertAdjacentElement('beforeend', slider_menu_img_first);
        slider_menu.style.marginLeft = "-100%";
    }, 500);
}
function prevm() {
    let slider_menu_img = document.querySelectorAll(".slider_menu_img");
    let slider_menu_img_last = slider_menu_img[slider_menu_img.length - 1];
    slider_menu.style.marginLeft = "0";
    slider_menu.style.transition = "all 0.5s";
    setTimeout(function () {
        slider_menu.style.transition = "none";
        slider_menu.insertAdjacentElement('afterbegin', slider_menu_img_last);
        slider_menu.style.marginLeft = "-100%";
    }, 500);
}
btn_right_m.addEventListener('click', function () {
    nextm();
});
btn_left_m.addEventListener('click', function () {
    prevm();
});

setInterval(function () {
    nexth();
}, 5000);