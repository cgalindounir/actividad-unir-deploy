import React from "react";
import { Link } from "react-router-dom";


export const ProcesoPago = ({ id, title, description, price, image, category, rating }) => {
    
    const Validacion = () => {
        validateTarjeta();
        validateUsername();
        validateMesVencimiento();
        validateAnioVencimiento();
        validateEmail();

        let errorMessages = document.querySelectorAll('form p');
        if (errorMessages.length === 0) {
            // No hay errores, se puede procesar el formulario
            
        } else {
            // Hay errores, se informa al usuario
            alert('Por favor, corrija los errores antes de enviar el formulario.');
        }
        //useRedirection("/venta", 3000);
    } 

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

    const validateEmail = () => {
        let email = document.getElementById('email').value;
        if (!email.includes('@') || !email.includes('.')) {
            createErrorMessage('email', 'Por favor, introduce un email válido.');
        } else {
            removeErrorMessage('email');
        }
    };
    
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

    return (
        <div className="preventa">
            <div class="w3-row">
                <div class="w3-quarter w3-container">
                    
                </div>
                <div class="w3-half w3-container">
                    <form id="userForm">
                        <div class="input-field">
                            <label className="userForm-label" for="tarjeta">Número de tarjeta crédito/débito</label>
                            <input id="tarjeta" type="number" name="tarjeta" className="validate" required/>
                            
                        </div>

                        <div class="input-field">
                            <label className="userForm-label" for="username">Nombres y Apellidos</label>
                            <input id="username" type="text" name="username" className="validate" required/>
                            
                        </div>

                        <div class="input-field">
                            <label className="userForm-label" for="mes_vencimiento">Mes de vencimiento</label>
                            <input id="mes_vencimiento" type="password" name="mes_vencimiento" className="validate" required/>
                            
                        </div>

                        <div class="input-field">
                            <label className="userForm-label" for="anio_vencimiento">Año de vencimiento</label>
                            <input id="anio_vencimiento" type="password" name="anio_vencimiento" className="validate" required/>
                            
                        </div>

                        <div className="input-field">
                            <label className="userForm-label" for="email">Email</label>
                            <input id="email" type="email" name="email" className="validate" required/>
                            
                        </div>
                    </form>
                    
                </div>
                <div class="w3-quarter w3-container">
                    <p className="preventa-precio">Total: $ {price}</p>
                    
                </div>
            </div>
            
            
            <button onClick={Validacion} className="preventa-button">Pagar</button>
            <Link to={`/venta/${id}`}> {/* Añadimos un enlace a la vista de restaurantes */}
                <button className="preventa-button">Venta Exitosa</button>
            </Link>
            <Link to={`/venta2/${id}`}> {/* Añadimos un enlace a la vista de restaurantes */}
                <button className="preventa-button">Venta Rechazada</button>
            </Link>
        </div>
    );
}




