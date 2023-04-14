import React from "react";
import "../../../styles/common/cards/reservation_card_style.css";

export function Reservation_card({
    service,

}) {

    return (<>
        <div class="container">
            <div class="card">
                <div class="imageBox">
                    <img src="../../../assets/coche.png" />
                </div>
                <div class="contentBox">
                    <h2>Servicio de {ser}</h2>
                    <div class="price">
                        <h3>Nombre :</h3>
                        <span>Josue Jimenez De Lucio</span>
                    </div>
                    <div class="description">
                        <h3>Dia :</h3>
                        <span>9 AM - 5 PM</span>
                        <h3>Dia :</h3>
                        <span>9 AM - 5 PM</span>
                    </div>
                </div>
            </div>
        </div>

    </>)
}