import React from "react";
import { Link } from "react-router-dom";

export const Producto = ({ id, title, description, price, image, category, rating }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <h3>Categoría: {category}</h3>
            <img className="card-image" src={image}/>
            
            <p className="card-subtitle">Precio:</p>
            <p className="card-text"> ($) {price} </p>
            <Link to={`/productos/${id}`}>
                <button>Ver detalles</button>
            </Link>
        </div>
    );
}