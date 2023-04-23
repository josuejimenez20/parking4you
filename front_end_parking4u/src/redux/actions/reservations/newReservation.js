import axios from 'axios';
import {
    fetchNewReservation,
    fetchNewReservationSuccess,
    fetchReservationFailure,
    fetchPreReservation
} from "../../slices/reservations/indexReservations";

export const newReservation = (formData, paymentData) => async (dispatch) => {

    const formAndPaymentData = Object.assign({}, formData, paymentData);

    try {

        dispatch(fetchPreReservation(formAndPaymentData));

        dispatch(fetchNewReservation());

        const response = await axios.post('http://localhost:3000/api/v1/reservations/new', formAndPaymentData);

        dispatch(fetchNewReservationSuccess("Reservacion hecha"));

    } catch (error) {

        if (error.response.status == 409) {
            dispatch(fetchReservationFailure("Horas o lugares ya ocupados, por favor intente nuevamente"))
            return;
        }

        dispatch(fetchReservationFailure("Error al reservar, por favor intente nuevamente"));
    }
}