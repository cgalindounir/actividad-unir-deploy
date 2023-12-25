import React from "react";
import { Link } from "react-router-dom";

export const PreVentaProd = ({ id, title, description, price, image, category, rating }) => {
    return (
        <div className="preventa">
            <div class="w3-row">
                <div class="w3-quarter w3-container">
                    <img className="preventa-image" src={image}/>
            
                </div>
                <div class="w3-half w3-container">
                    <h2 className="preventa-name">{title}</h2>
                    
                </div>
                <div class="w3-quarter w3-container">
                    <p className="preventa-precio">Precio: $ {price}</p>
                    
                </div>
            </div>
            <Link to={`/procesopago/${id}`}>
                <button className="preventa-button">Pagar</button>
            </Link>
        </div>
    );
}