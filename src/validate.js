// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Asignar manejadores de eventos a los campos del formulario
    document.getElementById('tarjeta').addEventListener('change', validateTarjeta);
    document.getElementById('username').addEventListener('change', validateUsername);
    document.getElementById('password').addEventListener('change', validateMesVencimiento);
    document.getElementById('confirmPassword').addEventListener('change', validateAnioVencimiento);
    document.getElementById('email').addEventListener('change', validateEmail);
});

// Crear un mensaje de error y mostrarlo bajo el campo correspondiente
const createErrorMessage = (id, message) => {
    let existingMessage = document.getElementById(id + 'Error');
    if (!existingMessage) {
        let errorMessage = document.createElement('p');
        errorMessage.id = id + 'Error';
        errorMessage.textContent = message;
        errorMessage.classList.add('error');
        document.getElementById(id).insertAdjacentElement('afterend', errorMessage);
    }
};

// Eliminar el mensaje de error si ya no es necesario
const removeErrorMessage = (id) => {
    let existingMessage = document.getElementById(id + 'Error');
    if (existingMessage) {
        existingMessage.remove();
    }
};

// Validar el campo de nombre completo
const validateTarjeta = () => {
    let tarjeta = document.getElementById('tarjeta').value;
    if (tarjeta.trim() === '') {
        createErrorMessage('tarjeta', 'El número de tarjeta es obligatorio.');
    } else {
        removeErrorMessage('tarjeta');
    }
};

// Validar el campo de nombre de usuario
const validateUsername = () => {
    let username = document.getElementById('username').value;
    if (username.trim() === '') {
        createErrorMessage('username', 'El nombre de usuario es obligatorio.');
    } else {
        removeErrorMessage('username');
    }
};

// Validar el campo de contraseña
const validateMesVencimiento = () => {
    let password = document.getElementById('mes_vencimiento').value;
    let passwordRegex = /^[0-9]{2,}/;
    if (!passwordRegex.test(password)) {
        createErrorMessage('mes_vencimiento', 'El mes de vencimiento debe estar expresado con 02 dígitos.');
    } else {
        removeErrorMessage('mes_vencimiento');
    }
};

// Validar el campo de confirmación de contraseña
const validateAnioVencimiento = () => {
    let password = document.getElementById('anio_vencimiento').value;
    let passwordRegex = /^[0-9]{2,}/;
    if (!passwordRegex.test(password)) {
        createErrorMessage('anio_vencimiento', 'El año de vencimiento debe estar expresado con 02 dígitos.');
    } else {
        removeErrorMessage('anio_vencimiento');
    }
};

// Validar el campo de email
const validateEmail = () => {
    let email = document.getElementById('email').value;
    if (!email.includes('@') || !email.includes('.')) {
        createErrorMessage('email', 'Por favor, introduce un email válido.');
    } else {
        removeErrorMessage('email');
    }
};

// Manejar el evento de envío del formulario
document.getElementById('userForm').addEventListener('submit', (event) => {
    event.preventDefault();

    // Ejecutar todas las validaciones antes de enviar el formulario
    validateTarjeta();
    validateUsername();
    validateMesVencimiento();
    validateAnioVencimiento();
    validateEmail();

    // Comprobar si hay mensajes de error
    let errorMessages = document.querySelectorAll('form p');
    if (errorMessages.length === 0) {
        // No hay errores, se puede procesar el formulario
        alert('Formulario enviado con éxito!');
    } else {
        // Hay errores, se informa al usuario
        alert('Por favor, corrija los errores antes de enviar el formulario.');
    }
});