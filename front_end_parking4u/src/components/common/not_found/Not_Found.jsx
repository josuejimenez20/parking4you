import React from "react";
import {useNavigate} from "react-router-dom";

import "../../../styles/common/not_found/not_fount_style.css";

export function Not_Found() {

    const navigate = useNavigate();

    return (<>
        <div className="background-image"></div>
        <div className="container_not_found">
            <h1 id="h1_not_found">Error 404</h1>
            <p className="subtitle">Página no encontrada</p>
            <img id="img_not_found" src="../../../assets/llave.png" alt="Imagen no encontrada" />
            <p className="message">Lo sentimos, la página que estás buscando no se encuentra disponible.</p>
            <div className="back-button">
                <p className="question">¿Desea volver a la página anterior?</p>
                <button className="btn-back"
                onClick={(() => {
                    navigate('/Home');
                })}
                >Volver</button>
            </div>
        </div>
    </>)
}