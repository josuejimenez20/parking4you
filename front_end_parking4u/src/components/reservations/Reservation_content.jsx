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
            <h5 className="subtile_item">
                Dia:
            </h5>
            <p className="content_subtile">
                {date_start}
            </p>
            <h5 className="subtile_item">
                Hora de entrada:
            </h5>
            <p className="content_subtile">
                {hour_start}
            </p>
            <h5 className="subtile_item">
                Hora de salida:
            </h5>
            <p className="content_subtile">
                {hour_end}
            </p>
            <h5 className="subtile_item">
                Codigo:
            </h5>
            <p className="content_subtile">
                {code}
            </p>
            <h5 className="subtile_item">
                Servicio:
            </h5>
            <p className="content_subtile">
                {service}
            </p>
            <h5 className="subtile_item">
                Nombre:
            </h5>
            <p className="content_subtile">
                {user_name}
            </p>
        </div>

    </>)

}