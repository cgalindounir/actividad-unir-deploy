import React from "react";
import { useNavigate } from "react-router-dom";
import useRedirection from "../hooks/useRedirection";


export const Buscador = () => {
    let navigate = useNavigate();
    const Validacion = () => {
        let texto = document.getElementById('texto').value;
        navigate(`/productos2/${texto}`);
    } 

    return (
        <div className="buscador">
            <div class="input-fiel2">
                <label className="buscador-in" for="texto">Busca por categoría: </label>
                <input id="texto" type="text" name="texto" />
                <button onClick={Validacion} className="buscador-button">BUSCAR</button> 
                <div className="buscador-mensaje">Se está usando la función "includes" para la búsqueda por nombre</div>
            </div>

        </div>
        
    );
}




