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
    if (currentStep === 'step3') {
        window.location.href = nextSteps[currentStep];
    } else {
        showStep(nextSteps[currentStep]);
        if (currentStep === 'step2') {
            paso1.classList.remove('activo');
            paso2.classList.add('activo');
        } else if (currentStep === 'step3') {
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
    document.getElementById('total').innerText = 'Total: ' + total;
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


