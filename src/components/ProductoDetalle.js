import React from "react";
import { Link } from "react-router-dom";

export const ProductoDetalle = ({ id, title, description, price, image, category, rating }) => {
    return (
        <div className="producto-details">
            <div class="w3-row">
                <div class="w3-half w3-container w3-white">
                    <img className="producto-image" src={image}/>
            
                </div>
                <div class="w3-half w3-container">
                    <h2 className="producto-name">{title}</h2>
                    <p className="producto-calificacion">Precio: $ {price}</p>
                    <p className="producto-subtitle">Descripción:</p>
                    <p className="producto-texto">{description}</p>
                    <p className="producto-calificacion">Calificación: {rating.rate} / 5</p>
                    <Link to={`/preventa/${id}`}>
                        <button>Agregar al carrito</button>
                    </Link>
                </div>
            </div>
            
        </div>
    );
}