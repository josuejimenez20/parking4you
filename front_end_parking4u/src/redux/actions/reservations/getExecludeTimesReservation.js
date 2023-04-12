import axios from 'axios';
import {
   fetchExecludeTimesReservation,
   fetchExecludeTimesReservationSuccess,
   fetchExecludeTimesReservationFailure
} from "../../slices/reservations/indexReservations";

export const getExecludeTimesReservation = (day) => async (dispatch) => {

    try {

        dispatch(fetchExecludeTimesReservation());
        
        const {data} = await axios.get(`http://localhost:3000/api/v1/reservations/excludeTimesByDay?date_yyyymmdd=${day}`);

        dispatch(fetchExecludeTimesReservationSuccess(data.response));

    } catch (error) {

        dispatch(fetchExecludeTimesReservationFailure("ERROR AL CARGAR CALENDARIO, POR FAVOR INTENTE NUEVAMENTE"));
    }
}