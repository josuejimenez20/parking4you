import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PayPalButton } from "./PayPalButton";
import { newReservation } from "../../../../../redux/actions/reservations/newReservation";
import { getPrice } from "../../../../../helpers/reservations/PayPalReservation/prices";
import "../../../../../styles/home/sub_components_styles/payment_reservation_styles.css";

export function Payment_Reservation() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [amountReservation, setAmountReservation] = useState();

    const { loading, success, error,
        reservationData, preReservationData
    } = useSelector((state) => state.reservations.new);

    const createNewReservation = (data) => {

        // With the data save datapayment in 
        // the Data Base
        console.log(data);

        dispatch(newReservation(preReservationData));

        // It migth go to view "Reservations" 
        // of client
        navigate('/Home');

    }

    // SET RESERVARTION'S PRICE

    useEffect(() => {

        const price = getPrice(preReservationData.id_service);

        setAmountReservation(price);
    }, [])



    return (<>
        <div id="payment">
            <h2>PAGO CON PAYPAL</h2>
            <PayPalButton
                amount={amountReservation}
                actionEndPayment={createNewReservation}
            />
        </div>
    </>)
}