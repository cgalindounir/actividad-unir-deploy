// RestaurantDetails.js
import React, { useContext } from 'react';
import '../styles/styles.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {ProcesoPago} from "../components/ProcesoPago";
import { useParams } from 'react-router-dom';
import {ProductoContext} from '../context/ProductoContext';
import {LinearProgress} from "@mui/material";

export const ProcesoDePago = () => {
    const { productoId } = useParams();
    console.log("productoId",productoId);
    const { productos } = useContext(ProductoContext);
    console.log("productos",productos);
    const producto = productos.find(r => r.id == productoId);

    if (!producto) {
        return <h2>Producto no encontrado</h2>;
    }

    console.log(producto.title,producto.length);

    return (
        
            producto.title != "" ? (
                <ProcesoPago
                    key={producto.id}
                    id={producto.id}
                    title={producto.title}
                    description={producto.description}
                    category={producto.category}
                    price={producto.price}
                    image={producto.image}
                    rating={producto.rating}
                />
            ) : (
                <LinearProgress color="secondary"/>
            )
        

        
    );
}

export default ProcesoDePago;