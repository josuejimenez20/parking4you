import React from "react";

import '../../styles/reservations/reservations_list_style.css';

export function Reservation_Content({
    service = "--------",
    user_name = "--------",
    date_start = "--------",
    date_end = "--------",
    hour_start = "--------",
    hour_end = "--------",
    code = "-------"
}) {

    return (<>
        <div className="grid-item">
            <h5 className="subtile_item code_card_title">
                Código:
            </h5>
            <p className="content_subtile code_card">
                {code}
            </p>
            <br />
            <h5 className="subtile_item">
                Día:
            </h5>
            <p className="content_subtile">
                {date_start}
            </p>
            <br />
            <h5 className="subtile_item">
                Hora de entrada:
            </h5>
            <p className="content_subtile">
                {hour_start}
            </p>
            <br />
            <h5 className="subtile_item">
                Hora de salida:
            </h5>
            <p className="content_subtile">
                {hour_end}
            </p>
            <br />
            <h5 className="subtile_item">
                Servicio:
            </h5>
            <p className="content_subtile">
                {service}
            </p>
            <br />
            <h5 className="subtile_item">
                Nombre:
            </h5>
            <p className="content_subtile">
                {user_name}
            </p>
        </div>

    </>)

}