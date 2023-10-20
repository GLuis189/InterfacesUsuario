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

function createSlider(sliderId, btnLeftId, btnRightId, sliderImgClass) {
    const slider = document.querySelector(sliderId);
    let sliderImg = document.querySelectorAll(sliderImgClass);
    let sliderImgLast = sliderImg[sliderImg.length - 1];

    const btnLeft = document.querySelector(btnLeftId);
    const btnRight = document.querySelector(btnRightId);

    slider.insertAdjacentElement('afterbegin', sliderImgLast);

    function next() {
        let sliderImgFirst = document.querySelectorAll(sliderImgClass)[0];
        slider.style.marginLeft = "-200%";
        slider.style.transition = "all 0.5s";
        setTimeout(function () {
            slider.style.transition = "none";
            slider.insertAdjacentElement('beforeend', sliderImgFirst);
            slider.style.marginLeft = "-100%";
        }, 500);
    }

    function prev() {
        let sliderImg = document.querySelectorAll(sliderImgClass);
        let sliderImgLast = sliderImg[sliderImg.length - 1];
        slider.style.marginLeft = "0";
        slider.style.transition = "all 0.5s";
        setTimeout(function () {
            slider.style.transition = "none";
            slider.insertAdjacentElement('afterbegin', sliderImgLast);
            slider.style.marginLeft = "-100%";
        }, 500);
    }

    btnRight.addEventListener('click', function () {
        next();
    });

    btnLeft.addEventListener('click', function () {
        prev();
    });

    setInterval(function () {
        next();
    }, 5000);
}

createSlider("#slider_historia", "#btn_l_h", "#btn_r_h", ".slider_historia_img");
createSlider("#slider_menu", "#btn_l_m", "#btn_r_m", ".slider_menu_img");

const hamburguesa = document.querySelector('#hamburguesa');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', function () {
    hamburguesa.classList.add('hamburguesa_visible');
}
);

cerrar.addEventListener('click', function () {
    hamburguesa.classList.remove('hamburguesa_visible');
}
);
