import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PayPalButton } from "./PayPalButton";
import { ToastMessage } from "../../../common/alerts/ToastMessage";
import { newReservation } from "../../../../redux/actions/reservations/newReservation";
import { getPrice } from "../../../../helpers/reservations/PayPalReservation/prices";
import { hoursCalculate } from "../../../../helpers/reservations/PayPalReservation/hoursCalculate";
import { changeToColors } from "../../../../redux/slices/reservations/colorProcessReservations";
import "../../../../styles/home/sub_components_styles/payment_reservation_styles.css";

export function Payment_Reservation() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [amountReservation, setAmountReservation] = useState();
    const [hoursReservation, setHoursReservation] = useState();
    const [shouldMakePayment, setShouldMakePayment] = useState(true); // initialize to true

    const { loading, success, error,
        reservationData, preReservationData
    } = useSelector((state) => state.reservations.new);

    const createNewReservation = (data) => {

        const amount = amountReservation * hoursReservation;

        const paymentData = {
            amount: amount,
            order_paypal_id: data.ORDER_ID,
            payer_paypal_id: data.PAYER_ID
        };

        // Send to created the new reservation
        // in backend

        dispatch(newReservation(preReservationData, paymentData)).then(() => {
            setShouldMakePayment(true); // set to true if successful
        }).catch(() => {
            setShouldMakePayment(false); // set to false if there is an error
        });
    }

    useEffect(() => {
        if (success === true) {
            dispatch(changeToColors({
                login: true,
                bookButton: true,
                data: true,
                end: true
            }))
            navigate('Reservation_Information', { replace: true })
        }
    }, [success])

    // SET RESERVARTION'S PRICE

    useEffect(() => {

        const price = getPrice(preReservationData.id_service);

        // We get hours and multipli x amountReservation
        const hours = hoursCalculate(preReservationData.hour_start, preReservationData.hour_end);

        setAmountReservation(price);
        setHoursReservation(hours);
    }, [])



    return (<>
        <div id="payment">
            <div id="content_title_payment">
                <h1 id="title_payment">Pago de servicio</h1>
            </div>
            {
                error ?
                    <ToastMessage message={error} type={'error'} />
                    :
                    <></>
            }

            <PayPalButton
                amount={amountReservation}
                actionEndPayment={createNewReservation}
                disabled={!shouldMakePayment} // disable if shouldMakePayment is false
            />
        </div>
    </>)
}
