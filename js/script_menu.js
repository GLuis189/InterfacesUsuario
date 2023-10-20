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
    }
}

function nextStep() {
    var nextSteps = {
        'step1': 'step2',
        'step2': 'step3',
        'step3': '../index.html'
    };
    if (currentStep === 'step3') {
        window.location.href = nextSteps[currentStep];
    } else {
        showStep(nextSteps[currentStep]);
}
}

function previousStep() {
    var previousSteps = {
        'step1': 'step3',
        'step2': 'step1',
        'step3': 'step2'
    };
    showStep(previousSteps[currentStep]);
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


