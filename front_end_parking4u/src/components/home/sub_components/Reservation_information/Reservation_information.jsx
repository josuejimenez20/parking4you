import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function Reservation_information() {

    const navigate = useNavigate();

    const { preReservationData
    } = useSelector((state) => state.reservations.new);


    useEffect(() => {
        console.log(preReservationData);
    }, [[preReservationData]])

    return (<>
        Informacion de reservacion 
    </>)
}