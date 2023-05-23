import React from "react";
import "../../../styles/common/cards/reservation_card_style.css";


export function Reservation_card({
    service = "--------",
    number_spot = "--------",
    user_name = "--------",
    date_start = "--------",
    date_end = "--------",
    hour_start = "--------",
    hour_end = "--------",
    amount = "--------",
    reservation_code = "--------"
}) {

    return (<>
                <div className="card">
                    <div className="imageBox">
                        <h1 id="card_code">Codigo: {reservation_code}</h1>
                    </div>
                    <div id="number_spot">
                        <h1 id="card_code">Lugar: {number_spot}</h1>
                    </div>
                    <div className="contentBox">
                        <h2 className="subtitle_information">Servicio de {service}</h2>
                        <div className="description">
                            <h3 className="subtitle_information">Nombre :</h3>
                            <span>{user_name}</span>
                        </div>
                        <div className="description">
                            <h3 className="subtitle_information">Fecha :</h3>
                            <span>{date_start}</span>
                        </div>
                        <div className="description">
                            <h3 className="subtitle_information">Hora :</h3>
                            <span>{hour_start} - {hour_end}</span>
                        </div>
                        <div className="description">
                            <h3 className="subtitle_information">Costo :</h3>
                            <span>${amount}</span>
                        </div>
                    </div>
                </div>
            
    </>)
}