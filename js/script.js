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
    } else {
        var numDni = dni.substring(0, 8);
        var letraDni = dni.substring(8);
        var letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        var letraCorrecta = letras.charAt(numDni % 23);
        if (letraDni.toUpperCase() != letraCorrecta) {
            alert('La letra del DNI no es correcta');
            return false;
        }
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
    window.location.href = '../index.html';
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

    if (slider, sliderImg,sliderImgLast,btnLeft, btnRight) {

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
}

createSlider("#slider_historia", "#btn_l_h", "#btn_r_h", ".slider_historia_img");
createSlider("#slider_menu", "#btn_l_m", "#btn_r_m", ".slider_menu_img");

var open = document.querySelector('.open');
var close = document.querySelector('.close');
var P_Dcha = document.querySelector('.P_Dcha');
var new1 = document.querySelector('#new1');
var cart2 = document.querySelector('#cart2');
var hist3 = document.querySelector('#hist3');
var cont7 = document.querySelector('#cont7');

if (open, close, P_Dcha, new1, cart2, hist3, cont7) {
open.addEventListener("click", () => {
    P_Dcha.classList.add("visible");
})

var elements = [close, new1, cart2, hist3, cont7];

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
    P_Dcha.classList.remove("visible");
  });
}
}
function checkForm() {
    var titular = document.querySelector('#step2 input[type="text"]:nth-of-type(1)').value;
    var numero = document.querySelector('#step2 input[type="text"]:nth-of-type(2)').value;
    var fecha = document.querySelector('#step2 input[type="text"]:nth-of-type(3)').value;
    var cvv = document.querySelector('#step2 input[type="text"]:nth-of-type(4)').value;

    var regexTitular = /^[a-zA-Z ]+$/;
    var regexNumero = /^[0-9]{16}$/;
    var regexFecha = /^(0[1-9]|1[0-2])\/([0-9]{4})$/;
    var regexCVV = /^[0-9]{3}$/;

    if (titular === '' || numero === '' || fecha === '' || cvv === '') {
        alert('Por favor, completa todos los campos del formulario.');
    } else if (!regexTitular.test(titular)) {
        alert('El nombre del titular debe contener solo letras y espacios.');
    } else if (!regexNumero.test(numero)) {
        alert('El número de la tarjeta debe contener 16 dígitos.');
    } else if (!regexFecha.test(fecha)) {
        alert('La fecha de caducidad debe tener el formato MM/AAAA.');
    } else if (!regexCVV.test(cvv)) {
        alert('El CVV debe contener 3 dígitos.');
    } else {
        return true;
    }
}


var currentStep = 'step1';

function showStep(step) {
    var allSteps = ['step1', 'step2', 'step3'];
    allSteps.forEach(function(s) {
        document.getElementById(s).style.display = 'none';
    });
    document.getElementById(step).style.display = 'block';
    currentStep = step;
    if (step === 'step3') {
        iniciarTemporizador();
        guardarCarritoEnCookie();
    }
}


function nextStep() {
    var nextSteps = {
        'step1': 'step2',
        'step2': 'step3',
        'step3': 'index.html'
    };
    var paso1 = document.querySelector('#paso1');
    var paso2 = document.querySelector('#paso2');
    var paso3 = document.querySelector('#paso3');

    if (currentStep === 'step2' && !checkForm()) {
        return; // Si checkForm() es false, no hacemos nada más y salimos de la función.
    }

    if (currentStep === 'step3') {
        window.location.href = nextSteps[currentStep];
    } else {
        showStep(nextSteps[currentStep]);
        if (currentStep === 'step2') {
            paso1.classList.remove('activo');
            paso2.classList.add('activo');
        } else if (currentStep === 'step3' ) {
            paso2.classList.remove('activo');
            paso3.classList.add('activo');
        }
    }
}


function previousStep() {
    var previousSteps = {
        'step1': 'index.html',
        'step2': 'step1',
        'step3': 'step2'
    };
    var paso1 = document.querySelector('#paso1');
    var paso2 = document.querySelector('#paso2');
    var paso3 = document.querySelector('#paso3');
    if (currentStep === 'step1') {
        window.location.href = previousSteps[currentStep];
    } else {
        showStep(previousSteps[currentStep]);
        if (currentStep === 'step2') {
            paso3.classList.remove('activo');
            paso2.classList.add('activo');
        } else if (currentStep === 'step1') {
            paso2.classList.remove('activo');
            paso1.classList.add('activo');
        }
    }
}
var carrito = {};
var total = 0;

function agregarProducto(producto, precio) {
    precio = parseFloat(precio);
    if (carrito[producto]) {
        carrito[producto].cantidad++;
    } else {
        carrito[producto] = {cantidad: 1, precio: precio};
    }
    total += precio;
    actualizarCarrito();
    actualizarContador();
    actualizarTotal();
}

function eliminarProducto(producto, precio) {
    if (carrito[producto] && carrito[producto].cantidad > 0) {
        carrito[producto].cantidad--;
        total -= precio;
        if (carrito[producto].cantidad === 0) {
            delete carrito[producto];
        }
        actualizarCarrito();
        actualizarContador();
        actualizarTotal();
    }
}
function actualizarContador() {
    var contador = 0;
    for (var producto in carrito) {
        contador += carrito[producto].cantidad;
    }
    document.getElementById('contador').innerText = contador;
}
function actualizarCarrito() {
    var carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';
    for (var producto in carrito) {
        carritoDiv.innerHTML += producto + ': ' + carrito[producto].cantidad + '<br>';
    }
}

function actualizarTotal() {
    document.getElementById('total').innerText = 'Total: ' + total + "€";
}
var tiempoRestante = 10 * 60;

function actualizarTemporizador() {
    var minutos = Math.floor(tiempoRestante / 60);
    var segundos = tiempoRestante % 60;
    document.getElementById('temporizador').innerText = minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
}

function iniciarTemporizador() {
    actualizarTemporizador();
    var intervalo = setInterval(function() {
        tiempoRestante--;
        actualizarTemporizador();
        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
        }
    }, 1000);
};
function guardarCarritoEnCookie() {
    // Convierte el carrito en una cadena JSON
    var carritoStr = JSON.stringify(carrito);
    
    // Crea una cookie con el nombre 'carrito' que almacena la información del carrito
    document.cookie = 'carrito=' + carritoStr + '; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
}








