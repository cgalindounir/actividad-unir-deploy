// RestaurantDetails.js
import React, { useContext } from 'react';
import '../styles/styles.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {ProductoFilter} from "../components/ProductoFilter";
import { useParams } from 'react-router-dom';
import {Buscador} from "../components/Buscador";
import {ProductoContext} from '../context/ProductoContext';
import {LinearProgress} from "@mui/material";

function filtro(productos,productoId) {
    let productos2 = [];
    let i=0;
    let n=productos.length;
    for(i=0; i<n; i++){
        let titulo = productos[i].title;
        if(titulo.includes(productoId)){
            productos2.push(productos[i]);
            
        }
        console.log(productos[i].title,productoId);
        console.log(productos2);
    }
    
    return productos2;
}

export const Producto2 = () => {
    const { productoId } = useParams();
    console.log("productoId",productoId);
    const { productos } = useContext(ProductoContext);
    console.log("productos",productos);

    const productos2 = filtro(productos,productoId);
    //const producto2 = productos.find(r => r.id == productoId);


    if (!productos2) {
        return <h2>Producto no encontrado</h2>;
    }

    return (
        <div>
            <br></br>
            <h2 className="center-text">Productos</h2>
            <div className='buscador-container'>
                <Buscador />
            </div>
            <div className="producto-container">

                {
                    productos2.length > 0 ? (
                        productos2.map((producto, index) => (
                            <ProductoFilter
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

export default Producto2;