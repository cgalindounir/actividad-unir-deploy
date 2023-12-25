import React from "react";
import { Link } from "react-router-dom";

export const VentaProd2 = ({ id, title, description, price, image, category, rating }) => {
    return (
        <div className="preventa">
            <div class="w3-row">
                <div class="w3-quarter w3-container">
                    <img className="preventa-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHBpl7MC5ctajZWf-7cSXWJhzi9QedCWrtCbl_tbtAvQ&s"/>
            
                </div>
                <div class="w3-half w3-container">
                    <h2 className="preventa-name">VENTA RECHAZADA</h2>
                    
                </div>
                <div class="w3-quarter w3-container">
                    <p className="preventa-precio">No se ha podido concretar la venta. Comuníquese con su entidad bancaria :(</p>
                    
                </div>
            </div>
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
            <Link to={`/`}>
                <button className="preventa-button">Volver</button>
            </Link>
        </div>
    );
}