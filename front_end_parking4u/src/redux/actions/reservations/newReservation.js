import axios from 'axios';
import {
    fetchNewReservation,
    fetchNewReservationSuccess,
    fetchReservationFailure
} from "../../slices/reservations/indexReservations";

export const newReservation = (formData) => async (dispatch) => {

    try {

        dispatch(fetchNewReservation());
        
        const {data} = await axios.post('http://localhost:3000/api/v1/reservations/new', formData);

        dispatch(fetchNewReservationSuccess(data.response));

    } catch (error) {

        console.log(error);

        if(error.response.status == 409){
            return dispatch(fetchReservationFailure("Horas o lugar ya ocupados, por favor intentar nuevamente"))
        }

        dispatch(fetchReservationFailure("Error al reservar, por favor intente nuevamente"));
    }
}