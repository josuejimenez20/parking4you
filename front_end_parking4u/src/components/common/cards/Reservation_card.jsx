import React from "react";
import "../../../styles/common/cards/reservation_card_style.css";

export function Reservation_card({
    service,
    user_name,
    date_start,
    date_end,
    hour_start,
    hour_end,
    amount
}) {

    return (<>
            <div class="container">
                <div class="card">
                    <div class="imageBox">
                        <img src="../../../assets/coche.png" />
                    </div>
                    <div class="contentBox">
                        <h2>Servicio de {service}</h2>
                        <div class="description">
                            <h3>Nombre :</h3>
                            <span>{user_name}</span>
                        </div>
                        <div class="description">
                            <h3>Fecha :</h3>
                            <span>{date_start}</span>
                        </div>
                        <div class="description">
                            <h3>Hora :</h3>
                            <span>{hour_start} - {hour_end}</span>
                        </div>
                        <div class="description">
                            <h3>Costo :</h3>
                            <span>${amount}</span>
                        </div>
                    </div>
                </div>
            </div>
    </>)
}