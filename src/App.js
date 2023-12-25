import React, {useEffect, useState} from 'react';
import GlobalRouter from "./routes/GlobalRouter";
import {ProductoContext} from "./context/ProductoContext";
import {Footer} from "./components/Footer";
import {useProducto} from "./hooks/useProducto";

function App() {

    const productos = useProducto();

    return (
        <ProductoContext.Provider value={{productos}}>
            <GlobalRouter></GlobalRouter>
            <Footer />
        </ProductoContext.Provider>
    );
}

export default App;