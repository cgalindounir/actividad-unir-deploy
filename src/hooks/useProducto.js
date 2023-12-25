import {useEffect, useState} from "react";

export const useProducto = () => {

    const [productos, setProductos] = useState([]);
    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de ingredientes
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        let url = "https://fakestoreapi.com/products/";
        //fetch(url).then((res) => res.json()).then((res) => setRestaurants(res));

        setTimeout(() => {
            fetch(url)
                .then(res => res.json())
                .then(res2 => setProductos(res2));
        }, 2500);
    }, []);

    return productos;
}

