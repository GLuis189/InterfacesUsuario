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
