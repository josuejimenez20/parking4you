import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PayPalButton } from "./PayPalButton";
import { ToastMessage } from "../../../common/alerts/ToastMessage";
import { newReservation } from "../../../../redux/actions/reservations/newReservation";
import { getPrice } from "../../../../helpers/reservations/PayPalReservation/prices";
import "../../../../styles/home/sub_components_styles/payment_reservation_styles.css";

export function Payment_Reservation() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [amountReservation, setAmountReservation] = useState();
    const [shouldMakePayment, setShouldMakePayment] = useState(true); // initialize to true

    const { loading, success, error,
        reservationData, preReservationData
    } = useSelector((state) => state.reservations.new);

    const createNewReservation = (data) => {

        const paymentData = {
            amount: amountReservation,
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
            navigate('Reservation_Information', { replace: true })
        }
    }, [success])

    // SET RESERVARTION'S PRICE

    useEffect(() => {

        const price = getPrice(preReservationData.id_service);

        setAmountReservation(price);
    }, [])



    return (<>
        <div id="payment">
            {
                error ?
                    <ToastMessage message={error} type={'error'} />
                    :
                    <></>
            }
            <h2>PAGO CON PAYPAL</h2>
            <PayPalButton
                amount={amountReservation}
                actionEndPayment={createNewReservation}
                disabled={!shouldMakePayment} // disable if shouldMakePayment is false
            />
        </div>
    </>)
}
