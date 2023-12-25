import React, {useContext} from 'react';
import '../styles/styles.css';
import {Producto} from "../components/Producto";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Buscador} from "../components/Buscador";
import {ProductoContext} from "../context/ProductoContext";
import {LinearProgress} from "@mui/material";

export const Overview = () => {

    const { productos } = useContext(ProductoContext);

    return (
        <div>
            <br></br>
            <h2 className="center-text">Productos</h2>
            <div className='buscador-container'>
                <Buscador />
            </div>
            <div className="producto-container">

                {
                    productos.length > 0 ? (
                        productos.map((producto, index) => (
                            <Producto
                                key={index}
                                id={producto.id}
                                title={producto.title}
                                description={producto.description}
                                category={producto.category}
                                price={producto.price}
                                image={producto.image}
                            />
                        ))
                    ) : (
                        <LinearProgress color="secondary"/>
                    )
                }

                {}
            </div>
        </div>
    );
}