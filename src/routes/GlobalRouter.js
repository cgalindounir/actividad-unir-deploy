import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing';
import Producto2 from '../views/Producto2';
import ProductoDetails from '../views/ProductoDetails';
import ProcesoDePago from '../views/ProcesoDePago';
import PreVenta from '../views/PreVenta';
import Venta from '../views/Venta';
import NotFound from '../views/NotFound';
import {Overview} from "../views/Overview";
import {Header} from "../components/Header";
import {Banner} from "../components/Banner";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/productos" element={<Layout><Overview /></Layout>} />
                <Route path="/productos/:productoId" element={<Layout><ProductoDetails /></Layout>} />
                <Route path="/productos2/:productoId" element={<Layout><Producto2 /></Layout>} />
                <Route path="/preventa/:productoId" element={<Layout><PreVenta /></Layout>} />
                <Route path="/procesopago/:productoId" element={<Layout><ProcesoDePago /></Layout>} />
                <Route path="/venta/:productoId" element={<Layout><Venta /></Layout>} />
                
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        <Banner />
        {children}
    </>
);

export default GlobalRouter;