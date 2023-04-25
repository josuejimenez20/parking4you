import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Reservation_card } from "../../../common/cards/Reservation_card";
import { getUserNameLocalStorage } from "../../../../helpers/reservations/getUserNameLocalStorage";

import "../../../../styles/common/cards/reservation_card_style.css"

export function Reservation_information() {

    const navigate = useNavigate();

    const [userName, setUserName] = useState();

    const { preReservationData
    } = useSelector((state) => state.reservations.new);

    const { id_service, day_start, day_end,
        hour_start, hour_end, amount
    } = preReservationData;

    useEffect(() => {
        const userNameLocalStorage = getUserNameLocalStorage();
        setUserName(userNameLocalStorage);
    }, [])

    //AQUI VA EL CONTENEDOR DE LAS TARJETAS

    return (<>
        <div className="container_info_pablo">


            <Reservation_card
                user_name={userName}
                service={id_service}
                date_start={day_start}
                date_end={day_end}
                hour_start={hour_start}
                hour_end={hour_end}
                amount={amount}
            />

        </div>
    </>

    )
}